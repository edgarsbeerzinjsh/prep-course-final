export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  isTurnX: boolean = true
  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.isTurnX ? "X" : "O";
  }

  getWinner(): XO {
    const cell = this.cells;
    //rows
    if (cell[0] === cell[1] && cell[0] === cell[2]) {
      return cell[0]
    }
    if (cell[3] === cell[4] && cell[4] === cell[5]) {
      return cell[3]
    }
    if (cell[6] === cell[7] && cell[7] === cell[8]) {
      return cell[6]
    }
    //columns
    if (cell[0] === cell[3] && cell[3] === cell[6]) {
      return cell[0]
    }
    if (cell[1] === cell[4] && cell[4] === cell[7]) {
      return cell[1]
    }
    if (cell[2] === cell[5] && cell[5] === cell[8]) {
      return cell[2]
    }
    //diagonal
    if (cell[0] === cell[4] && cell[4] === cell[8]) {
      return cell[0]
    }
    if (cell[6] === cell[4] && cell[4] === cell[2]) {
      return cell[6]
    }
    return "-";
  }

  isTie(): boolean {
    return !this.cells.includes("-") && this.getWinner() === "-";
  }

  onClick(i: number): void {
    if (this.cells[i] === "-" && this.getWinner() === "-") {
      this.cells[i] = this.isTurnX ? "X" : "O";
      this.isTurnX = !this.isTurnX;
    }
  }

  restart(): void {
    this.cells = new Array(9).fill("-");
    this.isTurnX = true;
  }
}
