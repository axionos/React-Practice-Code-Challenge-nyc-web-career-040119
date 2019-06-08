import React from 'react'

const MoreButton = (props) => {
  console.log("More Button Props", props )
  return <button onClick={props.genMoreSushi}>
          More sushi!
        </button>
}

export default MoreButton
