import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar{' '}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    )
  }
}

export default NavBar
