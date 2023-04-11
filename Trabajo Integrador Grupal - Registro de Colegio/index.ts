import Naturales from "./modalidadNaturales";
import Sociales from "./modalidadSociales";

const modalidadSociales: object = {Sociales: 0, Civica: 0, Politica: 0, Sociologia: 0};
const modalidadNaturales: object = {Biologia: 0, Fisica: 0, Quimica: 0, Anatomia: 0};

const materiasSociales = new Sociales(modalidadSociales);
materiasSociales.setInfo();
// console.log(materiasSociales);

const materiasNaturalez = new Naturales(modalidadNaturales);
materiasNaturalez.setInfo();
// console.log(materiasNaturalez);
