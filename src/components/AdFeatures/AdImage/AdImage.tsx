import { Component } from "react";
import "./AdImage.css";

interface AdImageProps {
  src?: string;
}

class AdImage extends Component<AdImageProps> {
  render() {
    if (this.props.src) {
      return <img src={this.props.src} alt="Ad"></img>;
    }
    return <div className="No-Src">No image</div>;
  }
}

export default AdImage;
