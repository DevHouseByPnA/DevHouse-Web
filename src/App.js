import { useContext } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AuthContext } from './contexts/auth.context';
import { LoginPage } from './pages/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { UnauthenticatedRoute } from './components/UnauthenticatedRoute';
import { signOut } from './utils/firebase';

const App = () => {
  const auth = useContext(AuthContext);

  if (auth.loading) {
    return (
      <h1>Loading App...</h1>
    );
  }

  return (
    <>
      <Switch>
        <UnauthenticatedRoute exact path="/login">
          <LoginPage />
        </UnauthenticatedRoute>
        <PrivateRoute exact path="/">
          <h1>Hello there you cool Dev!</h1>
          <button onClick={() => { signOut(); }}>Sign Out</button>
        </PrivateRoute>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
