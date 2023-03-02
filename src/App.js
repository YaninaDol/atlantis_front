import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from "./StartPage";
function App() {
  return (
      <div>
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<StartPage/>}></Route>
                    {/* <Route path='/registration' element={<Registration/>}></Route>
                    <Route path='/login' element={<Catalog/>}></Route>
                    <Route path='/apple' element={<Apple/>}></Route>

                    <Route path='/smartphones' element={<Smartphones/>}></Route>
                    <Route path='/tablets' element={<Tablets/>}></Route>
                    <Route path='/watches' element={<Watches/>}></Route>

                    <Route path='/producttable' element={<ProductTable/>}></Route>
                    <Route path='/usertable' element={<UserTable/>}></Route>
                    <Route path='/reset' element={<Reset/>}></Route> */}
                  </Routes>
                </BrowserRouter>
                </div>
  );
}

export default App;
