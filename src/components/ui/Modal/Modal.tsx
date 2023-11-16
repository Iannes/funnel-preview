import React, { FC, useEffect, useRef } from "react";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";

type ModalProps = {
  showModal: boolean;
  heading: string;
  message: string;
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({
  showModal,
  heading,
  message,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showModal) {
      modalRef.current?.focus();
    }
  }, [showModal]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  return showModal ? (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center p-4"
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalHeading"
        aria-describedby="modalMessage"
        tabIndex={-1}
        className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md mx-auto"
      >
        <header className="flex justify-between content-start px-4 border-b border-solid py-2">
          <h2
            id="modalHeading"
            className="text-2xl font-medium text-red-800 capitalize"
          >
            {heading}
          </h2>
          <button onClick={onClose} aria-label="Close">
            <XMarkIcon className="h-8 w-8 text-grey-800" />
          </button>
        </header>
        <p id="modalMessage" className="my-4 text-xl leading-relaxed">
          {message}
        </p>
        <footer className="mt-6">
          <button
            onClick={onClose}
            className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-12 rounded"
          >
            Dismiss
          </button>
        </footer>
      </div>
    </div>
  ) : null;
};
