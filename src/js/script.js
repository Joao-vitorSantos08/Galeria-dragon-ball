let personagens_container = document.getElementById("personagens-container")

fetch(`https://dragonball-api.com/api/characters?limit=58`)
.then((res) => res.json())
.then((data) => {
    data.items.forEach(personagem => {
        console.log(data)
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <img src="${personagem.image}" alt="${personagem.image}">
            <h2>${personagem.name}</h2>
            <p>Raça: ${personagem.race}</p>
            <p>Genero: ${personagem.gender}</p>
            <p>Energia de Combate: ${personagem.ki}</p>
   
        `
         personagens_container.appendChild(card)
    });
 })
 