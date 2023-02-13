import { useState } from "react"

const useInput = (validate) => {
    const [input, setInput] = useState("")
    const [inputIsTouched, SetInputIsTouched] = useState(false)

    const inputIsValid = validate(input)

    const inputChangeHandler = (e) => {
        setInput(e.currentTarget.value)
    }

    const inputOnBlur = (e) => {
        SetInputIsTouched(true)
    }

    const resetValue = () => {
        setInput("")
        SetInputIsTouched(false)
    }

    const inputHasError = inputIsTouched && !inputIsValid

    return {
        input,
        inputIsValid,
        inputChangeHandler,
        inputOnBlur,
        inputHasError,
        resetValue
    }
}

export default useInput;