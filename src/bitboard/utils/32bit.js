/* returns unsigned 32 integer */
export function u32(value) {
    return value >>> 0;
}

/* https://www.chessprogramming.org/Population_Count#popCount */
export function popCount(b) {
    b = u32(b);
    b -= (b >>> 1) & 0x55555555;
    b = (b & 0x33333333) + ((b >>> 2) & 0x33333333);
    return ((b + (b >>> 4) & 0x0F0F0F0F) * 0x01010101) >>> 24;
}

/* https://www.chessprogramming.org/BitScan#Index_of_LS1B_by_Popcount */
export function bitScanForward(b) {
    b = u32(b);
    return popCount((b & -b) - 1);
}
