"use client";

import {
  CustomBtnContainerStyle,
  CustomShowResultStyle,
  CustomIconBtnStyle,
} from "@/styles/styled-components/page";
import styles from "./pass.module.scss";

export default function Pass() {
  return (
    <div className={styles.resultContainerBase}>
      <CustomShowResultStyle background="lightgreen" className={styles.phrase}>
        <p>あ</p>
        <p>た</p>
        <p>り</p>
        <p>🎉</p>
      </CustomShowResultStyle>
      <CustomBtnContainerStyle className={styles.btn}>
        <CustomIconBtnStyle>
          <i className="fa-solid fa-check"></i>
        </CustomIconBtnStyle>
      </CustomBtnContainerStyle>
    </div>
  );
}
