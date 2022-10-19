import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { serviceID, templateID, userID } from "../../email.config.js";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, obj, userID) => {
    emailjs
      .send(serviceID, templateID, obj, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you soon!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>Email Me</h1>
        <p>
          Please fill out this form and I'll do my best to get back as soon as I
          can.
        </p>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                {...register("name", {
                  required: 'Please enter your name',
                  maxLength: {
                    value: 20,
                    message: "Please enter a value less than 20 characters!",
                  },
                })}
              />
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                {...register("phone", {
                  maxLength: {
                    value: 11,
                    message: "Please enter a value less than 11 characters!",
                  },
                })}
              />
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: 'Please enter your email',
                  maxLength: {
                    value: 50,
                    message: "Please enter a value less than 50 characters!",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid Email"
                  }
                })}
              />
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                {...register("subject", {
                  required: 'Please enter a subject',
                  maxLength: {
                    value: 50,
                    message: "Please enter a value less than 50 characters!",
                  },
                })}
              />
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION INPUT */}
              <textarea
                type="text"
                className="form-control"
                placeholder="Description"
                name="description"
                {...register("description", {
                  maxLength: {
                    value: 1000,
                    message: "Please enter a value less than 1000 characters!",
                  },
                })}
              />
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
