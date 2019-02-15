
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage: ""
        }; 
    }

    /**
     * Alternative way to initialize States instead of do it in constructor
     */
    // state = {
    //     lat: null,
    //     errorMessage: "
    // }

    componentDidMount() {
        console.log("app component was mounted");
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                this.setState({lat: pos.coords.latitude});
            },
            (err) => {
                console.log(err);
                this.setState({errorMessage: err.message});
            }
        );
    }
    componentDidUpdate() {
        console.log("app component was updated");
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        return <Spinner message="Please accept location request" />;
    }
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector("#root"));