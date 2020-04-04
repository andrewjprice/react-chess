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
