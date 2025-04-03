const credencialAgente = document.querySelector("#credencial-agente")
const senhaAgente = document.querySelector("#senha-agente")

let credencial = "credencial"
let senha = "senha"

function tentarEntrar(){
    let c = credencialAgente.value
    let s = senhaAgente.value

    if(c == credencial && s == senha){
        alert("redirecionando")
    }

    else{
        alert("informação Incorreta!")
    }
}