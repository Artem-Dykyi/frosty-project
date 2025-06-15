export const getFilteredPosts = async (keyword, category, order, orderValue) => {
    let url = `https://food-boutique.b.goit.study/api/products?keyword=${keyword}&category=${category}`;

    if (order) {
        url += `&${order}=${orderValue}`;
    }
    url += `&page=1&limit=9`;

    console.log(url)
    try {
        return await fetch(url).
            then(response => response.json())
    } catch (error) {
        return error
    }
}