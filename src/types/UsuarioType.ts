export type UsuarioType = {
  id: number;
  nombre: string;
  edad: number;
  email: string;
  activo: boolean;
};

// La diferencia entre type e intrfaz; la interfaz puede ser extendida y se usa para definir clases y objetos
// los types pueden combinar tipos primitivos, uniones y mas operaciones, son mas versatiles y no pueden extender