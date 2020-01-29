//Importer les modules dont notre composant a besoin pour ce composant

import React, {Component} from 'react';
import TimerForm from './TimerForm';
import Button from './Button';

// Créer le composant

class ActionContainer extends Component {
    state = {
        isFormOpen: false
    }
    handleFormOpen = () => {
        this.setState({isFormOpen: true});
    }
    handleFormClose = () => {
        this.setState({isFormOpen:false});
    }
    onFormSubmit = ({title, project}) => {
        this.handleFormClose()
        this.props.onFormSubmit({title, project});
    }

    render() {
          if(this.state.isFormOpen) {
              return (
                  <TimerForm
                      onFormSubmit={this.onFormSubmit}
                      onCloseForm={this.handleFormClose}/>
                      )
          } else {
              return <Button handleFormOpen={this.handleFormOpen}/>
          }
    }
}

// Exporter le composant pour le rendre disponible

export default ActionContainer;