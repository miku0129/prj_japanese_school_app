"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Audio from "@/components/audio/audio.component";
import {
  CustomPhraseStyle,
  CustomIconBtnStyle,
  CustomBtnContainerStyle,
} from "@/styles/styled-components/page";
import styles from "./question-advanced.style.module.scss";

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
    <div className={styles.phraseContainer}>
      <CustomPhraseStyle>
        <p>👂</p>
        <p>音</p>
        <p>を</p>
        <p>き</p>
        <p>き</p>
        <p>と</p>
        <p>ろ</p>
        <p>う</p>
      </CustomPhraseStyle>

      <div className={styles.formContainer}>
        <div className={styles.formOuter}>
          <div className={styles.formIner}>
            <div className="form-like-field">
              <textarea
                cols={30}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="ひらがなでこたえをかいてね"
                rows={2}
                value={userAnswer}
                className={styles.inputField}
              />
            </div>
            <CustomBtnContainerStyle>
              <CustomIconBtnStyle disabled={!userAnswer} onClick={submitAnswer}>
                <i className="fa-solid fa-arrow-left"></i>
              </CustomIconBtnStyle>
            </CustomBtnContainerStyle>
          </div>
        </div>
        {question.additionalQuestion?.sound_resource && (
          <Audio audioLink={question.additionalQuestion!.sound_resource} />
        )}
      </div>
    </div>
  );
}
