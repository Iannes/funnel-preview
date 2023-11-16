import { Dispatch, SetStateAction, useCallback } from "react";
import { ErrorMessageState } from "types";

type SetError = Dispatch<SetStateAction<ErrorMessageState>>;
export const useError = (setError: SetError) => {
  const createSetError = useCallback(
    (errorMessage: string) => {
      return () =>
        setError({
          hasError: true,
          errorMessage,
        });
    },
    [setError]
  );

  return {
    setFileReadError: createSetError(
      "There was a problem with reading your file"
    ),
    setInvalidJsonError: createSetError(
      "Your JSON file has an invalid structure. Please check for syntax errors, or for typos in the code."
    ),
    setInvalidFileTypeError: createSetError(
        "Please only provide files in JSON format and only provide one file at a time."
    ),
  };
};
