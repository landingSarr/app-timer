//Importer les modules dont notre composant a besoin pour ce composant

import React, {Component} from 'react'
import uuid from 'uuid';
import ActionContainer from './ActionContainer';
import ListContainer from './ListContainer';



// Créer le composant

class Box extends Component {
    state = {
        timers: [
            {
                title: "Apprendre React",
                project: "Développement web",
                id: "11",
                elapsed: "0",
                runningSince: null,
            },
            {
                title: "Apprendre Angular",
                project: "Développement web",
                id: "12",
                elapsed: "0",
                runningSince: null,
            }
        ]
    }
    handleCreateTimer = ({title, project}) => {
        const timer = {
            title,
            project,
            id: uuid.v4(),
            elapsed: 0,
            runningSince: null
        }
        this.setState({
            timers: [...this.state.timers, timer]
        })
    }
    handleEditTimer = ({id, title, project}) => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === id) {
                    return {
                        ...timer,
                        title,
                        project
                    }
                }
                return {...timer}
            })
        })
    }
    handleDelete = id => {
        this.setState({
            timers: this.state.timers.filter(timer => timer.id !== id)
        });
    }
    handlePlay = id => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if (id === timer.id) {
                    return {
                        ...timer,
                        runningSince: now
                    }
                } else {
                    return {...timer}
                }
            })
        })
    }

    handlePause = id => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if (id === timer.id) {
                    const nextElapsed = now - timer.runningSince;
                    return {
                        ...timer,
                        runningSince: null,
                        elapsed: timer.elapsed + nextElapsed
                    }
                } else {
                    return {...timer}
                }
            })
        })
    }

    render() {
        return (
            <div className="boxed--view">
                <div className="boxed--view__box">
                    <ListContainer
                        onFormSubmit={this.handleEditTimer}
                        onDelete={this.handleDelete}
                        timers={this.state.timers}
                        onPlay={this.handlePlay}
                        onPause={this.handlePause}
                    />
                    <ActionContainer onFormSubmit={this.handleCreateTimer}/>
                </div>
            </div>
        )
    }
}

// Exporter le composant pour le rendre disponible

export default Box;