import { Usuario, AdminUsuario } from "./clases/Usuario";
import { Caja } from "./clases/Caja";

// Parte 2 - Interfaces y Types
const usuarios: Usuario[] = [
    new Usuario(1, "Usuario 1", 25, "usuario1@gmail.com", true),
    new Usuario(2, "Usuario 2", 30, "usuario2@gmail.com", false),
    new Usuario(3, "Alvaro", 22, "alvarorubina132@gmail.com", true)
  ];
  

const usuariosActivos = usuarios.filter(u => u.activo);
console.log("Usuarios activos:", usuariosActivos);

// Parte 3 - Clases y Objetos
const user1 = new Usuario(1, "Usuario 1", 40, "usuario1@gmail.com", true);
const user2 = new Usuario(2, "Usuario 2", 28, "usuario2@gmail.com", false);
console.log(user1, user2);

// despues de intercambiar sus estados de activo:
user1.toggleActivo();
user2.toggleActivo();
console.log(user1, user2);

const admin = new AdminUsuario(3, "Admin", 35, "admin@gmail.com", true, ["crear", "editar", "eliminar"]);
console.log(admin);

// Parte 4 - Arrays y Métodos de Arrays
const productos = [
  { id: 1, nombre: "Prod 1", precio: 1500, stock: 10 },
  { id: 2, nombre: "Prod 2", precio: 800, stock: 0 },
  { id: 3, nombre: "Prod 3", precio: 5000, stock: 5 }
];

const nombres = productos.map(p => p.nombre);
console.log("Nombres de los productos:", nombres);

const conStock = productos.filter(p => p.stock > 0);
console.log("Productos con stock mayor a 0:", conStock);

productos.sort((a, b) => a.precio - b.precio);
console.log("Productos ordenados por precio:", productos);

productos.push({ id: 4, nombre: "Prod 4", precio: 1200, stock: 3 });
productos.pop();
console.log("Productos actualizados:", productos);

// Parte 5 - Genéricos
function getRandomItem<T>(array: T[]): T {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

console.log("Número aleatorio:", getRandomItem([1, 2, 3, 4]));
console.log("String aleatorio:", getRandomItem(["uno", "dos", "tres"]));
console.log("Usuario aleatorio:", getRandomItem(usuarios));

const caja1 = new Caja<string>("Blablabla");
const caja2 = new Caja<number[]>([1, 2, 3]);
console.log("Caja 1:", caja1);
console.log("Caja 2:", caja2);

// Parte 6 - Promesas y Async/Await
function obtenerDatos(): Promise<Usuario[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          new Usuario(4, "Usuario 4 ", 27, "usuario4@gmail.com", true),
          new Usuario(5, "Usuario 5", 31, "usuario5@gmail.com", false),
          new Usuario(6, "Usuario 6 ", 19, "usuario6@gmail.com", true)
        ]);
      }, 3000);
    });
  }
  

async function mostrarDatos() {
  const datos = await obtenerDatos();
  console.log("Datos simulados:", datos);
}
mostrarDatos();

async function obtenerAPI() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log("Usuarios desde API:", data);
}
obtenerAPI();

// Parte 7 - DOM
function renderizarUsuariosDOM(usuarios: Usuario[]) {
  const lista = document.getElementById("listaUsuarios");
  if (lista) {
    lista.innerHTML = usuarios.map(u => `<li>${u.nombre} (${u.email})</li>`).join("");
  }
}

document.getElementById("btnRender")?.addEventListener("click", () => {
  renderizarUsuariosDOM(usuarios);
});
