import { IUsuario } from "../interfaces/IUsuario";

export class Usuario implements IUsuario {
  constructor(
    public id: number,
    public nombre: string,
    public edad: number,
    public email: string,
    public activo: boolean
  ) {}

  toggleActivo() {
    this.activo = !this.activo;
  }
}

export class AdminUsuario extends Usuario {
  permisos: string[];

  constructor(
    id: number,
    nombre: string,
    edad: number,
    email: string,
    activo: boolean,
    permisos: string[]
  ) {
    super(id, nombre, edad, email, activo);
    this.permisos = permisos;
  }
}
