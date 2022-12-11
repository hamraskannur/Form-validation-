import { useState } from "react"

const SimpleInput = (props) => {
  const [enteredName, setenteredName] = useState('')
  const [enteredNameToched, setenteredNameToched] = useState(false)

  const [enteredEmail, setenteredEmail] = useState('')
  const [enteredEmailToched, setenteredEmailToched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ""
  const nameInputIsValid = !enteredNameIsValid && enteredNameToched

  const enteredEmailIsValid = enteredEmail.trim() !== "" && enteredEmail.includes("@")
  const EmailInputIsValid = !enteredEmailIsValid && enteredEmailToched
  const enteredNameChangeHandler = (event) => {
    setenteredName(event.target.value)

  }
  const enteredEmailChangeHandler = (event) => {
    setenteredEmail(event.target.value)

 }
  let formValid=false
    if (nameInputIsValid && EmailInputIsValid) {
      formValid=true
    }

  const NameInputBlurHandler = () => {
    setenteredNameToched(true)
  }
  const EmailInputBlurHandler = () => {
    setenteredEmailToched(true)
  }

  const formSibmissionHandler = (event) => {
    event.preventDefault()
    if (!enteredNameIsValid) {
      return
    }
    setenteredName('')
    setenteredEmail('')
    enteredEmailToched(false)
    setenteredNameToched(false)
  }
  const classInputName = nameInputIsValid ? "form-control invalid" : "form-control"
  const classInputEmail = EmailInputIsValid ? "form-control invalid" : "form-control"

  return (
    <form onSubmit={formSibmissionHandler}>
      <div className={classInputName}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' onBlur={NameInputBlurHandler} id='name' onChange={enteredNameChangeHandler} />
        {nameInputIsValid && <p className="errormessage">enter Name not be empty.</p>}
      </div>
      <div className={classInputEmail}>
        <label htmlFor='name'>Your Email</label>
        <input value={enteredEmail} type='email' onBlur={EmailInputBlurHandler} id='email' onChange={enteredEmailChangeHandler} />
        {EmailInputIsValid && <p className="errormessage">enter email not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;


