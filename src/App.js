import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from "./StartPage";
import BookPage from "./BookPage";
import News from "./News";
function App() {
  return (
      <div>
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<StartPage/>}></Route>
                    <Route path='/bookpage' element={<BookPage/>}></Route>
                    <Route path='/news' element={<News/>}></Route>
                  </Routes>
                </BrowserRouter>
                </div>
  );
}

export default App;
