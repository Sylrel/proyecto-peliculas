import './Styles.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import SingleMovie from './components/SingleMovie';
import { GlobalStyled, StyledApp } from './Styles.js';

function App() {
  return (
    <StyledApp>
      <GlobalStyled />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/movies/:id' element={<SingleMovie />}/>
      </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
