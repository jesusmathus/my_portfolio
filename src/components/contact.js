import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    }
  }

  componentDidMount() {
    try {
      if (window.innerWidth > 1024) {
        document.getElementsByClassName("material-icons")[0].style.color = "white";
      }
      if (window.innerWidth < 1025 && (window.location.pathname === "/contact")) {
        document.getElementsByClassName("material-icons")[0].style.color = "white";
      }
    } catch(e) {  }
  }

  onFirstNameChange(event) {
    this.setState({firstName: event.target.value})
  }

  onLastNameChange(event) {
    this.setState({lastName: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onSubjectChange(event) {
    this.setState({subject: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();

    const nameToSubmit = this.state.firstName.concat(' ',this.state.lastName);
    const emailToSubmit = this.state.email;
    const subjectToSubmit = this.state.subject;
    const messageToSubmit = this.state.message;

    axios({
      method: "POST",
      url:"/send",
      data: {
        name: nameToSubmit,
        email: emailToSubmit,
        subject: subjectToSubmit,
        message: messageToSubmit
      }
    }).then((response) => {
      if(response.data.msg === 'success') {
        this.resetForm()
        alert("Message sent!");
      } else if(response.data.msg === 'fail') {
        alert("Message failed to send.");
      }
    })
  }

  resetForm() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  render() {
    return(
      <div className="contact-body">
        <section className="contact-wrap">
          {/* Form */}
          <form action="" className="contact-form" id="contact-form-id" onSubmit={this.handleSubmit.bind(this)} method="POST">
            {/* First Name */}
            <div className="col-sm-6">
              <div className="input-block">
                <input type="text" className="form-control" placeholder="First name" value={this.state.firstName} onChange={this.onFirstNameChange.bind(this)}/>
              </div>
            </div>
            {/* Last Name */}
            <div className="col-sm-6">
              <div className="input-block">
                <input type="text" className="form-control" placeholder="Last name" value={this.state.lastName} onChange={this.onLastNameChange.bind(this)}/>
              </div>
            </div>
            {/* Email */}
            <div className="col-sm-12">
              <div className="input-block">
                <input type="email" className="form-control" placeholder="Email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
              </div>
            </div>
            {/* Subject */}
            <div className="col-sm-12">
              <div className="input-block">
                <input type="text" className="form-control" placeholder="Subject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)}/>
              </div>
            </div>
            {/* Message */}
            <div className="col-sm-12">
              <div className="input-block textarea">
                <textarea rows="9" type="text" className="form-control" placeholder="Message" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
              </div>
            </div>
            {/* Send Button */}
            <div className="col-sm-12" id="send-button-container">
              <button className="square-button" type="submit">Send</button>
            </div>
          </form>
        </section>
      </div>
    )
  }
}

export default Contact;
