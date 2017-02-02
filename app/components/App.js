import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from "react-redux"
import { styles } from '../style/app.scss'

connect((store) => {
    user: store.user
})



class App extends Component {



    render() {

        return (
            <div>
                <div className="header">
                    <div className="companyName">KCPSoftware</div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Admin">Admin</Link></li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default connect()(App)
