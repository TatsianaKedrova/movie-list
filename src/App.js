import './App.css';
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";



function App() {
    return (
        <div className="App">
           <h1>Redux Movies</h1>
            <div className="container">
                <MovieList />
                <MovieDetail />

            </div>

        </div>
    );
}

export default App;
