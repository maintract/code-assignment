import dropDown from '../assets/dropdown_icon.svg'

export default function Header() {
  return (
    <header>
      <div className="menu">
        <i>File</i>
        <i>Edit</i>
        <i>Insert</i>
        <i>View</i>
        <i>Tools</i>
      </div>
      <div className="toolbar">
        <Icon content="Arial" isDropdown />
        <Icon content="12" isDropdown />
        <Icon content="Aa" isDropdown />
        <Icon content={<b>B</b>} />
        <Icon content={<i>I</i>} />
        <Icon content={<u>U</u>} />
        <span className="icon no-phone">|</span>
        <Icon content="P" isExtra />
        <Icon content="H1" isExtra />
        <Icon content="H2" isExtra />
        <Icon content="H3" isExtra />
        <Icon content="..." isExtra />
      </div>
    </header>
  )
}

const Icon = ({ content, isDropdown, isExtra }) => {
  return (
    <span className={`icon disabled${isExtra ? ' no-phone' : ''}`}>
      {content}
      {isDropdown && (
        <img style={{marginLeft: 16}} src={dropDown} />
      )}
    </span>
  )
}