import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { Component } from "react";

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
    this.activateMenu = this.activateMenu.bind(this);
  }

  activateMenu = () => {
    const menuDiv = document.querySelector("div .menu");
    menuDiv.classList.toggle("hide-menu");
  };

  render() {
    return (
      <>
        <Hamburger
          onToggle={this.activateMenu}
          direction="left"
          size={30}
          color="black"
          duration={0.2}
        />
        <div className="menu">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/favorite">
                Favorite
              </Link>
            </li>
            <li>
              <Link className="link" to="/dotSH">
                DotSH
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Nav;
