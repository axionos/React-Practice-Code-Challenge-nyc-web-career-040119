import React, { Fragment } from 'react'

class Sushi extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEaten: false
    }
  }

  /*
    if budget amount is bigger than the price of the sushi
   -  remove sushi from the plate and render the empty plate
   -  and update the budget (budget - sushi = balance)
   -  otherwise, leave the sushi on the plate and don't render the plate
  */
  handleClick = (e) => {
    let newBalance = this.props.budget - this.props.price

    // if budget is bigger than the price of the sushi
    if (this.props.budget >= this.props.price) {
      // update the budget
      this.props.balance(newBalance)
      // render the empty plate
      this.props.platesEaten(this.props.name)
      // update the eaten state to true
      this.setState({
        isEaten: true,
      })
    }

  }

  render(){
    console.log('Sushi Props', this.props)
    console.log('Sushi State', this.state)

  return (
    <div className="sushi">
      <div
        className="plate"
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
