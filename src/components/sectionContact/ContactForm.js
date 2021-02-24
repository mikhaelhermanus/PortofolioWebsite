import React from 'react'
import './SectionContact.css'

import axios from 'axios';

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "send message"
  }


  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
      buttonText: "message sent"
    })
  }


  formSubmit = (e) => {
    e.preventDefault()

    this.setState({
      buttonText: "sending..."
    })

    let data = {
      email: this.state.email,
      name: this.state.name,
      phoneNumber: "",
      subject: "FeedBack Web",
      message: this.state.message
    }

    axios.post('http://api-webprofile.digisoul.id/message', data, {
      headers: {
        'x-api-key': 'sf6eHMw2mFmAe6jysPNRUYkrsJZiDJx0',
        'Content-Type': 'application/json',
        'channel' : 'mikhael'
      },
    }).then(res => {
      this.setState({ sent: true }, this.resetForm())
      console.log("message sent");
      alert("Pesan Berhasil Terkirim. Terima Kasih atas Feedback")
    })
      .catch(() => {
        console.log("message not Sent");
        alert("message not sent")
      })
  }

  // formSubmitTest(e) {
  //   alert('message sent');
  //   this.resetForm()
  // }


  render() {
    let { name, email, message, buttonText } = this.state

    return (
      <div className="form-section">
        <h4>Drop me a line</h4>
        <p className="chat">Let's chat business or ideas!</p>

        <form action="" onSubmit={(e) => this.formSubmit(e)}>
          <div className="form-layout span_8_of_12">
            <div className="inputs">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                onChange={(e) => this.setState({ name: e.target.value })}
                value={name}
              // disabled
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                onChange={(e) => this.setState({ email: e.target.value })}
                value={email}
                required
              // disabled
              />
            </div>

            <textarea
              placeholder="Your Message..."
              name="message"
              id=""
              cols="30"
              rows="5"
              onChange={(e) => this.setState({ message: e.target.value })}
              value={message}
              required
            // disabled
            ></textarea>

          </div>
          <button className="button"><span className="button-text">{buttonText}</span></button>
        </form>
      </div>
    )
  }
}

export default ContactForm