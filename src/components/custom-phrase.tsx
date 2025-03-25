type Props = {
  phrase: string;
};

export default function CustomPhrase(props: Props) {
  const { phrase } = props;
  return (
    <div className="flex flex-col justify-center">
      {phrase.split("").map((char) => (
        <p
          key={char}
          className="text-[calc(40/16*1rem)] text-center"
        >
          {char}
        </p>
      ))}
    </div>
  );
}
