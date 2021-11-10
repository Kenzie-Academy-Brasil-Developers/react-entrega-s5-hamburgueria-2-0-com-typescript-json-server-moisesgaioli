import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Api from "../../Services/api"


interface Products {
    id: number;
    title: string;
    category: string;
    image: string;
    price: number;
}

interface ProductsProviderProps {
    children: ReactNode;
}

interface ProductsContextProps {
    products: Products[];
}


const ProductsContext = createContext<ProductsContextProps>({} as ProductsContextProps)

export const ProductsProvider = ({ children }: ProductsProviderProps) => {

    const [products, setProducts] = useState<Products[]>([] as Products[])

    useEffect(() => {
        Api
            .get("/products")
            .then(res => {
                setProducts(res.data)
            })
            .catch(_ => console.log("Produtos não renderizou"))
    }, [])
    

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}


export const useProducts = () => useContext(ProductsContext)

