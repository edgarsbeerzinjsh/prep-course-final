import { Cell } from "./Cell";
import { Snake } from "./Snake";

export class GameField {
  /**
   * Called when level completed
   */
  apples: Cell[] = [
    new Cell(18, 16),
    new Cell(20, 16),
    new Cell(22, 16),
    new Cell(24, 16),
    new Cell(26, 16),
  ];

  seed(): void {
    // To not get two apples in one position
    let horizontal: number[] = [Math.floor(Math.random() * 45 + 1)];
    let vertical: number[] = [Math.floor(Math.random() * 25 + 1)];

    while (horizontal.length < 5) {
      const x = Math.floor(Math.random() * 45 + 1);
      if (!horizontal.includes(x)) {
        horizontal.push(x);
        continue;
      }
    }
    while (vertical.length < 5) {
      const y = Math.floor(Math.random() * 25 + 1);
      if (!vertical.includes(y)) {
        vertical.push(y);
        continue;
      }
    }

    for (let i = 0; i < 5; i++) {
      this.apples[i] = new Cell(horizontal[i], vertical[i]);
    }
  }

  getApples(): Cell[] {
    return this.apples;
  }

  isAppleInside(cell: Cell): boolean {
    for (let i = 0; i < this.apples.length; i++) {
      if (this.apples[i].x === cell.x && this.apples[i].y === cell.y) {
        return true;
      }
    }
    return false;
  }

  removeApple(cell: Cell): void {
    for (let i = 0; i < this.apples.length; i++) {
      if (this.apples[i].x === cell.x && this.apples[i].y === cell.y) {
        this.apples.splice(i, 1);
      }
    }
  }

  isEmpty(): boolean {
    if (this.apples.length === 0) {
      return true;
    }
    return false;
  }
}
