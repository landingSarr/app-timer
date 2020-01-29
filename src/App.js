//Importer les modules dont notre composant a besoin pour ce composant
import React, {Component} from 'react';
import Box from './Components/Box';
import './App.css';
import logo from './logo.png';

// Créer le composant

class App extends Component {

    render() {
        return (
            <div className="App">
                <Box/>
            </div>

        )
    }
}

// Exporter le composant pour le rendre disponible
export default App;

