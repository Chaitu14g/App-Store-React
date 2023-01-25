import './index.css'

const TabItem = props => {
  const {eachTab, filterApps, id} = props
  const {displayText, tabId} = eachTab
  let styleElement = ''
  let styleLine = ''
  const filterAppsAndColorCng = () => {
    filterApps(tabId)
  }
  if (tabId === id) {
    styleElement = 'hr_line_blue'
    styleLine = 'hr_color'
  }
  return (
    <li className="listItem" onClick={filterAppsAndColorCng}>
      <button type="button" className={`tab_heading ${styleElement}`}>
        {displayText}
      </button>
      <hr className={`hr_line ${styleElement} ${styleLine}`} />
    </li>
  )
}

export default TabItem
