import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
// import AllTheBooks from "./components/AllTheBooks";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import CommentList from "./components/CommentList";
import AddComment from "./components/AddComment";

function App() {
  return (
    <body xs={12} md={8} lg={3} className="App">
      <header>
        <MyNav />
        <Welcome />
      </header>
      <main>
        <BookList>
          <CommentArea />
          <CommentList />
          <AddComment />
        </BookList>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </body>
  );
}

export default App;
