import { Link } from "react-router-dom";
import { useCart } from "../../Providers/Cart";
import { ImBin2 } from "react-icons/im"
import { IoArrowBackCircle } from "react-icons/io5"

import "./styles.css"

const CartComponent = () => {

    const { cart, showCart, removeFromCart ,removeAllCart } = useCart()

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
    
    return (
        <section className="cart-container">
            <Link to="/dashboard">
                <IoArrowBackCircle className="cart-back" />
            </Link>
            <h4 className="cart-title font-heading-3"> Carrinhos de Compras </h4>

            {
                !showCart && 
                    <div className="cart-empty--container">
                        <p className="cart-empty--text font-heading-3 text-center"> Sua sacola está vazia </p>
                        <Link to="/dashboard"> Adicione itens </Link>
                    </div>
            }       
            <div className="showCart-container">
            {
                showCart &&
                    cart.map(item => {
                        return <div className="product-cart-container" key={item.id}>
                            <div className="image-cart-container">
                                <img className="image-cart" src={item.image} alt={item.title} />
                            </div>
                            <h3 className="title-cart font-headinf-3" > {item.title} </h3>
                            <ImBin2 className="remove-product" onClick={() => removeFromCart(item)}/>
                        </div>
                    })
            }

            {
                showCart && 
                <>
                    <div className="price-container"> 
                        <p className="total font-body-600"> Total </p>
                        <p className="price font-body"> {totalPrice.toFixed(2)} </p>
                    </div>
                    <div className="button-removeAll-container">
                        <button className="button-removeAll button-default button-gray--light" onClick={removeAllCart}> Remover Todos </button>
                    </div>
                </>
            }
            </div>
        </section>
    )
}

export default CartComponent;