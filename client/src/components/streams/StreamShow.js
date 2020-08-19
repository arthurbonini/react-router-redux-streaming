import React from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Hello Stream</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => {
  return {
    stream: state.streams[match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
