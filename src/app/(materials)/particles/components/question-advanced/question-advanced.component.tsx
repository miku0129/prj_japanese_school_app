"use client";

import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import Audio from "@/components/audio/audio.component";
import {
  CustomPhraseStyle,
  // CustomIconBtnStyle,
  // CustomBtnContainerStyle,
} from "@/styles/styled-components/page";
import styles from "./question-advanced.style.module.scss";

export default function QuestionAdvanced({
  params: question,
}: {
  params: Question;
}) {
  // const [questions, setQuestions] = useState<Question[]>([]);
  // const [showAnswer, setShowAnswer] = useState(false);

  const [content, setContent] = useState("");

  // const router = useRouter();

  useEffect(() => {
    async function getQuestions() {
      // const res = await fetch(`/api/particles/`, {
      //   method: "GET",
      // });
      // const data = await res.json();
      // setQuestions(data)
    }
    getQuestions();
  }, []);

  // useEffect(() => {
  //   if (question.isIndex) {
  //     window.alert(
  //       "きこえた文をかいてみよう。かけたら👁を押してこたえをかくにんしよう。"
  //     );
  //   }
  // }, [question.isIndex]);

  // function answerHandler() {
  //   setShowAnswer(!showAnswer);
  // }

  // function pageHandler() {
  //   const nextCategoryId = question.categoryId + 1;
  //   router.push(`/particles/${nextCategoryId}/?level=${question.level}`);
  // }

  // const getMessage = () => {
  //   window.alert("💯クリアおめでとう！");
  //   router.push("/");
  // };

  return (
    // <div className={styles.sample}>
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
          <form onSubmit={() => {}}>
            <div className={styles.formIner}>
              <textarea
                cols={30}
                onChange={(e) => setContent(e.target.value)}
                placeholder="こたえをかいてね"
                rows={2}
                value={content}
                className={styles.inputField}
              />
              <div className={styles.btnContainer}>
                <button
                  disabled={!content}
                  type="submit"
                  className={styles.inputBtn}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        {question.additionalQuestion?.sound_resource && (
          <Audio audioLink={question.additionalQuestion!.sound_resource} />
        )}
      </div>
    </div>
    // </div>
  );
}
