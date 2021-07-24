import { Component } from "react";
import Modal from "react-modal";
import "./App.css";

interface AppProps {}
interface AppState {
  isModalOpen: boolean
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
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
      <div className="App">
        <button onClick={() => this.setModal(true)}>Open modal</button>
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
      </div>
    );
  }
}

export default App;
