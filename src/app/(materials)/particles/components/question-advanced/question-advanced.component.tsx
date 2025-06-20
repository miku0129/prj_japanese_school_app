"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@msano/prj_msano_lib";
import Audio from "@/components/audio/audio.component";
import CustomVerticalText from "@/components/custom-vertical-text";

export default function QuestionAdvanced({
  params: question,
}: {
  params: ParticlesQuestion;
}) {
  const [userAnswer, setUserAnswer] = useState("");

  const router = useRouter();

  function submitAnswer() {
    router.push(
      `/particles/${question.categoryId}/result/?group=${
        question.group
      }&state=${question.answer === userAnswer}`
    );
  }

  return (
    <div className="h-full flex flex-row-reverse justify-center gap-5 px-8">
      <div className="flex flex-col pt-8">
        <CustomVerticalText
          phrase="おとをききとろう"
          className="w-16 text-4xl"
        />
      </div>
      <div className="flex flex-col justify-center glow-2">
        <div className="flex justify-center">
          <div className="flex flex-row-reverse gap-5 max-w-[calc(800/16*1rem)]">
            <div className="form-like-field">
              <textarea
                cols={30}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="ひらがなでこたえをかいてね"
                rows={2}
                value={userAnswer}
                className="text-3xl md:text-4xl border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-end">
              <Button
                size="lg"
                aria-disabled={!userAnswer}
                onClick={submitAnswer}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </Button>
            </div>
          </div>
        </div>
        <div>
          {question.additionalQuestion?.sound_resource && (
            <Audio audioLink={question.additionalQuestion!.sound_resource} />
          )}
        </div>
      </div>
    </div>
  );
}
