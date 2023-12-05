import { useState } from "react";

const useInput = (validateValue) => {
    const [inputValue, setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateValue(inputValue);
    const hasError = !isValid && isTouched;

    const handlerChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const handlerBlurInput = (e) => {
        setIsTouched(true);
    };
    const reset = () => {
        setInputValue("");
        setIsTouched(false);
    };
    return {
        value: inputValue,
        isValid,
        hasError,
        handlerChangeInput,
        handlerBlurInput,
        reset
    };
};

export default useInput;
