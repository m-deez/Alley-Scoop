import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./styles.css";

import {NewsContextProvider} from "../../utils/newsApi";
import News from "../news-api/News";
import axios from "axios";
import Forum from "../Forum";

class HomePage extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        console.log ("props dot auth", user)
        return (
            <div className="homepage">
                <div >
                    <h4 className="profile">
                        <b>Hello, </b> {user.name.split(" ")[0]}

                    </h4>
                    <div className="button">
                         <button>Profile</button>
                         <button onClick={this.onLogoutClick}>Logout</button>
                    </div>
                </div>
             <div className="dualPage">
                    <div className="news">News Feed Below!
                    <NewsContextProvider>
                    <News />
                    </NewsContextProvider>
                    </div>
                    <div>
                        <Forum user={user} />
                    </div>
             </div>   
            </div>

        );

    }
}
HomePage.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser}
)(HomePage);
