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
  },

  updateCourse: function(course){
    var updatedCourse = CourseApi.saveCourse(course);
    Dispatcher.dispatch({
      actionType: CourseActionTypes.UPDATE_COURSE,
      course: updatedCourse
    });
  },

  deleteCourse: function(id){
    CourseApi.deleteCourse(id);
    Dispatcher.dispatch({
      actionType: CourseActionTypes.DELETE_COURSE,
      id: id
    });
  }
};

module.exports = CourseActions;
