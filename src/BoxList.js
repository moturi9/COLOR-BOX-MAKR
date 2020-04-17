import React, { Component } from 'react'
import Box from './Box'
import BoxListForm from './BoxListForm'

class BoxList extends Component {
  constructor(props) {
    super(props)
    this.state = { boxes: [] }
    this.create = this.create.bind(this)
    // this.remove = this.remove.bind(this)
  }

  create(newBox) {
    this.setState({ boxes: [...this.state.boxes, newBox] })
  }

  remove(id) {
    this.setState({ boxes: this.state.boxes.filter(box => box.id !== id) })
  }

  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        id={box.id}
        width={box.height}
        height={box.width}
        color={box.color}
        removeBox={() => this.remove(box.id)}
      />
    ))
    return (
      <div>
        <h1> Color box maker </h1>
        <BoxListForm createBox={this.create} />
        <br />
        {boxes}
      </div>
    )
  }
}

/* export the component to be used in other components */
export default BoxList
