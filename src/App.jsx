import "./App.css";
import { MyRoutes } from "./routers/routes";
import {Footer} from "./components/Footer";
function App() {
  return (
    <div>
      <header>
        <h1 className="title">Películas 🍿</h1>
      </header>
      <MyRoutes />
      <Footer/>
    </div>
  );
}

export default App;