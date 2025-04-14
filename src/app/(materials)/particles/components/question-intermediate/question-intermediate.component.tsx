"use client";

import React, { DragEvent, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CustomVerticalText from "@/components/custom-vertical-text";
import CustomBtn from "@/components/custom-btn";

import { mobileDragNDrop } from "@/lib";

export default function QuestionIntermediate({
  params: question,
}: {
  params: ParticlesQuestion;
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
  const correct_answer = question.answer;

  useEffect(() => {
    const setOptions = () => {
      containerRef1.current!.appendChild(
        document.getElementById(question.options[0].option.en)!
      );
      containerRef2.current!.appendChild(
        document.getElementById(question.options[1].option.en)!
      );
      containerRef3.current!.appendChild(
        document.getElementById(question.options[2].option.en)!
      );
      containerRef4.current!.appendChild(
        document.getElementById(question.options[3].option.en)!
      );
    };
    setOptions();
  }, [question.options]);

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

  function submitAnswer() {
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
        `/particles/${question.categoryId}/result/?group=${
          question.group
        }&state=${correct_answer === user_answer}`
      );
    }
  }

  return (
    <div className="h-full flex flex-row-reverse gap-4 justify-center text-3xl py-4 px-8">
      <CustomVerticalText
        phrase="どんなぶんがただしいかな？"
        className="ml-12"
      />

      <div className="min-w-fit flex flex-col justify-center gap-4">
        <div
          id="div1"
          onDrop={(ev) => {
            drop(1, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className="p-[calc(10/16*1rem)] border-1 border-gray-500 touch-none min-h-[calc(70/16*1rem)]"
          ref={containerRef1}
        ></div>
        <div
          id="div2"
          onDrop={(ev) => {
            drop(2, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className="p-[calc(10/16*1rem)] border-1 border-gray-500 touch-none min-h-[calc(70/16*1rem)]"
          ref={containerRef2}
        ></div>
        <div
          id="div3"
          onDrop={(ev) => {
            drop(3, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className="p-[calc(10/16*1rem)] border-1 border-gray-500 touch-none min-h-[calc(70/16*1rem)]"
          ref={containerRef3}
        ></div>
        <div
          id="div4"
          onDrop={(ev) => {
            drop(4, ev);
          }}
          onDragOver={(ev) => allowDrop(ev)}
          className="p-[calc(10/16*1rem)] border-1 border-gray-500 touch-none min-h-[calc(70/16*1rem)]"
          ref={containerRef4}
        ></div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="h-fit w-[calc(75/16*1rem)] flex flex-col justify-center gap-2.5 border-1 border-gray-200 bg-gray-200">
          <div
            id="div5"
            onDrop={(ev) => {
              drop(5, ev);
            }}
            onDragOver={(ev) => allowDrop(ev)}
            className="p-2.5 m-1 touch-none min-h-32 border-dotted border-1 border-gray-200 bg-white"
            ref={containerRef5}
          ></div>
          <div
            id="div6"
            onDrop={(ev) => {
              drop(6, ev);
            }}
            onDragOver={(ev) => allowDrop(ev)}
            className="p-2.5 m-1 touch-none min-h-32 border-dotted border-1 border-gray-200 bg-white"
            ref={containerRef6}
          ></div>
          <div
            id="div7"
            onDrop={(ev) => {
              drop(7, ev);
            }}
            onDragOver={(ev) => allowDrop(ev)}
            className="p-2.5 m-1 touch-none min-h-32 border-dotted border-1 border-gray-200 bg-white"
            ref={containerRef7}
          ></div>
        </div>
      </div>

      <Image
        id={question.options[0].option.en}
        src={question.options[0].option.image}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width={Number(question.options[0].option.styleWidth)}
        height={Number(question.options[0].option.styleHeight)}
      />
      <Image
        id={question.options[1].option.en}
        src={question.options[1].option.image}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width={Number(question.options[1].option.styleWidth)}
        height={Number(question.options[1].option.styleHeight)}
      />
      <Image
        id={question.options[2].option.en}
        src={question.options[2].option.image}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width={Number(question.options[2].option.styleWidth)}
        height={Number(question.options[2].option.styleHeight)}
      />
      <Image
        id={question.options[3].option.en}
        src={question.options[3].option.image}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width={Number(question.options[3].option.styleWidth)}
        height={Number(question.options[3].option.styleHeight)}
      />
      <div className="flex flex-col justify-end mb-20 lg:mb-0">
        <CustomBtn onClick={submitAnswer}>
          <i className="fa-solid fa-arrow-left text-white"></i>
        </CustomBtn>
      </div>
    </div>
  );
}
