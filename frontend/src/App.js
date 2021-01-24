import {Route, Switch} from 'react-router'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import ConfirmationPage from './pages/ConfirmationPage'
import AllSetPage from './pages/AllSetPage'
import MessengerPage from './pages/MessengerPage'
import ChatPage from './pages/ChatPage'

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
      <Route path='/allset'>
        <AllSetPage />
      </Route>
      <Route path='/messenger'>
        <MessengerPage />
      </Route>
      <Route path='/chat'>
        <ChatPage />
      </Route>
    </Switch>
  );
}

export default App;
