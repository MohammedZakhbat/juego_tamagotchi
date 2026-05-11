# 🐤 Tamagotchi Game

Este es un pequeño juego de Tamagotchi hecho con **HTML, Tailwind CSS y JavaScript**.  
El objetivo es cuidar a tu Tamagotchi manteniendo sus estadísticas equilibradas.

---

## 🎮 Funcionalidades

Tu Tamagotchi tiene 4 estadísticas principales:

- ❤️ Salud
- 😊 Felicidad
- 🧼 Limpieza
- ⚡ Energía

Cada botón permite interactuar con él:

- 🚿 Ducharse → aumenta la limpieza
- 🍔 Alimentar → aumenta energía y salud
- 🎮 Jugar → aumenta felicidad pero reduce energía y limpieza
- 😴 Dormir → recupera energía y salud
- ❤️ Acariciar → aumenta felicidad y salud
- 😡 Reprender → reduce felicidad y salud

---

## 🎨 Sistema de colores

Las estadísticas cambian de color según su valor:

- 🔴 0 → estado crítico
- 🟡 1 a 9 → estado normal
- 🟢 10 → estado perfecto

---

## 🧠 Lógica del juego

El juego funciona con un objeto JavaScript:

```js
const tamagotchi = {
    nombre: "Pataso",
    salud: 8,
    felicidad: 7,
    limpieza: 9,
    energia: 5
}