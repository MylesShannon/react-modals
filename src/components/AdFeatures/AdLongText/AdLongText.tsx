import { Component } from "react";
import "./AdLongText.css";

interface AdLongTextProps {
  text?: string;
}

class AdLongText extends Component<AdLongTextProps> {
  render() {
    return <div className="Ad-Long-Text">{this.props.text || <i>None</i>}</div>;
  }
}

export default AdLongText;
