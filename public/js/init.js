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
    //Declaramos el elemento de lista en una variable a partir de su clase
    let biome_list = document.querySelector('.biome-list')
    //Al tener el elemento dentro de la variable, vaciaremos el contenido del elemento en caso de tener una lista generada
    biome_list.innerHTML = "";
    //Un ciclo nos permitirá pasar de objeto en objeto dentro de nuestra variable biomes
    for (const biome in biomes) {
        //Plantilla de la estructura de un elemento de lista con clases definidas dependiendo la información que contendrán dinámicamente
        let biome_element = `<li class="biome">
                                <div class="biome-background">
                                    <h1 class="biome-placeholder"></h1>
                                </div>
                                <div class="biome-info">
                                    <h1 class="biome-name"></h1>
                                    <details open>
                                        <summary>Description</summary>
                                        <!--Summary es un texto breve que resume lo que pongas a continuación-->
                                        <!--Summary sirve como un botón desplegable de manera natural-->
                                        <div class="biome-description"></div>
                                    </details>
                                </div>
                            </li>`

        //Adjunto la plantilla a la lista
        biome_list.innerHTML += biome_element;
        //Tomo el último elemento de mi lista para modificar su fondo
        biome_list.lastChild.querySelector('.biome-background').style.backgroundImage = 'url("/Ejercicios010324/public/media/biomes/' + biome + '.webp")'; 
        //Tomo el último elemento de mi lista para modificar su clase biome-placeholder, reemplazaré los guines bajos por espacios
        biome_list.lastChild.querySelector('.biome-placeholder').innerText = biome.split('_').join(' ');
        //Tomo el último elemento de mi lista para modificar su clase biome-name, reemplazaré los guines bajos por espacios
        biome_list.lastChild.querySelector('.biome-name').innerText = biome.split('_').join(' ');
        //Tomo el último elemento de mi lista para modificar su clase biome-description, obtendré la descripción a partir del nombre de la imagen en el objeto 
        biome_list.lastChild.querySelector('.biome-description').innerText = biomes[biome]; 
        //Mostrar la información dinámicamente en consola 
        console.log(biome + ': ' + biomes[biome]);
    }
}


//Al final del documento llamaré a la función para cargar la lista de elementos 
showBiomes();