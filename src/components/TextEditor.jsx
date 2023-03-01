import { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import initialValue from '../assets/default_content'

const TextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))
  const [value, setValue] = useState(initialValue)

  const handleValueChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div className="app">
        <Slate editor={editor} value={value} onChange={handleValueChange}>
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
    </>
  )
}

export default TextEditor
