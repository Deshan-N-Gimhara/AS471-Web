import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Task from "./pages/Task";
import Request from "./pages/Request";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route path='/task' element={<Task />}></Route>
          <Route path='request' element = {<Request />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
