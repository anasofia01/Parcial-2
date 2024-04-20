export const phraseCats = async () => {
    try{
        const getDataCats = await fetch("https://catfact.ninja/fact").then((res) => res.json());
        console.log(getDataCats, "mi data");
        return getDataCats.fact;
    } catch(error) {
        console.error(error);
    }
}