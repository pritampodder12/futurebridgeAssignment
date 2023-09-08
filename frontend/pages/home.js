
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('useeffect');
        axios.get('http://localhost:3001/getMovies').then(({data})=>{
            setData(data.data);
        }).catch(err=>{
            console.log('err', err)
        })
    }, [])
    return (
        <div className='p-4 flex flex-col items-center w-full'>
            <div>Movies</div>
            <div className='flex items-center flex-wrap'>
                {
                    data?.map((el, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-2 shadow-xl m-2 w-64">
                            <div className='flex justify-between'>
                                <div className='font-semibold'>Name:</div>
                                <div>{el?.name}</div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='font-semibold'>Rating:</div>
                                <div>{el?.rating}</div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='font-semibold'>Release Date:</div>
                                <div>{el?.releaseDate}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const data = [
    {
        name: 'Jawan',
        rating: 5,
        releaseDate: '25th Oct 2023'
    },
    {
        name: 'Jawan',
        rating: 5,
        releaseDate: '25th Oct 2023'
    },
    {
        name: 'Jawan',
        rating: 5,
        releaseDate: '25th Oct 2023'
    }
]