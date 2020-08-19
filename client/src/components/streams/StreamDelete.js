import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";

import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onDismissClick = () => {
    history.push("/");
  };

  onDeleteClick = () => {
    this.props.deleteStream(this.props.stream.id);
  };
  renderActions = () => (
    <>
      <button className="ui button negative" onClick={this.onDeleteClick}>
        Delete
      </button>
      <button className="ui button" onClick={this.onDismissClick}>
        Cancel
      </button>
    </>
  );

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete this stream: ${this.props.stream.title}`;
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={this.onDismissClick}
      />
    );
  }
}

const mapStateToProps = (state, { match }) => {
  return {
    stream: state.streams[match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
