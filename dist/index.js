"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = void 0;
class Blockchain {
    constructor() {
        this.chain = [];
        this.chain.push({ index: 0, data: "Genesis Block" });
    }
}
exports.Blockchain = Blockchain;
