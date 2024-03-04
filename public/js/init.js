//Variable [biomes] declarada con objetos que corresponden a imagenes en la carpeta /biomes
const biomes = {
    "Crimson_Forest": "This is a hidden forest in the nether.",
    "Deep_Frozen_Ocean": "This is a cold place to visit without socks.",
    "Desert": "I could give you a description but I need water first...",
    "Flower_Forest": "This is a forest with beautiful flowers.",
    "Frozen_River": "Watch out for the bears, they might want fish ice cream.",
    "Giant_Tree_Taiga": "Waos",
    "Lukewarm_Ocean": "Hey look over there, Is that a boat?",
    "Mountain_Meadows": "Bees says bzzzz bzzzz",
    "Mushroom_Fields": "Normally a cow gives you milk, but soup?",
    "New_Nether_2_bright": "Let's go swim in lava!",
    "River": "Bring your fishing rod!"
    //Add more
}

function showBiomes() {
    for (const biome in biomes) {
        console.log(biome + ': ' + biomes[biome]);
    }
}

/*
let biome_element = `<li class="biome">
biome_list.innerHTML = //vacía el elemento;
<div class="biome-background">
biome_list.lastChild.querySelector('.biome-description').innerText = //Descripción del elemento a partir del objeto y nombre; 
<h1 class="biome-placeholder"></h1>
<div class="biome-info">
<details open>
let biome_list = //obten el elemento a partir de su clase
</div>
biome_list.lastChild.querySelector('.biome-background') //Adjuntar como fondo la imagen  = 'url("/Ejercicios010324/public/media/biomes/.webp")'; 
<h1 class="biome-name"></h1>
<summary>Description</summary>
<!--Summary es un texto breve que resume lo que pongas a continuación-->
<!--Summary sirve como un botón desplegable de manera natural-->
<div class="biome-description"></div>
</details>
</div>
</li>`
*/


//Al final del documento llamaré a la función para cargar la lista de elementos 
showBiomes();