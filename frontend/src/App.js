import { Route, Switch } from "react-router";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import ConfirmationPage from "./pages/ConfirmationPage";
import AllSetPage from "./pages/AllSetPage";
import MessengerPage from "./pages/MessengerPage";

import "./css/app.css";

const chatnames = [
  { title: "Ivan", status: "available" },
  { title: "Chris", status: "available" },
  { title: "Ezekiel", status: "busy" },
  { title: "Derek", status: "unavailable" },
  { title: "Tony", status: "unavailable" },
  { title: "Yohanna", status: "unavailable" },
  { title: "Yohanna", status: "unavailable" },
  { title: "Yohanna", status: "unavailable" },
  { title: "Yohanna", status: "unavailable" },
  { title: "Yohanna", status: "unavailable" },
  {
    title: "Yohannaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    status: "unavailable",
  },
];

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/confirmation">
        <ConfirmationPage />
      </Route>
      <Route path="/allset">
        <AllSetPage />
      </Route>
      <Route path="/messenger">
        <MessengerPage chatnames={chatnames} />
      </Route>
    </Switch>
  );
}

export default App;
