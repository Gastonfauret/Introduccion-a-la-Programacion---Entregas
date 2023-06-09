export class User {
    constructor(name, lastName, birth, gender, address, city, email, phone, id) {
        this.name = name;
        this.lastName = lastName;
        this.birth = birth;
        this.gender = gender;
        this.address = address;
        this.city = city;
        this.email = email;
        this.phone = phone;
        this.id = id
    }

    URL = 'https://647a6c47d2e5b6101db057cf.mockapi.io/users'

    //Metodo que realizara diferentes funciones.
    dataApi(URL) {
        fetch(URL) //Realizamos el fetch: Traemos los datos de la API.
            .then(res => res.json()) // Recibimos una respuesta y la convertimos en formato Json.
            .then(data => mostrarData(data)) // Tomamos la respuesta y la mostramos en consola.          
            .catch(err => error()) // En caso de a ver un error lo mostramos en consola.

            function error() {
                window.location.href="./error.html";
            };

            
        const mostrarData = (data) => {
            console.log(data);
            let body = '';
            for(let i = 0; i < data.length; i++) {
                body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].lastName}</td><td>${data[i].gender}</td><td>${data[i].city}</td></tr>`
            }
            document.getElementById('data').innerHTML = body;
        }    
    }
    //Funcion Que Ordena los Registros por nombre.
    //NO FUNCIONA!
    orderByName(data) {
        data.sort(function(a, b) {
            if(a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0
        });
    }

    
    // Funcion que busca un registro por Id, que pasaremos como parametro.
    buscaPorId(id) {
        fetch(URL + `/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => error());
    }

    // Funcion que elimina un registro dado por Id, por parametro.
    eliminaDato(id) {
        fetch(URL + `/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => error());
    }

    anadirDato(user) {
        fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => error());            
    };

    actualizaDato(id, user) {
        fetch(URL + `/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => error())
    };
}