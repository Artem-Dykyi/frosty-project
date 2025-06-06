export const deleteProducts = async (productDel)=>{
    try {
        const options = {
            method: "DELETE",
            // body: JSON.stringify(productDel)
    }
        return await fetch(`http://localhost:3000/products/${productDel}`, options).then((response) =>
        response.json());
    } catch (error) {
        console.error(error);
        } 
    }