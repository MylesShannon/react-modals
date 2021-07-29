import { ChangeEvent, Component } from "react";
import "./AdSlider.css";

interface AdSliderProps {
  label?: string;
}
interface AdSliderState {
  value: string;
}

class AdSlider extends Component<AdSliderProps, AdSliderState> {
  constructor(props: AdSliderProps) {
    super(props);
    this.state = {
      value: "1"
    };
  }

  handleChange(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.value) {
      this.setState({ value: event.target.value });
    }
  }

  render() {
    return (
      <div className="Slider">
        <div className="Value">{this.state.value}</div>
        {this.props.label ? <label>{this.props.label}</label> : null}
        <input
          onChange={this.handleChange.bind(this)}
          type="range"
          min="1"
          max="100"
          value={this.state.value}
        />
      </div>
    );
  }
}

export default AdSlider;
