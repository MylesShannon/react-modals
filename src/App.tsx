import { Component } from "react";
import Modal from "react-modal";
import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";

interface AppProps {}
interface AppState {
  isModalOpen: boolean;
}

Modal.setAppElement("#root");

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

  openWorkFlow(): void {
    alert("Workflow started!");
  }

  render() {
    return (
      <div className="App">
        <Header onPlusClick={this.openWorkFlow}></Header>
        <Content>
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
        </Content>
      </div>
    );
  }
}

export default App;
