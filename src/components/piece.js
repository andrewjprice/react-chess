import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import '../styles/index.css';

function Piece({ children, pos }) {
    const ref = useRef(null);
    const [, drag] = useDrag({
        item: { type: 'piece', pos }
    })
    drag(ref);

    return (
        <span ref={ref}>{children}</span>
    )
}

export default Piece;