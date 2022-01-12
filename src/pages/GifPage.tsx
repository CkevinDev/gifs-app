import { useState } from "react";
import AddCategory from "../components/AddCategory";
import CardComponent from "../components/CardComponent";

const GifPage = () => {

    const [category, setCategory] = useState([])

    return (
        <div className="m-5">
            <h1 className="mb-4 font-bold text-2xl text-purple-600">GifApp</h1>
            <AddCategory setCategory={setCategory}/>

                <div className="flex flex-wrap justify-evenly gap-1">
                    {
                        category.map(categorie =>(
                            <CardComponent key={categorie} category={categorie}/>
                        ))
                    }
                </div>

        </div>
    )
}

export default GifPage
