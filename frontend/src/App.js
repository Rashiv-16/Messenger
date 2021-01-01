import {Route, Switch} from 'react-router'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import ConfirmationPage from './pages/ConfirmationPage'

import './css/app.css'

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Homepage />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/confirmation'>
        <ConfirmationPage />
      </Route>
    </Switch>
  );
}

export default App;
