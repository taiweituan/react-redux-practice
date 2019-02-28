import React from "react";
import { connect } from "react-redux";
import  { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {

    componentDidMount() {        
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValue) => {
        console.log(formValue);
    }

    render() {
        console.log(this.props);
        if (!this.props.stream) {
            return <div>Loading...</div>;
        } 
        
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};

/**
 * 
 * @param {*} state 
 * @param {*} ownProps - the properties of this component
 */
const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);

    let targetId = ownProps.match.params.id;
    return {
        stream: state.streams[targetId]
    };
};

export default connect(
    mapStateToProps,
    {fetchStream, editStream}
)(StreamEdit);