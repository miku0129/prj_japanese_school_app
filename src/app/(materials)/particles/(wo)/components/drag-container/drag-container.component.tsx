"use client";

import React, { DragEvent, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./drag-container.style.module.scss";
import {
  CustomPhraseStyle,
  CustomBtnContainerStyle,
  CustomIconBtnStyle,
} from "@/styles/styled-components/page";

export default function DragContainer({
  params: item,
}: {
  params: ItemParticle;
}) {
  const containerRef1 = useRef<HTMLInputElement>(null);
  const containerRef2 = useRef<HTMLInputElement>(null);
  const containerRef3 = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const correct_answer = item.character;

  useEffect(() => {
    containerRef1.current!.appendChild(
      document.getElementById(item.choices[0].pron)!
    );
    containerRef2.current!.appendChild(
      document.getElementById(item.choices[1].pron)!
    );
  }, [item.choices]);

  const allowDrop = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  const drag = (
    ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
  ) => {
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

  function getResult() {
    const data = document.getElementById("div3");
    if (data!.getElementsByTagName("img").length === 0) {
      window.alert("ひらがなをえらんでね");
    } else {
      const answer = data!.getElementsByTagName("img")[0].id;
      router.push(`/particles/${item.id}/result/?params=${correct_answer === answer}`);
    }
  }

  return (
    <div className={styles.dragContainerBase}>
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
          className={styles.dragContainer}
          ref={containerRef1}
        ></div>
        <div
          id="div2"
          onDrop={(ev) => {
            drop(2, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className={styles.dragContainer}
          ref={containerRef2}
        ></div>
      </div>

      <CustomPhraseStyle>
        {item.phrase_front.split("").map((char: string, idx) => {
          return <p key={idx}>{char}</p>;
        })}
        <p> </p>
        <div
          id="div3"
          onDrop={(ev) => {
            drop(3, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className={styles.dragContainer}
          ref={containerRef3}
        ></div>
        {item.phrase_back.split("").map((char: string, idx) => {
          return <p key={idx}>{char}</p>;
        })}
      </CustomPhraseStyle>

      <Image
        id={item.choices[0].pron}
        src={item.choices[0].image}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width="70"
        height="70"
        style={{ border: item.choices[0].props }}
      />
      <Image
        id={item.choices[1].pron}
        src={item.choices[1].image}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width="70"
        height="70"
        style={{ border: item.choices[1].props }}
      />

      <CustomBtnContainerStyle onClick={getResult}>
        <CustomIconBtnStyle>
          <i className="fa-solid fa-arrow-left"></i>
        </CustomIconBtnStyle>
      </CustomBtnContainerStyle>
    </div>
  );
}
