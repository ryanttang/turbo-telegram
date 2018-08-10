import React, {Component} from 'react'
import './index.css'
import {Board} from 'react-trello'


const data = require('./assignments_data.json')

const handleDragStart = (cardId, laneId) => {
    console.log('drag started')
    console.log(`cardId: ${cardId}`)
    console.log(`laneId: ${laneId}`)
}

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    console.log('drag ended')
    console.log(`cardId: ${cardId}`)
    console.log(`sourceLaneId: ${sourceLaneId}`)
    console.log(`targetLaneId: ${targetLaneId}`)
}

class Assignmentdnd extends Component {
    state = {boardData: {lanes: []}}

    setEventBus = eventBus => {
        this.setState({eventBus})
    }

    async componentWillMount() {
        const response = await this.getBoard()
        this.setState({boardData: response})
    }

    getBoard() {
        return new Promise(resolve => {
            resolve(data)
        })
    }

    completeCard = () => {
        this.state.eventBus.publish({
            type: 'ADD_CARD',
            laneId: 'EMPLOYEES',
            card: {id: 'Employee_X', title: 'ID#XXXX', label: 'Service', description: 'Someone Somebody'}
            
        })
        // this.state.eventBus.publish({type: 'REMOVE_CARD', laneId: 'MANAGERS', cardId: 'Manager_X'})
    }

    addCard = () => {
        this.state.eventBus.publish({
            type: 'ADD_CARD',
            laneId: 'BLOCKED',
            card: {id: 'Ec2Error', title: 'EC2 Instance Down', label: '30 mins', description: 'Main EC2 instance down'}
        })
    }

    shouldReceiveNewData = nextData => {
        console.log('New card has been added')
        console.log(nextData)
    }

	handleCardAdd = (card, laneId) => {
		console.log(`New card added to lane ${laneId}`)
		console.dir(card)
	}

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h3>Employees & Assignments</h3>
                </div>
                <div className="App-intro">
                    <button onClick={this.completeCard} style={{margin: 5}}>
                        Add Employee
                    </button>
                    {/* <button onClick={this.addCard} style={{margin: 5}}>
                        Add Assignment
                    </button> */}
                    <Board
                        editable
						onCardAdd={this.handleCardAdd}
                        data={this.state.boardData}
                        draggable
                        onDataChange={this.shouldReceiveNewData}
                        eventBusHandle={this.setEventBus}
                        handleDragStart={handleDragStart}
                        handleDragEnd={handleDragEnd}
                        style={{backgroundColor: "#30404d"}} 
                        // onCardClick={onCardClick}
                        // onCardDelete={handleCardDelete}
                    />
                  
                </div>
            </div>
        )
    }
}

export default Assignmentdnd