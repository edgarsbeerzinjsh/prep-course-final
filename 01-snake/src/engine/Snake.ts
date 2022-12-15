import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = "Right";

  setDirection(newDirection: Direction) {
    // Not allowing to eat itself
    let isFromXToY: boolean = false;
    if (
      (this.direction === "Right" || this.direction === "Left") &&
      (newDirection === "Up" || newDirection === "Down")
    ) {
      isFromXToY = true;
    }
    let isFromYToX: boolean = false;
    if (
      (this.direction === "Up" || this.direction === "Down") &&
      (newDirection === "Right" || newDirection === "Left")
    ) {
      isFromYToX = true;
    }

    if (isFromXToY || isFromYToX) {
      this.direction = newDirection;
    }
    // if (newDirection === "Right" && this.direction !== "Left") {
    //   this.direction = newDirection;
    // }
    // if (newDirection === "Up" && this.direction !== "Down") {
    //   this.direction = newDirection;
    // }
    // if (newDirection === "Left" && this.direction !== "Right") {
    //   this.direction = newDirection;
    // }
    // if (newDirection === "Down" && this.direction !== "Up") {
    //   this.direction = newDirection;
    // }
  }

  move() {
    const oldHead = new Cell(this.head.x, this.head.y);
    switch (this.direction) {
      case "Right":
        this.head = new Cell(this.head.x + 1, this.head.y);
        break;
      case "Down":
        this.head = new Cell(this.head.x, this.head.y + 1);
        break;
      case "Left":
        this.head = new Cell(this.head.x - 1, this.head.y);
        break;
      case "Up":
        this.head = new Cell(this.head.x, this.head.y - 1);
        break;
    }
    this.tail.push(oldHead);
    this.tail.shift();
  }

  grow() {
    const tailsEnd: Cell[] = [
      new Cell(this.tail[0].x, this.tail[0].y),
      new Cell(this.tail[0].x, this.tail[0].y),
      new Cell(this.tail[0].x, this.tail[0].y),
    ];

    this.tail.unshift(...tailsEnd);
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    return false;
  }
}
