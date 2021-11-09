import { createContext, ReactNode, useContext, useState } from "react";


interface CartProviderProps {
    children: ReactNode;
}

interface Products {
    id: number;
    title: string;
    category: string;
    image: string;
    price: number;
}

interface CartContextProps {
    cart: Products[];
    addToCart: (product: Products) => void;
    removeFromCart: (product: Products) => void;
    removeAllCart: () => void;
    showCart: boolean;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps )

export const CartProvider = ({ children }: CartProviderProps) => {

    const [showCart, setShowCart] = useState<boolean>(false)
    const [cart, setCart] = useState<Products[]>([])

    const addToCart = (product: Products) => {
        setCart([...cart, product])
        setShowCart(true)
    }

    const removeFromCart = (product: Products) => {
        const remove = cart.filter(item => item.id !== product.id)

        setCart(remove)
    }

    const removeAllCart = () => {
        setCart([])
        setShowCart(false)
    }

    return (
        <CartContext.Provider value={{ 
            addToCart,
            cart,
            removeAllCart,
            removeFromCart,
            showCart
         }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)