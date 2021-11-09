import { ReactNode } from "react"
import { CartProvider } from "./Cart"
import { ProductsProvider } from "./Products"
import { UserProvider } from "./Users"

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {

    return (
        <ProductsProvider>
            <UserProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </UserProvider>
        </ProductsProvider>
    )
}

export default Providers