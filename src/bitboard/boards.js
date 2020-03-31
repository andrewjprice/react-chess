import BitBoard from './bitboard';

export function makeBB(lower, upper) {
    return new BitBoard(lower, upper);
}

/* Zero bitboard */
export function emptyBB() {
    return makeBB(0,0);
}

/* One bitboard */
export function oneBB() {
    return makeBB(0xffffffff, 0xffffffff);
}

/* single bit bitboard */
export function idxBB(i) {
    return makeBB(0,0).setBit(i);
}

/* rank masks */
export function rankBB(i) {
    return makeBB(0xff, 0).shl(i * 8);
}

export function rankMasks() {
    let ranks = []
    for (let i=0; i<8; i++) {
        ranks.push(rankBB(i))
    }
    return ranks;
}

/* file masks */
export function fileBB(i) {
    return makeBB(0x01010101, 0x01010101).shl(i);
}

export function fileMasks() {
    let files = []
    for (let i=0; i<8; i++) {
        files.push(fileBB(i))
    }
    return files;
}
