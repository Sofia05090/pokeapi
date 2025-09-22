let pokemones = []; //lista de pokemones que llama
let totalPokes = 10; //lista de pokemones que trae

// Conexión para obtener la lista de Pokémon
async function conexionLista() { //debe esperar a que se ejeccute
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
  const data = await res.json(); // acomodar en json
  return data;
}

// Cargar todos los Pokémon al iniciar
async function General() {
  if (pokemones.length === 0) {
    pokemones = await conexionLista();
  }
  Home(pokemones);
  console.log(pokemones);
}

General()
