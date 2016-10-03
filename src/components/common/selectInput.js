'use strict';

var React = require('react');

var Input = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    options: React.PropTypes.array.isRequired
  },

  render: function(){
    var wrapperClass = 'form-group';
    if(this.props.error && this.props.error.length > 0){
      wrapperClass += ' ' + 'has-error';
    }

    var createOption = function(option){
      return (
        <option key={option.id} value={option.id}>{option.firstName} {option.lastName}</option>
      );
    };

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <select
        name={this.props.name}
        ref={this.props.name}
        onChange={this.props.onChange}
        className="form-control"
        value={this.props.value}>
          {this.props.options.map(createOption, this)}
        </select>
        <div className="input">{this.props.error}</div>
      </div>
    );
  }
});

module.exports = Input;
