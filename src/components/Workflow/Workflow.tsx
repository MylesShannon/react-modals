import { Component } from "react";
import Modal from "react-modal";
import "./Workflow.css";

interface WorkflowProps {
  steps?: Array<any>;
}
interface WorkflowState {
  isModalOpen: boolean;
}

class Workflow extends Component<WorkflowProps, WorkflowState> {
  constructor(props: WorkflowProps) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  setModal(isModalOpen: boolean): void {
    this.setState({ isModalOpen });
  }

  render() {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        onRequestClose={() => this.setModal(false)}
        style={{
          overlay: {
            backgroundColor: "gray"
          }
        }}
      >
        <button onClick={() => this.setModal(false)}>Close</button>
      </Modal>
    );
  }
}

export default Workflow;
