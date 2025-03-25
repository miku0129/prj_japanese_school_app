"use client";

import { useRouter } from "next/navigation";
import {
  CustomIconBtnStyle,
  CustomPhraseStyle,
} from "@/styles/styled-components/page";
import styles from "./menu-btn.module.scss";

export default function MenuBtn({ params }: { params: Question }) {
  const router = useRouter();
  return (
    <div className={styles.menuBtn}>
      {params.level === "beginner" && (
        <div className="flex flex-col justify-center">
          <p className="text-center text-[calc(32/16*1rem)] max-height-1">こ</p>
          <p className="text-center text-[calc(32/16*1rem)] max-height-1">と</p>
          <p className="text-center text-[calc(32/16*1rem)] max-height-1">ば</p>
          <p className="text-center text-[calc(32/16*1rem)] max-height-1">を</p>
          <p className="text-center text-[calc(32/16*1rem)] max-height-1">さ</p>
          <p className="text-center text-[calc(32/16*1rem)] max-height-1">が</p>
          <p className="text-center text-[calc(32/16*1rem)] max-height-1">そ</p>
          <p className="text-center text-[calc(32/16*1rem)] max-height-1">う</p>
          <p className="text-center text-[calc(32/16*1rem)] max-height-1">🥚</p>
        </div>
      )}
      {params.level === "intermediate" && (
        <CustomPhraseStyle>
          <p>こ</p>
          <p>と</p>
          <p>ば</p>
          <p>を</p>
          <p>つ</p>
          <p>く</p>
          <p>ろ</p>
          <p>う</p>
          <p>🐣</p>
        </CustomPhraseStyle>
      )}
      {params.level === "advanced" && (
        <CustomPhraseStyle>
          <p>こ</p>
          <p>と</p>
          <p>ば</p>
          <p>を</p>
          <p>か</p>
          <p>き</p>
          <p>と</p>
          <p>ろ</p>
          <p>う</p>
          <p>🐓</p>
        </CustomPhraseStyle>
      )}

      <div className={styles.btn}>
        <CustomIconBtnStyle
          onClick={() =>
            router.push(
              `/${params.category}/${params.categoryId}?level=${params.level}`
            )
          }
        >
          <i className="fa-solid fa-check"></i>
        </CustomIconBtnStyle>
      </div>
    </div>
  );
}
