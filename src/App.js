import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from "./StartPage";
import BookPage from "./BookPage";
import News from "./News";
import About from "./About";
import AdminPage from "./AdminPage";
function App() {
  return (
      <div>
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<StartPage/>}></Route>
                    <Route path='/bookpage' element={<BookPage/>}></Route>
                    <Route path='/news' element={<News/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/admin' element={<AdminPage/>}></Route>
                  </Routes>
                </BrowserRouter>
                </div>
  );
}

export default App;
