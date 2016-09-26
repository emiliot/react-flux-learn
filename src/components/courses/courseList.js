'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var CourseList = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired
  },

  render: function(){
    var createCourseRow = function(course){
      return (
        <tr key={course.id}>
          <td>{course.id}</td>
          <td>{course.title}</td>
          <td>{course.author.id}</td>
          <td>{course.length}</td>
          <td>{course.category}</td>
          <td>
            <button type="button" className="btn btn-default">
              <span className="glyphicon glyphicon-play-circle" aria-hidden="true"></span>
            </button>
          </td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Length</th>
            <th>Category</th>
            <th>Watch</th>
          </thead>
          <tbody>
            {this.props.courses.map(createCourseRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = CourseList;
