import React from "react"
import { Loading } from "../Loading/Loading"
import { NotificationSnack } from "../NotificationSnack/NotificationSnack"
import { useContactForm } from "./hooks/useContactForm"

export const ContactForm = () => {
  const [
    contactForm,
    onUpdateContactForm,
    sendFormData,
    submitResult,
    submittingFormState,
  ] = useContactForm()

  return (
    <section className="contact-form">
      <h1>Contact</h1>
      <h4>Questions? Comments? Fill the form below to send me a message!</h4>
      <form onSubmit={sendFormData}>
        <fieldset>
          <div className="contact-form__form">
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                className="input"
                name="name"
                value={contactForm.name.value}
                onChange={onUpdateContactForm}
              />
              {contactForm.name.error && <span>{contactForm.name.error}</span>}
            </label>

            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                className="input"
                name="email"
                value={contactForm.email.value}
                onChange={onUpdateContactForm}
              />
              {contactForm.email.error && (
                <span>{contactForm.email.error}</span>
              )}
            </label>
            <label htmlFor="message">
              Message
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                className="input"
                value={contactForm.message.value}
                onChange={onUpdateContactForm}
              ></textarea>
              {contactForm.message.error && (
                <span>{contactForm.message.error}</span>
              )}
            </label>
            <button type="submit" className="button">
              {submittingFormState ? <Loading /> : "Send"}
            </button>
            <div className="contact-form__notification-snack">
              {submitResult && (
                <NotificationSnack type={submitResult.type}>
                  {submitResult.message}
                </NotificationSnack>
              )}
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  )
}
