import { products } from "@/api/database-mock/products"
import { useCategorysFilter } from "@/hooks/products/use-categorys-context";
import { useFiltersContext } from "@/hooks/products/use-filters-contexts";
import { useProductPaginationContext } from "@/hooks/products/use-product-pagination-context";
import { useProductContext } from "@/hooks/products/use-products-context";


export const ProductService = () => {
    const { productList ,setProductList, setQuantityTotalProduct, quantityTotalProduct } = useProductContext();
    const { inputHeaderValue, priorityFilter } = useFiltersContext();
    const { categoryType } = useCategorysFilter()        

    const {
        page,
        setPage,
        quantityItensByPage,
        totalPages,
        setTotalPages,
        currentPage,
        setCurrentPage
    } = useProductPaginationContext()

    const getAllProducts = async (pageNumber?: number, itemsPerPage?: number, scroll?: boolean) => {
        try {           

            if (!pageNumber) {
                pageNumber = 1
            }

            if (!itemsPerPage) {
                itemsPerPage = 10
            }

            if(!scroll){
                scroll = false
            }else{
                pageNumber = page
                itemsPerPage = quantityItensByPage
            }

            let listProducts = null

            if (categoryType === 'ALL') {
                listProducts = products
            } else {
                listProducts = products.filter(r => r.typeProduct.toLowerCase() === categoryType.toLowerCase())
            }         

            const start = (pageNumber - 1) * itemsPerPage;
            const end = start + itemsPerPage;

            const paginatedProducts = listProducts.slice(start, end); 

            setQuantityTotalProduct(listProducts.length)
            setTotalPages(Math.ceil(listProducts.length / Number(quantityItensByPage))) 

            console.log(quantityTotalProduct, 'quantityTotalProduct - total pages', totalPages)  
            
            if(!scroll){
                setProductList(paginatedProducts)
            }else{
                setProductList((prevProducts: any) => [...prevProducts, ...paginatedProducts]);
            }                      

        } catch (err) {
            return `error in getAll products functions: ${err}`
        }
    };


    // const getAllProducts = async (pageNumber: number, itemsPerPage: number) => {
    //     try {
    //         // Simulating API call with pagination
    //         const start = (pageNumber - 1) * itemsPerPage;
    //         const end = start + itemsPerPage;

    //         const allProducts = await new Promise<any[]>((resolve) => {
    //             setTimeout(() => resolve(products), 500); // Simulated delay
    //         });

    //         const paginatedProducts = allProducts.slice(start, end);

    //         setProductList(paginatedProducts) 

    //         return paginatedProducts;
    //     } catch (err) {
    //         //return `error in getAll products functions: ${err}`;
    //         return []; 
    //     }
    // }

    // const getAllProducts = async () => {
    //     try {            

    //         if (primeiroRender.current) {
    //             console.log(1, productList.length)
    //             primeiroRender.current = false;
    //             return;
    //         }            

    //         console.log(priorityFilter, 7777, categoryType)

    //         console.log(7776, categoryType)

    //         let listProducts = null            

    //         if(categoryType === 'ALL'){                
    //             listProducts = products
    //         }else{                
    //             listProducts = products.filter(r => r.typeProduct.toLowerCase() === categoryType.toLowerCase())                
    //         }

    //         //aki agora colocar os filtros necessarios exemplo do priorityFilter que eh o mais vendido preco baixo etc

    //         setProductList(listProducts) 
    //         setQuantityTotalProduct(30)     

    //     } catch (err) {            
    //         return `error in getAll products functions: ${err}`
    //     }
    // };    

    const getProductById = (productId: number) => {
        try {

            console.log(2, productList.length)

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

    const getProductsByName = (searchTerm: string) => {
    try {
        const listProducts = products;

        console.log('getproducts', listProducts)

        const filteredProducts = listProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setProductList(filteredProducts)



        return true
        
    } catch (err: any) {
        return `error in getProductsByName function: ${err}`;
    }
};

    return { getAllProducts, getProductById, getProductsByName };
};
