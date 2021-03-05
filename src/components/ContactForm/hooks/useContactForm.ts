import { useState } from "react"

export const useContactForm = (): [
  typeof contactForm,
  typeof onUpdateContactForm,
  typeof sendFormData,
  SubmitResult,
  boolean
] => {
  const [submittingFormState, setSubmittingFormState] = useState(false)
  const [submitResult, setSubmitResult] = useState<SubmitResult>(null)

  const [contactForm, setContactForm] = useState<ContactForm>({
    name: {
      value: "",
      error: undefined,
      validators: [requiredValidator, maxNCharactersValidator(50)],
    },
    email: {
      value: "",
      error: undefined,
      validators: [
        requiredValidator,
        emailValidator,
        maxNCharactersValidator(50),
      ],
    },
    message: {
      value: "",
      error: undefined,
      validators: [requiredValidator, maxNCharactersValidator(5000)],
    },
  })

  const onUpdateContactForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist()
    const inputName = e.target.name
    const inputValue = e.target.value

    setContactForm(s => ({
      ...s,
      [inputName]: {
        ...s[inputName],
        value: inputValue,
        error: getInputError(s[inputName].validators, inputValue),
      },
    }))
  }

  function isContactFormValid(): boolean {
    let isFormValid = true

    for (let key of Object.keys(contactForm)) {
      const { value, validators } = contactForm[key]
      const maybeError = getInputError(validators, value)

      if (maybeError) {
        isFormValid = false
        setContactForm(s => ({
          ...s,
          [key]: {
            ...s[key],
            error: maybeError,
          },
        }))
      }
    }
    return isFormValid
  }

  const sendFormData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isValid = isContactFormValid()

    if (!isValid) return

    setSubmittingFormState(true)

    try {
      await uploadContactForm(contactForm)
      setSubmitResult({
        message: "Your message was sent successfully!",
        type: "success",
      })
    } catch {
      setSubmitResult({
        message: "Something went wrong, try again later",
        type: "error",
      })
    } finally {
      setSubmittingFormState(false)

      setTimeout(() => {
        setSubmitResult(null)
      }, 5000)
    }
  }

  return [
    contactForm,
    onUpdateContactForm,
    sendFormData,
    submitResult,
    submittingFormState,
  ]
}

const uploadContactForm = async (contactForm: ContactForm) => {
  const { name, email, message } = contactForm
  fetch("https://email-service966.herokuapp.com/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailSubject: "New message",
      emailText: `New message from ${name.value} (${email.value}): ${message.value}`,
    }),
  })
}

type ValidatorFn = (v: string) => null | string
type ContactForm = {
  name: { value: string; error: undefined | string; validators: ValidatorFn[] }
  email: { value: string; error: undefined | string; validators: ValidatorFn[] }
  message: {
    value: string
    error: undefined | string
    validators: ValidatorFn[]
  }
}
type SubmitResult = {
  type: "success" | "error"
  message: string
}

function getInputError(validators: ValidatorFn[], inputVlue: string) {
  return validators
    .map(validator => validator(inputVlue))
    .find(validatorResult => validatorResult)
}

const maxNCharactersValidator = (n: number): ValidatorFn => (v: string) =>
  v.length <= n ? null : `Max length allowed: ${n}`
const requiredValidator: ValidatorFn = (v: string) =>
  v !== "" && v !== null && v !== undefined ? null : "Field required"
const emailValidator: ValidatorFn = (v: string) =>
  /^[^@]+@[^@]+\.[^@]+$/.test(v) ? null : "Valid email required"
