import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("should be able to place X/O on cells", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(2);
    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("should not be able to place on filled cells", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("should be able to see win status", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
  it("should be able to see draw status", () => {
    const game = new Game();

    game.onClick(4);
    game.onClick(8);
    game.onClick(6);
    game.onClick(2);
    game.onClick(5);
    game.onClick(3);
    game.onClick(7);
    game.onClick(1);
    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X", "O", "O",
      "O", "X", "X",
      "X", "X", "O"
    ]);
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });
  it("should be able to play again", () => {
    const game = new Game();

    game.onClick(4);
    game.onClick(8);
    game.onClick(6);
    game.onClick(2);
    game.onClick(5);
    game.onClick(3);
    game.onClick(7);
    game.onClick(1);
    game.onClick(0);
    game.restart();
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
});
