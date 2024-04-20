export const dataCats = async () => {
    try{
    const getImageCats = await fetch("https://cataas.com/cat/says/").then((res) => res.json())
    return getImageCats;
    } catch(error) {
        console.error(error);
    }
}