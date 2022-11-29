import { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import initialValue from './assets/default_content'
import Header from './components/Header'
import SidePanel from './components/SidePanel'

function App() {
  const [editor] = useState(() => withReact(createEditor()))

  return (
    <>
      <Header />
      <div className="app">
        <Slate editor={editor} value={initialValue}>
          <Editable className="slate-editor" />
        </Slate>
        <div className="card">
          <p>
            Edit and move any file you feel is appropriate
          </p>
        </div>
        <p className="note">
          Good luck!
        </p>
      </div>
      <SidePanel />
    </>
  )
}

export default App
