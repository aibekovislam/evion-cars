import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetail } from '../functions/getDetail';
import { getImage } from '../functions/getImage';

function Detail() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [carImages, setCarImages] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        getDetail(id)
            .then(result => {
                setData(result);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    useEffect(() => {
        if (id) {
            getImage(id)
                .then(imageUrl => {
                    setCarImages({ [id]: imageUrl });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{data.name}</h2>
            <img src={carImages[id]} alt={data.name} />
            <p>{ data.buyPrice.value } сом</p>
            <button onClick={() => navigate(`/details/${data.id}/form`)}>Заказать</button>
        </div>
    );
}

export default Detail;
