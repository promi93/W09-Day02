import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";
import Welcome from "./components/Welcome";

function App() {
  return (
    <body className="App">
      <header>
        <MyNav />
        <Welcome />
      </header>
      <main>
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </body>
  );
}

export default App;
