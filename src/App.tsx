import "./App.css";
import { Navigation } from "./component/Navigation";
import Routes from "./routes";

const App = () => {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <body>
        <Routes />
      </body>
    </div>
  );
};

export default App;
