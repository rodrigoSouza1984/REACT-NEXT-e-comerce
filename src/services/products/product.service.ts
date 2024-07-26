import { products } from "@/api/database-mock/products"
import { categorysFilter } from "@/hooks/products/use-categorys-context";
import { useFiltersContext } from "@/hooks/products/use-filters-contexts";
import { useProductContext } from "@/hooks/products/use-products-context";

export const ProductService = () => {
    const { setProductList } = useProductContext();
    const { inputHeaderValue, priorityFilter } = useFiltersContext();
    const {categoryType} = categorysFilter()

    const getAllProducts = async () => {
        try {            

            console.log(priorityFilter, 7777, categoryType)

            console.log(7776, categoryType)

            let listProducts = null            

            if(categoryType === 'ALL'){                
                listProducts = products
            }else{                
                listProducts = products.filter(r => r.typeProduct.toLowerCase() === categoryType.toLowerCase())                
            }

            //aki agora colocar os filtros necessarios exemplo do priorityFilter que eh o mais vendido preco baixo etc

            setProductList(listProducts)      

        } catch (err) {            
            return `error in getAll products functions: ${err}`
        }
    };

    const getProductById = (productId: number) => {
        try {

            const listProducts = products

            const product = listProducts.find(r => r.id === productId)

            if (!product) {
                throw new Error('Product not found');
            }

            return product

        } catch (err: any) {
            //console.log('getAllProducts error function: ', err)
            return `error in getById product function: ${err}`
        }
    };

    return { getAllProducts, getProductById };
};
