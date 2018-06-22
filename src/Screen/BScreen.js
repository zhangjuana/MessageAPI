import React, { Component } from 'react'

export default class BScreen extends Component {
  render() {
    return (
      <div>
        <p>BScreen</p>
        <p
            onClick={()=>{
                this.props.history.goBack();
            }}
        >goBack</p>
      </div>
    )
  }
}
