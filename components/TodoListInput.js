import React from 'react'

class TodoListInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            value: ''
        }
    }

    render() {
        var itemLIs = this.state.items.map((itemLI, i) => {
            return <li key={i} className="list-group-item">{itemLI}</li>
        })

        return <div>
            <input placeholder="Hermione doesn't even need a to do list." className="form-control text-center largeFont" type="text" value={this.state.value} onChange={(e) => this.update(e)} onKeyPress={(e) => this.captureEnterKey(e)} />
            <ul className="list-group largeFont">{itemLIs}</ul>
        </div>
    }

    update(e) {
        this.setState({value: e.target.value})
    }

    captureEnterKey(e) {
        if (e.charCode === 13) {
            var items = this.state.items
            items.push(e.target.value)
            this.setState({value: '', items: items})
        }
    }
}

export default TodoListInput
