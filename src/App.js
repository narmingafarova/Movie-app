import { useContext } from "react";
import "./App.css";
import MovieList from "./components/movieList";
import Search from "./components/search";
import { GlobalContext } from "./GlobalContext";

function App() {
  const { movieList } = useContext(GlobalContext);
  return (
    <div style={{ background: movieList && movieList.length > 0 && 'darkcyan' }}>
      <Search />
      <MovieList />
    </div>
  );
}

export default App;
