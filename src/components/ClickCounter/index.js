import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onPress = () => {
    this.setState(prevState => {
      console.log(`previous count value is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The button has been clicked
          <span className="span">{count}</span>
          times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button className="button" onClick={this.onPress}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
