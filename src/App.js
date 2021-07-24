import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtisPage from './pages/ArtistPage/ArtisPage';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import FavoritePage from './pages/favoritePage/favoritePage';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ArtisPage />
        </Route>
        <Route path="/favorite">
          <FavoritePage/>
        </Route>
        <Route path="/artist/:name">
          <ArtisPage />
        </Route>
        <Route path="/album/:id">
          <AlbumPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
