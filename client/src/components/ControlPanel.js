import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button, Intent, InputGroup, Dialog, FileInput, MenuItem, Menu} from "@blueprintjs/core";
import Layout from './Layout';

// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `Worker-${k + 1 + offset}`,
        content: `Worker ${k + 1 + offset}`
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 5;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 1,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 200
});

class ControlPanel extends Component {
    state = {
        items: getItems(5),
        selected: getItems(0, 0)
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2') {
                state = { selected: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
          <div>
              <h1>Control Panel</h1>
              <div>
              <h5>Select a property:<Menu className="grid-item">
                    <MenuItem
                    icon="home"
                    rightIcon="caret-down"
                    text="Please select a property" >
                        <MenuItem text="Property 1" />
                        <MenuItem text="Property 2" />
                        <MenuItem text="Property 3" />
                    </MenuItem>
                </Menu></h5><h5>Enter a date:<InputGroup className="grid-item"
                    leftIcon="calendar"
                    placeholder="Enter a cleaning date mm/dd/yyyy..."/>
                
                </h5><h5>Cleaning start time:<InputGroup className="grid-item"
                    leftIcon="time"
                    placeholder="Enter cleaning time..."/>
                </h5>
                </div>
            
            <br></br>
            <h4>Drag and drop workers between lists to manage availability:</h4>
          <div id="dragdrop">
            
            <DragDropContext onDragEnd={this.onDragEnd}>
            <div id="available">
            <center><h4>Available workers<h4>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.items.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable></h4></h4></center></div>
                <div id="assigned">
                <center><h4>Assigned workers<h4>
                <Droppable droppableId="droppable2">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.selected.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content}
                                        </div>
                                    )}                                
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                </h4></h4></center></div>
            </DragDropContext>
            </div>
                <div id="cleaning">
                <center>
                <h4>
                    <Button>Submit</Button>
                </h4>
                </center>
                </div>
            </div>


        );
    }
}

export default ControlPanel