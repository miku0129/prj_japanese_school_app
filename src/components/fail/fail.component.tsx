"use client";

import { useRouter } from "next/navigation";
import {
  CustomBtnContainerStyle,
  CustomColoredPhraseStyle,
  CustomIconBtnStyle,
} from "@/styles/styled-components/page";
import styles from "./fail.module.scss";

export default function Fail() {
  const router = useRouter();
  return (
    <div className={styles.resultContainerBase}>
      <CustomColoredPhraseStyle background="coral" className={styles.phrase}>
        <p>は</p>
        <p>ず</p>
        <p>れ</p>
        <p>👻</p>
      </CustomColoredPhraseStyle>
      <CustomBtnContainerStyle className={styles.btn}>
        <CustomIconBtnStyle onClick={() => router.back()}>
          <i className="fa-solid fa-rotate-right"></i>
        </CustomIconBtnStyle>
      </CustomBtnContainerStyle>
    </div>
  );
}
