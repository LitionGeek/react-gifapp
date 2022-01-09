export const getGifs = async(category)=>{
    console.log(category)
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2a5DwwGrA8bhL5SzBTMcL8tyznVP6UiG`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })

    console.log(gifs)
    console.log('--------------------------'+url)
    return gifs;
    
}