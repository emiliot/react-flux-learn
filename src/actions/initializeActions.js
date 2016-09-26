'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var CourseActionTypes = require('../constants/courseActionTypes');
var AuthorApi = require('../api/authorApi');
var CourseApi = require('../api/courseApi');

var InitializeActions  = {
  initApp: function(){
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });

    Dispatcher.dispatch({
      actionType: CourseActionTypes.INITIALIZE,
      initialData: {
        courses: CourseApi.getAllCourses()
      }
    });
  }
};

module.exports = InitializeActions;
