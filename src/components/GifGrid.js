import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
/* import { useEffect,useState } from 'react'*/
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {
    const {loading,data:images} = useFetchGifs(category);
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
           {loading ? <p className='animate__animated animate__flash'>Loading</p>:null}
            <div className='card-grid '>
                {images.map(img => (
                    <GifGridItem
                        img={img}
                        key={img.id}
                        {...img}
                    />
                ))}

            </div>
        </>
    )
}
