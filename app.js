const tamagotchi = {
    nombre: "Pataso",
    salud: 8,
    felicidad: 7,
    limpieza: 9,
    energia: 5,
    personalidad: "Pataso es un patito que le gusta comer mucho, jugar, no le gusta que lo manden a dormir"
}

function limitar(valor) {
    if (valor < 0) return 0
    if (valor > 10) return 10
    return valor
}

function color(element, valor) {

    element.classList.remove("bg-yellow-100", "bg-red-500", "bg-lime-500", "text-white")

    if (valor === 0) {
        element.classList.add("bg-red-500", "text-white")
    } else if( valor ===10) {
        element.classList.add("bg-lime-500")
    } else {
        element.classList.add("bg-yellow-100")
    }
}

function mostrar() {

    document.getElementById("nombre").innerText = tamagotchi.nombre

    const felicidad = document.getElementById("felicidad")
    const salud = document.getElementById("salud")
    const limpieza = document.getElementById("limpieza")
    const energia = document.getElementById("energia")

    felicidad.innerText = "*".repeat(tamagotchi.felicidad)
    salud.innerText = "*".repeat(tamagotchi.salud)
    limpieza.innerText = "*".repeat(tamagotchi.limpieza)
    energia.innerText = "*".repeat(tamagotchi.energia)

    document.getElementById("personalidad").innerText = tamagotchi.personalidad

    color(felicidad, tamagotchi.felicidad)
    color(salud, tamagotchi.salud)
    color(limpieza, tamagotchi.limpieza)
    color(energia, tamagotchi.energia)

    if (tamagotchi.salud === 0) {
        alert("Tu Tamagotchi está enfermo 💀")
    }
}

function duchar() {
    tamagotchi.limpieza = limitar(tamagotchi.limpieza + 3)
    tamagotchi.felicidad = limitar(tamagotchi.felicidad + 1)
    mostrar()
}

function alimentar() {
    tamagotchi.energia = limitar(tamagotchi.energia + 3)
    tamagotchi.salud = limitar(tamagotchi.salud + 2)
    mostrar()
}

function jugar() {
    tamagotchi.felicidad = limitar(tamagotchi.felicidad + 3)
    tamagotchi.energia = limitar(tamagotchi.energia - 2)
    tamagotchi.limpieza = limitar(tamagotchi.limpieza - 1)
    mostrar()
}

function dormir() {
    tamagotchi.energia = limitar(tamagotchi.energia + 5)
    tamagotchi.salud = limitar(tamagotchi.salud + 1)
    mostrar()
}

function acariciar() {
    tamagotchi.felicidad = limitar(tamagotchi.felicidad + 2)
    tamagotchi.salud = limitar(tamagotchi.salud + 1)
    mostrar()
}

function reprender() {
    tamagotchi.felicidad = limitar(tamagotchi.felicidad - 3)
    tamagotchi.salud = limitar(tamagotchi.salud - 1)
    mostrar()
}

mostrar()