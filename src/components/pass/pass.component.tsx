"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  CustomBtnContainerStyle,
  CustomColoredPhraseStyle,
  CustomIconBtnStyle,
} from "@/styles/styled-components/page";
import styles from "./pass.module.scss";

export default function Pass({ params }: { params: Question[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = pathname.split("/")[1];
  const category_id = pathname.split("/")[2];
  const level = searchParams.get("level");

  const router = useRouter();
  const getMessage = () => {
    window.alert("💯クリアおめでとう！");
    router.push("/");
  };

  const current_exercise = params
    .filter((question) => question.category === category)
    .filter((question) => question.level === level);

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
        {current_exercise[current_exercise.length - 1].categoryId >
          Number(category_id) && (
          <CustomIconBtnStyle
            onClick={() =>
              router.push(
                `/${category}/${Number(category_id) + 1}?level=${level}`
              )
            }
          >
            <i className="fa-solid fa-check"></i>
          </CustomIconBtnStyle>
        )}

        {current_exercise[current_exercise.length - 1].categoryId ===
          Number(category_id) && (
          <CustomIconBtnStyle onClick={getMessage}>
            <i className="fa-regular fa-face-smile-wink"></i>
          </CustomIconBtnStyle>
        )}
      </CustomBtnContainerStyle>
    </div>
  );
}
