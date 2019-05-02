
export class Lesson {

  readonly id: number;
  readonly number: number;
  readonly name: string;

  constructor(data) {
    this.id = data.id;
    this.number = data.number;
    this.name = data.name;
  }

}
