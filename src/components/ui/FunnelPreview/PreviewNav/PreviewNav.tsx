import { Dispatch, SetStateAction } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

type PreviewNavProps = {
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
  hide: boolean;
  onPageChange: Dispatch<SetStateAction<number>>;
};

const navigationClasses = classNames(
  "absolute",
  "left-0",
  "right-0",
  `top-[50%]`,
  "flex",
  "justify-between",
  `mx-[-55px]`
);

const chevronButtonClass = classNames(
  "pointer",
  "h-12 w-12",
  "transition duration-400 ease-in-out",
  "disabled:opacity-50",
  "disabled:cursor-not-allowed"
);

export const PreviewNav = ({
  isPreviousDisabled,
  isNextDisabled,
  onPageChange,
  hide,
}: PreviewNavProps) => {
  if (hide === true) return null;

  const previousButtonClass = classNames(
    { "active:scale-90": isNextDisabled },
    { "bg-disabled opacity-60 cursor-notAllowed": isPreviousDisabled }
  );
  const nextButtonClass = classNames(
    { "active:scale-90": isPreviousDisabled },
    { "bg-disabled opacity-60 cursor-notAllowed": isNextDisabled }
  );

  const goToNextPage = () => {
    onPageChange((prevIndex: number) => prevIndex + 1);
  };

  const goToPreviousPage = () => {
    onPageChange((prevIndex: number) => prevIndex - 1);
  };

  return (
    <nav className={navigationClasses}>
      <button
        onClick={goToPreviousPage}
        disabled={isPreviousDisabled}
        className={previousButtonClass}
      >
        <ChevronLeftIcon className={chevronButtonClass} />
      </button>
      <button
        onClick={goToNextPage}
        disabled={isNextDisabled}
        className={nextButtonClass}
      >
        <ChevronRightIcon className={chevronButtonClass} />
      </button>
    </nav>
  );
};
