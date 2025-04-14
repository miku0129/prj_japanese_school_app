import { ComponentProps } from "react";

type Props = ComponentProps<"button">;

export default function CustomBtn(props: Props) {
  const { children, className, ...rest } = props;
  return (
    <button
      className={`
        h-28 
        text-2xl 
        md:text-3xl 
        bg-blue-500 
        border-0 
        rounded-lg 
        py-4 
        px-5 
        sm:px-8 
        cursor-pointer 
        ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
