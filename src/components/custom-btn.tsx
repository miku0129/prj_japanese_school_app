import { ComponentProps } from "react";

type Props = ComponentProps<"button">;

export default function CustomBtn(props: Props) {
  const { children, ...rest } = props;
  return (
    <button
      className="h-28 text-4xl bg-gray-300 border-0 rounded-lg py-4 px-8 cursor-pointer"
      {...rest}
    >
      {children}
    </button>
  );
}
