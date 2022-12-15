import { Snake } from "./Snake";
import { Cell } from "./Cell";

describe("Snake", () => {
  it("should take three cells at the beginning", () => {
    const snake = new Snake();

    expect(snake.getHead()).toEqual(new Cell(2, 0));
    expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)]);
  });

  it("should move right", () => {
    const snake = new Snake();

    snake.move()

    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });

  it("should move down", () => {
    const snake = new Snake();

    snake.setDirection("Down")    
    snake.move()

    expect(snake.getDirection()).toEqual("Down");
    expect(snake.getHead()).toEqual(new Cell(2, 1));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });
  
  it("does not move in opposite direction", () => {
    const snake = new Snake();

    snake.setDirection("Right")    
    snake.move()
    snake.move()
    expect(snake.getDirection()).toEqual("Right");
    expect(snake.getHead()).toEqual(new Cell(4, 0));
    expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(3, 0)]);

    snake.setDirection("Left")    
    snake.move()
    expect(snake.getDirection()).toEqual("Right");
    expect(snake.getHead()).toEqual(new Cell(5, 0));
    expect(snake.getTail()).toEqual([new Cell(3, 0), new Cell(4, 0)]);
  });

  it("grows when gets to x = 6, y = 0", () => {
    const snake = new Snake();

    snake.setDirection("Right")    
    snake.move()
    snake.move()
    snake.move()
    snake.move()
    //expect(snake.getDirection()).toEqual("Right");
    expect(snake.getHead()).toEqual(new Cell(6, 0));
    expect(snake.getTail()).toEqual([new Cell(4, 0), new Cell(5, 0)]);
    snake.grow()
    snake.move()
    snake.move()
    snake.move()
    snake.move()
    expect(snake.getHead()).toEqual(new Cell(10, 0));
    expect(snake.getTail()).toEqual([new Cell(5, 0), new Cell(6, 0), new Cell(7, 0), new Cell(8, 0), new Cell(9, 0)]);
  });
});
