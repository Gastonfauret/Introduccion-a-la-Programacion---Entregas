import GestorClub from "./GestorClub";

let argentina = new GestorClub();
argentina.agregarSocio();
argentina.agregarSocio();
argentina.agregarSocio();
argentina.agregarSocio();
argentina.agregarSocio();
argentina.agregarSocio();
argentina.agregarSocio();
argentina.agregarSocio();
argentina.agregarSocio();
argentina.agregarSocio();

console.log(argentina.buscarSocioXNombre());
console.log(argentina.buscarSocioXApellido());
console.log(argentina.buscarSocioXDni());
console.log(argentina.buscarSocioXFechaNacimiento());

console.log(argentina.data());



