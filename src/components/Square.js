import React from 'react';

function Square(props) {
    return (
        <button 
            className={props.style}
            onClick={props.onClick}
            style={props.style}>
        </button>
    )
}