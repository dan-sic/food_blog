import React, { useState } from "react"
import { Loading } from "../../Loading/Loading"
import { useSubscribe } from "./hooks/useSubscribe"
import { NotificationSnack } from "../../NotificationSnack/NotificationSnack"

export const Subscribe = () => {
  const [emailValue, setEmailValue] = useState("")
  const [
    subscribe,
    subscriptionFeedbackMessage,
    validationErrorMessage,
    submittingFormState,
  ] = useSubscribe()

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await subscribe(emailValue)
    setEmailValue("")
  }

  return (
    <section className="banner__section subscribe">
      <h4 className="banner__heading">Get new posts!</h4>
      <p>Subscribe to receive new posts each week</p>
      <form action="" onSubmit={e => onFormSubmit(e)} noValidate>
        <label className="sr-only" htmlFor="sub-email">
          Email
        </label>
        <input
          id="sub-email"
          className="input"
          type="email"
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
          placeholder="Your email"
        />
        {validationErrorMessage && (
          <span className="validation-error-msg">{validationErrorMessage}</span>
        )}
        <button className="button" type="submit" disabled={submittingFormState}>
          {submittingFormState ? <Loading /> : "Subscribe"}
        </button>
        {subscriptionFeedbackMessage && (
          <NotificationSnack type={subscriptionFeedbackMessage.type}>
            {subscriptionFeedbackMessage.message}
          </NotificationSnack>
        )}
      </form>
    </section>
  )
}
