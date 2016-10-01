'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');

var CourseList = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired
  },

  deleteCourse: function(id, event){
    event.preventDefault();
    CourseActions.deleteCourse(id);
    toastr.success('Course Deleted');
  },

  render: function(){
    var createCourseRow = function(course){
      return (
        <tr key={course.id}>
          <td><Link to="manageCourse" params={{id: course.id}}>{course.id}</Link></td>
          <td>
            <button type="button" className="btn btn-default">
              <span className="glyphicon glyphicon-play-circle" aria-hidden="true"></span>
            </button>
          </td>
          <td>{course.title}</td>
          <td>{course.author.id}</td>
          <td>{course.length}</td>
          <td>{course.category}</td>
          <td>
            <button type="button" className="btn btn-danger" onClick={this.deleteCourse.bind(this, course.id)}>
              Delete
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
            <th>Watch</th>
            <th>Title</th>
            <th>Author</th>
            <th>Length</th>
            <th>Category</th>
            <th>Action</th>
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
