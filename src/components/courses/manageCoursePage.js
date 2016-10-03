'use strict';

var React = require('react');
var CourseForm = require('./courseForm');
var Router = require('react-router');
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');

var ManageCoursePage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  getInitialState: function(){
    return {
      course: { id: '', title: '', author: '', length: '', category: '', url: '' },
      errors: {},
      dirty: false,
      authors: []
    };
  },

  componentWillMount: function(){
    var courseId = this.props.params.id;
    var nextState = { authors: AuthorStore.getAllAuthors() };
    if(courseId){
      nextState.course = CourseStore.getCourseById(courseId);
    }
    this.setState(nextState);
  },

  courseFormIsValid: function(){
    var formIsValid = true;
    this.state.errors = {};
    // TODO: ADD SOME VALIDATION HERE

    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  saveCourse: function(event){
    event.preventDefault();

    if(!this.courseFormIsValid()){
      return;
    }

    if(this.state.course.id){
      CourseActions.updateCourse(this.state.course);
    }else{
      CourseActions.createCourse(this.state.course);
    }

    this.setState({dirty: false});
    toastr.success('Course Saved');
    this.transitionTo('courses');
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
        errors={this.state.errors}
        authors={this.state.authors} />
    );
  }
});

module.exports = ManageCoursePage;
