export default function initializeBoard(player) {
    const squares = Array(64).fill({ icon: '' });

    for (let i=8; i<16; i++) {
        squares[i] = { icon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg", pos: i };
        squares[i+40] = { icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg", pos: i+40 };
    }

    squares[0] = { icon: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg", pos: 0 };
    squares[1] = { icon: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg", pos: 1 };
    squares[2] = { icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg", pos: 2 };
    squares[3] = { icon: "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg", pos: 3 };
    squares[4] = { icon: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg", pos: 4 };
    squares[5] = { icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg", pos: 5 };
    squares[6] = { icon: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg", pos: 6 };
    squares[7] = { icon: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg", pos: 7 };
    squares[56] = { icon: "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg", pos: 56 };
    squares[57] = { icon: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg", pos: 57 };
    squares[58] = { icon: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg", pos: 58 };
    squares[59] = { icon: "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg", pos: 59 };
    squares[60] = { icon: "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg", pos: 60 };
    squares[61] = { icon: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg", pos: 61 };
    squares[62] = { icon: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg", pos: 62 };
    squares[63] = { icon: "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg", pos: 63 };

    return squares;
}