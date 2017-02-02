import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import Login from "./components/Login"
import store from "./store"
import { applyRouterMiddleware ,Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore,} from 'react-router-redux'
import App from './components/App'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './utils/authWrappers.js'
const baseHistory = browserHistory
const history = syncHistoryWithStore(baseHistory, store)
import { useScroll } from 'react-router-scroll';


ReactDOM.render(

    <Provider store={store}>
        {/* hashHistory ---> browserHistory when the site is on a server for clean urls*/}
        <Router history={history} render={applyRouterMiddleware(useScroll())}>

            <Route path="/" component={App}>
                <Route path="/Login" component={UserIsNotAuthenticated(Login)} />
            </Route>

        </Router>
    </Provider>, app);

