'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseActionTypes = require('../constants/courseActionTypes');
var CHANGE_EVENT = 'change';

var _courses = [];

var CourseStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  getAllCourses: function(){
    return _courses;
  },

  getCourseById: function(id){
    return _.find(_courses, {id: id});
  }
});

Dispatcher.register(function(action){
  switch(action.actionType){
    case CourseActionTypes.INITIALIZE:
      _courses = action.initialData.courses;
      CourseStore.emitChange();
      break;
    case CourseActionTypes.CREATE_COURSE:
      _courses.push(action.course);
      CourseStore.emitChange();
      break;
    case CourseActionTypes.UPDATE_COURSE:
      var existingCourse = _.find(_courses, {id: action.course.id});
      var existingCourseIndex = _.indexOf(_courses, existingCourse);
      _courses.splice(existingCourseIndex, 1, action.course);
      CourseStore.emitChange();
      break;
    case CourseActionTypes.DELETE_COURSE:
      _.remove(_courses, function(course){
        return course.id === action.id;
      });
      CourseStore.emitChange();
      break;
    default:
      //no op
  }
});

module.exports = CourseStore;
