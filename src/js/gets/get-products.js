export const getPosts = async () => {
    try {
        return await fetch(`https://food-boutique.b.goit.study/api/products?page=1&limit=9`).
            then(response => response.json())
    } catch (error) {
        return error
    }
}