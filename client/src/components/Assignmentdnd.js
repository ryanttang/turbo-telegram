import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button } from "@blueprintjs/core";

// fake data generator
const getProperty = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `Property-${k + offset}`,
    content: `PROPERTY: ${k + offset} | ID#: ${Math.round(Math.random() * 10000)}`,
    color: '#2a3844',
  }))

  const getEmployees = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `Employee-${k + offset}`,
    content: `Employee: ${k + offset} | ID#: ${Math.round(Math.random() * 100000)}`,
    color: Math.random () > 0.75 ? 'purple': Math.random() > 0.5 ? 'darkgreen' : Math.random() > 0.25 ? '#ff9500' : '#13a3ff',
  }))

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

const grid = 4

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  height: 25,
  width: 240,
  color: 'white',
  fontSize: 16,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : '2a3844',

  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : '#eee',
  padding: grid,
  margin: '7px',
  width: 240,
  background: '#2a3844'
})

class Assignmentdnd extends Component {
  state = {
    list1: getProperty(9,1),
    list3: getEmployees(20, 1)
  }

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  droppableIds = {
    droppable1: 'list1',
    // droppable2: 'list2',
    droppable3: 'list3'
  }

  getList = id => this.state[this.droppableIds[id]]

  onDragEnd = result => {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) { return }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      )

      let copiedState = Object.assign({}, this.state)

      if (source.droppableId === 'droppable1') {
        copiedState.list1 = items
      } else if (source.droppableId === 'droppable2') {
        copiedState.list2 = items
      } else if (source.droppableId === 'droppable3') {
        copiedState.list3 = items
      }

      this.setState(copiedState)
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      )

      console.warn('result', result)
      this.setState({
        list1: result.droppable1 ? result.droppable1 : this.state.list1,
        list2: result.droppable2 ? result.droppable2 : this.state.list2,
        list3: result.droppable3 ? result.droppable3 : this.state.list3
      })
    }
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    const lists = [
      {
        droppableId: 'droppable1',
        listId: 'list1',
        title: 'Properties'
      },
    //   {
    //     droppableId: 'droppable2',
    //     listId: 'list2',
    //     title: 'Properties B'
    //   },
      {
        droppableId: 'droppable3',
        listId: 'list3',
        title: 'Employees'
      },
    ]
    return (
      <div style={{ display: 'flex'}}>
      <Button>Save</Button>
        <DragDropContext onDragEnd={this.onDragEnd}>

          {lists.map((list, listIndex) =>
            <Droppable key={'list-droppable-' + listIndex} droppableId={list.droppableId}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}>
                  <h4>
                    {list.title}
                  </h4>
                  {this.state[list.listId] && this.state[list.listId].map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                          <div style={{ background: item.color }}>
                            {item.content}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  <Button>Edit Cards</Button>
                </div>
              )}
            </Droppable>
          )}         
        </DragDropContext>
          <ul><br />
          <b>Purple:</b> Maintenance
          <br />
          <b>Orange:</b> Cleaning
          <br />
          <b>Blue:</b> Hospitality
          <br />
          <b>Green:</b> Landscaping 
          <br />
          </ul> 
     </div>
    )
  }
}

export default Assignmentdnd