import {data} from '../components/Data'
import Navbar from '../components/Navbar'
function App() {
  return (
    <div className="App">
      <h1>movie app</h1>
    <Navbar/>
    <div className="main">
      <div className= "tabs">
        <div className="tab">Movie</div>
        <div className="tab">Favourites</div>
      </div>
      <div className="list">
        {data.map(movie=>(
          <MovieCard movie={movie}/>
        ))}
      </div>

    </div>
    </div>
  );
}

export default App;
