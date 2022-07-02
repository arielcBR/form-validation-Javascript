window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validar(event) {
    if (validaNome() && validaData() && validaEmail() && validaTelefone() && validaTermos() && confirm("Pressione OK, caso queira enviar o formulário."))
    {
        alert("Formulário enviado com sucesso");
        return true;
    }
    else
    {
        event.preventDefault();
        return false;
    }
    
}

function validaNome() {
    const input = document.getElementById("nome");
    const spanNome = document.getElementById("span-nome");
    const nome = input.value.trim();
    const elementos = [input, spanNome];

    if (nome == "" || nome == null) {
        sinalizaInput(false, elementos, "Preencha os campos obrigatórios");
        input.focus();
        return false;
    }
    else if (!/^[a-zA-Z]*$/g.test(nome)) {
        sinalizaInput(false, elementos, "Somente primeiro nome e sem números");
        input.focus();
        return false;
    }
    else if (nome.length < 2) {
        input.focus();
        sinalizaInput(false, elementos, "Deve possuir mínimo 2 caracteres");
        return false;
    }
    else if (nome.length > 15) {
        input.focus();
        sinalizaInput(false, elementos, "Deve possuir maxímo 15 caracteres");
        return false;
    }
    else {
        sinalizaInput(true, elementos, "");
        return true;
    }
}

function validaData() {
    const input = document.getElementById("data-nascimento");
    const spanData = document.getElementById("span-data");
    const elementos = [input, spanData];

    if (input.validity.rangeUnderflow || input.validity.rangeOverflow) {
        sinalizaInput(false, elementos, "Preencha uma data válida");
        input.focus();
        return false;
    }

    else if (input.validity.valueMissing) {
        sinalizaInput(false, elementos, "Preencha a data");
        input.focus();
        return false;
    }

    else {
        sinalizaInput(true, elementos, "");
        return true;
    }
}

function validaEmail() {
    const input = document.getElementById("email");
    const spanEmail = document.getElementById("span-email");
    const elementos = [input, spanEmail];
    const email = input.value.trim();
    const pattern = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]+$/

    if (email == "" || email == null) {
        sinalizaInput(false, elementos, "Preencha o seu e-mail");
        input.focus();
        return false;
    }
    else if (!input.validity.valid) {
        sinalizaInput(false, elementos, "Preencha um e-mail");
        input.focus();
        return false;
    }
    else if (!email.match(pattern)) {
        sinalizaInput(false, elementos, "e-mail inserido não é válido");
        input.focus();
        return false;
    }
    else {
        sinalizaInput(true, elementos, "");
        return true;
    }
}

function validaTelefone() {
    const input = document.getElementById("telefone");
    const spanTelefone = document.getElementById("span-telefone");
    const elementos = [input, spanTelefone];
    const telefone = input.value.trim();
    const pattern = /^\d\d(\-)?\d{8,9}$/;
    
    if (telefone == "" || telefone == null) {
        sinalizaInput(false, elementos, "Preencha o seu telefone");
        input.focus();
        return false;
    }
    else if (!input.validity.valid) {
        sinalizaInput(false, elementos, "Preencha um telefone");
        input.focus();
        return false;
    }
    else if (!telefone.match(pattern)) {
        sinalizaInput(false, elementos, "Telefone inserido não é válido");
        input.focus();
        return false;
    }
    else {
        sinalizaInput(true, elementos, "");
        return true;
    }
}

function validaTermos() {
    const input = document.getElementById("aceita-termos");

    if (!input.checked) {
        alert("Aceite os termos de uso para continuar com o cadastro.")
        input.focus();
        return false;
    }
   
    else {
        return true;
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