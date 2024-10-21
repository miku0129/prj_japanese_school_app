"use client";

import React, { DragEvent, useRef, useEffect } from "react";
import Image from "next/image";
import img_o from "../../public/images/img_o.png";
import img_wo from "../../public/images/img_wo.png";

export default function DragContainer() {
  const containerRef1 = useRef<HTMLInputElement>(null);
  const containerRef2 = useRef<HTMLInputElement>(null);
  const containerRef3 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    containerRef1.current!.appendChild(document.getElementById("wo")!);
    containerRef2.current!.appendChild(document.getElementById("o")!);
  }, []);

  const allowDrop = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  const drag = (
    ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
  ) => {
    console.log("dragged");
    ev.dataTransfer.setData("text", ev.target.id);
  };

  function drop1(ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    console.log("dropped1");

    const data = ev.dataTransfer.getData("text");
    containerRef1.current!.appendChild(document.getElementById(data)!);
  }
  function drop2(ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    console.log("dropped2");

    const data = ev.dataTransfer.getData("text");
    containerRef2.current!.appendChild(document.getElementById(data)!);
  }
  function drop3(ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    console.log("dropped2");

    const data = ev.dataTransfer.getData("text");
    containerRef3.current!.appendChild(document.getElementById(data)!);
  }


  return (
    <div>
      <p>Drag image into the rectangle:</p>

      <div
        id="div1"
        onDrop={(ev) => {
          drop1(ev);
        }}
        onDragOver={(ev) => allowDrop(ev)}
        className="drag-container"
        ref={containerRef1}
      ></div>
      <div
        id="div2"
        onDrop={(ev) => {
          drop2(ev);
        }}
        onDragOver={(ev) => allowDrop(ev)}
        className="drag-container"
        ref={containerRef2}
      ></div>
      <div
        id="div3"
        onDrop={(ev) => {
          drop3(ev);
        }}
        onDragOver={(ev) => allowDrop(ev)}
        className="drag-container"
        ref={containerRef3}
      ></div>

      <Image
        id="o"
        src={img_o.src}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width="70"
        height="70"
        style={{ border: "solid 3px blue" }}
      />
      <Image
        id="wo"
        src={img_wo.src}
        alt="picture"
        draggable="true"
        onDragStart={(
          ev: { target: HTMLTextAreaElement } & DragEvent<HTMLImageElement>
        ) => drag(ev)}
        width="70"
        height="70"
        style={{ border: "solid 3px red" }}
      />

      <style jsx>{`
        .drag-container {
          width: 70px;
          height: 70px;
          padding: 10px;
          border: 1px solid #aaaaaa;
        }
      `}</style>
    </div>
  );
}
