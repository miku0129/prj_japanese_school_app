"use client"

import { useRouter } from "next/navigation";
import {
  CustomBtnContainerStyle,
  CustomShowResultStyle,
  CustomIconBtnStyle,
} from "@/styles/styled-components/page";
import styles from "./fail.module.scss";

export default function Fail() {
  const router = useRouter();
  return (
    <div className={styles.resultContainerBase}>
      <CustomShowResultStyle background="coral" className={styles.phrase}>
        <p>は</p>
        <p>ず</p>
        <p>れ</p>
        <p>👻</p>
      </CustomShowResultStyle>
      <CustomBtnContainerStyle className={styles.btn}>
        <CustomIconBtnStyle onClick={() => router.back()}>
          <i className="fa-solid fa-rotate-right"></i>
        </CustomIconBtnStyle>
      </CustomBtnContainerStyle>
    </div>
  );
}
