"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@msano/prj_msano_lib";

export default function Question({
  params: question,
}: {
  params: RomajisQuestion;
}) {
  const [userAnswer, setUserAnswer] = useState("");

  const router = useRouter();

  function submitAnswer() {
    router.push(
      `/romajis/${question.categoryId}/result/?group=${
        question.group
      }&state=${question.options
        .map((item) => item.option.option)
        .includes(userAnswer)}`
    );
  }

  return (
    <div className="h-dvh flex flex-col justify-center gap-5 p-8">
      <div className="text-6xl">{question.hiragana}</div>
      <div className="flex flex-row gap-5">
        <textarea
          cols={30}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="ここにローマ字で答えを書いてね"
          rows={2}
          value={userAnswer.toLowerCase().trim()}
          className="text-3xl md:text-5xl border-2 border-gray-300 rounded-lg"
        />
        <Button size="lg" aria-disabled={!userAnswer} onClick={submitAnswer}>
          <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
}
