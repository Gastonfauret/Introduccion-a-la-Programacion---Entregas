import {User} from "./classUser.js";

URL = 'https://647a6c47d2e5b6101db057cf.mockapi.io/users'

const user = new User('Juan Pablo', 'Gonzalez', '12/06/80', 'Cis', 'Libertad Av. 120', 'Benito Juarez', 'jpgonza@jijimail.com', 112468097, '3')

user.dataApi(URL)

//-------------------------------------------------------------

const openModalAdd = document.getElementById('open-modal-add');
const cleanAdd = document.getElementById('btn-clean-add')
const modalAdd = document.getElementById("modal-add");
const closeModalAdd = document.getElementById("close-modal-add");
const submitAdd = document.getElementById("btn-submit-add");

closeModalAdd.addEventListener("click", () => {
    modalAdd.close();
});

cleanAdd.addEventListener('click', () => {
})

openModalAdd.addEventListener("click", () => {
    modalAdd.showModal();
});

submitAdd.addEventListener('click', () => {
    const name = document.querySelector('#name');
    const lastName = document.querySelector('#lastName');
    const birth = document.querySelector('#birth');
    const gender = document.querySelector('#gender');
    const address = document.querySelector('#address');
    const city = document.querySelector('#city');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');

    const user = new User(name.value, lastName.value, birth.value, gender.value, address.value, city.value, email.value, phone.value, '');

    user.anadirDato(user);
});

//-------------------------------------------------------------

const openModalModify = document.getElementById('open-modal-modify');
const cleanModify = document.getElementById('btn-clean-modify');
const modalModify = document.getElementById("modal-modify");
const closeModalModify = document.getElementById("close-modal-modify");
const submitModify = document.getElementById("btn-submit-modify");

closeModalModify.addEventListener("click", () => {
    modalModify.close();
});

cleanModify.addEventListener('click', () => {
})

openModalModify.addEventListener("click", () => {
    modalModify.showModal();
});

submitModify.addEventListener('click', () => {
    const id = document.getElementById('id-modify');
    const name = document.querySelector('#name-modify');
    const lastName = document.querySelector('#lastName-modify');
    const gender = document.querySelector('#gender-modify');
    const city = document.querySelector('#city-modify');

    const user1 = {
        id: id.value,
        name: name.value,
        lastName: lastName.value,
        gender: gender.value,
        city: city.value        
    }

    user.actualizaDato(id.value, user1)
    
});

//--------------------------------------------------------------
const openModalDel = document.getElementById('open-modal-del');
const cleanDel = document.getElementById('btn-clean-del')
const modalDel = document.getElementById("modal-del");
const closeModalDel = document.getElementById("close-modal-del");
const submitDel = document.getElementById("btn-submit-del");
const idDel = document.getElementById("id-del");

closeModalDel.addEventListener("click", () => {
    modalDel.close();
});

cleanDel.addEventListener('click', () => {
})

openModalDel.addEventListener("click", () => {
    modalDel.showModal();
});

submitDel.addEventListener('click', () => {
    user.eliminaDato(idDel.value);
});

//--------------------------------------------------------------

const update = document.querySelector('#update');

update.addEventListener('click', () => {
    user.dataApi(URL)
});

//--------------------------------------------------------------