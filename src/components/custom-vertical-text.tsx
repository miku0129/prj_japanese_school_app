import type { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
  phrase?: string;
};

const getPhrase = (phrase: string) => {
  return phrase.split("").map((char) => (
    <p key={char} className="text-3xl text-center">
      {char}
    </p>
  ));
};

export default function CustomVerticalText (props: Props) {
  const { phrase, children, className, ...rest } = props;
  return (
    <div
      className={`flex flex-col justify-center ${className ? className : ""}`}
      {...rest}
    >
      {phrase ? getPhrase(phrase) : children}
    </div>
  );
}
