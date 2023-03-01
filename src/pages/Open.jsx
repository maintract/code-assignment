import { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
// import data from '../data.json' 
import Header from '../components/Header'
import SidePanel from '../components/SidePanel'
import ToolBar from '../components/ToolBar'

const Open = () => {
  const [editor] = useState(() => withReact(createEditor()));
 
  const data = [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "lorem ipsum"
        }
      ]
    }
  ]
 
  return (
    <>
      <Header />
      <div className="app">
        <Slate editor={editor} value={data}>
          <ToolBar />
          <Editable className="slate-editor" />
        </Slate>
      </div>
      <SidePanel />
    </>
  )
}

export default Open
