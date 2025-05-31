export const getProducts = async () => {
    try{
        return await fetch("http://localhost:3000/products").then((response) => 
            response.json());
    } catch (error) {
        console.error(error);
        } 
}