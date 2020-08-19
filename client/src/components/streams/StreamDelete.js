import React from "react";
import Modal from "../Modal";

import history from "../../history";

const StreamDelete = () => {
  const onDismiss = () => {
    history.push("/");
  };
  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button" onClick={onDismiss}>
        Cancel
      </button>
    </>
  );
  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={onDismiss}
      />
    </div>
  );
};

export default StreamDelete;
