import React from 'react';
import { Routes, Route} from 'react-router-dom';
import New from './pages/New';
import Open from './pages/Open';
import Home from './pages/Home';
import Save from './pages/Save';
import Login from './pages/Login';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new" element={<New />} />
        <Route path="/open" element={<Open />} />
        <Route path='/save' element={<Save />} />
      </Routes>
    </>
  );
};

export default App;

