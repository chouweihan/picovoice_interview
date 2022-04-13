import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PyTorchPage from './Pages/PyTorchPage';
import GoogleWidgetPage from './Pages/GoogleWidgetPage';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navigation/Navbar';
import Error from './Pages/Error';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pytorch" element={<PyTorchPage />} />
          <Route path="/googlewidget" element={<GoogleWidgetPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App