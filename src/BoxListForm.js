import React, { Component } from 'react'
import uuid from 'uuid/v4'

class BoxListForm extends Component {
  constructor(props) {
    super(props)
    this.state = { height: '', width: '', color: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const newBox = { ...this.state, id: uuid() }
    this.props.createBox(newBox)
    this.setState({ height: '', width: '', color: '' })
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="height">Height: </label>
        <input
          type="text"
          name="height"
          id="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <br />
        &nbsp;
        <label htmlFor="width">Width: </label>
        <input
          type="text"
          name="width"
          id="width"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <br />
        &nbsp;
        <label htmlFor="color">Color: </label>&nbsp;
        <input
          type="text"
          name="color"
          id="color"
          value={this.state.color}
          onChange={this.handleChange}
        />
        <br />
        <br />
        &nbsp;
        <button>Add New Box</button>
      </form>
    )
  }
}

/* export the component to be used in other components */
export default BoxListForm
