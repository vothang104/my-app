import React from 'react';
import Cell from './Cell';

export default function Board({ cells, onclick }) {
    return (
        <div className='game-board'>
            {
                cells.map((item, index) => (
                    <Cell
                        key={index}
                        value={item}
                        onclick={() => onclick(index)}
                        position={index}
                    />
                ))
            }
        </div>
    )
}
