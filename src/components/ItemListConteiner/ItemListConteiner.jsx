import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";  
import { db } from "../../services/firebase/firebaseconfig";
const ItemListConteiner = ({ greeting }) => {
  const [loading, setLoading] = useState(true)
 const [products, setProducts] = useState([])
const {categoryId} = useParams()
 useEffect(() => {
  
  const collectionRef = categoryId 
  ? query(collection(db, 'products'), where('category', '==', categoryId))
  : collection(db, 'products')

getDocs(collectionRef)
.then(querySnapshot => {


  const productsAdapted = querySnapshot.docs.map(doc => {
      const fields = doc.data()
      return { id: doc.id, ...fields }
  })

  setProducts(productsAdapted)
})

.finally(() => {
  setLoading(false)
})
 }, [categoryId])

 if(loading) {
  return <h1>Loading...</h1>
}


  return (
    <div>
      <h1>{greeting}</h1>
<ItemList products={products}/>
    </div>
  );
  }

export default ItemListConteiner;
