import React from  'react';
import { connect } from 'react-redux';
const TodoItems = (props) => {
    console.log(props);
    return (
        <div>
            <ul>
                {
                    props.todos.map((todo,idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <li >{todo}</li>
                                <button onClick={() => props.deleteTask(todo)}>Delete</button>
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </div>
    )

};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (todo) => dispatch({
            type: 'REMOVE_TASK',
            payload: todo
        })
    }
}

const mapStateToProps = (state) => {
    return {
        todos : state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
