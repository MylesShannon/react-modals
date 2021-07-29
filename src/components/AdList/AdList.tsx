import { Component } from "react";
import AdComponent, { Ad } from "../Ad/Ad";
import "./AdList.css";

interface AdListProps {
  ads: Array<Ad>;
}

class AdList extends Component<AdListProps> {
  render() {
    if (this.props.ads && this.props.ads.length > 0) {
      return (
        <div className="Ads">
          {this.props.ads.map((ad, index) => {
            return <AdComponent key={index} ad={ad}></AdComponent>;
          })}
        </div>
      );
    }
    return <div className="No-Ads">No Ads</div>;
  }
}

export default AdList;
