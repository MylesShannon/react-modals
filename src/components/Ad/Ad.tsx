import { Component } from "react";
import "./Ad.css";
import AdLongText from "../AdFeatures/AdLongText/AdLongText";
import AdShortText from "../AdFeatures/AdShortText/AdShortText";
import AdDate from "../AdFeatures/AdDate/AdDate";
import AdImage from "../AdFeatures/AdImage/AdImage";
import AdRadio from "../AdFeatures/AdRadio/AdRadio";
import AdCheckbox from "../AdFeatures/AdCheckbox/AdCheckbox";
import AdSelect from "../AdFeatures/AdSelect/AdSelect";
import AdSlider from "../AdFeatures/AdSlider/AdSlider";

export enum AdFeatureType {
  LongText,
  ShortText,
  Date,
  Image,
  Radio,
  Checkbox,
  Select,
  Slider
}

export interface AdFeature {
  type: AdFeatureType;
  content?: string;
  contentList?: Array<string>;
}

export interface Ad {
  name: string;
  features: Array<AdFeature>;
}

interface AdProps {
  ad: Ad;
}

class AdComponent extends Component<AdProps> {
  render() {
    return (
      <div className="Ad">
        <div className="Ad-Name">{this.props.ad.name}</div>
        <div className="Ad-Body">
          {this.props.ad.features && this.props.ad.features.length > 0 ? (
            <div className="Ad-Features">
              {this.props.ad.features.map((feature, index) => {
                switch (feature.type) {
                  case AdFeatureType.LongText: {
                    return (
                      <AdLongText
                        key={index}
                        text={feature.content}
                      ></AdLongText>
                    );
                  }
                  case AdFeatureType.ShortText: {
                    return (
                      <AdShortText
                        key={index}
                        text={feature.content}
                      ></AdShortText>
                    );
                  }
                  case AdFeatureType.Date: {
                    return <AdDate key={index} date={feature.content}></AdDate>;
                  }
                  case AdFeatureType.Image: {
                    return (
                      <AdImage key={index} src={feature.content}></AdImage>
                    );
                  }
                  case AdFeatureType.Radio: {
                    return (
                      <AdRadio
                        key={index}
                        radios={feature.contentList}
                      ></AdRadio>
                    );
                  }
                  case AdFeatureType.Checkbox: {
                    return (
                      <AdCheckbox
                        key={index}
                        checkboxes={feature.contentList}
                      ></AdCheckbox>
                    );
                  }
                  case AdFeatureType.Select: {
                    return (
                      <AdSelect
                        key={index}
                        options={feature.contentList}
                      ></AdSelect>
                    );
                  }
                  case AdFeatureType.Slider: {
                    return (
                      <AdSlider key={index} label={feature.content}></AdSlider>
                    );
                  }
                  default: {
                    return (
                      <div className="Missing-Type">Feature missing type</div>
                    );
                  }
                }
              })}
            </div>
          ) : (
            <div className="No-Features">No features</div>
          )}
        </div>
      </div>
    );
  }
}

export default AdComponent;
