window.onload = iniciar;
const form = document.getElementById("form");
const nome = document.getElementById("nome");
const dataRecebida = document.getElementById("data-nascimento");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const termosAceito = document.getElementById("aceita-termos");
const spanNome = document.getElementById("span-nome");
const spanData = document.getElementById("span-data");
const spanEmail = document.getElementById("span-email");
const spanTelefone = document.getElementById("span-telefone");

function iniciar() {
    document.getElementById("form").addEventListener("keyup", validar)
}

function validar (event) {
    event.preventDefault();
    validaNome(nome);
    validaData(dataRecebida);
    //validaEmail(email.value);
}

function validaNome(input) {
    const nome = input.value.trim();
    const elementos = [input, spanNome];

    if (nome == "" || nome == null) {
        sinalizaInput(false, elementos, "Preencha os campos obrigatórios");
    }
    else if (!/^[a-zA-Z]*$/g.test(nome)) {
        sinalizaInput(false, elementos, "Deve possuir apenas letras");
    }
    else if (nome.length < 2) {
        sinalizaInput(false, elementos, "Deve possuir mínimo 6 caracteres");
    }
    else if (nome.length > 15) {
        sinalizaInput(false, elementos, "Deve possuir maxímo 15 caracteres");
    }
    else {
        sinalizaInput(true, elementos, "");
    }
}

function validaData(input) {
    const elementos = [input, spanData];

    if (input.validity.rangeUnderflow || input.validity.rangeOverflow) {
        sinalizaInput(false, elementos, "Preencha uma data válida");
    }

    else if (input.validity.valueMissing) {
        console.log(input.validity.valueMissing);
        sinalizaInput(false, elementos, "Preencha a data");
    }

    else {
        sinalizaInput(true, elementos, "");
    }
}

function validaEmail(input) {
    const elementos = [input, spanEmail];

    if (input.validity.valueMissing) {
        sinalizaInput(false, elementos, "Preencha o seu e-mail");
    }
    else if (input.validity.valid) {
        sinalizaInput(false, elementos, "Preencha o seu e-mail");
    }
    else {
        sinalizaInput(true, elementos, "");
    }
}

function sinalizaInput(status, elementos, mensagem) {
    if (!status) {
        elementos[1].textContent = mensagem;
        elementos[0].classList.add("input-incorreto");
        elementos[1].classList.add("span-incorreto");
        elementos[1].style.visibility = "visible";
    }
    else {
        elementos[0].classList.remove("input-incorreto");
        elementos[1].classList.remove("span-incorreto");
        elementos[1].style.visibility = "hidden"
    }
}