const products = [
    {
        id: "1",
        name: "Iphone 12",
        price: 800,
        category: "celular",
        img: "https://www.macstation.com.ar/img/productos/2493-2317-1.jpg" ,
        stock: 25,
        description: "Iphone 12"
    },
    {
        id: "2",
        name: "Iphone 13",
        price: 900,
        category: "celular",
        img: "https://tecnotiendadigital.com/wp-content/uploads/iPHONE-13.jpg" ,
        stock: 25,
        description: "Iphone 13"
    },
    {
        id: "3",
        name: "Iphone 12 pro",
        price: 900,
        category: "celular",
        img: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro/iphone-12-pro-gold.jpg" ,
        stock: 25,
        description: "Iphone 12 pro"
    },
    {
        id: "4",
        name: "Iphone 13 pro",
        price: 950,
        category: "celular",
        img: "https://cdn-ipoint.waugi.com.ar/22532-thickbox_default/iphone-13-pro-128gb-gold.jpg" ,
        stock: 25,
        description: "Iphone 13 pro"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId)=>{
    return new Promise ((resolve)=> {
        setTimeout(()=>{resolve(products.find(prod => prod.id === productId))})
    },500)
}