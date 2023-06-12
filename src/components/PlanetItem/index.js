import './index.css'

const PlanetItem = props => {
  const {item} = props
  const {imageUrl, name, description} = item

  return (
    <div className="PlanetItem">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="name"> {name} </h1>
      <p className="description"> {description} </p>
    </div>
  )
}

export default PlanetItem
