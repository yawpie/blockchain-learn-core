export class Blockchain {
  chain: any[] = [];
  constructor() {
    this.chain.push({ index: 0, data: "Genesis Block" });
  }
}
