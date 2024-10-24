"use client";

import { useRouter } from "next/navigation";
import {
  CustomIconBtnStyle,
  CustomPhraseStyle,
} from "@/styles/styled-components/page";
import styles from "./menu-btn.module.scss";

export default function MenuBtn({ params: url }: { params: string }) {
  const router = useRouter();
  return (
    <div className={styles.menuBtn}>
      <CustomPhraseStyle>
        <p>を</p>
        <p>を</p>
        <p>つ</p>
        <p>か</p>
        <p>う</p>
        <p>こ</p>
        <p>と</p>
        <p>ば</p>
      </CustomPhraseStyle>
      <div className={styles.btn}>
        <CustomIconBtnStyle onClick={() => router.push(`${url}`)}>
          <i className="fa-solid fa-check"></i>
        </CustomIconBtnStyle>
      </div>
    </div>
  );
}
