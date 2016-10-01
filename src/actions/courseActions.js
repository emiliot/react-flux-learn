'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var CourseActionTypes = require('../constants/courseActionTypes');

var CourseActions = {
  createCourse: function(course){
    var newCourse = CourseApi.saveCourse(course);
    Dispatcher.dispatch({
      actionType: CourseActionTypes.CREATE_COURSE,
      course: newCourse
    });
  }
};

module.exports = CourseActions;
