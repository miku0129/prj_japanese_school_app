import WoBeguinnerBtn from "./components/wo-beguinner-btn/wo-beguinner-btn.component";

import styles from "./page.module.scss";
import { DATA } from "./data";
import {
  CustomBtnContainerStyle,
  CustomColoredPhraseStyle,
} from "@/styles/styled-components/page";

export default function Page() {
  return (
    <div className={styles.pageContainerBase}>
      <CustomColoredPhraseStyle background="yellow" className={styles.phrase}>
        <p>こ</p>
        <p>と</p>
        <p>ば</p>
        <p>を</p>
        <p>さ</p>
        <p>が</p>
        <p>そ</p>
        <p>う</p>
        <p>🔍</p>
      </CustomColoredPhraseStyle>
      <CustomBtnContainerStyle className={styles.btn}>
        <WoBeguinnerBtn params={DATA[0]} />
      </CustomBtnContainerStyle>
    </div>
  );
}
