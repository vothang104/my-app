import React, { useEffect, useState } from 'react';

export default function Count() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let timer = setTimeout(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [count])
    return (
        <div className='p-5'>
            <span className='text-[30px] block w-full text-center'>{count}</span>
        </div>
    )
}
