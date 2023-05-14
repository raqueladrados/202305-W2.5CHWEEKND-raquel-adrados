export class Cell {
  element: HTMLElement;
  x: number;
  y: number;
  state: boolean;

  die(): void;
  alive(): void;
}
