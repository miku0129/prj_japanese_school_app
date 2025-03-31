"use client";

import PaticlesMenuBtn from "../menu-btns/particles-menu-btn.component";
import styles from "./menu-board.module.scss";

export default function ParticlesMenuBoard({ params }: { params: Question[] }) {
  return (
    <div className={styles.menuBoard}>
      {params
        .filter((item: Question) => item.isIndex)
        .map((item: Question) => {
          return (
            <div key={item.id}>
              <PaticlesMenuBtn params={item} />
            </div>
          );
        })}
    </div>
  );
}
