import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {first: true,last: true}
  onFirst = () => {
    this.setState(prvt => ({fist: !prvt.first}))
  }
  onLast = () => {
    this.setState(prvt => ({last: !prvt.last})) 
  }
  render() {
   
    const {first,last} = this.state
    const heading = first ? 'Joe' : null
    const heading1 = last ? 'Jonas' : null
    return (
      <div className="background">
        <h1 className="heading"> Show/Hide </h1>

        <div>
          <button className="button" onClick={this.onFirst}>
            {' '}
            Show/Hide Firstname{' '}
          </button>
          <button className="button" onClick={this.onLast}>
            {' '}
            Show/Hide Lastname{' '}
          </button>
        </div>
        <div>
          <p> {heading} </p>
          <p> {heading1} </p>
        </div>
      </div>
    )
  }
}

export default ShowHide
