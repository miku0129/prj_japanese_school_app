"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomBtn from "@/components/custom-btn";

export default function Question({
  params: question,
}: {
  params: QuestionRomaji;
}) {
  const [userAnswer, setUserAnswer] = useState("");

  const router = useRouter();

  function submitAnswer() {
    router.push(
      `/romajis/${question.categoryId}/result/?group=${question.group}&state=${
        question.answer.includes(userAnswer)
      }`
    );
  }
  return (
    <div className="h-screen flex flex-col justify-center gap-5 py-4 px-8">
      <div className="text-6xl">{question.hiragana}</div>
      <div className="flex flex-row gap-5">
        <textarea
          cols={30}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="ここにローマ字で答えを書いてね"
          rows={2}
          value={userAnswer}
          className="text-3xl md:text-5xl"
        />
        <CustomBtn disabled={!userAnswer} onClick={submitAnswer}>
          <i className="fa-solid fa-arrow-right"></i>
        </CustomBtn>
      </div>
    </div>
  );
}
