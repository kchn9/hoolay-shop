import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let { productId } = useParams();

    return (
        <div>
            productId
        </div>
    )
}

export default ProductDetail;

