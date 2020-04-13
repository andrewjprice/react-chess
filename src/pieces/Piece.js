import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import '../styles/index.css';

function Piece({ icon, pos }) {
    const ref = useRef(null);
    const [, drag] = useDrag({
        item: { type: 'piece', pos }
    })
    drag(ref);

    return (
        <span ref={ref} className="piece" style={{ backgroundImage: `url(${icon})` }}></span>
    )
}

export default Piece;