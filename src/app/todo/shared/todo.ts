export class Todo {

  id: number;
  title: string = '';
  editing: boolean=false;
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  } 
}
