import React, { Component } from 'react'
import './index.css'
import { Board } from 'react-trello'

const data = require('./managers_data.json')

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

class Managerdnd extends Component {
  state = { boardData: { lanes: [] } }

  setEventBus = eventBus => {
    this.setState({ eventBus })
  }

  async componentWillMount() {
    const response = await this.getBoard()
    this.setState({ boardData: response })
  }

  getBoard() {
    return new Promise(resolve => {
      resolve(data)
    })
  }

  completeCard = () => {
    this.state.eventBus.publish({
      type: 'ADD_CARD',
      laneId: 'MANAGERS',
      card: { id: 'Manager_X', title: 'ID#XXX', label: 'Manager', description: 'Someone Somebody' },
      cardStyle: { width: 100 }

    })
    // this.state.eventBus.publish({type: 'REMOVE_CARD', laneId: 'MANAGERS', cardId: 'Manager_X'})
  }

  addCard = () => {
    this.state.eventBus.publish({
      type: 'ADD_CARD',
      laneId: 'PROPERTIES_2',
      card: { id: 'X_Property', title: 'ID#XX', label: 'Property', description: 'New Property' },
      style: { width: '320' }
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
          <h3>Managers & Properties</h3>
        </div>
        <div className="App-intro">
          <button onClick={this.completeCard} style={{ margin: 5 }}>
            Add Manager
                    </button>
          <button onClick={this.addCard} style={{ margin: 5 }}>
            Add Property
                    </button>
          <Board
            editable
            onCardAdd={this.handleCardAdd}
            data={this.state.boardData}
            draggable
            onDataChange={this.shouldReceiveNewData}
            eventBusHandle={this.setEventBus}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
            style={{ backgroundColor: "#30404d" }}
          // onCardClick={onCardClick}
          // onCardDelete={handleCardDelete}


          />
        </div>
      </div>
    )
  }
}

export default Managerdnd