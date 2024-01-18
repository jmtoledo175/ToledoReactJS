import ContactForm from "../ContactForm/ContactForm"
import {useCart} from "../../context/CartContext"
import { addDoc, getDocs, collection, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseconfig";
import { useState } from "react";
import "./Checkout.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Checkout = () =>{
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)
    const {cart, total, clearCart} = useCart()
    const createOrder = async ({name, phone, email}) =>{
        setLoading(true);
    const objOrder = {
        buyer: {
            name: name,
            phone: phone,
            email: email
        },
        items: cart,
        total: total,
    }

    const batch = writeBatch(db)

    const outOfStock = []
    
    const ids = cart.map(product => product.id)
    
    const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

    const { docs } = await getDocs(productsCollection)

    docs.forEach(doc => {
        const dataDoc= doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find (prod => prod.id === doc.id)
        const prodQuantity= productAddedToCart ?. quantity

        if(stockDb >= prodQuantity){
            batch.update(doc.ref ,{stock: stockDb - prodQuantity})
        } else {
            outOfStock.push({id: doc.id, ...dataDoc})
        }

    })

    if (outOfStock.length === 0) {
        batch.commit();
        const ordersCollection = collection(db, 'orders');
        const { id } = await addDoc(ordersCollection, objOrder);
        setOrderId(id);
        clearCart()
    } else {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
           
          });
    }
    setLoading(false);
}
if(loading) {
    return(
        <div className="loading-container">
      <h1 className="loading-text">Se está generando su orden...</h1>
    </div>)


}

if(orderId) {
    return (
    <div className="loading-container">
    <h1 className="loading-text">El ID de su orden es: {orderId}</h1>
    </div>)
}

    return (
       <ContactForm createOrder={createOrder}/>
       
    )
}

export default Checkout