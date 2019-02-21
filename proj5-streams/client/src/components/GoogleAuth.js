import React from "react";

class GoogleAuth extends React.Component {
    state = { 
        isSignedIn: null
    }
    componentDidMount(){
        window.gapi.load("client:auth2", () =>{
            window.gapi.client.init({
                clientId: "322352193717-d1kf26gvf91q31r8b0jcq4pmgsrn81g8.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                // saving auth object to component class
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get()});
            });
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null ){
            return (
                <div>
                    I do not know if you are signed in.
                </div>
            );
        } else if (this.state.isSignedIn) {
            return (
                <div>
                    You are signed in.
                </div>
            );
        } else {
            return (
                <div>
                    You are logged out.
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

export default GoogleAuth;