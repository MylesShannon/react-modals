import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import "./Header.css";

interface HeaderProps {
  onPlusClick: () => void;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <div className="Header">
        <div className="Title">Ad Builder</div>
        <div className="Fill"></div>
        <a
          href="https://github.com/MylesShannon/react-modals"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon className="Icon Github" icon={faGithub} />
        </a>
        <FontAwesomeIcon
          onClick={() => this.props.onPlusClick()}
          className="Icon Plus"
          icon={faPlus}
        />
      </div>
    );
  }
}

export default Header;
