import React, { Component } from 'react'
import loading from './Spinner1.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center mb-2">
          <img src={loading} alt="loading" width="50" height="50"/>
      </div>
    )
  }
}

export default Spinner