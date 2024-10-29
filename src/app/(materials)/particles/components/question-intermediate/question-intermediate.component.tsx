"use client";

import React, { DragEvent, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  CustomPhraseStyle,
  CustomBtnContainerStyle,
  CustomIconBtnStyle,
} from "@/styles/styled-components/page";
import styles from "./question-intermediate.style.module.scss";

import { mobileDragNDrop } from "@/lib";

export default function QuestionIntermediate({
  params: item,
}: {
  params: ItemParticleIntermediate;
}) {
  // // iOS/Androidのときだけ、usePolyfill=trueになる
  mobileDragNDrop();

  const containerRef1 = useRef<HTMLInputElement>(null);
  const containerRef2 = useRef<HTMLInputElement>(null);
  const containerRef3 = useRef<HTMLInputElement>(null);
  const containerRef4 = useRef<HTMLInputElement>(null);
  const containerRef5 = useRef<HTMLInputElement>(null);
  const containerRef6 = useRef<HTMLInputElement>(null);
  const containerRef7 = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const correct_answer = item.answer;

  useEffect(() => {
    const setChoices = () => {
      containerRef1.current!.appendChild(
        document.getElementById(item.choices[0].en)!
      );
      containerRef2.current!.appendChild(
        document.getElementById(item.choices[1].en)!
      );
      containerRef3.current!.appendChild(
        document.getElementById(item.choices[2].en)!
      );
      containerRef4.current!.appendChild(
        document.getElementById(item.choices[3].en)!
      );
    };
    setChoices();
  }, [item.choices]);

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
    } else if (id === 4) {
      containerRef4.current!.appendChild(document.getElementById(data)!);
    } else if (id === 5) {
      containerRef5.current!.appendChild(document.getElementById(data)!);
    } else if (id === 6) {
      containerRef6.current!.appendChild(document.getElementById(data)!);
    } else if (id === 7) {
      containerRef7.current!.appendChild(document.getElementById(data)!);
    }
  }

  function getResult() {
    const user_answer1 = document.getElementById("div5");
    const user_answer2 = document.getElementById("div6");
    const user_answer3 = document.getElementById("div7");

    if (
      user_answer1!.getElementsByTagName("img").length === 0 ||
      user_answer2!.getElementsByTagName("img").length === 0 ||
      user_answer3!.getElementsByTagName("img").length === 0
    ) {
      window.alert("ひらがなをえらんでね");
    } else {
      const user_answer =
        `${user_answer1!.getElementsByTagName("img")[0].id} ` +
        user_answer2!.getElementsByTagName("img")[0].id +
        ` ${user_answer3!.getElementsByTagName("img")[0].id}`;
      router.push(
        `/particles/${item.category_id}/result/?level=${item.level}&state=${
          correct_answer === user_answer
        }`
      );
    }
  }

  return (
    <div className={styles.particlesIntermediateBase}>
      <CustomPhraseStyle className={styles.phrase}>
        <p>ど</p>
        <p>ん</p>
        <p>な</p>
        <p>ぶ</p>
        <p>ん</p>
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
          className={styles.particlesIntermediateChoice}
          ref={containerRef1}
        ></div>
        <div
          id="div2"
          onDrop={(ev) => {
            drop(2, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className={styles.particlesIntermediateChoice}
          ref={containerRef2}
        ></div>
        <div
          id="div3"
          onDrop={(ev) => {
            drop(3, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className={styles.particlesIntermediateChoice}
          ref={containerRef3}
        ></div>
        <div
          id="div4"
          onDrop={(ev) => {
            drop(4, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className={styles.particlesIntermediateChoice}
          ref={containerRef4}
        ></div>
      </div>

      <div className={styles.particlesIntermediateAnswerContainer}>
        <div
          id="div5"
          onDrop={(ev) => {
            drop(5, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className={styles.particlesIntermediateAnswer}
          ref={containerRef5}
        ></div>
        <div
          id="div6"
          onDrop={(ev) => {
            drop(6, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className={styles.particlesIntermediateAnswer}
          ref={containerRef6}
        ></div>
        <div
          id="div7"
          onDrop={(ev) => {
            drop(7, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className={styles.particlesIntermediateAnswer}
          ref={containerRef7}
        ></div>
      </div>

      <Image
        id={item.choices[0].en}
        src={item.choices[0].image}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width={Number(item.choices[0].style_width)}
        height={Number(item.choices[0].style_height)}
      />
      <Image
        id={item.choices[1].en}
        src={item.choices[1].image}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width={Number(item.choices[1].style_width)}
        height={Number(item.choices[1].style_height)}
      />
      <Image
        id={item.choices[2].en}
        src={item.choices[2].image}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width={Number(item.choices[2].style_width)}
        height={Number(item.choices[2].style_height)}
      />
      <Image
        id={item.choices[3].en}
        src={item.choices[3].image}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width={Number(item.choices[3].style_width)}
        height={Number(item.choices[3].style_height)}
      />

      <CustomBtnContainerStyle onClick={getResult}>
        <CustomIconBtnStyle>
          <i className="fa-solid fa-arrow-left"></i>
        </CustomIconBtnStyle>
      </CustomBtnContainerStyle>
    </div>
  );
}
