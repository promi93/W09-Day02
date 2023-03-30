import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
// import AllTheBooks from "./components/AllTheBooks";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

function App() {
  return (
    <body xs={12} md={8} lg={3} className="App">
      <header>
        <MyNav />
        <Welcome />
      </header>
      <main>
        <BookList />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </body>
  );
}

export default App;
