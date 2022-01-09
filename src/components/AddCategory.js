import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {
    const [inputValue, setinputValue] = useState('')
    const handleInputChange = (e)=>{
       
        setinputValue(e.target.value)
    }

    const handleSubmit= (e)=>{
  
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategorias(cats=>[inputValue,...cats]);
            setinputValue('')
        }else{

        }
        
    }

    return (
        <>
            <form onSubmit={handleSubmit}> 
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>

        </>
    )
}


AddCategory.prototype = {
    setCategorias:PropTypes.func.isRequired
}