import {
  useState,
} from "react";

function useFormInput(
  startingValue = ""
) {
  const [
    value,
    setValue,
  ] = useState(
    startingValue
  );

  const [
    message,
    setMessage,
  ] = useState("");

  function validate(
    validator: (
      value: string
    ) => string
  ) {
    const result =
      validator(value);

    setMessage(result);

    return result === "";
  }

  function clear() {
    setValue("");
    setMessage("");
  }

  return {
    value,
    setValue,
    message,
    setMessage,
    validate,
    clear,
  };
}

export default useFormInput;