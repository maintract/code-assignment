import { useState } from 'react'
import { Link } from 'react-router-dom'
import ToolBar from './ToolBar'
import New from '../pages/New';
import Open from '../pages/Open';
import axios from 'axios'
import data from '../../data.json'

const Header = ({})=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editorData, setEditorData] = useState(data)
  const [saveError, setSaveError] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNewClick = () => {
    <New />
  }
  const handleOpenClick = () => {
    <Open />
  }

  const handleSaveClick = () => {
    axios.post('http://localhost:5173/save', editorData)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        setSaveError('Failed to save data. Please try again later.')
        console.error(error)
      })
  }

  return (
    <header>
      <div className="menu">
        <i onClick={toggleMenu}>File</i>
        <i>Edit</i>
        <i>Insert</i>
        <i>View</i>
        <i>Tools</i>
      </div>
      {isMenuOpen && (
        <div className="menu-dropdown">
          <Link to="/new" onClick={handleNewClick}>New</Link>
          <Link to="/open" onClick={handleOpenClick}>Open</Link>
          <Link to="/save" onClick={handleSaveClick}>Save</Link>
        </div>
      )}
      <ToolBar />
    </header>
  )
}

export default Header
