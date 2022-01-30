import React from 'react';
import { X_MARK } from './markContants';

export default function Cell({ value, onclick }) {
    return (
        <div onClick={onclick} className={`game-cell ${value && value === X_MARK ? 'is-x' : 'is-o'}`}>
            {value}
        </div>
    )
}
