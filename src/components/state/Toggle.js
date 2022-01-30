import React, { useState } from 'react';
import './Toggle.css';

export default function Toggle() {
    const [on, setOn] = useState(false);
    return (
        <div onClick={() => setOn(!on)} className={`toggle ${on ? 'active' : ''}`}>
            <div className={`spinner ${on ? 'active' : ''}`}></div>
        </div>
    )
}
