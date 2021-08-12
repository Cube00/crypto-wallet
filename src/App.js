import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { index } from "./redux/reducers/index";
//components
import Layout from "./components/layout/layout";
import Home from "./pages/home";

const middleware = [thunk];

function App() {
  const store = createStore(
    index,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return (
    <>
      <Router>
        <Switch>
          <Provider store={store}>
            <Layout>
              <Route exact path="/">
                <Home />
              </Route>
            </Layout>
          </Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
