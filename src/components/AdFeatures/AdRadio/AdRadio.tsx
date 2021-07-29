import { Component } from "react";
import "./AdRadio.css";

interface AdRadioProps {
  radios?: Array<string>;
}

class AdRadio extends Component<AdRadioProps> {
  render() {
    if (this.props.radios && this.props.radios.length > 0) {
      return (
        <div className="Ad-Radios">
          {this.props.radios.map((radio, index) => {
            return (
              <div key={index} className="Ad-Radio">
                <input type="radio" name="radio" value={radio} />
                <label htmlFor={radio}>{radio}</label>
              </div>
            );
          })}
        </div>
      );
    }
    return <div>No radios</div>;
  }
}

export default AdRadio;
