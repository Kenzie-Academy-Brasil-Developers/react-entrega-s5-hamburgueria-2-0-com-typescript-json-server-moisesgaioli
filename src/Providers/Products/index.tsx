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
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
}


const ProductsContext = createContext<ProductsContextProps>({} as ProductsContextProps)

export const ProductsProvider = ({ children }: ProductsProviderProps) => {

    const [products, setProducts] = useState<Products[]>([] as Products[])

    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        Api
            .get("/products")
            .then(res => {
                setProducts(res.data)
            })
            .catch(_ => console.log("Produtos não renderizou"))
    }, [])
    

    return (
        <ProductsContext.Provider value={{ products, search, setSearch }}>
            {children}
        </ProductsContext.Provider>
    )
}


export const useProducts = () => useContext(ProductsContext)

