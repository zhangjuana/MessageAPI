import React, { Component } from 'react'

export default class AScreen extends Component {
  render() {
    return (
      <div>
        <p>AScreen</p>
        <p
            onClick={()=>{
                console.log(11)
                const location = {
                    path:'/b',
                    state:{
                        a:1
                    }
                }
                this.props.history.push('/b',{a:1});
            }}
        >toB</p>
      </div>
    )
  }
}
