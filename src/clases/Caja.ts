import { ICaja } from "../interfaces/ICaja";

export class Caja<T> implements ICaja<T> {
  constructor(public contenido: T) {}
}
