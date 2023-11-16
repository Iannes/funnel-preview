import React, { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { ArrowUpOnSquareStackIcon } from "@heroicons/react/24/outline";

import { safeJsonParse } from "utils/safeJsonParse";
import { isValidFunnelData } from "utils/isValidFunnelData";
import { useError } from "hooks/useError";

import { DeviceDimensions, ErrorMessageState, FunnelData } from "types";

type Props = {
  setError: Dispatch<SetStateAction<ErrorMessageState>>;
  setFunnelData: (data: FunnelData | null) => void;
};

export const Dropzone: React.FC<Props> = ({ setError, setFunnelData }) => {
  const { setFileReadError, setInvalidJsonError, setInvalidFileTypeError } =
    useError(setError);

  const handleJson = useCallback(
    (json: string) => {
      const parsedJson = safeJsonParse<FunnelData>(json);
      if (parsedJson && isValidFunnelData(parsedJson)) {
        setFunnelData(parsedJson);
      } else {
        setInvalidJsonError();
      }
    },
    [setFunnelData, setInvalidJsonError]
  );

  const readFile = useCallback(
    (file: File) => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) =>
        handleJson(event.target?.result as string);
      reader.onerror = setFileReadError;
      reader.readAsText(file);
    },
    [handleJson, setFileReadError]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      setFunnelData(null); // reset state before processing file
      if (fileRejections.length > 0) {
        setInvalidFileTypeError();
        return;
      }
      readFile(acceptedFiles[0]);
    },
    [readFile, setInvalidFileTypeError, setFunnelData]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/json": [".json"],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer p-10 mt-10"
      style={{ width: DeviceDimensions.width }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <ArrowUpOnSquareStackIcon className="h-10 w-10 mb-5" />
        <p className="mb-2 text-sm text-gray-700">
          <span className="font-semibold">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-md text-black">JSON files only</p>
      </div>
      <input {...getInputProps()} className="hidden" />
    </div>
  );
};
