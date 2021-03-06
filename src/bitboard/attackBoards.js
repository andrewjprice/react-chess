import { idxBB, fileMasks } from './utils/boards';
import {
    northRays,
    eastRays,
    nwRays,
    neRays,
    southRays,
    westRays,
    swRays,
    seRays } from './utils/boards';

import { PIECES } from '../constants/index';

export function kingAttacks(i) {
    /* file overflow/underflow */
    const notAFile = fileMasks()[0].not();
    const notHFile = fileMasks()[7].not();

    let idx = idxBB(i);
    let left = idx.copy().shr(1).and(notHFile);
    let right = idx.copy().shl(1).and(notAFile);
    let up = idx.copy().shr(8);
    let down = idx.copy().shl(8);

    return left.or(right).or(up).or(down);
}

export function kingAttacksArr() {
    let attacks = [];
    for (let i=0; i<64; i++) {
        attacks.push(kingAttacks(i));
    }
    return attacks;
}

export function knightAttacks(i) {
    /* file overflow/underflow */
    const notAFile = fileMasks()[0].not();
    const notBFile = fileMasks()[1].not();
    const notGFile = fileMasks()[6].not();
    const notHFile = fileMasks()[7].not();

    let idx = idxBB(i);
    let l1 = idx.copy().shr(1).and(notHFile);
    let l2 = idx.copy().shr(2).and(notHFile).and(notGFile);
    let r1 = idx.copy().shl(1).and(notAFile);
    let r2 = idx.copy().shl(2).and(notAFile).and(notBFile);
    let h1 = l1.or(r1);
    let h2 = l2.or(r2);

    return h1.copy().shl(16).or(h1.shr(16)).or(h2.copy().shl(8)).or(h2.shr(8));
}

export function knightAttacksArr() {
    let attacks = [];
    for (let i = 0; i < 64; i++) {
        attacks.push(knightAttacks(i));
    }
    return attacks;
}

export function pawnAttacks(i, color) {
    const notAFile = fileMasks()[0].not();
    const notHFile = fileMasks()[7].not();

    let idx = idxBB(i);
    let left = idx.copy();
    let right = idx.copy();

    if (color == PIECES.WHITE) {
        left = left.shl(7).and(notHFile);
        right = right.shl(9).and(notAFile);
    } else {
        left = left.shr(9).and(notAFile);
        right = right.shr(7).and(notHFile);
    }
    return left.or(right);
}

export function diagonalAttacks(i) {
    let nw = nwRays();
    let sw = swRays();
    let se = seRays();
    let ne = neRays();
    return nw[i].copy().or(ne[i]).or(sw[i]).or(se[i]);
}

export function rankAttacks(i) {
    let east = eastRays();
    let west = westRays();
    return east[i].copy().or(west[i]);
}

export function fileAttacks(i) {
    let north = northRays();
    let south = southRays();
    return north[i].copy().or(south[i]);
}
