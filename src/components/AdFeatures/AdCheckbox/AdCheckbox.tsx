import { Component } from "react";
import "./AdCheckbox.css";

interface AdCheckboxProps {
  checkboxes?: Array<string>;
}

class AdCheckbox extends Component<AdCheckboxProps> {
  render() {
    if (this.props.checkboxes && this.props.checkboxes.length > 0) {
      return (
        <div className="Ad-Checkboxes">
          {this.props.checkboxes.map((checkbox, index) => {
            return (
              <div key={index} className="Ad-Checkbox">
                <input type="checkbox" name={checkbox} />
                <label htmlFor={checkbox}>{checkbox}</label>
              </div>
            );
          })}
        </div>
      );
    }
    return <div>No checkboxes</div>;
  }
}

export default AdCheckbox;
