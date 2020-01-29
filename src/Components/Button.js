//Importer les modules dont notre composant a besoin pour ce composant

import React, {Component} from 'react'


// Créer le composant

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.handleFormOpen} className='button__outline'>
                +
            </button>
        )
    }
}

// Exporter le composant pour le rendre disponible

export default Button;