import React from 'react';
import { useRouter } from 'next/router';
const SingleProduct = () => {
    const router = useRouter();
    const { productId } = router.query;
    return (
        <div>
            product: {productId}
        </div>
    );
}

export default SingleProduct;
