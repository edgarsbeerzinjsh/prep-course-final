import { Cell } from "./Cell";
import { GameField } from "./GameField";

describe("Game Field", () => {
  it("should have five apples present", () => {
    const field = new GameField();

    const apples = field.getApples();

    expect(apples.length).toBe(5);
  });

  it("See when get to apple", () => {
    const field = new GameField();

    const apple = field.getApples()[0];

    expect(field.isAppleInside(apple)).toBe(true);
  });

  it("Eat apple when get to it", () => {
    const field = new GameField();

    const apple = field.getApples()[0];
    const apple2 = field.getApples()[1];
    field.removeApple(apple);
    expect(apple2).toEqual(field.getApples()[0]);
  });
  it("No apples on field -> runs seed", () => {
    const field = new GameField();

    const apples = field.getApples();
    field.removeApple(apples[0]);
    field.removeApple(apples[0]);
    field.removeApple(apples[0]);
    field.removeApple(apples[0]);
    field.removeApple(apples[0]);
    expect(apples.length).toBe(0);
    expect(field.isEmpty()).toBe(true);

    field.seed();
    const nextLevel = field.getApples();
    expect(nextLevel.length).toBe(5);
  });
});
