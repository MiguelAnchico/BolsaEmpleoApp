import ReactDOM from "react-dom/client";
import "./index.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import NavMenu from "./components/common/NavMenu/NavMenu.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CiudadanosList from "./components/CiudadanosList/CiudadanosList";
import CreateCiudadanoPage from "./pages/CreateCiudadanoPage/CreateCiudadanoPage";
import { Provider } from "react-redux";
import { store } from "./redux/store/ConfigureStore";
import UpdateCiudadanoPage from "./pages/UpdateCiudadanoPage/UpdateCiudadanoPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/ciudadanos" Component={CiudadanosList} />
        <Route path="/ciudadano/crear" Component={CreateCiudadanoPage} />
        <Route path="/update/:id" Component={UpdateCiudadanoPage} />
        {/*<Route path="/vacantes" component={Vacantes} />*/}
      </Routes>
    </Router>
  </Provider>
);
