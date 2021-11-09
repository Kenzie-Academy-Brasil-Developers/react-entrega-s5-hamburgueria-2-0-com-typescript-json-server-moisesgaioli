import { Link } from "react-router-dom";
import { useCart } from "../../Providers/Cart";
import { ImBin2 } from "react-icons/im"

const CartComponent = () => {

    const { cart, showCart, removeFromCart ,removeAllCart } = useCart()

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
    
    return (
        <section>
            <h4> Carrinhos de Compras </h4>

            {
                !showCart && 
                    <div>
                        <p> Sua sacola está vazia </p>
                        <Link to="/dashboard"> Adicione itens </Link>
                    </div>
            }       

            {
                showCart &&
                    cart.map(item => {
                        return <div key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h3> {item.title} </h3>
                            <ImBin2  onClick={() => removeFromCart(item)}/>
                        </div>
                    })
            }

            {
                showCart && 
                <>
                    <button onClick={removeAllCart}> Remover Todos </button>
                    <div> 
                        <p> Total </p>
                        <p> {totalPrice.toFixed(2)} </p>
                    </div>
                </>
            }
        </section>
    )
}

export default CartComponent;