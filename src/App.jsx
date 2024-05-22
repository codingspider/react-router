
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from './component/Login';
import Home from "./component/Home";
import { About } from "./component/About";
import { Error } from "./component/Error";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
