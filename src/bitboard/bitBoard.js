/*
    Represents a 64 bit unsigned int.
*/
import { u32 } from './32bit';

export default class BitBoard {
    constructor(lower, upper) {
        this.lower = u32(lower);
        this.upper = u32(upper);
    }

    copy() {
        return new BitBoard(this.lower, this.upper);
    }

    setBit(i) {
        i = u32(i);
        if (i < 32) {
            this.lower = u32(this.lower | (1 << i));
        } else {
            this.upper = u32(this.upper | (1 << (i - 32)));
        }
        return this;
    }

    and(other) {
        this.lower = this.lower & other.lower;
        this.upper = this.upper & other.upper;
        return this;
    }

    or(other) {
        this.lower = u32(this.lower | other.lower);
        this.upper = u32(this.upper | other.upper);
        return this;
    }

    not() {
        this.lower = u32(~this.lower);
        this.upper = u32(~this.upper);
        return this;
    }

    shl(i) {
        if (i > 31) {
            this.upper = u32(this.lower << (i - 32));
            this.lower = 0;
        } else if (i > 0) {
            this.upper = u32((this.upper << i) | (this.lower >>> (32 - i)));
            this.lower = u32(this.lower << i);
        }
        return this;
    }

    shr(i) {
        if (i > 31) {
            this.lower = this.upper >>> (i-32);
            this.upper = 0;
        } else if (i > 0) {
            this.lower = (this.lower >>> i) | (this.upper << (32 - i));
            this.upper = this.upper >>> i;
        }
        return this;
    }
}