import { Cell } from "./cell";

export class gridRow {
  cells;
  id;
  width;
  constructor(cells, id, width){
  this.cells: Array<Cell>;
  this.id: Number;
  this.width: Number;
  }
}
