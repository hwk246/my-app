import { Link } from "react-router-dom";
import { Component } from "react";

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
    this.activateMenu = this.activateMenu.bind(this);
  }

  activateMenu = () => {
    const menuUl = document.querySelector("ul.menu");
    menuUl.classList.toggle("unhide-menu");
  };

  render() {
    return (
      <div>
        <div className="hamburger" onClick={this.activateMenu}>
          <span className="burger-line-upper"></span>
          <span className="burger-line-middle"></span>
          <span className="burger-line-lower"></span>
        </div>
        <ul className="menu" onClick={this.activateMenu}>
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
    );
  }
}

export default Nav;
