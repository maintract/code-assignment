import {Component} from "react";
import dropDown from "../assets/dropdown_icon.svg";
import  NewFile  from "./NewFile";
import { NavLink} from "react-router-dom";

class Header extends Component {
  state = {
    open: false,
  };
  handleClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };
  render() {
    return (
      <header>
        <div className="menu">
          <i onClick={this.handleClick}>File</i>
          {this.state.open && (
            <NewFile name="new" as={NavLink} to={{ pathname: "/new" }} />
          )}

          <i>Edit</i>
          <i>Insert</i>
          <i>View</i>
          <i>Tools</i>
        </div>
        <div className="toolbar">
          <Icon content="Arial" isDropdown />
          <Icon content="12" isDropdown />
          <Icon content="Aa" isDropdown />
          <Icon content={<b>B</b>} />
          <Icon content={<i>I</i>} />
          <Icon content={<u>U</u>} />
          <span className="icon no-phone">|</span>
          <Icon content="P" isExtra />
          <Icon content="H1" isExtra />
          <Icon content="H2" isExtra />
          <Icon content="H3" isExtra />
          <Icon content="..." isExtra />
        </div>
      </header>
    )
  };
};

const Icon = ({ content, isDropdown, isExtra }) => {
  return (
    <span className={`icon disabled${isExtra ? " no-phone" : ""}`}>
      {content}
      {isDropdown && <img style={{ marginLeft: 16 }} src={dropDown} />}
    </span>
  );
};
export default  Header;
