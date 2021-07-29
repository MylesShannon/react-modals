import { Component, RefObject, createRef } from "react";
import Modal from "react-modal";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Workflow from "./components/Workflow/Workflow";
import { Ad, AdFeatureType } from "./components/Ad/Ad";
import AdList from "./components/AdList/AdList";

Modal.setAppElement("#root");

class App extends Component {
  constructor(props: any) {
    super(props);
    this._workflowRef = createRef();
  }

  private _workflowRef: RefObject<Workflow>;
  private _ads: Array<Ad> = [
    {
      name: "My first Ad",
      features: [
        {
          type: AdFeatureType.LongText,
          content: "A Long Text"
        },
        {
          type: AdFeatureType.ShortText,
          content: "A Short Text"
        },
        {
          type: AdFeatureType.Date,
          content: "01/24/1992"
        },
        {
          type: AdFeatureType.Image,
          content: "https://picsum.photos/200/300"
        },
        {
          type: AdFeatureType.Radio,
          contentList: ["Hello", "World"]
        },
        {
          type: AdFeatureType.Checkbox,
          contentList: ["Checkbox 1", "Checkbox 2"]
        },
        {
          type: AdFeatureType.Select,
          contentList: ["Option 1", "Option 2"]
        },
        {
          type: AdFeatureType.Slider,
          content: "percent"
        }
      ]
    },
    {
      name: "Test Ad",
      features: []
    }
  ];

  render() {
    return (
      <div className="App">
        <Header
          onPlusClick={() => this._workflowRef.current?.setModal(true)}
        ></Header>
        <Content>
          <Workflow ref={this._workflowRef}></Workflow>
          <AdList ads={this._ads}></AdList>
        </Content>
      </div>
    );
  }
}

export default App;
