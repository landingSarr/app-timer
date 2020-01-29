//Importer les modules dont notre composant a besoin pour ce composant

import React, {Component} from 'react'
import Container from './Container';

// Créer le composant

class ListContainer extends Component {
    renderContainer = () => {
        return this.props.timers.map((timer => {
            return (
                <Container
                    onFormSubmit={this.props.onFormSubmit}
                    onDelete={this.props.onDelete}
                    key={timer.id}
                    onPlay={this.props.onPlay}
                    onPause={this.props.onPause}
                    {...timer} />
                )
        }))

    };
    render() {
        return (
            <div className="list--container">
               {this.renderContainer()}
            </div>
        )
    }
}

// Exporter le composant pour le rendre disponible

export default ListContainer;