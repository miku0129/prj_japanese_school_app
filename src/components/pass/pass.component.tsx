"use client";

import { useParams, useRouter } from "next/navigation";
import {
  CustomBtnContainerStyle,
  CustomColoredPhraseStyle,
  CustomIconBtnStyle,
} from "@/styles/styled-components/page";
import styles from "./pass.module.scss";
import { DATA } from "@/app/(materials)/particles/wo/beginners/data";

export default function Pass() {
  const params = useParams<{ tag: string; id: string }>();

  const router = useRouter();
  const getMessage = () => {
    window.alert("💯クリアおめでとう！");
    router.push("/");
  };

  const item = DATA.find((item) => {
    const id: string = String(item.id);
    return id === params.id;
  });

  return (
    <div className={styles.resultContainerBase}>
      <CustomColoredPhraseStyle
        background="lightgreen"
        className={styles.phrase}
      >
        <p>あ</p>
        <p>た</p>
        <p>り</p>
        <p>🎉</p>
      </CustomColoredPhraseStyle>
      <CustomBtnContainerStyle className={styles.btn}>
        {DATA[DATA.length - 1].id > Number(params.id) && (
          <CustomIconBtnStyle
            onClick={() =>
              router.push(
                `/${item?.category}/${item?.character}/${item?.subcategory}/${
                  Number(params.id) + 1
                }`
              )
            }
          >
            <i className="fa-solid fa-check"></i>
          </CustomIconBtnStyle>
        )}
        {DATA[DATA.length - 1].id === Number(params.id) && (
          <CustomIconBtnStyle onClick={getMessage}>
            <i className="fa-regular fa-face-smile-wink"></i>
          </CustomIconBtnStyle>
        )}
      </CustomBtnContainerStyle>
    </div>
  );
}
