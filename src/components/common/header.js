'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function(){
    var logoStyle = {
      display: 'inline-block',
      width: '13%'
    };
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <Link to="app" className="navbar-brand" style={logoStyle}>
            <img src="images/logo.png" className="img-responsive"/>
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="app">Home</Link></li>
            <li><Link to="authors">Authors</Link></li>
            <li><Link to="courses">Courses</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
