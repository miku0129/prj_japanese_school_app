import { ComponentProps } from "react";

type BtnType = "default" | "custom";

type Props = ComponentProps<"button"> & {
  btnType?: BtnType;
};

export default function CustomBtn(props: Props) {
  const { btnType = "default", children, className, ...rest } = props;

  const btnStyles = {
    default: "h-28 text-2xl md:text-3xl bg-blue-500 py-4 px-5 sm:px-8",
    custom: "",
  };
  return (
    <button
      className={`
        ${btnStyles[btnType]}
        border-0
        rounded-lg 
        cursor-pointer 
        ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
