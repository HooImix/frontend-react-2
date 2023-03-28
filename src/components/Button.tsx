import React from "react";

type Props = {
  runFunction: any;
};

function Button({ runFunction }: Props) {
  return (
    <button
      onClick={runFunction}
      className="transition-all duration-100 border border-gray-500 px-4 py-12 w-full  rounded-lg bg-blue-500 text-white hover:bg-blue-600"
    >
      Place Bet
    </button>
  );
}

export default Button;
