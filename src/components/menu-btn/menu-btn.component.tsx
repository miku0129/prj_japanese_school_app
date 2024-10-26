"use client";

import { useRouter } from "next/navigation";
import {
  CustomIconBtnStyle,
  CustomPhraseStyle,
} from "@/styles/styled-components/page";
import styles from "./menu-btn.module.scss";

export default function MenuBtn({ params }: { params: ItemParticle }) {
  const router = useRouter();
  return (
    <div className={styles.menuBtn}>
      <CustomPhraseStyle>
        <p>こ</p>
        <p>と</p>
        <p>ば</p>
        <p>を</p>
        <p>さ</p>
        <p>が</p>
        <p>そ</p>
        <p>う</p>
        <p>🥚</p>
      </CustomPhraseStyle>
      <div className={styles.btn}>
        <CustomIconBtnStyle
          onClick={() =>
            router.push(`/${params.category}/1?level=${params.level}`)
          }
        >
          <i className="fa-solid fa-check"></i>
        </CustomIconBtnStyle>
      </div>
    </div>
  );
}
