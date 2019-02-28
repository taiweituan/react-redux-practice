import React from "react";
import { connect } from "react-redux";
import  { fetchStream } from "../../actions";

class StreamEdit extends React.Component {

    componentDidMount() {        
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        console.log(this.props);
        if (!this.props.stream) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    Title: 
                    {this.props.stream.title}
                </div>
            );
        }
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
    {fetchStream}
)(StreamEdit);