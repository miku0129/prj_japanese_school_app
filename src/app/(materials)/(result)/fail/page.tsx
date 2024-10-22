import {
  CustomBtnContainerStyle,
  CustomShowResultStyle,
  CustomIconBtnStyle,
} from "@/styles/styled-components/page";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.resultContainerBase}>
      <CustomShowResultStyle background="coral" className={styles.phrase}>
        <p>は</p>
        <p>ず</p>
        <p>れ</p>
        <p>👻</p>
      </CustomShowResultStyle>
      <CustomBtnContainerStyle className={styles.btn}>
        <CustomIconBtnStyle>
        <i className="fa-solid fa-rotate-right"></i>
        </CustomIconBtnStyle>
      </CustomBtnContainerStyle>
    </div>
  );
}
