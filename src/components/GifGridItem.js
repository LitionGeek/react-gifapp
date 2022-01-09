import React from 'react'

export function GifGridItem({title,url}) {
    return (
        <div className='animate__animated animate__fadeIn card'>
            <p>{title}</p>
            <img src={url} alt={title}/>
        </div>
    )
}


