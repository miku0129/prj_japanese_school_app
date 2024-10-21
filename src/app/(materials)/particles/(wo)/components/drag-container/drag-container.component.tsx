"use client";

import React, { DragEvent, useRef, useEffect } from "react";
import Image from "next/image";
import img_o from "../../public/images/img_o.png";
import img_wo from "../../public/images/img_wo.png";
import styles from "./drag-container.style.module.scss";

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

  return (
    <div className={styles.dragContainerBase}>
      <div className={`${styles.phrase} ${styles.asking}`}>
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
      </div>

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

      <div className={styles.phrase}>
        <p>お</p>
        <p>に</p>
        <p>ぎ</p>
        <p>り</p>
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
        <p>た</p>
        <p>べ</p>
        <p>る</p>
      </div>

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

      <style jsx>{``}</style>
    </div>
  );
}
