import { Cell } from "./Cell";
import { GameField } from "./GameField";

describe("Game Field", () => {
  it("should have five apples present", () => {
    const field = new GameField();

    const apples = field.getApples();

    expect(apples.length).toBe(5);
  });

  // it("No apples on field", () => {
  //   const field = new GameField();

  //   const apples = field.getApples();

  //   expect(apples.length).toBe();
  // });

  it("Grow when get to apple", () => {
    const field = new GameField();

    const apples = field.getApples();
    //field.isAppleInside(new Cell(20, 16));

    //expect(field.isAppleInside()).toEqual(new Cell(6, 0));

    //expect(apples.length).toBe(5);
  });
});
