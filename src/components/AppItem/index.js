import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp
  return (
    <li className="app_list">
      <img className="image_app" alt={appName} src={imageUrl} />
      <p className="app_heading">{appName}</p>
    </li>
  )
}

export default AppItem
