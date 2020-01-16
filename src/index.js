import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import initial from "./initial-data";
import {DragDropContext} from "react-beautiful-dnd";

import Column from "./column";
class App extends Component {
    state = initial;
onDragEnd = result=>{
    //Todo reorder
}
    render() {

        return(
            <DragDropContext

            onDragEnd={this.onDragEnd}

            >
                { this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
            return <Column key={columnId} column={column} tasks={tasks}/>;
            })}
            </DragDropContext>

        );

    }
}

ReactDOM.render(<App />, document.getElementById('root'));


