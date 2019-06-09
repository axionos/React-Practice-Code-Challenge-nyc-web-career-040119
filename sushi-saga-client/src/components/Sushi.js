import React, { Fragment } from 'react'

class Sushi extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEaten: false
    }
  }

  handleClick = (e) => {
    this.setState({
      isEaten: true
    })
    this.props.platesEaten(this.props.name)
  }

  render(){
    console.log('Sushi Props', this.props)
    console.log('Sushi State', this.state)
    // console.log('Sushi State', this.state.isEaten)

  return (
    <div className="sushi">
      <div className="plate"
           onClick={this.handleClick}>

        {this.state.isEaten ? null : <img src={this.props.imgUrl} width="100%" />}

      </div>
      <h4 className="sushi-details">
        {this.props.name} - ${this.props.price}
      </h4>
    </div>
  )
}
}

export default Sushi
