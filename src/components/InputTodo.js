import React, { Component } from 'react'

class InputTodo extends Component {

    state = {
        title: '',
        name: ''
    }

    onChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Add Todo..."
                value={this.state.title}
                onChange={this.onChange}
                name="title" />
                <input type="text" placeholder='Enter your name'
                value={this.state.name}
                onChange={this.onChange}
                name="name" />
                <button>Submit</button>
            </form>
        )
    }
}
export default InputTodo;