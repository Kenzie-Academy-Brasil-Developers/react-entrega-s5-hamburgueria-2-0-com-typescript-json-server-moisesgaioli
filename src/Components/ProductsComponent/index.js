import { useCart } from "../../Providers/Cart"
import { useProducts } from "../../Providers/Products"

import "./styles.css"


const ProductsComponent = () => {

    const { products } = useProducts()
    const { addToCart } = useCart()

    return (
        <section className="product-container">
            {
                products.map(item => {
                    return <div key={item.id} className="product">
                        <div className="product-image-container">
                            <img className="product-image" src={item.image} alt={item.title} />
                        </div>
                        <div className="product-info-container">
                            <h4 className="product-title font-heading-3"> {item.title} </h4>
                            <p className="product-category font-caption"> {item.category} </p>
                            <p className="product-price font-body"> R$ {item.price.toFixed(2)} </p>
                            <button className="product-button button-default button-gray--light" onClick={() => addToCart(item)}> Adicionar </button>
                        </div>
                    </div>
                })
            }
        </section>
    )
}

export default ProductsComponent;