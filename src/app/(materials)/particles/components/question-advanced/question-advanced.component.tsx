"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Audio from "@/components/audio/audio.component";
import CustomVerticalText from "@/components/custom-vertical-text";
import CustomBtn from "@/components/custom-btn";

export default function QuestionAdvanced({
  params: question,
}: {
  params: Question;
}) {
  const [userAnswer, setUserAnswer] = useState("");

  const router = useRouter();

  function submitAnswer() {
    router.push(
      `/particles/${question.categoryId}/result/?level=${
        question.level
      }&state=${question.answer === userAnswer}`
    );
  }

  return (
    <div className="flex flex-row-reverse justify-center py-4 px-8 text-3xl">
      <CustomVerticalText phrase="おとをききとろう" className="w-16"/>
      <div className="w-screen">
        <div className="flex justify-center">
          <div className="flex flex-row-reverse gap-5 max-w-[calc(800/16*1rem)]">
            <div className="form-like-field">
              <textarea
                cols={30}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="ひらがなでこたえをかいてね"
                rows={2}
                value={userAnswer}
                className="text-5xl"
              />
            </div>
            <div className="flex flex-col justify-end">
              <CustomBtn disabled={!userAnswer} onClick={submitAnswer}>
                <i className="fa-solid fa-arrow-left"></i>
              </CustomBtn>
            </div>
          </div>
        </div>
        {question.additionalQuestion?.sound_resource && (
          <Audio audioLink={question.additionalQuestion!.sound_resource} />
        )}
      </div>
    </div>
  );
}
