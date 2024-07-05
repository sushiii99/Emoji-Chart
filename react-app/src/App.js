
//import './App.css';
import React, { useState } from 'react';
import Img from './emotions/Img.jsx';
import './emoji.css';


const emojis = [
  { src: Img.image1, alt: 'Enojado', message: 'Es válido sentirse así. A veces, el enojo surge cuando nos sentimos frustradas, ignoradas o injustamente tratadas. Respira profundamente y cuenta hasta diez. Luego, escribe o dibuja lo que sientes; puede ayudarte a liberar esa emoción."' },
  { src: Img.image2, alt: 'Feliz', message: '¡Qué alegría verte feliz! Disfruta este sentimiento plenamente. Respira profundamente y celebra cada momento. ¿Qué te hace sentir feliz? Escribe o dibuja tus pensamientos y experiencias. Compartir tu felicidad con los demás puede multiplicarla.' },
  { src: Img.image3, alt: 'Nervioso', message: 'Es válido sentirse así. Los nervios pueden surgir ante  situaciones nuevas o desafíos. Respira profundamente y recuerda que eres capaz. Visualiza el éxito y confía en ti misma. Hablar sobre tus nervios con alguien de confianza puede aliviarlos.' },
  { src: Img.image4, alt: 'Neutral', message: 'Estar en un estado neutral es parte natural de nuestras emociones. Si te sientes así, tómate un momento para reflexionar. ¿Qué te llevó a este estado? Respira profundamente y permítete sentir sin juzgarte. Aprovecha este momento para conocerte mejor.' },
  { src: Img.image5, alt: 'Triste', message: 'Es válido sentirse así. La tristeza puede aparecer por diversas razones. Permítete sentir y busca actividades que te reconforten, como dar un paseo o hablar con un amigo. Recuerda que no estás sola y que las cosas mejorarán con el tiempo.' },
  { src: Img.image14, alt: 'Estresado', message: 'El estrés puede surgir por diversas responsabilidades y presiones. Respira profundamente y tómate un momento para relajarte. Prioriza tus tareas y pide ayuda si es necesario. Recuerda que cuidar de ti misma es primordial.' },
  { src: Img.image8, alt: 'Emocionado', message: 'A veces, sentirse emocionada puede abrumarnos. ¿Qué te hace sentir así? Escribe o dibuja tus pensamientos y emociones. Compartir tu emoción con alguien cercano puede hacerla aún más especial.' },
  { src: Img.image11, alt: 'Amado', message: 'Disfruta y celebra este sentimiento tan especial. Respira profundamente y deja que el amor te llene por completo. ¿Quiénes te hacen sentir tan amada? Escribe o dibuja tus pensamientos y emociones para recordar este momento especial.' },
  { src: Img.image13, alt: 'Enfermo', message: 'La enfermedad puede hacernos sentir vulnerables y preocupadas. Descansa lo necesario y cuida de ti misma. No dudes en buscar ayuda médica si es necesario. Recuerda que tu bienestar es lo más importante.' },
  { src: Img.image15, alt: 'Sorprendido', message: 'Disfruta este momento inesperado al máximo. Respira profundamente y permítete sentir la emoción en su totalidad. ¿Qué te causó tanta sorpresa? Escribe o dibuja tus pensamientos y emociones para recordar este momento especial.' },
  { src: Img.image9, alt: 'Frustrado', message: 'Es válido sentirse así. A veces las cosas no salen como esperamos. Respira profundamente y tómate un momento para calmarte. Luego, busca soluciones prácticas y enfoca tu energía en lo que puedes cambiar. Recuerda que pedir ayuda es valioso.' },
  { src: Img.image12, alt: 'Asustado', message: 'El miedo puede aparecer ante situaciones desconocidas o amenazantes. Respira profundamente y recuerda que puedes enfrentarlo. Busca apoyo en tus seres queridos y recuerda que siempre hay alguien que puede ayudarte.' },
  { src: Img.image16, alt: 'Cansado', message: 'El cansancio puede aparecer por diversas razones, como falta de descanso o estrés. Tómate un tiempo para descansar y cuidar de ti misma. Recuerda que tu bienestar es lo más importante.' },
  { src: Img.image10, alt: 'Solitario', message: 'La soledad puede aparecer incluso estando rodeada de personas. Permítete sentir y busca actividades que te reconforten, como leer un libro o escuchar música. Recuerda que nunca estás sola.' },
  { src: Img.image7, alt: 'Avergonzado', message: 'La vergüenza puede surgir por situaciones incómodas o errores. Permítete sentir y luego reflexiona sobre lo ocurrido. Respira profundamente y cuenta hasta diez. Si es necesario, habla con alguien de confianza.' },
  { src: Img.image6, alt: 'Molesto', message: 'Es válido sentirse así. A veces, la molestia surge cuando nos sentimos frustradas, ignoradas o injustamente tratadas. Respira profundamente y cuenta hasta diez. Luego, escribe o dibuja lo que sientes; puede ayudarte a liberar esa emoción.' },
];




function App() {

  const [message, setMessage] = useState('Haz clic en un emoji para ver un mensaje');

  const handleEmojiClick = (emojiMessage) => {
    setMessage(emojiMessage);
  };

  return (
    <div style= {{background: "#d8f8e1", minHeight: "100vh"}}>
    <div className="emoji-container">
        <div className="title-container">
          <h3>Tabla de Emociones</h3>
          <h4>Usa esta tabla de emociones para entender y expresar cómo te sientes! </h4>
        </div>
      <div className="emoji-grid">
        {emojis.map((emoji, index) => (
          <div key={index} className="emoji-item">
            <small>{emoji.alt}</small>
            <img
              src={emoji.src}
              alt={emoji.alt}
              onClick={() => handleEmojiClick(emoji.message)}
              className="emoji"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-3 message efecto-vidrio">{message}</div>
    </div>
    </div>
  );
};



export default App;
