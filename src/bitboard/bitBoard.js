/*
    Represents a 64 bit unsigned int.
*/
import { U32 } from './32bit';

export default class BitBoard {
    constructor(lower, upper) {
        this.lower = U32(lower);
        this.upper = U32(upper);
    }

    AND(other) {
        this.lower = U32(this.lower & other.lower);
        this.upper = U32(this.upper & other.upper);
        return this;
    }

    OR(other) {
        this.lower = U32(this.lower | other.lower);
        this.upper = U32(this.upper | other.upper);
    }

    NOT() {
        this.lower = U32(~this.lower);
        this.upper = U32(~this.upper);
    }
}