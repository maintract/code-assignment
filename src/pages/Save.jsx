
import { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import axios from 'axios'

import Header from '../components/Header'
import SidePanel from '../components/SidePanel'
import data from '../../data'

const Save = () => {
  const [editor] = useState(() => withReact(createEditor()))
  const [editorData, setEditorData] = useState(data)
  const [saveError, setSaveError] = useState(null)

  const handleSave = () => {
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
    <>
      <Header />
      <div className="app">
        <Slate editor={editor} value={editorData} onChange={value => setEditorData(value)}>
          <Editable className="slate-editor" />
        </Slate>
      </div>
      <SidePanel onSave={handleSave} saveError={saveError} />
    </>
  )
}

export default Save


