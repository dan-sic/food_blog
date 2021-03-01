import React, { useState } from "react"
import { Loading } from "../../Loading/Loading"
import { useSubscribe } from "./hooks/useSubscribe"

export const Subscribe = () => {
  const [emailValue, setEmailValue] = useState("")
  const [
    subscribe,
    subscriptionFeedbackMessage,
    submittingFormState,
  ] = useSubscribe()

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    subscribe(emailValue)
  }

  return (
    <section className="banner__section subscribe">
      <h4 className="banner__heading">Get new posts!</h4>
      <p>Subscribe to receive new posts each week</p>
      <form action="" onSubmit={e => onFormSubmit(e)} noValidate>
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="subscribe__input"
          type="email"
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
          placeholder="Your email"
        />
        {subscriptionFeedbackMessage && (
          <span>{subscriptionFeedbackMessage.message}</span>
        )}
        <button
          className="subscribe__submit-btn"
          type="submit"
          disabled={submittingFormState}
        >
          {submittingFormState ? <Loading /> : "Subscribe"}
        </button>
      </form>
    </section>
  )
}
