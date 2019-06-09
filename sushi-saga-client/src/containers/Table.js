import React, { Fragment } from 'react'

const Table = (props) => {

  /*
     renderPlates takes an array
     and renders an empty plate
     for every element in the array
  */
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  console.log('Table Props', props)
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.budget } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.platesEatenStatus)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table
