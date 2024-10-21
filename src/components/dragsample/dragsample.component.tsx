"use client";

import React, { DragEvent, useRef } from "react";
import Image from "next/image";
import logo from "../../public/images/img_logo.gif";

export default function Dragsample() {
  const containerRef = useRef<HTMLInputElement>(null);

  const allowDrop = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  const drag = (
    ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
  ) => {
    console.log("dragged");
    ev.dataTransfer.setData("text", ev.target.id);

  };

  function drop(ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    console.log("dropped");

    const data = ev.dataTransfer.getData("text");
    containerRef.current!.appendChild(document.getElementById(data)!);
  }

  return (
    <div>
      <p>Drag image into the rectangle:</p>

      <div
        id="div1"
        onDrop={(ev) => {
          drop(ev);
        }}
        onDragOver={(ev) => allowDrop(ev)}
        className="drag-container"
        ref={containerRef}
      ></div>
      <Image
        id="drag1"
        src={logo.src}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width="336"
        height="69"
      />
      <style jsx>{`
        .drag-container {
          width: 350px;
          height: 70px;
          padding: 10px;
          border: 1px solid #aaaaaa;
        }
      `}</style>
    </div>
  );
}
