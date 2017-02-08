import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from "react-redux"
import { styles } from '../style/app.scss'

connect((store) => {
    user: store.user
})



class App extends Component {

    constructor() {
        super();
        this.state = {
            fixedHeader: false
        }
        this.handleScroll.bind(this);
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll (event) {
        if (event.srcElement.body.scrollTop > 50 && !this.state.fixedHeader){
            console.log(this.state);
            //this.setState({ fixedHeader: true });
        }
        if (event.srcElement.body.scrollTop < 50 && this.state.fixedHeader){
            //this.setState({ fixedHeader: false });
        }
    }


    render() {
        return (
            <div>
                <div className={"header "+ (this.state.fixedHeader ? 'fixed-header' : '')}>
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
