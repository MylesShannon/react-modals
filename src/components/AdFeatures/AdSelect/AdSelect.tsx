import { Component } from "react";
import "./AdSelect.css";

interface AdSelectProps {
  options?: Array<string>;
}

class AdSelect extends Component<AdSelectProps> {
  render() {
    if (this.props.options && this.props.options?.length > 0) {
      return (
        <select className="Ad-Select">
          {this.props.options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      );
    }
    return <div>No options</div>;
  }
}

export default AdSelect;
