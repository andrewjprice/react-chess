import React from 'react';
import {
        PawnDark, PawnLight,
        BishopDark, BishopLight,
        KnightDark, KnightLight,
        RookDark, RookLight,
        KingDark, KingLight,
        QueenDark, QueenLight } from '../icons';

export default function initializeBoard(player) {
    const squares = Array(64).fill();

    for (let i=8; i<16; i++) {
        squares[i] = <PawnLight width="45px" height="45px" />;
        squares[i+40] = <PawnDark width="45px" height="45px" />;
    }

    squares[0] = <RookLight width="45px" height="45px" />;
    squares[1] = <KnightLight width="45px" height="45px" />;
    squares[2] = <BishopLight width="45px" height="45px" />;
    squares[3] = <QueenLight width="45px" height="45px" />;
    squares[4] = <KingLight width="45px" height="45px" />;;
    squares[5] = <BishopLight width="45px" height="45px" />;
    squares[6] = <KnightLight width="45px" height="45px" />;
    squares[7] = <RookLight width="45px" height="45px" />;
    squares[56] = <RookDark width="45px" height="45px" />;
    squares[57] = <KnightDark width="45px" height="45px" />;
    squares[58] = <BishopDark width="45px" height="45px" />;
    squares[59] = <QueenDark width="45px" height="45px" />;
    squares[60] = <KingDark width="45px" height="45px" />;
    squares[61] = <BishopDark width="45px" height="45px" />;
    squares[62] = <KnightDark width="45px" height="45px" />;
    squares[63] = <RookDark width="45px" height="45px" />;

    return squares;
}