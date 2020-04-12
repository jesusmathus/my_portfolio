import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { ReCaptcha } from 'react-recaptcha-google';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      recaptchaToken: ''
    }
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.expiredCallback = this.expiredCallback.bind(this);
  }

  componentDidMount() {
    try {
      if (window.innerWidth > 1024) {
        document.getElementsByClassName("material-icons")[0].style.color = "white";
      }
      if (window.innerWidth < 1025 && (window.location.pathname === "/contact")) {
        document.getElementsByClassName("material-icons")[0].style.color = "white";
      }
      if (this.captcha) {
        this.captcha.reset();
      }
    } catch(e) {  }
  }

  onLoadRecaptcha() {
    if(this.captcha) {
      this.captcha.reset();
    }
  }

  verifyCallback(recaptchaToken) {
    this.setState({recaptchaToken: recaptchaToken})
  }

  expiredCallback() {
    this.setState({recaptchaToken: ''})
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

    swal({
      title: "Work in progress.",
      text: "Sorry, this feature does not work yet but should be fixed soon.",
      icon: "info"
    });

    /*if (this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '') {
      swal({
        title: "Message failed to send.",
        text: "Please make sure to populate all the contact form fields.",
        icon: "error"
      });
    } else if (this.state.recaptchaToken === '') {
      swal({
        title: "Message failed to send.",
        text: "Please make sure to check the recaptcha box.",
        icon: "error"
      });
    } else {
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
          if(this.captcha) {
            this.captcha.reset();
          }
          swal({
            title: "Message sent!",
            text: "Thank you for reaching out, I will get back to you soon.",
            icon: "success"
          });
        } else if(response.data.msg === 'fail') {
          if(this.captcha) {
            this.captcha.reset();
          }
          swal({
            title: "Message failed to send.",
            text: "It seems like something went wrong, please try again.",
            icon: "error"
          });
        }
      }).catch(error => {
        if(this.captcha) {
          this.captcha.reset();
        }
        swal({
          title: "Message failed to send.",
          text: "It seems like something went wrong, please try again.",
          icon: "error"
        });
      })
    }*/
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
            {/* Recaptcha */}
            <ReCaptcha
              ref={(el) => {this.captcha = el;}}
              size="normal"
              data-theme="light"
              render="explicit"
              sitekey="6Le07-gUAAAAALQ3cee77BicgUemWiVQLCw3HFnM"
              onloadCallback={this.onLoadRecaptcha}
              verifyCallback={this.verifyCallback}
              expiredCallback={this.expiredCallback}
            />
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
