import React, { Component } from 'react'

class Box extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}rem`,
            width: `${this.props.width}rem`,
            backgroundColor: `${this.props.color}`
          }}
        />
        <button onClick={this.props.removeBox}>X</button>
      </div>
    )
  }
}

/* export the component to be used in other components */
export default Box
