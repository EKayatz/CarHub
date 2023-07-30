"use client";

import React from "react";
import Image from "next/image";
import { ButtonProps } from "@/types";

const Props = {
  title: "Explore Cars",
  conainerStyles: "bg-primary-blue text-white rounded-full mt-10",
  handleClick: () => {},
};
const Button = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: ButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};

export default Button;
