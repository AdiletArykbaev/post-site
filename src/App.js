import './App.css';
import Header from "./components/Header/Header";
import Main from './Pages/MainPage//Main';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Header/>
       <Routes>
        <Route path="/main" component={<Main/>} />
      </Routes>
    </div>
    
  );
}

export default App;
