import React, { useReducer } from 'react';
import Board from './Board';
import { X_MARK, O_MARK } from './markContants'
import './GameStyle.css';
import { calculatateWiner } from '../../helpers';

const initialState = {
    board: Array(9).fill(null),
    isX: true
}
const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK':
            state = {
                board: action.payload.board,
                isX: action.payload.isX
            }
            break;
        case 'RESET':
            state = {
                board: action.payload.board,
                isX: action.payload.isX
            }
            break;

        default:
            break;
    }
    return state;
}

export default function Game() {
    // const [board, setBoard] = useState(Array(9).fill(null));
    // const [isX, setIsX] = useState(true);
    const [state, dispatch] = useReducer(gameReducer, initialState)
    const winner = calculatateWiner(state.board);
    const handleClickCell = (index) => {
        const boardCopy = [...state.board];
        if (winner || boardCopy[index]) {
            return;
        }
        boardCopy[index] = state.isX ? X_MARK : O_MARK;
        dispatch(
            {
                type: 'CLICK',
                payload: {
                    board: boardCopy,
                    isX: !state.isX
                }
            }
        )
    }
    return (
        <div>
            <Board
                cells={state.board}
                onclick={handleClickCell}
            />
            <div style={{ textAlign: 'center' }}>
                <button onClick={() => dispatch({
                    type: 'RESET',
                    payload: {
                        board: Array(9).fill(null),
                        isX: true
                    }
                })}>Chơi lại</button>
            </div>
            {
                winner && <p style={{ textAlign: 'center' }}>{`winner is ${state.isX ? O_MARK : X_MARK}`}</p>
            }
        </div>
    )
}
