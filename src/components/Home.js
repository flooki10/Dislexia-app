import React, { useState,useRef } from 'react';
import './Home.css'; 
import {GlobalWorkerOptions ,getDocument } from 'pdfjs-dist/build/pdf';



const App = () => {
  const [texto, setTexto] = useState('');
  const [textoModificado, setTextoModificado] = useState('');
  const [nuevoTextoConEmoticonos, setNuevoTextoConEmoticonos] = useState('');
  const resultRef = useRef(null);
  
  GlobalWorkerOptions.workerSrc = 'ruta/al/trabajador/pdf.worker.js';

const emoticonos = { 

  "😢": ["triste", "deprimido", "abatido", "llorando", "sad", "depressed", "downcast", "crying"], 

  "😊": ["feliz", "contento", "alegre", "sonriente", "happy", "content", "joyful", "smiling"], 

  "😡": ["enojado", "furioso", "irritado", "rabioso", "angry", "furious", "irritated", "furious"], 

  "😮": ["sorprendido", "asombrado", "impresionado", "boquiabierto", "surprised", "amazed", "impressed", "open-mouthed"], 

  "🌅": ["mañana", "amanecer", "amaneciendo", "morning", "dawn", "dawning"], 

  "🌞": ["sol", "soleado", "brillante", "sun", "sunny", "bright"], 

  "🌧": ["lluvia", "lluvioso", "lloviendo", "nublado", "rain", "rainy", "raining", "cloudy"], 

  "❄": ["frío", "nieve", "nevando", "helado", "cold", "snow", "snowing", "icy"], 

  "⚡": ["tormenta", "rayo", "trueno", "tempestad", "storm", "lightning", "thunder", "tempest"], 

  "🎉": ["celebración", "fiesta", "festejo", "alegría", "celebration", "party", "festivity", "joy"], 

  "🙂": ["normal", "bien", "regular", "tranquilo", "normal", "fine", "regular", "calm"], 

  "😴": ["cansado", "sueño", "dormido", "adormilado", "tired", "sleepy", "asleep", "drowsy"], 

  "😋": ["delicioso", "rico", "sabroso", "apetitoso", "delicious", "tasty", "savory", "appetizing"], 

  "😎": ["cool", "genial", "súper", "awesome", "cool", "awesome", "super", "awesome"], 

  "😈": ["diablo", "malvado", "travieso", "perverso", "devil", "evil", "mischievous", "wicked"], 

  "😸": ["gato", "felino", "minino", "mascota", "cat", "feline", "kitty", "pet"], 

  "🐶": ["perro", "canino", "perrito", "mascota", "dog", "canine", "puppy", "pet"], 

  "🐱": ["gato", "felino", "minino", "mascota", "cat", "feline", "kitty", "pet"], 

  "🐻": ["oso", "oso pardo", "oso polar", "peluche", "bear", "brown bear", "polar bear", "plush"], 

  "🐨": ["koala", "marsupial", "oso koala", "australiano", "koala", "marsupial", "koala bear", "australian"], 

  "🐧": ["pingüino", "ave", "antártida", "hielo", "penguin", "bird", "antarctica", "ice"], 

  "🐸": ["rana", "anfibio", "sapo", "verde", "frog", "amphibian", "toad", "green"], 

  "🦁": ["león", "felino", "rey de la selva", "mane", "lion", "feline", "king of the jungle", "mane"], 

  "🐯": ["tigre", "felino", "depredador", "rayas", "tiger", "feline", "predator", "stripes"], 

  "🦄": ["unicornio", "mítico", "fantasía", "cuerno", "unicorn", "mythical", "fantasy", "horn"], 

  "🐙": ["pulpo", "molusco", "tentáculos", "mar", "octopus", "mollusk", "tentacles", "sea"], 

  "🐳": ["ballena", "cetáceo", "oceano", "cola", "whale", "cetacean", "ocean", "tail"], 

  "🐍": ["serpiente", "reptil", "venenoso", "escamas", "snake", "reptile", "poisonous", "scales"], 

  "🦋": ["mariposa", "insecto", "alas", "butterfly", "insect", "wings"], 

  "😄": ["alegre", "sonriente", "divertido", "risueño", "cheerful", "smiling", "fun", "laughing"], 

  "😅": ["nervioso", "sudoroso", "incómodo", "aliviado", "nervous", "sweaty", "uncomfortable", "relieved"], 

  "😂": ["risa", "carcajada", "divertido", "jocoso", "laughter", "guffaw", "funny", "jocular"], 

  "😭": ["llanto", "llorando", "triste", "aflicción", "crying", "weeping", "sad", "distress"], 

  "😱": ["miedo", "aterrado", "sorprendido", "horrorizado", "fear", "terrified", "surprised", "horrified"], 

  "😤": ["frustrado", "enojado", "irritado", "molesto", "frustrated", "angry", "irritated", "annoyed"], 

  "😷": ["enfermo", "mascarilla", "resfriado", "contagiado", "sick", "mask", "cold", "contagious"], 

  "🤒": ["enfermo", "fiebre", "malestar", "convaleciente", "sick", "fever", "discomfort", "convalescent"], 

  "🤢": ["náuseas", "vómito", "asqueado", "enfermo", "nausea", "vomit", "nauseated", "sick"], 

  "🤮": ["vómito", "asqueado", "repulsión", "náuseas", "vomit", "nauseated", "repulsion", "nausea"], 

  "😇": ["angelical", "santo", "inocente", "virtuoso", "angelic", "saintly", "innocent", "virtuous", "saints"], 

  "🤠": ["cowboy", "vaquero", "del oeste", "sombrero", "cowboy", "cowboy", "western", "hat"], 

  "🤡": ["payaso", "bufón", "risas", "actuación", "clown", "jester", "laughs", "performance"], 

  "👽": ["extraterrestre", "alienígena", "marciano", "OVNI", "alien", "alien", "martian", "UFO"], 

  "💀": ["calavera", "muerte", "esqueleto", "macabro", "skull", "death", "skeleton", "macabre"], 

  "👻": ["fantasma", "espíritu", "fantasmal", "travieso", "ghost", "spirit", "ghostly", "mischievous"], 

  "👾": ["monstruo", "alienígena", "videojuego", "arcade", "monster", "alien", "video game", "arcade"], 

  "👑": ["corona", "realeza", "reina", "rey", "crown", "royalty", "queen", "king"], 

  "🎩": ["sombrero", "elegante", "galante", "caballero", "hat", "elegant", "gallant", "gentleman"], 

  "👓": ["gafas", "anteojos", "vista", "moda", "glasses", "goggles", "sight", "fashion"], 

  "🐵": ["mono", "primate", "selva", "gracioso", "monkey", "primate", "jungle", "funny"], 

  "🐃": ["búfalo", "grande", "cuernos", "manada", "buffalo", "big", "horns", "herd"], 

  "🦓": ["cebra", "rayas", "sabana", "manada", "zebra", "stripes", "savanna", "herd"], 

  "🐖": ["jabalí", "cerdo", "selvático", "colmillos", "boar", "pig", "wild", "tusks"], 

  "🐗": ["jabalí", "cerdo", "selvático", "colmillos", "boar", "pig", "wild", "tusks"], 

  "🦌": ["ciervo", "venado", "cornamenta", "bosque", "deer", "stag", "antlers", "forest"], 

  "🐐": ["cabra", "montaña", "cuernos", "pastoreo", "goat", "mountain", "horns", "grazing"], 

  "🐏": ["oveja", "lana", "rebaño", "pastoreo", "sheep", "wool", "flock", "grazing"], 

  "🦙": ["llama", "andina", "sudamérica", "lanuda", "llama", "Andean", "South America", "woolly"], 

"🥳": ["fiesta", "celebración", "contento", "alegría", "happy", "party", "joyful", "celebration", "excited"],  

"🤗": ["abrazo", "cariño", "amor", "afecto", "hug", "affection", "love", "warmth", "embrace"],  

"😕": ["confundido", "perplejo", "incertidumbre", "desconcertado", "confused", "perplexed", "uncertainty", "bewildered", "puzzled"],  

"😖": ["frustración", "molestia", "angustia", "nerviosismo", "frustration", "annoyance", "distress", "nervousness", "discomfort"], 

"🙄": ["sarcasmo", "aburrimiento", "desdén", "exasperación", "sarcasm", "boredom", "disdain", "exasperation", "eye roll"], 

"😶": ["sin palabras", "silencio", "boquiabierto", "mudo", "speechless", "silence", "open-mouthed", "mute", "dumbfounded"], 

"😳": ["avergonzado", "sonrojado", "tímido", "perturbado", "embarrassed", "blushing", "shy", "disturbed", "flushed"],  

"🤔": ["pensativo", "reflexivo", "meditativo", "cuestionando", "thoughtful", "reflective", "meditative", "questioning", "contemplative"], 

"😋": ["delicioso", "rico", "sabroso", "apetitoso", "delicious", "tasty", "savory", "appetizing"], 

"🤩": ["asombro", "emoción", "impresionante", "maravilloso", "amazing", "excitement", "impressive", "wonderful"],  

"😌": ["tranquilidad", "serenidad", "calma", "relajación", "tranquility", "serenity", "calmness", "relaxation"], 

"🤪": ["loco", "divertido", "excéntrico", "ridículo", "crazy", "funny", "eccentric", "ridiculous"],  

"😏": ["sugerente", "coqueto", "insinuante", "picardía", "suggestive", "flirtatious", "insinuating", "sly"],  

"😬": ["incomodidad", "nerviosismo", "sonrisa forzada", "vergüenza", "awkwardness", "nervousness", "forced smile", "embarrassment"], 

"🤓": ["inteligente", "estudioso", "nerd", "geek", "smart", "studious", "nerd", "geek"],  

"🥺": ["suplicante", "tristeza", "puppy eyes", "súplica", "pleading", "sadness", "puppy eyes", "plea"], 

"😠": ["enojado", "furioso", "irritado", "rabioso", "angry", "furious", "irritated", "furious"],  

"😐": ["neutral", "indiferente", "sin emociones", "inexpresivo", "neutral", "indifferent", "emotionless", "expressionless"], 

"😳": ["avergonzado", "sorprendido", "tímido", "nervioso", "embarrassed", "surprised", "shy", "nervous"],  

"🤗": ["abrazo", "caricia", "cariño", "amistad", "hug", "caress", "affection", "friendship"],  

"😈": ["travieso", "malicioso", "diablillo", "bromista", "mischievous", "malicious", "little devil", "prankster"], 

"👿": ["diablo", "demonio", "maligno", "infernal", "devil", "demon", "evil", "infernal"],  

"👻": ["fantasma", "espíritu", "aparición", "encantado", "ghost", "spirit", "apparition", "haunted"],  

"👽": ["extraterrestre", "alien", "ser de otro mundo", "marciano", "extraterrestrial", "alien", "being from another world", "martian"], 

"👾": ["monstruo", "alienígena", "criatura", "invasor", "monster", "alien", "creature", "invader"],  

"💩": ["caca", "caga", "cagar", "cagó", "excremento", "mojón", "mierda", "poop", "excrement", "turd", "shit"],  

"🙊": ["callado", "silencio", "no digas nada", "secreto", "silent", "silence", "say nothing", "secret"],  

"🙈": ["taparse los ojos", "vergüenza", "no ver", "no mirar", "covering eyes", "shame", "not see", "not look"] , 

"😋": ["delicioso", "sabroso", "rico", "apetitoso", "yummy", "tasty", "delicious", "appetizing"], 

"😷": ["enfermo", "mascarilla", "resfriado", "contagio", "sick", "mask", "cold", "contagious"],  

"🤒": ["enfermo", "fiebre", "malestar", "convalecencia", "sick", "fever", "discomfort", "convalescence"],  

"🤢": ["náuseas", "vómito", "asqueado", "indigestión", "nausea", "vomit", "nauseated", "indigestion"],  

"🤮": ["vómito", "asqueado", "repugnancia", "náuseas", "vomit", "nauseated", "disgust", "nausea"], 

"😇": ["angelical", "santo", "inocente", "virtuoso", "angelic", "saintly", "innocent", "virtuous"],  

"🤠": ["cowboy", "vaquero", "del oeste", "sombrero", "cowboy", "cowboy", "western", "hat"], 

"🤡": ["payaso", "bufón", "risas", "actuación", "clown", "jester", "laughs", "performance"], 

"👽": ["extraterrestre", "alienígena", "marciano", "OVNI", "alien", "alien", "martian", "UFO"],  

"💀": ["calavera", "muerte", "esqueleto", "macabro", "skull", "death", "skeleton", "macabre"],  

"👻": ["fantasma", "espíritu", "fantasmal", "travieso", "ghost", "spirit", "ghostly", "mischievous"],  

"👾": ["monstruo", "alienígena", "videojuego", "arcade", "monster", "video game", "arcade"], 

"👑": ["corona", "realeza", "reina", "rey", "crown", "royalty", "queen", "king"], 

"🎩": ["sombrero", "elegante", "galante", "caballero", "hat", "elegant", "gallant", "gentleman"], 

"👓": ["gafas", "anteojos", "visión", "moda", "glasses", "eyewear", "vision", "fashion"], 

"🐵": ["mono", "primate", "selva", "divertido", "monkey", "primate", "jungle", "funny"], 

"🐃": ["búfalo", "grande", "cuernos", "manada", "buffalo", "big", "horns", "herd"],  

"🦓": ["cebra", "rayas", "sabana", "manada", "zebra", "stripes", "savanna", "herd"], 

"🐖": ["jabalí", "cerdo", "selvático", "colmillos", "boar", "pig", "wild", "tusks"],  

"🐗": ["jabalí", "cerdo", "selvático", "colmillos", "boar", "pig", "wild", "tusks"], 

"🦌": ["ciervo", "venado", "cornamenta", "bosque", "deer", "stag", "antlers", "forest"],  

"🐐": ["cabra", "montaña", "cuernos", "pastoreo", "goat", "mountain", "horns", "grazing"],  

"🐏": ["oveja", "lana", "rebaño", "pastoreo", "sheep", "wool", "flock", "grazing"] , 

"🐶": ["perro", "canino", "cachorro", "mascota", "dog", "canine", "puppy", "pet"],  

"🐱": ["gato", "felino", "minino", "mascota", "cat", "feline", "kitty", "pet"],  

"🐭": ["ratón", "roedor", "pequeño", "mamífero", "mouse", "rodent", "small", "mammal"],  

"🐹": ["hámster", "roedor", "pequeño", "mamífero", "hamster", "rodent", "small", "mammal"],  

"🐰": ["conejo", "mamífero", "orejas largas", "peludo", "rabbit", "mammal", "long ears", "furry", "furro","Alice in Wonderland", "Alicia en el país de las maravillas"], 

"🦊": ["zorro", "canino", "depredador", "astuto", "fox", "canine", "predator", "cunning"], 

"🐻": ["oso", "mamífero", "peludo", "grande", "bear", "mammal", "furry", "big"],  

"🐼": ["panda", "oso", "blanco y negro", "bambú", "panda", "bear", "black and white", "bamboo"],  

"🦁": ["león", "felino", "rey de la selva", "mane", "lion", "feline", "king of the jungle", "mane"],  

"🐯": ["tigre", "felino", "depredador", "rayas", "tiger", "feline", "predator", "stripes"],  

"🐨": ["koala", "marsupial", "australiano", "oso koala", "koala", "marsupial", "australian", "koala bear"], 

"🐻‍❄️": ["oso polar", "ártico", "blanco", "hielo", "polar bear", "arctic", "white", "ice"],  

"🐸": ["rana", "anfibio", "verde", "saltar", "frog", "amphibian", "green", "jump"],  

"🐵": ["mono", "primate", "selva", "gracioso", "monkey", "primate", "jungle", "funny"],  

"🦍": ["gorila", "primate", "grande", "fuerte", "gorilla", "primate", "big", "strong"],  

"🐦": ["pájaro", "ave", "volar", "plumas", "bird", "fly", "feathers", "flying"],  

"🦢": ["cisne", "ave", "elegante", "blanco", "swan", "bird", "elegant", "white"],  

"🦆": ["pato", "ave acuática", "agua", "plumas", "duck", "waterfowl", "water", "feathers"],  

"🐧": ["pingüino", "ave", "antártida", "hielo", "penguin", "bird", "antarctica", "ice"], 

"🕊️": ["paloma", "ave", "paz", "blanca", "dove", "bird", "peace", "white"], 

"🦅": ["águila", "ave rapaz", "poderosa", "vuelo", "eagle", "bird of prey", "powerful", "flight"], 

"🦉": ["búho", "ave rapaz", "nocturno", "sabio", "owl", "bird of prey", "nocturnal", "wise"], 

"🦚": ["pavo real", "ave", "plumas", "peacock", "bird", "feathers"],  

"🦜": ["loro", "ave", "colorido", "hablador", "parrot", "bird", "colorful", "talkative"],  

"🐍": ["serpiente", "reptil", "venenoso", "escamas", "snake", "reptile", "poisonous", "scales"],  

"🐢": ["tortuga", "reptil", "caparazón", "lento", "turtle", "reptile", "shell", "slow"], 

"🦎": ["lagarto", "reptil", "escamas", "rápido", "lizard", "reptile", "scales", "fast"],  

"🐊": ["cocodrilo", "reptil", "mandíbulas", "pantano", "crocodile", "reptile", "jaws", "swamp"], 

"🐋": ["ballena", "cetáceo", "oceano", "cola", "whale", "cetacean", "ocean", "tail"],  

"🐬": ["delfín", "cetáceo", "inteligente", "oceano", "dolphin", "cetacean", "intelligent", "ocean"], 

"🦈": ["tiburón", "depredador", "oceano", "aleta", "shark", "predator", "ocean", "fin"],  

"🐙": ["pulpo", "molusco", "tentáculos", "mar", "octopus", "mollusk", "tentacles"],  

"🦑": ["calamar", "molusco", "tentáculos", "oceano", "squid", "mollusk", "tentacles"],  

"🦀": ["cangrejo", "crustáceo", "pinzas", "mar", "crab", "crustacean", "claws", "sea"],  

"🦞": ["langosta", "crustáceo", "antenas", "mar", "lobster", "crustacean", "antennae", "sea"],  

"🦐": ["camarón", "crustáceo", "cola", "mar", "shrimp", "crustacean", "tail", "sea"], 

"🦪": ["ostra", "molusco", "concha", "perla", "oyster", "mollusk", "shell", "pearl"], 

"🐠": ["pez", "acuático", "escamas", "cola", "fish", "aquatic", "scales", "tail"],  

"🐟": ["pez", "acuático", "escamas", "cola", "fish", "aquatic", "scales", "tail"],  

"🐡": ["pez globo", "acuático", "espinas", "inflar", "blowfish", "aquatic", "spikes", "inflate"],  

"🦈": ["tiburón", "depredador", "oceano", "aleta", "shark", "predator", "ocean", "fin"],  

"🐬": ["delfín", "cetáceo", "inteligente", "oceano", "dolphin", "cetacean", "intelligent", "ocean"], 

"🦞": ["langosta", "crustáceo", "antenas", "mar", "lobster", "crustacean", "antennae", "sea"], 

"🐘": ["elefante", "mamífero", "grande", "trompa", "elephant", "mammal", "big", "trunk"],  

"🦏": ["rinoceronte", "mamífero", "cuerno", "grande", "rhinoceros", "mammal", "horn", "big"],  

"🦛": ["hipopótamo", "mamífero", "grande", "pesado", "hippopotamus", "mammal", "big", "heavy"], 

"🐪": ["camello", "mamífero", "desierto", "joroba", "camel", "mammal", "desert", "hump"], 

"🦙": ["llama", "mamífero", "peludo", "andes", "llama", "mammal", "furry", "andes"],  

"🦒": ["jirafa", "mamífero", "cuello largo", "sabana", "giraffe", "mammal", "long neck", "savannah"],  

"🐃": ["búfalo", "mamífero", "grande", "cuernos", "buffalo", "mammal", "big", "horns"],  

"🐅": ["tigre", "mamífero", "depredador", "rayas", "tiger", "mammal", "predator", "stripes"],  

"🐆": ["leopardo", "mamífero", "manchas", "veloz", "leopard", "mammal", "spots", "fast"], 

"🐈": ["gato", "mamífero", "peludo", "ronroneo", "cat", "mammal", "furry", "purring"],  

"🐩": ["caniche", "mamífero", "pelo rizado", "mascota", "poodle", "mammal", "curly hair", "pet"],  

"🐕": ["perro", "mamífero", "canino", "fieles", "dog", "mammal", "canine", "faithful"],  

"🦮": ["perro guía", "mamífero", "entrenado", "discapacidad", "guide dog", "mammal", "trained", "disability"], 

"🐁": ["ratón", "mamífero", "roedor", "pequeño", "mouse", "mammal", "rodent", "small"],  

"🐀": ["rata", "mamífero", "roedor", "cola larga", "rat", "mammal", "rodent", "long tail"], 

"🦨": ["comadreja", "mamífero", "olor fétido", "rayas", "skunk", "mammal", "foul odor", "stripes"],  

"🦡": ["tejón", "mamífero", "colmillos", "rápido", "badger", "mammal", "fangs", "fast"], 

"🦝": ["mapache", "mamífero", "cola anillada", "astuto", "raccoon", "mammal", "ringed tail", "cunning"],  

"🦦": ["nutria", "mamífero", "agua", "peludo", "otter", "mammal", "water", "furry"],  

"🦥": ["perezoso", "mamífero", "lento", "selva", "sloth", "mammal", "slow", "jungle"],  

"🦦": ["castor", "mamífero", "agua", "cola plana", "beaver", "mammal", "water", "flat tail"],  

"🐾": ["huella de animal", "pata", "rastro", "paw print", "footprint", "track"],  

"🦩": ["flamenco", "ave", "rosado", "patas largas", "flamingo", "bird", "pink", "long legs"],  

"🦧": ["orangután", "primate", "peludo", "manos largas", "orangutan", "primate", "furry", "long hands"], 

"🐘": ["elefante", "mamífero", "grande", "trompa", "elephant", "mammal", "big", "trunk"], 

"🦏": ["rinoceronte", "mamífero", "cuerno", "grande", "rhinoceros", "mammal", "horn", "big"],  

"🦛": ["hipopótamo", "mamífero", "grande", "pesado", "hippopotamus", "mammal", "big", "heavy"],  

"🐪": ["camello", "mamífero", "desierto", "joroba", "camel", "mammal", "desert", "hump"],  

"🦙": ["llama", "mamífero", "peludo", "andes", "llama", "mammal", "furry", "andes"],  

"🦒": ["jirafa", "mamífero", "cuello largo", "sabana", "giraffe", "mammal", "long neck", "savannah"],  

"🦘": ["canguro", "mamífero", "saltar", "bolsa", "kangaroo", "mammal", "jump", "pouch"],  

"🦨": ["comadreja", "mamífero", "olor fétido", "rayas", "skunk", "mammal", "foul odor", "stripes"], 

"🦡": ["tejón", "mamífero", "colmillos", "rápido", "badger", "mammal", "fangs", "fast"],  

"🦝": ["mapache", "mamífero", "cola anillada", "astuto", "raccoon", "mammal", "ringed tail", "cunning"],  

"🐉": ["dragón", "reptil", "fuego", "escamas", "dragon", "reptile", "fire", "scales"],  

"🦄": ["unicornio", "mítico", "fantasía", "cuerno", "unicorn", "mythical", "fantasy", "horn"],  

"🐲": ["dragón", "reptil", "fuego", "escamas", "dragon", "reptile", "fire", "scales"],  

"🦖": ["dinosaurio", "reptil", "prehistoria", "grande", "dinosaur", "reptile", "prehistoric", "big", "t-rex"],  

"🦕": ["dinosaurio", "reptil", "prehistoria", "grande", "dinosaur", "reptile", "prehistoric", "big", "estagosaurio", "argentinosaurio", "cuellilargo", "prehistoria"], 

"🦦": ["castor", "mamífero", "agua", "cola plana", "beaver", "mammal", "water", "flat tail"],  

"⚽": ["jugar fútbol", "fútbol", "balón", "marcar gol", "play soccer", "soccer", "ball", "score a goal"], 

"🎾": ["jugar tenis", "tenis", "raqueta", "pelota", "play tennis", "tennis", "racket", "ball"],  

"🏀": ["jugar baloncesto", "baloncesto", "canasta", "rebote", "play basketball", "basketball", "hoop", "rebound"], 

"🏐": ["jugar voleibol", "voleibol", "red", "saque", "play volleyball", "volleyball", "net", "serve"],  

"🏈": ["jugar fútbol americano", "fútbol americano", "touchdown", "quarterback", "play football", "football", "touchdown", "quarterback"], 

"🏓": ["jugar ping-pong", "ping-pong", "pala", "mesa", "play ping-pong", "ping-pong", "paddle", "table"], 

"🏸": ["jugar bádminton", "bádminton", "plumilla", "campo", "play badminton", "badminton", "shuttlecock", "court"], 

"🏒": ["jugar hockey", "hockey", "patines", "disparar", "play hockey", "hockey", "skates", "shoot"],  

"🥊": ["boxear", "boxeo", "guantes", "golpear", "box", "boxing", "gloves", "hit"], 

"🏹": ["tirar con arco", "arco", "flecha", "apuntar", "shoot archery", "bow", "arrow", "aim"], 

"🎣": ["pescar", "pesca", "caña", "cebo", "fish", "fishing", "rod", "bait"], 

"🏄‍♂️": ["surfear", "surf", "ola", "equilibrar", "surf", "wave", "balance", "surf"], 

"🤸‍♂️": ["hacer acrobacias", "acrobacias", "salto", "flexibilidad", "do acrobatics", "acrobatics", "jump", "flexibility"], 

"🤺": ["esgrimir", "esgrima", "espada", "parar", "fence", "fencing", "sword", "parry"], 

"🤼‍♂️": ["luchar", "lucha", "combate", "derribar", "wrestle", "wrestling", "fight", "takedown"],  

"🤾‍♂️": ["lanzar", "lanzamiento", "pelota", "precisión", "throw", "throwing", "ball", "accuracy"], 

"🏋️‍♂️": ["levantar pesas", "pesas", "levantamiento", "entrenar", "lift weights", "weights", "lifting", "train"], 

"🚴‍♂️": ["montar en bicicleta", "bicicleta", "pedalear", "recorrer", "ride a bike", "bike", "pedal", "cycle"], 

"🏇": ["cabalgar", "caballo", "carrera", "montar", "ride a horse", "horse", "race", "mount"],  

"🏊‍♂️": ["nadar", "natación", "piscina", "bucear", "swim", "swimming", "pool", "dive"], 

"🚣‍♂️": ["remar", "remo", "bote", "navegar", "row", "rowing", "boat", "sail"], 

"🧗‍♂️": ["escalar", "escalada", "montaña", "roca", "climb", "climbing", "mountain", "rock"],  

"⛷️": ["esquiar", "esquí", "nieve", "descender", "ski", "skiing", "snow", "descend"],  

"🏂": ["snowboard", "nieve", "tabla", "deslizarse", "snowboard", "snow", "board", "slide"], 

"🏋️‍♀️": ["levantar pesas", "pesas", "levantamiento", "entrenar", "lift weights", "weights", "lifting", "train"], 

"🚴‍♀️": ["montar en bicicleta", "bicicleta", "pedalear", "recorrer", "ride a bike", "bike", "pedal", "cycle"],  

"🏇": ["cabalgar", "caballo", "carrera", "montar", "ride a horse", "horse", "race", "mount"],  

"🏊‍♀️": ["nadar", "natación", "piscina", "bucear", "swim", "swimming", "pool", "dive"],  

"🚣‍♀️": ["remar", "remo", "bote", "navegar", "row", "rowing", "boat", "sail"],  

"🧗‍♀️": ["escalar", "escalada", "montaña", "roca", "climb", "climbing", "mountain", "rock"],  

"⛷️": ["esquiar", "esquí", "nieve", "descender", "ski", "skiing", "snow", "descend"],  

"🏂": ["snowboard", "nieve", "tabla", "deslizarse", "snowboard", "snow", "board", "slide"],  

"🏋️‍♀️": ["levantar pesas", "pesas", "levantamiento", "entrenar", "lift weights", "weights", "lifting", "train"], 

"🚴‍♀️": ["montar en bicicleta", "bicicleta", "pedalear", "recorrer", "ride a bike", "bike", "pedal", "cycle"],  

"🏇": ["cabalgar", "caballo", "carrera", "montar", "ride a horse", "horse", "race", "mount"], 

"🏊‍♀️": ["nadar", "natación", "piscina", "bucear", "swim", "swimming", "pool", "dive"],  

"🚣‍♀️": ["remar", "remo", "bote", "navegar", "row", "rowing", "boat", "sail"], 

"🧗‍♀️": ["escalar", "escalada", "montaña", "roca", "climb", "climbing", "mountain", "rock"],  

"⛷️": ["esquiar", "esquí", "nieve", "descender", "ski", "skiing", "snow", "descend"],  

"🏂": ["snowboard", "nieve", "tabla", "deslizarse", "snowboard", "snow", "board", "slide"], 

"🏃‍♂️": ["correr", "caminar", "desplazarse", "apresurarse", "run", "walk", "move", "hurry"], 

"🚶‍♀️": ["caminar", "pasear", "deambular", "andar", "walk", "stroll", "wander", "amble"], 

"🧗‍♂️": ["escalar", "trepar", "subir", "escalada", "climb", "ascend", "scale", "climbing"],  

"🚵‍♀️": ["montar en bicicleta de montaña", "ciclismo", "bici", "pedalear", "mountain biking", "cycling", "bike", "pedal"], 

"🏊‍♂️": ["nadar", "chapotear", "sumergirse", "bucear", "swim", "splash", "immerse", "dive"],  

"🚣‍♀️": ["remar", "navegar", "pasear en bote", "canotaje", "row", "sail", "boat", "canoeing"],  

"🧖‍♂️": ["bañarse", "ducharse", "asearse", "limpiar", "bathe", "shower", "groom", "clean"], 

"🤸‍♂️": ["gimnasia", "hacer volteretas", "acrobacias", "ejercicios", "gymnastics", "flip", "acrobatics", "exercises"], 

"🤾‍♂️": ["lanzar", "tirar", "arrojar", "lanzamiento", "throw", "toss", "cast", "throwing"],  

"🤺": ["esgrima", "duelo", "combate", "espada", "fencing", "duel", "combat", "sword"], 

"🛀": ["bañarse", "remojar", "relajarse", "sumergirse", "bathe", "soak", "relax", "immerse"],  

"🏇": ["montar a caballo", "equitación", "galope", "caballo", "horseback riding", "riding", "gallop", "horse"], 

"🍔": ["hamburguesa", "burger", "comida rápida", "fast food", "carne", "meat", "queso", "cheese"],
 
"🌭": ["perro caliente", "hot dog", "salchicha", "sausage", "pan", "bread", "mostaza", "mustard"], 

"🍕": ["pizza", "pizza", "italiana", "Italian", "queso", "cheese", "salsa", "sauce"],

"🥪": ["sándwich", "sandwich", "pan", "bread", "jamón", "ham", "lechuga", "lettuce"],

"🥙": ["wrap", "wrap", "pollo", "chicken", "vegetales", "vegetables", "tortilla", "tortilla"],

"🌮": ["taco", "taco", "mexicano", "Mexican", "carne", "meat", ], 

"🌯": ["burrito", "burrito", "arroz", "rice", "frijoles", "beans", "carne", "meat"],

"🍟": ["papas fritas", "french fries", "patatas", "potatoes", "sal", "salt",], 

"🥗": ["ensalada", "salad", "verduras", "vegetables", "lechuga", "lettuce",], 

"🍱": ["caja de bento", "bento box", "japonés", "Japanese", "arroz", "rice", "pescado", "fish"],
    
"🍲": ["olla", "pot", "sopa", "soup", "cuchara", "spoon", "vegetales", "vegetables"], 

"🍛": ["curry", "curry", "arroz", "rice", "pollo", "chicken", "especias", "spices"], 

"🍝": ["espagueti", "spaghetti", "pasta", "pasta", "salsa", "sauce", "queso", "cheese"], 

"🍜": ["ramen", "ramen", "japonés", "Japanese", "fideos", "noodles", "caldo", "broth"], 

"🍣": ["sushi", "sushi", "pescado", "fish", "arroz", "rice", "alga", "seaweed"], 

"🍱": ["bento", "bento", "japonés", "Japanese", "arroz", "rice", "carne", "meat"], 

"🍤": ["langostino", "shrimp", "mariscos", "seafood", "frito", "fried", "salsa", "sauce"], 

"🍙": ["onigiri", "onigiri", "arroz", "rice", "algas", "seaweed", "japonés", "Japanese"], 

"🍚": ["arroz", "rice", "blanco", "white", "comida", "food", "cuchara", "spoon"], 

"🍛": ["curry", "curry", "indio", "Indian", "arroz", "rice", "pollo", "chicken"], 

"🍥": ["narutomaki", "narutomaki", "pescado", "fish", "japonés", "Japanese", "raro", "rare"], 

"🍘": ["senbei", "senbei", "arroz", "rice", "japonés", "Japanese", "galleta", "cracker"], 

"🍢": ["dango", "dango", "japonés", "Japanese", "skewer", "skewer", "arroz", "rice"], 

"🍡": ["mochi", "mochi", "japonés", "Japanese", "postre", "dessert", "dulce", "sweet"], 

"🍧": ["helado raspado", "shaved ice", "cono", "cone", "fruta", "fruit", "sabor", "flavor"], 

"🍨": ["helado", "ice cream", "cono", "cone", "bola", "scoop", "chocolate", "chocolate"], 

"🍦": ["helado suave", "soft serve", "cono", "cone", "chocolate", "chocolate", "vainilla", "vanilla"], 

"🍰": ["pastel", "cake", "cumpleaños", "birthday", "velas", "candles", "celebración", "celebration"], 

"🎂": ["pastel de cumpleaños", "birthday cake", "velas", "candles", "celebración", "celebration", "regalo", "gift"], 

"🧁": ["cupcake", "cupcake", "glaseado", "frosting", "sprinkles", "sprinkles", "dulce", "sweet"], 

"🥧": ["tarta", "pie", "manzana", "apple", "postre", "dessert", "corteza", "crust"], 

"🍩": ["dona", "doughnut", "glaseado", "glaze", "dulce", "sweet", "frito", "fried"], 

"🍪": ["galleta", "cookie", "chocolate", "chocolate", "dulce", "sweet", "hornear", "bake"], 

"🍫": ["chocolate", "chocolate", "dulce", "sweet", "leche", "milk", "oscuro", "dark"], 

"🍬": ["caramelo", "candy", "dulce", "sweet", "azúcar", "sugar", "sabor", "flavor"], 

"🍭": ["piruleta", "lollipop", "dulce", "sweet", "palillo", "stick", "azúcar", "sugar"], 

"🍯": ["miel", "honey", "abeja", "bee", "dulce", "sweet", "panal", "honeycomb"], 

"🍎": ["manzana", "apple", "fruta", "fruit", "rojo", "red", "jugo", "juice"], 

"🍏": ["manzana verde", "green apple", "fruta", "fruit", "verde", "green", "ácido", "sour"], 

"🍊": ["naranja", "orange", "fruta", "fruit", "cítrico", "citrus", "jugo", "juice"], 

"🍋": ["limón", "lemon", "fruta", "fruit", "amarillo", "yellow", "ácido", "sour"], 

"🍌": ["plátano", "banana", "fruta", "fruit", "amarillo", "yellow", "monos", "monkeys"], 

"🍉": ["sandía", "watermelon", "fruta", "fruit", "rojo", "red", "jugoso", "juicy"], 

"🍇": ["uva", "grapes", "fruta", "fruit", "morado", "purple", "vinificación", "winemaking"], 

"🍓": ["fresa", "strawberry", "fruta", "fruit", "rojo", "red", "dulce", "sweet"], 

"🍈": ["melón", "melon", "fruta", "fruit", "verde", "green", "jugoso", "juicy"], 

"🍒": ["cereza", "cherry", "fruta", "fruit", "rojo", "red", "dulce", "sweet"], 

"🍑": ["durazno", "peach", "fruta", "fruit", "naranja", "orange", "dulce", "sweet"], 

"🥭": ["mango", "mango", "fruta", "fruit", "tropical", "tropical", "amarillo", "yellow"], 

"🍍": ["piña", "pineapple", "fruta", "fruit", "tropical", "tropical", "amarillo", "yellow"], 

"🥥": ["coco", "coconut", "fruta", "fruit", "tropical", "tropical", "leche", "milk"], 

"🥝": ["kiwi", "kiwi", "fruta", "fruit", "verde", "green", "peludo", "fuzzy"], 

"🍅": ["tomate", "tomato", "verdura", "vegetable", "rojo", "red", "salsa", "sauce"], 

"🍆": ["berenjena", "eggplant", "verdura", "vegetable", "púrpura", "purple", "cocinar", "cook"], 

"🥑": ["aguacate", "avocado", "fruta", "fruit", "verde", "green", "saludable", "healthy"], 

"🥦": ["brócoli", "broccoli", "verdura", "vegetable", "verde", "green", "saludable", "healthy"], 

"🥬": ["hojas verdes", "leafy greens", "verdura", "vegetable", "verde", "green", "nutritivo", "nutritious"],

"🥒": ["pepino", "cucumber", "verdura", "vegetable", "verde", "green", "ensalada", "salad"], 

"🌶️": ["pimiento", "chili pepper", "verdura", "vegetable", "picante", "spicy", "rojo", "red"], 

"🌽": ["maíz", "corn", "verdura", "vegetable", "amarillo", "yellow", "grano", "grain"], 

"🥕": ["zanahoria", "carrot", "verdura", "vegetable", "naranja", "orange", "crunchy", "crunchy"], 

"🧄": ["ajo", "garlic", "verdura", "vegetable", "blanco", "white", "picante", "spicy"], 

"🧅": ["cebolla", "onion", "verdura", "vegetable", "blanco", "white", "cocinar", "cook"], 

"🍄": ["seta", "mushroom", "hongo", "fungus", "comestible", "edible", "cocinar", "cook"], 

"🥔": ["patata", "potato", "verdura", "vegetable", "marrón", "brown", "hervido", "boiled"], 

"🧇": ["gofre", "waffle", "desayuno", "breakfast", "dulce", "sweet", "jarabe", "syrup"], 

"🥞": ["panqueques", "pancakes", "desayuno", "breakfast", "dulce", "sweet", "jarabe", "syrup"], 

"🧁": ["cupcake", "cupcake", "dulce", "sweet", "postre", "dessert", "glaseado", "frosting"], 

"🍩": ["dona", "doughnut", "dulce", "sweet", "desayuno", "breakfast", "azúcar", "sugar"], 

"🍰": ["pastel", "cake", "dulce", "sweet", "cumpleaños", "birthday", "celebración", "celebration"], 

"🎂": ["pastel de cumpleaños", "birthday cake", "dulce", "sweet", "celebración", "celebration", "velas", "candles"], 

"🍫": ["chocolate", "chocolate", "dulce", "sweet", "postre", "dessert", "oscuro", "dark"], 

"🍬": ["caramelo", "candy", "dulce", "sweet", "colorido", "colorful", "azúcar", "sugar"], 

"🍭": ["piruleta", "lollipop", "dulce", "sweet", "palillo", "stick", "azúcar", "sugar"], 

"🍯": ["miel", "honey", "dulce", "sweet", "abejas", "bees", "colmena", "hive"], 

"🍎": ["manzana", "apple", "fruta", "fruit", "rojo", "red", "sano", "healthy"], 

"🍏": ["manzana verde", "green apple", "fruta", "fruit", "verde", "green", "saludable", "healthy"], 

"🍊": ["naranja", "orange", "fruta", "fruit", "cítrico", "citrus", "jugoso", "juicy"], 

"🍋": ["limón", "lemon", "fruta", "fruit", "amarillo", "yellow", "ácido", "sour"], 

"🍌": ["plátano", "banana", "fruta", "fruit", "amarillo", "yellow", "monos", "monkeys"], 

"🍉": ["sandía", "watermelon", "fruta", "fruit", "jugoso", "juicy", "verano", "summer"], 

"🍇": ["uva", "grapes", "fruta", "fruit", "morado", "purple", "vinificación", "winemaking"], 

"🍓": ["fresa", "strawberry", "fruta", "fruit", "rojo", "red", "dulce", "sweet"], 

"🍈": ["melón", "melon", "fruta", "fruit", "verde", "green", "jugoso", "juicy"], 

"🍒": ["cereza", "cherry", "fruta", "fruit", "rojo", "red", "dulce", "sweet"], 

"🍑": ["durazno", "peach", "fruta", "fruit", "naranja", "orange", "dulce", "sweet"], 

"🥭": ["mango", "mango", "fruta", "fruit", "tropical", "tropical", "amarillo", "yellow"], 

"🍍": ["piña", "pineapple", "fruta", "fruit", "tropical", "tropical", "amarillo", "yellow"], 

"🥥": ["coco", "coconut", "fruta", "fruit", "tropical", "tropical", "leche", "milk"], 

"🥝": ["kiwi", "kiwi", "fruta", "fruit", "verde", "green", "peludo", "fuzzy"], 

"🍅": ["tomate", "tomato", "verdura", "vegetable", "rojo", "red", "salsa", "sauce"], 

"🍆": ["berenjena", "eggplant", "verdura", "vegetable", "púrpura", "purple", "cocinar", "cook"], 

"🥑": ["aguacate", "avocado", "verdura", "vegetable", "verde", "green", "saludable", "healthy"], 

"🥦": ["brócoli", "broccoli", "verdura", "vegetable", "verde", "green", "saludable", "healthy"], 

"🥬": ["hojas verdes", "leafy greens", "verdura", "vegetable", "verde", "green", "nutritivo", "nutritious"], 

"🥒": ["pepino", "cucumber", "verdura", "vegetable", "verde", "green", "ensalada", "salad"], 

"🌶️": ["pimiento", "chili pepper", "verdura", "vegetable", "picante", "spicy", "rojo", "red"], 

"🌽": ["maíz", "corn", "verdura", "vegetable", "amarillo", "yellow", "grano", "grain"], 

"🥕": ["zanahoria", "carrot", "verdura", "vegetable", "naranja", "orange", "crunchy", "crunchy"], 

"🧄": ["ajo", "garlic", "verdura", "vegetable", "blanco", "white", "picante", "spicy"], 

"🧅": ["cebolla", "onion", "verdura", "vegetable", "blanco", "cocinar", "cook"], 

"🍄": ["seta", "mushroom", "hongo", "fungus", "comestible", "edible", "cocinar", "cook"], 

"🥔": ["patata", "potato", "verdura", "vegetable", "marrón", "brown", "hervido", "boiled"] , 

"👨": ["hombre", "varón", "padre", "hermano", "man", "male", "father", "brother"], 

"👩": ["mujer", "femenina", "madre", "hermana", "woman", "female", "mother", "sister"], 

"👴": ["anciano", "abuelo", "viejo", "sabio", "elderly man", "grandfather", "old", "wise"], 

"👵": ["anciana", "abuela", "vieja", "sabia", "elderly woman", "grandmother", "old", "wise"],

"🧓": ["anciano", "senior", "mayor", "abuelo", "older adult", "senior", "elder", "grandfather"], 

"👶": ["bebé", "niño", "infante", "recién nacido", "baby", "child", "infant", "newborn"], 

"👦": ["niño", "joven", "muchacho", "hijo", "boy", "young", "lad", "son"], 

"👧": ["niña", "joven", "muchacha", "hija", "girl", "young", "lass", "daughter"], 

"🧑‍🦱": ["persona de cabello rizado", "persona con rizos", "persona con cabello ondulado", "persona con cabello rizado", "person with curly hair", "person with curls", "person with wavy hair", "person with curly hair"],

"👨‍🦱": ["hombre de cabello rizado", "hombre con rizos", "hombre con cabello ondulado", "hombre con cabello rizado", "man with curly hair", "man with curls", "man with wavy hair", "man with curly hair"], 

"👩‍🦱": ["mujer de cabello rizado", "mujer con rizos", "mujer con cabello ondulado", "mujer con cabello rizado", "woman with curly hair", "woman with curls", "woman with wavy hair", "woman with curly hair"], 

"🧑‍🦰": ["persona pelirroja", "persona con cabello rojo", "persona con cabello anaranjado", "persona con cabello pelirrojo", "person with red hair", "person with orange hair", "person with ginger hair", "person with red hair"],

"👨‍🦰": ["hombre pelirrojo", "hombre con cabello rojo", "hombre con cabello anaranjado", "hombre con cabello pelirrojo", "man with red hair", "man with orange hair", "man with ginger hair", "man with red hair"], 

"👩‍🦰": ["mujer pelirroja", "mujer con cabello rojo", "mujer con cabello anaranjado", "mujer con cabello pelirrojo", "woman with red hair", "woman with orange hair", "woman with ginger hair", "woman with red hair"], 

"🧑‍🦳": ["persona de cabello canoso", "persona con cabello gris", "persona con cabello plateado", "persona con cabello blanco", "person with gray hair", "person with silver hair", "person with white hair", "person with gray hair"], 

"👨‍🦳": ["hombre de cabello canoso", "hombre con cabello gris", "hombre con cabello plateado", "hombre con cabello blanco", "man with gray hair", "man with silver hair", "man with white hair", "man with gray hair"], 

"👩‍🦳": ["mujer de cabello canoso", "mujer con cabello gris", "mujer con cabello plateado", "mujer con cabello blanco", "woman with gray hair", "woman with silver hair", "woman with white hair", "woman with gray hair"], 

"🧑‍🦲": ["persona calva", "persona sin cabello", "persona rapada", "persona con cabeza rapada", "bald person", "hairless person", "shaved person", "person with shaved head"], 

"👨‍🦲": ["calvo","hombre calvo", "hombre sin cabello", "hombre rapado", "hombre con cabeza rapada", "bald man", "hairless man", "shaved man", "man with shaved head"], 

"👩‍🦲": ["calva","mujer calva", "mujer sin cabello", "mujer rapada", "mujer con cabeza rapada", "bald woman", "hairless woman", "shaved woman", "woman with shaved head"], 

"👱‍♂️": ["rubio","hombre rubio", "hombre con cabello rubio", "hombre de cabello rubio", "hombre con cabello dorado", "blonde man", "man with blonde hair", "man with blond hair", "man with golden hair"], 

"👱‍♀️": ["rubia","mujer rubia", "mujer con cabello rubio", "mujer de cabello rubio", "mujer con cabello dorado", "blonde woman", "woman with blonde hair", "woman with blond hair", "woman with golden hair"], 

"🧔": ["hombre con barba", "hombre barbudo", "hombre con vello facial", "hombre con barba larga", "bearded man", "man with beard", "man with facial hair", "man with long beard"],

"👨‍🎓": ["hombre estudiante", "hombre universitario", "hombre graduado", "hombre con birrete", "male student", "college man", "graduate man", "man with graduation cap"], 

"👩‍🎓": ["mujer estudiante", "mujer universitaria", "mujer graduada", "mujer con birrete", "female student", "college woman", "graduate woman", "woman with graduation cap"], 

"👨‍⚕️": ["médico","doctor","hombre médico", "hombre sanitario", "hombre doctor", "hombre con bata", "male doctor", "healthcare worker", "male physician", "man with lab coat"], 

"👩‍⚕️": ["médica","doctora","mujer médica", "mujer sanitaria", "mujer doctora", "mujer con bata", "female doctor", "healthcare worker", "female physician", "woman with lab coat"], 

"👨‍🌾": ["hombre agricultor", "hombre granjero", "hombre con sombrero de paja", "hombre con azada", "male farmer", "male peasant", "man with straw hat", "man with hoe"], 

"👩‍🌾": ["mujer agricultora", "mujer granjera", "mujer con sombrero de paja", "mujer con azada", "female farmer", "female peasant", "woman with straw hat", "woman with hoe"], 

"👨‍🍳": ["chef","cocinero","cooker","hombre chef", "hombre cocinero", "hombre con gorro de chef", "hombre con delantal", "male chef", "male cook", "man with chef hat", "man with apron"], 
"👩‍🍳": ["mujer chef", "mujer cocinera", "mujer con gorro de chef", "mujer con delantal", "female chef", "female cook", "woman with chef hat", "woman with apron"], 
"👨‍🔧": ["hombre mecánico", "hombre con herramientas", "hombre con llave inglesa", "hombre con casco", "male mechanic", "man with tools", "man with wrench", "man with helmet"], 
"👩‍🔧": ["mujer mecánica", "mujer con herramientas", "mujer con llave inglesa", "mujer con casco", "female mechanic", "woman with tools", "woman with wrench", "woman with helmet"], 
"👨‍🏭": ["hombre trabajador", "hombre obrero", "hombre con casco de construcción", "hombre con chaleco", "male worker", "male laborer", "man with hard hat", "man with vest"],
"👩‍🏭": ["mujer trabajadora", "mujer obrera", "mujer con casco de construcción", "mujer con chaleco", "female worker", "female laborer", "woman with hard hat", "woman with vest"], 
"👨‍💼": ["hombre ejecutivo", "hombre de negocios", "hombre con maletín", "hombre con corbata", "male executive", "businessman", "man with briefcase", "man with tie"], 
"👩‍💼": ["mujer ejecutiva", "mujer de negocios", "mujer con maletín", "mujer con corbata", "female executive", "businesswoman", "woman with briefcase", "woman with tie"], 
"👨‍🔬": ["hombre científico", "hombre investigador", "hombre con bata de laboratorio", "hombre con microscopio", "male scientist", "male researcher", "man with lab coat", "man with microscope"], 
"👩‍🔬": ["mujer científica", "mujer investigadora", "mujer con bata de laboratorio", "mujer con microscopio", "female scientist", "female researcher", "woman with lab coat", "woman with microscope"], 
"👨‍💻": ["hombre informático", "hombre programador", "hombre con laptop", "hombre con gafas", "male computer scientist", "male programmer", "man with laptop", "man with glasses"], 
"👩‍💻": ["mujer informática", "mujer programadora", "mujer con laptop", "mujer con gafas", "female computer scientist", "female programmer", "woman with laptop", "woman with glasses"], 
"👨‍🎤": ["hombre cantante", "hombre músico", "hombre con micrófono", "hombre con auriculares", "male singer", "male musician", "man with microphone", "man with headphones"], 
"👩‍🎤": ["mujer cantante", "mujer músico", "mujer con micrófono", "mujer con auriculares", "female singer", "female musician", "woman with microphone", "woman with headphones"], 
"👨‍🎨": ["hombre artista", "hombre pintor", "hombre con paleta", "hombre con pincel", "male artist", "male painter", "man with palette", "man with paintbrush"], 
"👩‍🎨": ["mujer artista", "mujer pintora", "mujer con paleta", "mujer con pincel", "female artist", "female painter", "woman with palette", "woman with paintbrush"],
 "👨‍✈️": ["hombre piloto", "hombre aviador", "hombre con uniforme de piloto", "hombre con gorra de piloto", "male pilot", "male aviator", "man with pilot uniform", "man with pilot cap"], 
 "👩‍✈️": ["mujer piloto", "mujer aviadora", "mujer con uniforme de piloto", "mujer con gorra de piloto", "female pilot", "female aviator", "woman with pilot uniform", "woman with pilot cap"],
  "👨‍🚀": ["hombre astronauta", "hombre con traje espacial", "hombre en el espacio", "hombre en la luna", "male astronaut", "man with spacesuit", "man in space", "man on the moon"], 
  "👩‍🚀": ["mujer astronauta", "mujer con traje espacial", "mujer en el espacio", "mujer en la luna", "female astronaut", "woman with spacesuit", "woman in space", "woman on the moon"], 
  "👨‍⚖️": ["hombre juez", "hombre con toga", "hombre con martillo de juez", "hombre con balanza", "male judge", "man with robe", "man with gavel", "man with scale"], 
  "👩‍⚖️": ["mujer jueza", "mujer con toga", "mujer con martillo de juez", "mujer con balanza", "female judge", "woman with robe", "woman with gavel", "woman with scale"], 
  "👨‍🦯": ["hombre con bastón", "hombre con bastón guía", "hombre con discapacidad visual", "hombre invidente", "man with cane", "man with guide cane", "man with visual impairment", "blind man"], 
  "👩‍🦯": ["mujer con bastón", "mujer con bastón guía", "mujer con discapacidad visual", "mujer invidente", "woman with cane", "woman with guide cane", "woman with visual impairment", "blind woman"], 
  "👨‍🦼": ["hombre en silla de ruedas", "hombre en silla de ruedas manual", "hombre con discapacidad motriz", "hombre parapléjico", "man in wheelchair", "man in manual wheelchair", "man with motor disability", "paraplegic man"], 
  "👩‍🦼": ["mujer en silla de ruedas", "mujer en silla de ruedas manual", "mujer con discapacidad motriz", "mujer parapléjica", "woman in wheelchair", "woman in manual wheelchair", "woman with motor disability", "paraplegic woman"], 
  "👨‍🦽": ["hombre en silla de ruedas", "hombre en silla de ruedas eléctrica", "hombre con discapacidad motriz", "hombre tetrapléjico", "man in wheelchair", "man in electric wheelchair", "man with motor disability", "quadriplegic man"], 
  "👩‍🦽": ["mujer en silla de ruedas", "mujer en silla de ruedas eléctrica", "mujer con discapacidad motriz", "mujer tetrapléjica", "woman in wheelchair", "woman in electric wheelchair", "woman with motor disability", "quadriplegic woman"], 
  "👨‍⚧️": ["hombre transgénero", "hombre no binario", "hombre con género fluido", "hombre con barba", "transgender man", "non-binary man", "gender-fluid man", "man with beard"], 
  "👩‍⚧️": ["mujer transgénero", "mujer no binaria", "mujer con género fluido", "mujer con barba", "transgender woman", "non-binary woman", "gender-fluid woman", "woman with beard"], 
  "🧑‍⚧️": ["persona transgénero", "persona no binaria", "persona con género fluido", "persona con barba", "transgender person", "non-binary person", "gender-fluid person", "person with beard"], 
  "👨‍🎄": ["hombre Papá Noel", "hombre Santa Claus", "hombre con gorro de Papá Noel", "hombre con barba blanca", "Santa Claus man", "Santa Claus man", "man with Santa hat", "man with white beard"], 
  "👩‍🎄": ["mujer Papá Noel", "mujer Santa Claus", "mujer con gorro de Papá Noel", "mujer con barba blanca", "Santa Claus woman", "Santa Claus woman", "woman with Santa hat", "woman with white beard"] , 
  "🚗": ["coche", "automóvil", "carro", "vehículo", "auto", "car", "vehicle", "automobile"], 
  "🚕": ["taxi", "cab", "taxicab"], 
  "🚙": ["todoterreno", "coche todoterreno", "SUV", "vehículo todoterreno", "off-road vehicle", "SUV"], 
  "🚌": ["autobús", "bus", "ómnibus", "camión", "omnibus"], 
  "🚎": ["trolebús", "trolebus", "trolleybus"], 
  "🏎️": ["coche de carreras", "automóvil de carreras", "race car", "racing car"], 
  "🚓": ["coche de policía", "patrulla", "police car", "patrol car"], 
  "🚑": ["ambulancia", "ambulance"], 
  "🚒": ["camión de bomberos", "bomba", "fire engine", "fire truck"], 
  "🚐": ["furgoneta", "van", "camioneta", "minibus"], 
  "🚚": ["camión", "furgón", "truck", "lorry"], 
  "🚛": ["camión de reparto", "camión de carga", "delivery truck", "cargo truck"], 
  "🏍️": ["motocicleta", "moto", "motocicleta", "moto", "motorcycle", "motorbike"], 
  "🛵": ["scooter", "moto scooter", "scooter", "motor scooter"], 
  "🚲": ["bicicleta", "bici", "ciclomotor", "bicycle", "bike", "moped"], 
  "🛴": ["patinete", "scooter", "scooter", "scooter"], 
  "🚨": ["sirena", "alarma", "emergencia", "siren", "alarm", "emergency"], 
  "🚔": ["coche de policía", "patrulla", "police car", "patrol car"], 
  "🚍": ["autobús", "bus", "ómnibus", "camión", "omnibus"], 
  "🚖": ["taxi", "cab", "taxicab"], 
  "🚡": ["teleférico", "aéreo", "cable car", "aerial"], 
  "🚠": ["teleférico", "aéreo", "funicular", "cable car", "aerial", "funicular railway"], 
  "🛸": ["platillo volante", "ovni", "disco volador", "flying saucer", "UFO", "flying disc"], 
  "🚀": ["cohete", "nave espacial", "rocket", "spacecraft"], 
  "🛰️": ["satélite", "satellite"], 
  "🛩️": ["avioneta", "avión pequeño", "small airplane", "light aircraft"], 
  "✈️": ["avión", "aeroplano", "airplane", "aeroplane"], 
  "🛫": ["despegue", "partida", "takeoff", "departure"], 
  "🛬": ["aterrizaje", "llegada", "landing", "arrival"], 
  "⛵": ["barco de vela", "velero", "sailboat", "sailing boat"], 
  "🚤": ["lancha", "bote", "speedboat", "boat"], 
  "🛥️": ["yate", "yacht"], 
  "🚢": ["barco", "buque", "navío", "ship", "vessel"], 
  "⚓": ["ancla", "anchor"], 
  "🚧": ["obras", "trabajos en la carretera", "construction", "road works"],
   "🚦": ["semáforo", "traffic light", "traffic signal"], 
   "🚥": ["semáforo", "traffic light", "traffic signal"], 
   "🚏": ["parada de autobús", "bus stop"], 
   "🗾": ["mapa de Japón", "Japón", "Japan map"], 
   "🗺️": ["mapa del mundo", "mapamundi", "world map"], 
   "🗻": ["monte Fuji", "Fujiyama", "Mount Fuji"], "🏔️": ["montañas", "montañas con nieve", "mountains", "snow-capped mountains"],
    "⛰️": ["montaña", "mountain"], "🌋": ["volcán", "volcano"], "🗿": ["moái", "moai", "moai statue"], "🛣️": ["autopista", "carretera", "highway", "road"], 
    "🛤️": ["vía férrea", "vía de tren", "railway track", "train track"], "🛢️": ["tanque de combustible", "depósito de petróleo", "fuel tank", "oil tank"], "⛽": ["gasolinera", "estación de servicio", "gas station", "service station"], "🚉": ["estación de tren", "estación de ferrocarril", "train station", "railway station"], "🚞": ["tren de montaña", "mountain train"], "🚄": ["tren de alta velocidad", "AVE", "high-speed train", "bullet train"], "🚅": ["tren bala", "tren de alta velocidad", "bullet train", "high-speed train"], "🚈": ["tren ligero", "light rail", "tram"], "🚂": ["locomotora", "tren de vapor", "steam locomotive", "train"], "🚆": ["tren", "train"], "🚇": ["metro", "subway"], "🚊": ["tranvía", "tram", "streetcar"], "🚝": ["monorraíl", "monorail"], "⛪": ["cristianismo", "Iglesia", "catedral", "Christianity", "church", "cathedral"], "🕌": ["islam", "mezquita", "Islam", "mosque"], "🕍": ["judaísmo", "sinagoga", "Judaism", "synagogue"], "🕋": ["La Meca", "islam", "Mecca", "Islam"], "⛩️": ["shinto", "sintoísmo", "templo shintoísta", "Shintoism", "Shinto shrine"], "🕋": ["La Meca", "islam", "Mecca", "Islam"], "✡️": ["estrella de David", "Judaísmo", "star of David", "Judaism"], "☦️": ["cruz ortodoxa", "ortodoxia", "Orthodox cross", "Orthodoxy"], "☪️": ["creciente islámico", "cristianismo", "Islam", "cristianismo", "crescent moon and star", "Christianity", "Islam"], "☸️": ["rueda del dharma", "budismo", "dharma wheel", "Buddhism"], "✝️": ["cruz latina", "cristianismo", "crucifix", "Christianity"], "🕉️": ["Om", "hinduismo", "Aum", "Hinduism"], "☯️": ["yin yang", "taoísmo", "yin yang", "Taoism"], "💯": ["cien puntos", "100 puntos", "100", "hundred points", "100"], "🔝": ["arriba", "top", "up"], "🔙": ["atrás", "back", "backward"], "🔚": ["fin", "end"], "🔛": ["encendido", "on", "turned on"], "🔜": ["pronto", "soon"], "☑️": ["check", "marca de verificación", "checkmark", "tick"], "✔️": ["marca de verificación", "check", "checkmark"], "✅": ["verificación", "checkmark"], "⏯️": ["reproducir o pausar", "play or pause"], "⏩": ["avanzar", "forward"], "⏪": ["retroceder", "backward"], "⏫": ["subir", "up"], "⏬": ["bajar", "down"], "⬆️": ["arriba", "up"], "⬇️": ["abajo", "down"], "⬅️": ["izquierda", "left"], "➡️": ["derecha", "right"], "🔼": ["triángulo hacia arriba", "up triangle"], "🔽": ["triángulo hacia abajo", "down triangle"], "↗️": ["diagonal hacia arriba a la derecha", "up-right diagonal"], "↘️": ["diagonal hacia abajo a la derecha", "down-right diagonal"], "↙️": ["diagonal hacia abajo a la izquierda", "down-left diagonal"], "↖️": ["diagonal hacia arriba a la izquierda", "up-left diagonal"], "↕️": ["arriba y abajo", "up and down"], "↔️": ["izquierda y derecha", "left and right"], "↩️": ["izquierda en flecha curva", "left arrow curving"], "↪️": ["derecha en flecha curva", "right arrow curving"], "⤴️": ["derecha y luego arriba", "right then up"], "⤵️": ["derecha y luego abajo", "right then down"], "🔀": ["shuffle", "barajar"], "🔁": ["repetir", "repeat"], "🔂": ["repetir una sola vez", "repeat single"], "🔄": ["actualizar", "refresh"], "🔃": ["ciclo", "cycle"], "🕛": ["12 en punto", "12 o'clock"], "🕧": ["12:30", "12:30"], "🕐": ["1 en punto", "1 o'clock"], "🕜": ["1:30", "1:30"], "🕑": ["2 en punto", "2 o'clock"], "🕝": ["2:30", "2:30"], "🕒": ["3 en punto", "3 o'clock"], "🕞": ["3:30", "3:30"], "🕓": ["4 en punto", "4 o'clock"], "🕟": ["4:30", "4:30"], "🕔": ["5 en punto", "5 o'clock"], "🕠": ["5:30", "5:30"], "🕕": ["6 en punto", "6 o'clock"], "🕡": ["6:30", "6:30"], "🕖": ["7 en punto", "7 o'clock"], "🕢": ["7:30", "7:30"], "🕗": ["8 en punto", "8 o'clock"], "🕣": ["8:30", "8:30"], "🕘": ["9 en punto", "9 o'clock"], "🕤": ["9:30", "9:30"], "🕙": ["10 en punto", "10 o'clock"], "🕥": ["10:30", "10:30"], "🕚": ["11 en punto", "11 o'clock"], "🕦": ["11:30", "11:30"], "🌞": ["amanecer", "sunrise"], "🌝": ["luna llena", "full moon"], "🌛": ["luna creciente", "waxing crescent moon"], "🌜": ["luna menguante", "waning crescent moon"], "🌚": ["luna nueva", "new moon"], "🌙": ["luna", "moon"], "💤": ["sueño", "sleep"], "💨": ["viento", "wind"], "💭": ["pensamiento", "thought"], "💧": ["gota de agua", "water drop"], "🍂": ["hoja caída", "fallen leaf"], "🍃": ["hoja en movimiento", "swirling leaf"], "🌾": ["espiga de trigo", "ear of rice"], "🌱": ["brote", "seedling"], "🌲": ["árbol", "evergreen tree"], "🌳": ["árbol frondoso", "deciduous tree"], "🌴": ["palmera", "palm tree"], "🌵": ["cactus", "cactus"], "🌷": ["tulipán", "tulip"], "🌸": ["flor de cerezo", "cherry blossom"], "🌹": ["rosa", "rose"], "🌺": ["hibisco", "hibiscus"], "🌻": ["girasol", "sunflower"], "🌼": ["flor", "blossom"], "🌽": ["maíz", "ear of corn"], "🌾": ["espiga de arroz", "sheaf of rice"], "🌿": ["hoja verde", "herb"], "🍀": ["trébol", "four leaf clover"], "🍁": ["hoja de arce", "maple leaf"], "🍃": ["hoja en movimiento", "swirling leaf"], "🍉": ["sandía", "watermelon"], "🍊": ["naranja", "orange"], "🍋": ["limón", "lemon"], "🍌": ["plátano", "banana"], "🍍": ["piña", "pineapple"], "🍎": ["manzana", "apple"], "🍏": ["manzana verde", "green apple"], "🍐": ["pera", "pear"], "🍑": ["durazno", "peach"], "🍒": ["cereza", "cherries"], "🍓": ["fresa", "strawberry"], "🍅": ["tomate", "tomato"], "🍆": ["berenjena", "eggplant"] ,"🔨": ["martillo", "hammer"], "⛏️": ["pico", "pickaxe"], "🛠️": ["herramientas", "tools"], "⚒️": ["martillo y pico", "hammer and pick"], "🔩": ["tornillo", "screw"], "⚙️": ["engranaje", "gear"], "⛓️": ["cadena", "chain"], "🔧": ["llave inglesa", "wrench"], "🔗": ["eslabón", "link"], "🔌": ["enchufe", "plug"], "🔦": ["linterna", "flashlight"], "📐": ["escuadra", "ruler"], "📏": ["regla", "straightedge"], "📝": ["bolígrafo", "pen"], "✂️": ["tijeras", "scissors"], "📌": ["alfiler", "pushpin"], "📍": ["tachuela", "thumbtack"], "🧰": ["caja de herramientas", "toolbox"], "🔐": ["cerradura", "lock"], "🔒": ["cerrado con llave", "locked"], "🔓": ["abierto con llave", "unlocked"], "🔏": ["con llave", "locked with pen"], "🔑": ["llave", "key"], "🔨": ["martillo", "hammer"], "⛏️": ["pico", "pickaxe"], "🛠️": ["herramientas", "tools"], "⚒️": ["martillo y pico", "hammer and pick"], "🔩": ["tornillo", "screw"], "⚙️": ["engranaje", "gear"], "⛓️": ["cadena", "chain"], "🔧": ["llave inglesa", "wrench"], "🔗": ["eslabón", "link"], "🔌": ["enchufe", "plug"], "🔦": ["linterna", "flashlight"], "📐": ["escuadra", "ruler"], "📏": ["regla", "straightedge"], "📝": ["bolígrafo", "pen"], "✂️": ["tijeras", "scissors"], "📌": ["alfiler", "pushpin"], "📍": ["tachuela", "thumbtack"], "🧰": ["caja de herramientas", "toolbox"], "🔐": ["cerradura", "lock"], "🔒": ["cerrado con llave", "locked"], "🔓": ["abierto con llave", "unlocked"], "🔏": ["con llave", "locked with pen"], "🔑": ["llave", "key"], "🔨": ["martillo", "hammer"], "⛏️": ["pico", "pickaxe"], "🛠️": ["herramientas", "tools"], "⚒️": ["martillo y pico", "hammer and pick"], "🔩": ["tornillo", "screw"], "⚙️": ["engranaje", "gear"], "⛓️": ["cadena", "chain"], "🔧": ["llave inglesa", "wrench"], "🔗": ["eslabón", "link"], "🔌": ["enchufe", "plug"], "🔦": ["linterna", "flashlight"], "📐": ["escuadra", "ruler"], "📏": ["regla", "straightedge"], "📝": ["bolígrafo", "pen"], "✂️": ["tijeras", "scissors"], "📌": ["alfiler", "pushpin"], "📍": ["tachuela", "thumbtack"], "🧰": ["caja de herramientas", "toolbox"], "🔐": ["cerradura", "lock"], "🔒": ["cerrado con llave", "locked"], "🔓": ["abierto con llave", "unlocked"], "🔏": ["con llave", "locked with pen"], "🔑": ["llave", "key"], "🔨": ["martillo", "hammer"], "⛏️": ["pico", "pickaxe"], "🛠️": ["herramientas", "tools"], "⚒️": ["martillo y pico", "hammer and pick"], "🔩": ["tornillo", "screw"], "⚙️": ["engranaje", "gear"], "⛓️": ["cadena", "chain"], "🔧": ["llave inglesa", "wrench"], "🔗": ["eslabón", "link"], "🔌": ["enchufe", "plug"], "🔦": ["linterna", "flashlight"], "📐": ["escuadra", "ruler"], "📏": ["regla", "straightedge"], "📝": ["bolígrafo", "pen"], "✂️": ["tijeras", "scissors"], "📌": ["alfiler", "pushpin"], "📍": ["tachuela", "thumbtack"], "🧰": ["caja de herramientas", "toolbox"], "🔐": ["cerradura", "lock"], "🔒": ["cerrado con llave", "locked"], "🔓": ["abierto con llave", "unlocked"], "🔏": ["con llave", "locked with pen"], "🔑": ["llave", "key"], "💥": ["explosión", "explosion"], "💣": ["bomba", "bomb"], "🦸‍♂️": ["superhéroe", "superhero"], "🦸‍♀️": ["superheroína", "superheroine"], "🦹‍♂️": ["supervillano", "supervillain"], "🦹‍♀️": ["supervillana", "supervillainess"], "👊": ["puñetazo", "punch"], "👊🏽": ["puñetazo con piel morena", "punch with medium skin tone"], "🤛": ["puño cerrado", "fist bump"], "🤜": ["puño hacia la derecha", "right-facing fist"], "👊🏿": ["puño hacia la derecha con piel oscura", "right-facing fist with dark skin tone"], "🤜🏿": ["puño cerrado con piel oscura", "right-facing fist with dark skin tone"], "🤛🏽": ["puño cerrado con piel morena", "fist bump with medium skin tone"], "🤜🏽": ["puño hacia la derecha con piel morena", "right-facing fist with medium skin tone"], "🦹‍♂️": ["supervillano", "supervillain"], "🦹‍♀️": ["supervillana", "supervillainess"], "🦹‍♂️": ["supervillano", "supervillain"], "🦹‍♀️": ["supervillana", "supervillainess"], "🦹‍♂️": ["supervillano", "supervillain"], "🦹‍♀️": ["supervillana", "supervillainess"], "💬": ["bocadillo de diálogo", "speech balloon"], "💭": ["burbuja de pensamiento", "thought balloon"], "💢": ["símbolo de enojo", "anger symbol"], "🕸️": ["telaraña", "spider web"], "🦇": ["murciélago", "bat"], "🐜": ["hormiga", "ant"], "🐍": ["serpiente", "snake"], "🦖": ["dinosaurio", "dinosaur"], "🔬": ["microscopio", "microscope"], "🔭": ["telescopio", "telescope"], "⚗️": ["matraz", "flask"], "🧪": ["tubo de ensayo", "test tube"], "🧫": ["placa de Petri", "petri dish"], "🧬": ["ADN", "DNA"], "🦠": ["microorganismo", "microorganism"], "🧴": ["líquido", "liquid"], "🧴": ["líquido", "liquid"], "🧱": ["ladrillo", "brick"], "🔨": ["martillo", "hammer"], "🔧": ["llave inglesa", "wrench"], "🔩": ["tornillo", "screw"], "⚙️": ["engranaje", "gear"], "📐": ["escuadra", "ruler"], "🖇️": ["clip", "paperclip"], "📎": ["clip", "paperclip"], "📏": ["regla", "ruler"], "📋": ["hoja de papel", "paper"], "🗒️": ["bloque de notas", "notebook"], "🗂️": ["carpeta", "folder"], "📁": ["carpeta", "folder"], "📂": ["carpeta", "folder"], "🗃️": ["archivo", "file cabinet"], "🗄️": ["gabinete de archivos", "file cabinet"], "📇": ["tarjeta de índice", "index card"], "📃": ["página con esquina doblada", "page with curled corner"], "📄": ["página con esquina doblada", "page with curled corner"], "📑": ["juego de papel", "paper bundle"], "🔖": ["marcapáginas", "bookmark"], "📊": ["gráfico", "chart"], "📈": ["gráfico ascendente", "chart increasing"], "📉": ["gráfico descendente", "chart decreasing"], "🗑️": ["papelera de reciclaje", "wastebasket"], "🛢️": ["barril", "oil drum"], "🔒": ["candado cerrado", "locked"], "🔓": ["candado abierto", "unlocked"], "🔑": ["llave", "key"], "🧰": ["caja de herramientas", "toolbox"], "🛠️": ["herramienta", "hammer and wrench"], "⚒️": ["martillo y pico", "hammer and pick"], "🧲": ["imán", "magnet"], "🔗": ["eslabón de cadena", "link"], "🔬": ["microscopio", "microscope"], "🔭": ["telescopio", "telescope"], "⚗️": ["matraz", "flask"], "🧪": ["tubo de ensayo", "test tube"], "🧫": ["placa de Petri", "petri dish"], "🧬": ["ADN", "DNA"], "🦠": ["microorganismo", "microorganism"], "🧴": ["líquido", "liquid"], "🧱": ["ladrillo", "brick"], "🔨": ["martillo", "hammer"], "🔧": ["llave inglesa", "wrench"], "🔩": ["tornillo", "screw"], "⚙️": ["engranaje", "gear"], "📐": ["escuadra", "ruler"], "🖇️": ["clip", "paperclip"], "📎": ["clip", "paperclip"], "📏": ["regla", "ruler"], "📋": ["hoja de papel", "paper"], "🗒️": ["bloque de notas", "notebook"], "🗂️": ["carpeta", "folder"], "📁": ["carpeta", "folder"], "📂": ["carpeta", "folder"], "🗃️": ["archivo", "file cabinet"], "🗄️": ["gabinete de archivos", "file cabinet"], "📇": ["tarjeta de índice", "index card"], "📃": ["página con esquina doblada", "page with curled corner"], "📄": ["página con esquina doblada", "page with curled corner"], "📑": ["juego de papel", "paper bundle"], "🔖": ["marcapáginas", "bookmark"], "📊": ["gráfico", "chart"], "📈": ["gráfico ascendente", "chart increasing"], "📉": ["gráfico descendente", "chart decreasing"], "🗑️": ["papelera de reciclaje", "wastebasket"], "🛢️": ["barril", "oil drum"], "🔒": ["candado cerrado", "locked"], "🔓": ["candado abierto", "unlocked"], "🔑": ["llave", "key"], "🧰": ["caja de herramientas", "toolbox"], "🛠️": ["herramienta", "hammer and wrench"], "⚒️": ["martillo y pico", "hammer and pick"], "🧲": ["imán", "magnet"], "🔗": ["eslabón de cadena", "link"], "👟": ["zapatos deportivos", "sneakers"], "👠": ["tacones altos", "high heels"], "👞": ["zapatos formales", "dress shoes"], "👡": ["sandalias", "sandals"], "👢": ["botas", "boots"], "🥿": ["zapatos planos", "flats"], "🧦": ["calcetines", "socks"], "🧤": ["guantes", "gloves"], "🧣": ["bufanda", "scarf"], "🧥": ["abrigo", "coat"], "🧢": ["gorra", "cap"], "🎩": ["sombrero de copa", "top hat"], "🧢": ["gorra", "cap"], "🕶️": ["gafas de sol", "sunglasses"], "👓": ["gafas", "glasses"], "🎁": ["regalo", "gift"], "🎫": ["entrada", "ticket"], "🌜": ["noche", "night"], "🌞": ["día", "day"], "👜": ["bolso", "purse"], "👛": ["billetera", "wallet"], "🎒": ["mochila", "backpack"], "⛳": ["golf", "golf"], "🎳": ["bolos", "bowling"], "🛒": ["compras", "shopping"], "🛍️": ["bolsa de compras", "shopping bag"], "🛍️": ["bolsa de compras", "shopping bag"], "🛷": ["trineo", "sled"], "🎿": ["esquís", "skis"], "🏂": ["tabla de snowboard", "snowboard"], "🏓": ["raqueta de ping-pong", "ping pong paddle"], "🏸": ["raqueta de bádminton", "badminton racket"], "🎾": ["raqueta de tenis", "tennis racket"], "🏐": ["pelota de voleibol", "volleyball"], "🏉": ["balón de rugby", "rugby ball"], "🏀": ["balón de baloncesto", "basketball"], "🏈": ["balón de fútbol americano", "football"], "🎱": ["bola de billar", "pool ball"], "♟️": ["pieza de ajedrez", "chess piece"], "🎻": ["violín", "violin"], "🎸": ["guitarra eléctrica", "electric guitar"], "🎺": ["trompeta", "trumpet"], "🎷": ["saxofón", "saxophone"], "🥁": ["batería", "drum"], "🎹": ["piano", "pianista"] ,"💣": ["dinamita", "dynamite"], "🎃": ["Halloween", "Halloween"], "🎲": ["dado", "dice"], "🎶": ["música", "music"], "🎵": ["canción", "song"], "🩹": ["tirita", "band-aid"], "🧥": ["chaleco", "vest"], "🎤": ["micrófono", "microphone"], "🔊": ["altavoz", "speaker"], "💻": ["ordenador", "computer"], "🎬": ["cine", "cinema"], "🎨": ["arte", "art"], "🖼️": ["pintura", "painting"], "🎟️": ["tiquet", "ticket"], "🎫": ["boleto", "ticket"], "🎀": ["lazo", "ribbon"], "☎️": ["teléfono", "telephone"], "🚬": ["cigarro", "cigarette"], "🚬": ["cigarrillo", "cigarette"], "🌿": ["tabaco", "tobacco"], "🎮": ["videojuegos", "video games"], "💄": ["lípa", "lipstick"], "📻": ["radio", "radio"], "📺": ["televisión", "television"], "💉": ["jeringa", "syringe"], "🧵": ["hilo", "thread"], "🎨": ["pintura", "paint"], "🥇": ["oro", "gold"], "🥉": ["bronce", "bronze"], "🥈": ["plata", "silver"], "🏆": ["trofeo", "trophy"], "💰": ["dinero", "money"], "💵": ["billete", "bill"], "💵": ["dólar", "dollar"], "💶": ["euro", "euro"], "🎪": ["circo", "circus"], "🎢": ["montaña rusa", "rollercoaster"], "🪀": ["yoyo", "yoyo"], "🏊‍♂️": ["buceo", "diving"], "🤿": ["gafas de buceo", "diving goggles"], "🌊": ["submarinismo", "scuba diving"], "🏝️": ["isla", "island"], "🌍": ["tierra", "earth"], "🌍": ["continente", "continent"], "🌍": ["planeta", "planet"], "🇪🇸": ["España", "Spain"], "🌐": ["globo", "globe"], "📦": ["caja", "box"], "💼": ["maletín", "briefcase"], "🧳": ["maleta", "suitcase"], "👵": ["anciana", "old woman"], "✈️": ["viaje", "trip"], "🗑️": ["papelera", "wastebasket"], "📌": ["chincheta", "pushpin"], "💡": ["bombilla", "light bulb"], "💿": ["disco", "disc"], "📷": ["cámara", "camera"], "🕺": ["discoteca", "disco"], "🌃": ["noche", "night"], "🌞": ["día", "day"], "🖼️": ["cuadro", "painting"], "☀️": ["sol", "sun"], "🌙": ["luna", "moon"], "⭐": ["estrella", "star"], "🌟": ["estrella brillante", "bright star"], "💫": ["estrella fugaz", "shooting star"], "🌠": ["lluvia de estrellas", "shooting stars"], "🪐": ["planeta", "planet"], "🌍": ["tierra", "earth"], "🪐": ["saturno", "saturn"], "🟠": ["marte", "mars"], "🟢": ["venus", "venus"], "🟣": ["urano", "uranus"], "🔵": ["neptuno", "neptune"], "🟤": ["júpiter", "jupiter"], "🟥": ["rojo", "red", "escarlata", "carmesí", "rubí", "cereza", "bermejo", "encarnado"], "🟧": ["naranja", "orange", "anaranjado", "anaranjada", "zambo", "melocotón", "albaricoque"], "🟨": ["amarillo", "yellow", "dorado", "dorada", "doradito", "doradita", "áureo", "dáurico"], "🟩": ["verde", "green", "esmeralda", "verdoso", "verdeazulado", "verdusco", "esmeraldino"], "🟦": ["azul", "blue", "celeste", "azulado", "azulino", "azur", "azulejo", "cobalto"], "🟪": ["violeta", "violet", "lila", "purple", "morado", "purpúreo", "purpurino", "malva"], "⬛": ["negro", "black", "ebúrneo", "ebúrnea", "eburneo", "eburnea", "sable", "obsidiana"], "⬜": ["blanco", "white", "blanquecino", "blancuzco", "lechoso", "albo", "albino", "cándido"], "🟥🟧🟨🟩🟦🟪⬛⬜": ["colores", "colors", "tonos", "matiz", "matices", "tintes", "nuances", "tonalidades"], "0️⃣": ["cero", "zero", "nulo", "nula", "nulos", "nulas", "cero absoluto", "vacío"], "1️⃣": ["uno", "one", "único", "únicamente", "solitario", "solamente", "solo", "singular"], "2️⃣": ["dos", "two", "pareja", "ambos", "doble", "binario", "segundo", "bis"], "3️⃣": ["tres", "three", "trío", "tercero", "tercia", "ternario", "triple", "tercer"], "4️⃣": ["cuatro", "four", "tetrarquía", "cuaternario", "cuádruple", "cuadruplicado", "tetra"], "5️⃣": ["cinco", "five", "quíntuple", "quintuplicado", "quintaesencia", "quinteto", "pentágono", "pentecostés"], "6️⃣": ["seis", "six", "séptuplo", "sexteto", "sextuplicado", "sexto", "sexta", "sextaferia"], "7️⃣": ["siete", "seven", "séptimo", "séptima", "septentrión", "septenio", "heptágono", "heptateuco"], "8️⃣": ["ocho", "eight", "óctuple", "octógono", "octángulo", "octogenario", "octavo", "octava"], "9️⃣": ["nueve", "nine", "nónuplo", "noveno", "novena", "novenario", "nonato", "nonagésimo"], "🔟": ["diez", "ten", "décuplo", "decálogo", "década", "decágono", "décimo", "décima"] , "📝": ["escribir", "write", "scribe", "pen", "note", "compose", "document", "record"], "👏": ["aplaudir", "applaud", "clap", "praise", "cheer", "clapping", "ovation", "acclaim"], "🙏": ["rezar", "pray", "prayer", "worship", "devotion", "supplication", "meditation", "invocation"], "👃": ["nariz", "nose", "smell", "olfactory organ", "snout", "nostrils", "scent", "nasal"], "💬": ["hablar", "speak", "talk", "converse", "communicate", "verbalize", "express", "dialogue"], "👄": ["labios", "lips", "kiss", "mouth", "lipstick", "pout", "smack", "kissing"], "💋": ["beso", "kiss", "besar", "smooch", "buss", "peck", "snog", "embracing"], "🎯": ["apuntar", "aim", "target", "point", "focus", "direct", "shoot", "goal"], "🦶": ["pie", "foot", "paw", "sole", "step", "pedal", "walk", "kick"], "✋": ["mano", "hand", "palm", "fist", "grip", "paw", "fingers", "gesture"], "🧠": ["cabeza", "head", "mind", "brain", "skull", "chief", "leader", "intellect"], "💇‍♂️": ["pelo", "hair", "mane", "fur", "locks", "tresses", "hairstyle", "coiffure"], "💈": ["peluqueria", "barbershop", "hair salon", "barber", "haircut", "hairstyling", "hairdresser", "salon"], "✂️": ["cortar el pelo", "cut hair", "haircut", "trim", "clip", "snip", "shear", "barber"], "👨‍🏫": ["maestro", "teacher", "master", "educator", "instructor", "professor", "tutor", "pedagogue"], "👮": ["policia", "police", "officer", "cop", "law enforcement", "constable", "peace officer", "patrolman"], "☑️": ["voto", "vote", "ballot", "election", "poll", "choice", "decision", "electorate"], "👨‍⚖️": ["dictador", "dictator", "tyrant", "autocrat", "despot", "authoritarian", "totalitarian", "strongman"], "🌍": ["europa", "Europe", "EU", "continent", "European Union", "Eurozone", "European", "Euro"], "👂": ["sonotone", "hearing aid", "earpiece", "hearing device", "auditory prosthesis", "hearing amplifier", "hearing aid device", "ear trumpet"], "👂🏽": ["oir", "hear", "listen", "perceive", "attend", "catch", "take in", "understand"], "🏃‍♂️": ["correr", "run", "running", "ran", "runs", "runned", "runner", "runners"], "🚶‍♀️": ["caminar", "walk", "walking", "walked", "walks", "walker", "walkers", "walkable"], "🛌": ["dormir", "sleep", "sleeping", "slept", "sleeps", "sleeper", "sleepers", "asleep"], "🧘‍♀️": ["meditar", "meditate", "meditating", "meditated", "meditates", "meditator", "meditators", "meditative"], "🏊‍♂️": ["nadar", "swim", "swimming", "swam", "swims", "swimmer", "swimmers", "swimmable"], "🚴‍♂️": ["andar en bicicleta", "cycle", "cycling", "cycled", "cycles", "cyclist", "cyclists", "cyclable"], "🎣": ["pescar", "fish", "fishing", "fished", "fishes", "fisher", "fishers", "fishable"], "🏋️‍♂️": ["levantar pesas", "lift weights", "weightlifting", "lifted weights", "lifting weights", "lifts weights", "weightlifter", "weightlifters"], "🤸‍♂️": ["hacer gimnasia", "gymnastics", "gymnastic", "gymnast", "gymnasts", "gymnastique", "gymnastique", "gymnaste"], "🎨": ["pintar", "paint", "painting", "painted", "paints", "painter", "painters", "painted"], "📚": ["leer", "read", "reading", "read", "reads", "reader", "readers", "readable"], "✍️": ["escribir", "write", "writing", "wrote", "writes", "written", "writer", "writers"], "🎻": ["tocar el violin", "play violin", "playing violin", "played violin", "plays violin", "violinist", "violinists", "violin playing"], "🎸": ["tocar la guitarra", "play guitar", "playing guitar", "played guitar", "plays guitar", "guitarist", "guitarists", "guitar playing"], "🎹": ["tocar el piano", "play piano", "playing piano", "played piano", "plays piano", "pianist", "pianists", "piano playing"], "🎤": ["cantar", "sing", "singing", "sang", "sings", "sung", "singer", "singers"], "🎭": ["actuar", "act", "acting", "acted", "acts", "actor", "actors", "actress"] , "🏃‍♂️": ["correr", "corriendo", "corrió", "corre", "corrido", "corredor", "corredores", "corredora", "corredoras"], "🚶‍♀️": ["caminar", "caminando", "caminó", "camina", "caminado", "caminante", "caminantes", "caminadora", "caminadoras"], "🛌": ["dormir", "durmiendo", "durmió", "duerme", "dormido", "durmió", "durmiendo", "durmiente", "durmientes"], "🧘‍♀️": ["meditar", "meditando", "meditó", "medita", "meditado", "meditado", "meditando", "meditante", "meditantes"], "🏊‍♂️": ["nadar", "nadando", "nadó", "nada", "nadado", "nadó", "nadando", "nadador", "nadadores"], "🚴‍♂️": ["andar en bicicleta", "andando en bicicleta", "anduvo en bicicleta", "anda en bicicleta", "andado en bicicleta", "anduvo en bicicleta", "andando en bicicleta", "ciclista", "ciclistas"], "🎣": ["pescar", "pescando", "pescó", "pesca", "pescado", "pescado", "pescando", "pescador", "pescadores"], "🏋️‍♂️": ["levantar pesas", "levantando pesas", "levantó pesas", "levanta pesas", "levantado pesas", "levantó pesas", "levantando pesas", "levantador de pesas", "levantadores de pesas"], "🤸‍♂️": ["hacer gimnasia", "haciendo gimnasia", "hizo gimnasia", "hace gimnasia", "hecho gimnasia", "hizo gimnasia", "haciendo gimnasia", "gimnasta", "gimnastas"], "🎨": ["pintar", "pintando", "pintó", "pinta", "pintado", "pintó", "pintando", "pintor", "pintores"], "📚": ["leer", "leyendo", "leyó", "lee", "leído", "leyó", "leyendo", "lector", "lectores"], "✍️": ["escribir", "escribiendo", "escribió", "escribe", "escrito", "escribió", "escribiendo", "escritor", "escritores"], "🎻": ["tocar el violin", "tocando el violin", "tocó el violin", "toca el violin", "tocado el violin", "tocó el violin", "tocando el violin", "violinista", "violinistas"], "🎸": ["tocar la guitarra", "tocando la guitarra", "tocó la guitarra", "toca la guitarra", "tocado la guitarra", "tocó la guitarra", "tocando la guitarra", "guitarrista", "guitarristas"], "🎹": ["tocar el piano", "tocando el piano", "tocó el piano", "toca el piano", "tocado el piano", "tocó el piano", "tocando el piano", "pianista", "pianistas"], "🎤": ["cantar", "cantando", "cantó", "canta", "cantado", "cantó", "cantando", "cantante", "cantantes"], "🎭": ["actuar", "actuando", "actuó", "actúa", "actuado", "actuó", "actuando", "actor", "actores"] , "🧗‍♂️": ["escalar", "escalando", "escaló", "escala", "escalado", "escaló", "escalando", "escalador", "escaladores"], "🚣‍♀️": ["remar", "remando", "remó", "remar", "remado", "remó", "remando", "remador", "remadores"], "🧑‍🏫": ["enseñar", "enseñando", "enseñó", "enseña", "enseñado", "enseñó", "enseñando", "maestro", "maestros"], "🧑‍🍳": ["cocinar","cociné", "cocinando", "cocinó", "cocina", "cocinado", "cocinó", "cocinando", "cocinero", "cocineros"], "🚗": ["conducir", "conduciendo", "condujo", "conduce", "conducido", "condujo", "conduciendo", "conductor", "conductores"], "✈️": ["volar", "volando", "voló", "vuela", "volado", "voló", "volando", "piloto", "pilotos"], "🚀": ["viajar al espacio", "viajando al espacio", "viajó al espacio", "viaja al espacio", "viajado al espacio", "viajó al espacio", "viajando al espacio", "astronauta", "astronautas"], "🏄‍♂️": ["surfear", "surfando", "surfeó", "surfea", "surfeado", "surfeó", "surfando", "surfero", "surferos"], "🏌️‍♀️": ["jugar al golf", "jugando al golf", "jugó al golf", "juega al golf", "jugado al golf", "jugó al golf", "jugando al golf", "golfista", "golfistas"], "🎿": ["esquiar", "esquiando", "esquió", "esquía", "esquiado", "esquió", "esquiando", "esquiador", "esquiadores"] , "🏰": ["Edad Media", "castillo", "caballero", "reina", "rey", "doncella", "tropa", "batalla"], "🗽": ["Estados Unidos", "George Washington", "Thomas Jefferson", "Abraham Lincoln", "Tío Sam", "estatua de la libertad", "presidente", "guerra civil"], "🎩": ["Revolución Francesa", "Napoleón Bonaparte", "María Antonieta", "Luis XVI", "Guillotina", "Revolución", "Monarquía", "Rey"], "🕍": ["Israel", "David", "Salomón", "Jerusalén", "Rey David", "Rey Salomón", "Templo", "Torá"], "⛩️": ["Japón", "samurái", "shogun", "geisha", "emperador", "ninja", "sakura", "kimono"], "🏰": ["Europa Medieval", "caballero", "caballerosidad", "dama", "Rey Arturo", "Excalibur", "Camelot", "Caballero negro"], "🗿": ["Easter Island", "Moai", "Rapa Nui", "Polinesia", "isla", "piedra", "moai"], "🌉": ["San Francisco", "California", "puente Golden Gate", "ciudad", "puente", "San Francisco", "bahía", "Oeste"] 
 

} 

 

 

const buscarPalabrasRelacionadas = (texto) => {
  let resultados = {};

  Object.entries(emoticonos).forEach(([emoji, palabras]) => {
    let palabrasEncontradas = palabras.filter(palabra => texto.toLowerCase().includes(palabra));
    if (palabrasEncontradas.length) {
      resultados[emoji] = palabrasEncontradas;
    }
  });

  let textoModificado = texto;
  Object.entries(resultados).forEach(([emoji, palabras]) => {
    palabras.forEach(palabra => {
      textoModificado = textoModificado.replaceAll(palabra, `${palabra} ${emoji}`);
    });
  });

  return textoModificado;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const textoMod = buscarPalabrasRelacionadas(texto.toLowerCase());
  setTextoModificado(textoMod);
};

const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = async () => {
      const pdfData = new Uint8Array(reader.result);
      const loadingTask = getDocument({ data: pdfData });
      const pdf = await loadingTask.promise;
      const numPages = pdf.numPages;
      let textoDelPDF = '';

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        textoDelPDF += pageText + ' ';
      }

      const textoMod = buscarPalabrasRelacionadas(textoDelPDF.toLowerCase());
      setTextoModificado(textoMod);
    };
    reader.readAsArrayBuffer(file);
  }
};

const obtenerNuevoTexto = () => {
  const nuevoTexto = buscarPalabrasRelacionadas(texto.toLowerCase());
  setNuevoTextoConEmoticonos(nuevoTexto);
};

return (
  <div className="app-container">
    <h1>TEXTO EMOTICONOS</h1>
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe aquí tu texto..."
        className="text-input"
      />
      <button type="submit" className="submit-button">Agregar Emojis</button>
    </form>
    <div className="resultado">
      {textoModificado && <p>{textoModificado}</p>}
    </div>

    <div className="pdf-upload">
      <input type="file" accept=".pdf" onChange={handleFileUpload} />
      {/* Botón de subir PDF, puedes cambiar el texto y estilos según sea necesario */}
    </div>

    <div className="nuevo-texto-container">
      <button onClick={obtenerNuevoTexto} className="obtener-texto-button">Obtener Texto</button>
      <div className="nuevo-texto">
        {nuevoTextoConEmoticonos && (
          <div className="cuadro-blanco">
            <p>{nuevoTextoConEmoticonos}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default App;