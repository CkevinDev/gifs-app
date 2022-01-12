import { useState, useEffect } from "react";

const CardComponent = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=8&api_key=m6u9j8iuysHe4STmA6CfVakB2RK0Rpoy`
        const res = await fetch(url);
        const {data} = await res.json();

        const gifs = data.map(img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        setImages(gifs)
    } 

    return (
        <>
            <h3 className="text-purple-300 my-2 uppercase" >resultados de: <span className="text-yellow-400">{category}</span></h3>
            <div className="flex flex-wrap justify-evenly gap-1">
                
            {
                images.map(img =>(
                    <div key={img.id} className="max-h-full my-5 p-1 transition-all ease-in-out duration-200 rounded-lg w-2/5 h-32 sm:w-2/5 md:w-1/4 md:h-32 lg:w-1/5 lg:h-44 bg-slate-500 ">
                        <img className=" max-h-full min-w-full object-cover" src={img.url}/>
                    </div>
                ))
            }
            </div>
        </>
    )
}

export default CardComponent
