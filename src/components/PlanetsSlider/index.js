import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const setting = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div data-testid="planets" className="slider-main-container">
      <h1 className="slider-heading"> PLANETS </h1>
      <Slider className="slider" {...setting}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} item={each} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
