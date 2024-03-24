import React, { useState } from 'react';
import './Home.css'; 

const App = () => {
  const [texto, setTexto] = useState('');
  const [textoModificado, setTextoModificado] = useState('');

  const emoticonos = {
        "😢": ["triste", "deprimido", "abatido", "llorando"],
        "😊": ["feliz", "contento", "alegre", "sonriente"],
        "😡": ["enojado", "furioso", "irritado", "rabioso"],
        "😮": ["sorprendido", "asombrado", "impresionado", "boquiabierto"],
        "🌅": ["mañana", "amanecer", "amaneciendo"],
        "🌞": ["sol", "soleado", "brillante"],
        "🌧": ["lluvia", "lluvioso", "lloviendo", "nublado"],
        "❄": ["frío", "nieve", "nevando", "helado"],
        "⚡": ["tormenta", "rayo", "trueno", "tempestad"],
        "🎉": ["celebración", "fiesta", "festejo", "alegría"],
        "🙂": ["normal", "bien", "regular", "tranquilo"],
        "😴": ["cansado", "sueño", "dormido", "adormilado"],
        "😋": ["delicioso", "rico", "sabroso", "apetitoso"],
        "😎": ["cool", "genial", "súper", "awesome"],
        "😈": ["diablo", "malvado", "travieso", "perverso"],
        "😸": ["gato", "felino", "minino", "mascota"],
        "🐶": ["perro", "canino", "perrito", "mascota"],
        "🐱": ["gato", "felino", "minino", "mascota"],
        "🐻": ["oso", "oso pardo", "oso polar", "peluche"],
        "🐨": ["koala", "marsupial", "oso koala", "australiano"],
        "🐧": ["pingüino", "ave", "antártida", "hielo"],
        "🐸": ["rana", "anfibio", "sapo", "verde"],
        "🦁": ["león", "felino", "rey de la selva", "mane"],
        "🐯": ["tigre", "felino", "depredador", "rayas"],
        "🦄": ["unicornio", "mítico", "fantasía", "cuerno"],
        "🐙": ["pulpo", "molusco", "tentáculos", "mar"],
        "🐳": ["ballena", "cetáceo", "oceano", "cola"],
        "🐍": ["serpiente", "reptil", "venenoso", "escamas"],
        "🦋": ["mariposa", "insecto", "alas", "colores"],
        "😄": ["alegre", "sonriente", "divertido", "risueño"],
        "😅": ["nervioso", "sudoroso", "incómodo", "aliviado"],
        "😂": ["risa", "carcajada", "divertido", "jocoso"],
        "😭": ["llanto", "llorando", "triste", "aflicción"],
        "😱": ["miedo", "aterrado", "sorprendido", "horrorizado"],
        "😤": ["frustrado", "enojado", "irritado", "molesto"],
        "😷": ["enfermo", "mascarilla", "resfriado", "contagiado"],
        "🤒": ["enfermo", "fiebre", "malestar", "convaleciente"],
        "🤢": ["náuseas", "vómito", "asqueado", "enfermo"],
        "🤮": ["vómito", "asqueado", "repulsión", "náuseas"],
        "😇": ["angelical", "santo", "inocente", "virtuoso", "santos"],
        "🤠": ["cowboy", "vaquero", "del oeste", "sombrero"],
        "🤡": ["payaso", "bufón", "risas", "actuación"],
        "👽": ["extraterrestre", "alienígena", "marciano", "OVNI"],
        "💀": ["calavera", "muerte", "esqueleto", "macabro"],
        "👻": ["fantasma", "espíritu", "fantasmal", "travieso"],
        "👾": ["monstruo", "alienígena", "videojuego", "arcade"],
        "👑": ["corona", "realeza", "reina", "rey"],
        "🎩": ["sombrero", "elegante", "galante", "caballero"],
        "👓": ["gafas", "anteojos", "vista", "moda"],
        "🐵": ["mono", "primate", "selva", "gracioso", "samuel"],
        "🐃": ["búfalo", "grande", "cuernos", "manada"],
        "🦓": ["cebra", "rayas", "sabana", "manada"],
        "🐖": ["jabalí", "cerdo", "selvático", "colmillos"],
        "🐗": ["jabalí", "cerdo", "selvático", "colmillos"],
        "🦌": ["ciervo", "venado", "cornamenta", "bosque"],
        "🐐": ["cabra", "montaña", "cuernos", "pastoreo"],
        "🐏": ["oveja", "lana", "rebaño", "pastoreo"]

    
  };

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
    </div>
  );
};

export default App;