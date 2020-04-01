import { emptyBB, fileMasks } from './boards';

export function kingAttacks(i) {
    /* file overflow/underflow */
    const leftMask = fileMasks()[0];
    const rightMask = fileMasks()[7];

    let center = emptyBB().setBit(i).and(leftMask.not()).and(rightMask.not());
    let eastWest = center.copy().shr(1).or(center.copy().shl(1));
    let northSouth = center.copy().shl(8).or(center.copy().shr(8));

    return eastWest.or(northSouth);
}

export function kingAttacksArray() {
    let attacks = [];
    for (let i=0; i<64; i++) {
        attacks.push(kingAttacks(i));
    }
    return attacks;
}