import React from "react";

import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load("client:auth2", () =>{
            window.gapi.client.init({
                clientId: "322352193717-d1kf26gvf91q31r8b0jcq4pmgsrn81g8.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                // saving auth object to component class
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null ){
            return (
                null
            );
        } else if (this.props.isSignedIn) {
            return (
                <div>
                    <button onClick={this.onSignOutClick} className="ui red google button">
                        Sign Out
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.onSignInClick} className="ui red google button">
                        Sign In with Google
                    </button>
                </div>
            );
        }
    }

    render() { 
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(
    mapStateToProps,
    {signIn, signOut}
)(GoogleAuth);