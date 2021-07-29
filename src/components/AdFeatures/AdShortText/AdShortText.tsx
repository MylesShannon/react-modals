import { Component } from "react";
import "./AdShortText.css";

interface AdShortTextProps {
  text?: string;
}

class AdShortText extends Component<AdShortTextProps> {
  render() {
    return (
      <div className="Ad-Short-Text">{this.props.text || <i>None</i>}</div>
    );
  }
}

export default AdShortText;
