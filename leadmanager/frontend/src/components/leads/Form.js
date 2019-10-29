import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addLead } from "../../actions/leads";

export class Form extends Component {
  static propTypes = {
    addLead: PropTypes.func.isRequired
  };
  initialstate = {
    name: "",
    email: "",
    message: ""
  };
  state = this.initialstate;

  onChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onSubmit = event => {
    event.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState(this.initialstate);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h4>Add Lead Form </h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
              className="form-control"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Message</label>
            <input
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
              className="form-control"
              placeholder="Enter Message"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addLead }
)(Form);
