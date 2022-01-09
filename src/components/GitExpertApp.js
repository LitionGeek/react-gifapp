import { useState } from "react"
import { AddCategory } from "./AddCategory"
import { GifGrid } from "./GifGrid"

export const GitExpertApp = ()=>{
  
    const [categorias, setCategorias] = useState(['One Puch'] )


    return(
        <>
            <h2>Git Expert App</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr/>

            <ol>
                {
                    categorias.map(category =>(
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    )
}