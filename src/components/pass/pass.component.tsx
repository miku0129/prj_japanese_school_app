"use client";

import { useParams, useRouter } from "next/navigation";
import {
  CustomBtnContainerStyle,
  CustomShowResultStyle,
  CustomIconBtnStyle,
} from "@/styles/styled-components/page";
import styles from "./pass.module.scss";
import { DATA } from "@/app/(materials)/particles/(wo)/page";

export default function Pass() {
  const params = useParams<{ tag: string; id: string }>();
  const router = useRouter();
  const getMessage = () => {
    window.alert("💯クリアおめでとう！")
    router.push('/particles')
  }

  return (
    <div className={styles.resultContainerBase}>
      <CustomShowResultStyle background="lightgreen" className={styles.phrase}>
        <p>あ</p>
        <p>た</p>
        <p>り</p>
        <p>🎉</p>
      </CustomShowResultStyle>
      <CustomBtnContainerStyle className={styles.btn}>
        {DATA[DATA.length - 1].id > Number(params.id) && (
          <CustomIconBtnStyle
            onClick={() => router.push(`/particles/${Number(params.id) + 1}`)}
          >
            <i className="fa-solid fa-check"></i>
          </CustomIconBtnStyle>
        )}
        {DATA[DATA.length - 1].id === Number(params.id) && (
          <CustomIconBtnStyle
            onClick={getMessage}
          >
            <i className="fa-regular fa-face-smile-wink"></i>
          </CustomIconBtnStyle>
        )}
      </CustomBtnContainerStyle>
    </div>
  );
}
