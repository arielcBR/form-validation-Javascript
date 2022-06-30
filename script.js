const form = document.getElementById("form");
const nome = document.getElementById("nome");
const dataRecebida = document.getElementById("data-nascimento");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const termosAceito = document.getElementById("aceita-termos");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validaData(dataRecebida.value);
});

function validaData(aniversario) {
    const hoje = new Date();
    const dataAniversario = new Date(aniversario);
    
    if (dataAniversario >= hoje) {
        console.log("Data invalida");
        return false;
    }
    else
        console.log("Data válida");        
        return true;
}

