import React from 'react';
import { useRouter } from 'next/router';
const Params = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    return (
        <div>
            <div>{params[0]}</div>
            houses
        </div>
    );
}

export default Params;
