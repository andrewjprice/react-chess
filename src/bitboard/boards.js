import BitBoard from './bitboard';

export function makeBB(lower, upper) {
    return new BitBoard(lower, upper);
}

export function emptyBB() {
    return makeBB(0,0);
}

export function oneBB() {
    return makeBB(0xffffffff, 0xffffffff);
}

export function rankBB() {
    return makeBB(0xff, 0);
}

export function idxBB(i) {
    return makeBB(0,0).setBit(i);
}