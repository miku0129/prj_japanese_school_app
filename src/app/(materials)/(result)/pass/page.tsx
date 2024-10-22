import { CustomPhraseStyle } from "@/styles/styled-components/page";
import styles from "./page.style.module.scss";

export default function Page() {
  return (
    <div className={styles.background}>
      <CustomPhraseStyle>
        <p>あ</p>
        <p>た</p>
        <p>り</p>
        <p>🎉</p>
      </CustomPhraseStyle>
    </div>
  );
}
