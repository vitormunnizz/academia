const next = document.getElementById("next")
const back = document.getElementById("back")

const list = document.querySelectorAll(".imagem")

let ativo = 0

function mudar(i){

    document.querySelector(".imagem.ativo").classList.remove("ativo");

    ativo += i

    if (ativo < 0){
        ativo = list.length - 1  
    } else if (ativo >= list.length){
        ativo = 0
    } else{
        ativo = ativo
    }

    list[ativo].classList.add("ativo")
}

back.addEventListener("click", () => {
    mudar(-1)
})

next.addEventListener("click", () => {
    mudar(1)
})

setInterval(() => {
   mudar(1) 
}, 10000);