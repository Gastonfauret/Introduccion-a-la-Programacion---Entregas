// Crear el contenedor div
const divImg = document.createElement("div");
divImg.id = "img";
document.body.appendChild(divImg);

// const nameChar = document.createElement("p");
// nameChar.id = "name";
// document.body.appendChild(nameChar);

// Función asincrónica para obtener y mostrar las imágenes
async function fetchAndDisplayImages() {
    try {
        // Realizar el fetch a la API
        const response = await fetch("https://rickandmortyapi.com/api/character");

        const data = await response.json();

        // Iterar sobre los resultados
        for (const result of data.results) {

            // Obtener la URL de la imagen del personaje            
            const imageUrl = result.image;
            
            // const name = result.name;
            // console.log(name);

            // Crear un nuevo elemento de imagen
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;

            // Agregar la imagen al contenedor div
            divImg.appendChild(imgElement);            
            }
    } catch (error) {
        console.error(error, "no se pudo resolver la peticion");
    }
}

// Llamar a la función asincrónica
fetchAndDisplayImages();
