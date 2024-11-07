"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Audio from "@/components/audio/audio.component";
import {
  CustomPhraseStyle,
  CustomIconBtnStyle,
  CustomBtnContainerStyle,
} from "@/styles/styled-components/page";
import styles from "./question-advanced.style.module.scss";
import { DATA } from "../../data";

export default function QuestionAdvanced({
  params: question,
}: {
  params: Question;
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const router = useRouter();
  const particleItems = DATA.filter(
    (question) => question.category === "particles"
  );

  useEffect(() => {
    if (question.isIndex) {
      window.alert(
        "きこえた文をかいてみよう。かけたら👁を押してこたえをかくにんしよう。"
      );
    }
  }, [question.isIndex]);

  function answerHandler() {
    setShowAnswer(!showAnswer);
  }

  function pageHandler() {
    const nextCategoryId = question.categoryId + 1;
    router.push(`/particles/${nextCategoryId}/?level=${question.level}`);
  }

  const getMessage = () => {
    window.alert("💯クリアおめでとう！");
    router.push("/");
  };

  return (
    <div className={styles.sample}>
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

        <div className={styles.answerOuterContainer}>
          {showAnswer && (
            <div className={styles.answerBoard}>
              <div className={styles.explanation}>
                <p>こ</p>
                <p>た</p>
                <p>え</p>
              </div>
              <div className={styles.answerPhraseContainer}>
                {question.answer!.split("").map((char: string, idx: number) => {
                  return <p key={idx}>{char}</p>;
                })}
              </div>
            </div>
          )}
          {!showAnswer && (
            <CustomBtnContainerStyle>
              <CustomIconBtnStyle onClick={() => answerHandler()}>
                <i className="fa-regular fa-eye"></i>
              </CustomIconBtnStyle>
            </CustomBtnContainerStyle>
          )}
          {showAnswer && particleItems.length > question.categoryId && (
            <div className={styles.buttonContainer}>
              <CustomBtnContainerStyle>
                <CustomIconBtnStyle onClick={() => answerHandler()}>
                  <i className="fa-regular fa-eye-slash"></i>
                </CustomIconBtnStyle>
              </CustomBtnContainerStyle>
              <CustomBtnContainerStyle>
                <CustomIconBtnStyle onClick={() => pageHandler()}>
                  <i className="fa-solid fa-arrow-left"></i>
                </CustomIconBtnStyle>
              </CustomBtnContainerStyle>
            </div>
          )}
          {showAnswer && particleItems.length === question.categoryId && (
            <div className={styles.buttonContainer}>
              <CustomBtnContainerStyle>
                <CustomIconBtnStyle onClick={() => answerHandler()}>
                  <i className="fa-regular fa-eye-slash"></i>
                </CustomIconBtnStyle>
              </CustomBtnContainerStyle>
              <CustomBtnContainerStyle>
                <CustomIconBtnStyle onClick={() => getMessage()}>
                  <i className="fa-regular fa-face-smile-wink"></i>
                </CustomIconBtnStyle>
              </CustomBtnContainerStyle>
            </div>
          )}
        </div>
      </div>
      {question.additionalQuestion?.sound_resource && (
        <Audio audioLink={question.additionalQuestion!.sound_resource} />
      )}
    </div>
  );
}
