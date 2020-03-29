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
        if (i < 32) {
            this.lower = this.lower | (1 << i);
        } else {
            this.upper = this.upper | (1 << (i - 32));
        }
    }

    and(other) {
        this.lower = this.lower & other.lower;
        this.upper = this.upper & other.upper;
        return this;
    }

    or(other) {
        this.lower = this.lower | other.lower;
        this.upper = this.upper | other.upper;
    }

    not() {
        this.lower = u32(~this.lower);
        this.upper = u32(~this.upper);
    }

    shl(i) {
        if (i > 31) {
            this.upper = this.lower << (i - 32);
            this.lower = 0;
        } else if (i > 0) {
            this.upper = (this.upper << i) | (this.lower >>> (32 - i));
            this.lower = this.lower << i;
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