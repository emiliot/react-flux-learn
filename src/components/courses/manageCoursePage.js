'use strict';

var React = require('react');
var CourseForm = require('./courseForm');

var ManageCoursePage = React.createClass({
  getInitialState: function(){
    return {
      course: { id: '', title: '', author: '', length: '', category: '', url: '' },
      errors: {},
      dirty: false
    };
  },

  courseFormIsValid: function(){
    var formIsValid = true;
    this.state.errors = {};
    // TODO: ADD SOME VALIDATION HERE

    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  saveCourse: function(event){

  },

  setCourseState: function(event){
    this.setState({dirty: true});

    var field = event.target.name;
    var value = event.target.value;
    this.state.course[field] = value;

    return this.setState({course: this.state.course});
  },

  render: function(){
    return (
      <CourseForm
        course={this.state.course}
        onChange={this.setCourseState}
        onSave={this.saveCourse}
        errors={this.state.errors} />
    );
  }
});

module.exports = ManageCoursePage;
