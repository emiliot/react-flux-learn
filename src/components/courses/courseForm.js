'use strict';

var React = require('react');
var Input = require('../common/textInput');
var Select = require('../common/selectInput');

var CourseForm = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object,
    authors: React.PropTypes.array.isRequired
  },

  render: function(){
    return (
      <form>
        <h1>Manage Course</h1>
        <Input
        name="title"
        label="Title"
        value={this.props.course.title}
        onChange={this.props.onChange}
        error={this.props.errors.title}/>
        <Select
        name="author"
        label="Select an Author"
        value={this.props.course.author}
        onChange={this.props.onChange}
        options={this.props.authors}/>
        <Input
        name="length"
        label="Length"
        value={this.props.course.length}
        onChange={this.props.onChange}
        error={this.props.errors.length}/>
        <Input
        name="category"
        label="Category"
        value={this.props.course.category}
        onChange={this.props.onChange}
        error={this.props.errors.category}/>
        <Input
        name="watchHref"
        label="URL"
        value={this.props.course.watchHref}
        onChange={this.props.onChange}
        error={this.props.errors.watchHref}/>

        <input
        type="submit"
        value="Save"
        className="btn btn-primary"
        onClick={this.props.onSave} />
      </form>
    );
  }
});

module.exports = CourseForm;
