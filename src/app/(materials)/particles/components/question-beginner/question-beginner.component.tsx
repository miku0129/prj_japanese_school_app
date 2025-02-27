"use client";

import React, { DragEvent, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  CustomPhraseStyle,
  CustomBtnContainerStyle,
  CustomIconBtnStyle,
} from "@/styles/styled-components/page";
import styles from "./question-beginner.style.module.scss";

import { mobileDragNDrop } from "@/lib";

export default function QuestionBeginner({
  params: question,
}: {
  params: Question;
}) {
  const containerRef1 = useRef<HTMLInputElement>(null);
  const containerRef2 = useRef<HTMLInputElement>(null);
  const containerRef3 = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const correct_answer = question.character;

  // // iOS/Androidのときだけ、usePolyfill=trueになる
  mobileDragNDrop();

  useEffect(() => {
    containerRef1.current!.appendChild(
      document.getElementById(question.choices[0].choice.en)!
    );
    containerRef2.current!.appendChild(
      document.getElementById(question.choices[1].choice.en)!
    );
  }, [question.choices]);

  const allowDrop = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  const drag = (
    ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
  ) => {
    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.setData("text", ev.target.id);
  };

  function drop(id: number, ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    if (id === 1) {
      containerRef1.current!.appendChild(document.getElementById(data)!);
    } else if (id === 2) {
      containerRef2.current!.appendChild(document.getElementById(data)!);
    } else if (id === 3) {
      containerRef3.current!.appendChild(document.getElementById(data)!);
    }
  }

  function submitAnswer() {
    const data = document.getElementById("div3");
    if (data!.getElementsByTagName("img").length === 0) {
      window.alert("ひらがなをえらんでね");
    } else {
      const answer = data!.getElementsByTagName("img")[0].id;
      router.push(
        `/particles/${question.categoryId}/result/?level=${
          question.level
        }&state=${correct_answer === answer}`
      );
    }
  }

  return (
    <div className={styles.woBeguinnerBase}>
      <CustomPhraseStyle className={styles.phrase}>
        <p>ど</p>
        <p>の</p>
        <p>ひ</p>
        <p>ら</p>
        <p>が</p>
        <p>な</p>
        <p>が</p>
        <p>正</p>
        <p>し</p>
        <p>い</p>
        <p>か</p>
        <p>な</p>
        <p>？</p>
      </CustomPhraseStyle>

      <div className={styles.choises}>
        <div
          id="div1"
          onDrop={(ev) => {
            drop(1, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className={styles.woBeguinner}
          ref={containerRef1}
        ></div>
        <div
          id="div2"
          onDrop={(ev) => {
            drop(2, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className={styles.woBeguinner}
          ref={containerRef2}
        ></div>
      </div>

      <CustomPhraseStyle>
        {question
          .additionalQuestion!.phrase_front!.split("")
          .map((char: string, idx) => {
            return <p key={idx}>{char}</p>;
          })}
        <p></p>
        <div
          id="div3"
          onDrop={(ev) => {
            drop(3, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className={styles.woBeguinner}
          ref={containerRef3}
        ></div>
        {question
          .additionalQuestion!.phrase_back!.split("")
          .map((char: string, idx) => {
            return <p key={idx}>{char}</p>;
          })}
      </CustomPhraseStyle>

      <Image
        id={question.choices[0].choice.en}
        src={question.choices[0].choice.image}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width="70"
        height="70"
      />
      <Image
        id={question.choices[1].choice.en}
        src={question.choices[1].choice.image}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width="70"
        height="70"
      />

      <CustomBtnContainerStyle onClick={submitAnswer}>
        <CustomIconBtnStyle>
          <i className="fa-solid fa-arrow-left"></i>
        </CustomIconBtnStyle>
      </CustomBtnContainerStyle>
    </div>
  );
}
