import {data} from '../components/Data'
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
          <MovieCardmovie={movie}/>
        ))}
      </div>

    </div>
    </div>
  );
}

export default App;
