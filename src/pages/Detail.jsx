import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetail } from '../functions/getDetail'

function Detail() {
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        getDetail(id)
            .then(result => {
                setData(result)
            })
            .catch(error => {
                console.error(error)
            })
    }, [id])

    if (!data) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <h2>{data.name}</h2>
            
        </div>
    )
}

export default Detail
