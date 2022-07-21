import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div className='nav-div'>
        <nav>
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/gallery">Gallery</Link>
            <Link className="links"to="/event">Event</Link>
            <Link className="links"to="/feedback">Feedbacks</Link>
            <Link className="links"to="/Contact">Contacts</Link>
        </nav>
      </div>
    )
  }
}
