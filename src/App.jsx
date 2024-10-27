import React from 'react';
import Ficha from './components/Ficha.jsx';
import catimg from './assets/cat.jpg';
import dogimg from './assets/dog.jpg';
import turtleimg from './assets/turtle.jpg';
import birdimg from './assets/bird.jpg';

//Definir el array de animales
const animals = [
    {
        id: 0,
        animal: 'Gato',
        atribute: 'Feroz',
        imageURL: catimg,
        imageSize: 350,
        description: 'gato durmiendo',
    },
    {
        id: 1,
        animal: 'Perro',
        atribute: 'Bello',
        imageURL: dogimg,
        imageSize: 350,
        description: 'husky ',
    },
    {
        id: 2,
        animal: 'Tortuga',
        atribute: 'Lenta',
        imageURL: turtleimg,
        imageSize: 350,
        description: 'tortuga nadando',
    },
    {
        id: 3,
        animal: 'Pajaro',
        atribute: 'Azul',
        imageURL: birdimg,
        imageSize: 350,
        description: 'pajaro azul',
    }
];

function App() {
    return (
        <>
            {animals.map((animal) => (
                <Ficha
                    key={animal.id}
                    animal={animal.animal}
                    atribute={animal.atribute}
                    imageURL={animal.imageURL}
                    imageSize={animal.imageSize}
                    description={animal.description}
                />
            ))}
        </>
    );
}

export default App
