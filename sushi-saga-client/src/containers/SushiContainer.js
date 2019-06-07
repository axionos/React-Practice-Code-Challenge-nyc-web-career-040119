import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log('SushiContainer Props', props)

  const randomFour = props.sushi.sort(() => 0.5 - Math.random()).slice(0, 4)
  // console.log(randomFour)

  const renderSushi = randomFour.map(sushi => { return <Sushi
    key={sushi.id}
    name={sushi.name}
    price={sushi.price}
    img_url={sushi.img_url}
    />
  })

  return (
    <Fragment>
      <div className="belt">
        { renderSushi }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
