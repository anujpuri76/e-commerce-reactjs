import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          exact={true}
          element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
