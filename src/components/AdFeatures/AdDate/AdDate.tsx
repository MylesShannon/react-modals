import { Component } from "react";
import "./AdDate.css";

interface AdDateProps {
  date?: string;
}

class AdDate extends Component<AdDateProps> {
  render() {
    return <div className="Ad-Date">{this.props.date || <i>None</i>}</div>;
  }
}

export default AdDate;
