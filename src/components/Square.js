import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import '../styles/index.css';

function Square({ move, shade, pos, children }) {
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: 'piece',
        drop(piece) {
            move(piece.pos, pos)
        }
    });
    drop(ref);

    return (
        <div ref={ref} className={'square ' + shade}>{children}</div>
    )
}

export default Square;