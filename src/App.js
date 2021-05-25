import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login';
function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
