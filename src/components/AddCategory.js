import { useState } from "react";
import PropTypes from 'prop-types'

const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 0){
            setCategory(cat => [inputValue,...cat])
            setInputValue("") 
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className=" flex items-center border-purple-600 border-2 rounded-md">
                <h5 className=" border-r-2 border-purple-600 px-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-pink-500">Buscar</h5>
                <input onChange={handleInputChange} value={inputValue} className="text-gray-400 bg-transparent outline-none w-full px-3 py-1  " type="text" />
                <button className="bg-gradient-to-br from-indigo-500 to-pink-500  p-1 rounded-sm">Agregar</button>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default AddCategory


