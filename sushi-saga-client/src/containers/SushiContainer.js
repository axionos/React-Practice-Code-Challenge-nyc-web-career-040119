import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  console.log('SushiContainer Props', props)

  // =================================================
  // RENDER RANDOM 4 SUSHIS
  // const randomFour = props.sushi.sort(() => 0.5 - Math.random()).slice(0, 4)
  // =================================================

  const sushiCopy = [...props.sushi]
  // console.log('Sushi Copy', sushiCopy)

  // RENDER 1ST TO 4TH SUSHI IN THE ARRAY
  const renderSushi = sushiCopy.slice(0, 4).map(sushi => { return <Sushi
    key={sushi.id}
    name={sushi.name}
    price={sushi.price}
    imgUrl={sushi.img_url}
    />
  })

  return (
    <Fragment>
      <div className="belt">
        { renderSushi }
        <MoreButton
          genMoreSushi={props.genMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
