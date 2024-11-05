"use client";

import MenuBtn from "../menu-btn/menu-btn.component";
import styles from "./menu-board.module.scss";

export default function MenuBoard({ params }: { params: Question[] }) {
  return (
    <div className={styles.menuBoard}>
      {params
        .filter((item: Question) => item.isIndex)
        .map((item: Question) => {
          return (
            <div key={item.id}>
              <MenuBtn params={item} />
            </div>
          );
        })}
    </div>
  );
}
