import { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import initialValue from './assets/default_content'
import Header from './components/Header'
import SidePanel from './components/SidePanel'
import NewFile from './components/NewFile'
import {Switch, Route } from 'react-router-dom'

function App() {
  const [editor] = useState(() => withReact(createEditor()))

  return (
    <>
     
      <Header />
     
        <div className="app">
        <Switch> 
          <Route exact path="/new" component={NewFile}>
          </Route> 
        </Switch>
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
