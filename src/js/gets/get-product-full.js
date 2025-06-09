export const getPostFull = async (id) => {
    try {
        return await fetch(`https://food-boutique.b.goit.study/api/products/${id}`).
            then(response => response.json())
    } catch (error) {
        return error
    }
}