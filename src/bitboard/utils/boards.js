import BitBoard from '../bitboard';

export {
    makeBB,
    emptyBB,
    oneBB,
    idxBB,
    rankBB,
    rankMasks,
    fileBB,
    fileMasks,
    northAttack,
    eastAttack,
    noweAttack,
    noeaAttack,
    southAttack,
    westAttack,
    soweAttack,
    soeaAttack
};

function makeBB(lower, upper) {
    return new BitBoard(lower, upper);
}

/* Zero bitboard */
function emptyBB() {
    return makeBB(0,0);
}

/* One bitboard */
function oneBB() {
    return makeBB(0xffffffff, 0xffffffff);
}

/* single bit bitboard */
function idxBB(i) {
    return makeBB(0,0).setBit(i);
}

/* rank masks */
function rankBB(i) {
    return makeBB(0xff, 0).shl(i * 8);
}

function rankMasks() {
    let ranks = []
    for (let i=0; i<8; i++) {
        ranks.push(rankBB(i))
    }
    return ranks;
}

/* file masks */
function fileBB(i) {
    return makeBB(0x01010101, 0x01010101).shl(i);
}

function fileMasks() {
    let files = []
    for (let i=0; i<8; i++) {
        files.push(fileBB(i))
    }
    return files;
}

/* ray attacks */
/* https://www.chessprogramming.org/On_an_empty_Board#Ray_Attacks */

/* positive rays */
function northAttack() {
    var nort = makeBB(0x01010101, 0x01010101);
    let attacks = [];

    for (let i=0; i<64; i++) {
        attacks.push(nort.copy());
        nort.shl(1)
    }

    return attacks;
}

function eastAttack() {
    let mask = makeBB(0xff, 0);
    let attacks = [];

    for (let i=0; i<8; i++) {
        let rankMask = mask.copy().shl(i*8);
        for (let j=0; j<8; j++) {
            let ea = rankMask.copy().shl(j).and(rankMask);
            attacks.push(ea);
        }
    }

    return attacks;
}

function noweAttack() {
    const notHFile = makeBB(0x7f7f7f7f, 0x7f7f7f7f);
    const midDiag = makeBB(0x10204080, 0x01020408);
    let attacks = [];

    for (var rank=0; rank<8; rank++) {
        let nw = midDiag.copy().shl(rank * 8);

        for (var file=0; file<8; file++) {
            if (file > 0) {
                nw.shr(1).and(notHFile);
            }
            attacks.push(nw.copy());
        }
    }

    return attacks;
}

function noeaAttack() {
    const notAFile = makeBB(0xfefefefe, 0xfefefefe);
    const midDiag = makeBB(0x08040201, 0x80402010);
    let attacks = [];

    for (var rank=0; rank<8; rank++) {
        let ne = midDiag.copy().shl(rank * 8);

        for (var file=0; file<8; file++) {
            if (file > 0) {
                ne.shl(1).and(notAFile);
            }
            attacks.push(ne.copy());
        }
    }

    return attacks;
}

/* negative rays */
function southAttack() {
    const sout = makeBB(0x00808080, 0x80808080);
    let attacks = new Array(63);

    for (let i=63; i>=0; i--) {
        attacks[i] = sout.copy();
        sout.shr(1);
    }

    return attacks;
}

function westAttack() {
    let mask = makeBB(0xff, 0);
    let attacks = [];

    for (let rank=0; rank<8; rank++) {
        let westRank = mask.copy().shl(rank*8);
        for (let file=7; file>=0; file--) {
            let west = westRank.copy().shr(file).and(westRank.copy());
            attacks.push(west);
        }
    }

    return attacks;
}

function soweAttack() {
    const midDiag = makeBB(0x08040201, 0x80402010);
    let attacks = new Array(63);

    for (let i=63; i>=0; i--) {
        attacks[63-i] = midDiag.copy().shr(i);
    }

    return attacks;
}

function soeaAttack() {
    const notAFile = makeBB(0xfefefefe, 0xfefefefe);
    const midDiag = makeBB(0x10204080, 0x01020408);
    let attacks = [];

    for (let i=56; i>=0; i--) {
        attacks.push(midDiag.copy().shr(i));
    }
    let se = midDiag.copy();

    for (let i=0; i<7; i++) {
        attacks.push(se.shl(1).and(notAFile).copy());
    }

    return attacks;
}