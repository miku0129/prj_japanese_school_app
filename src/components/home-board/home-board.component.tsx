import HomeBtn from "@/components/home-btn/home-btn.component";
import styles from "./home-board.module.scss";

export default async function HomeBoard() {
  const indexes: HomeIndex[] = [
    {
      en: "particles",
      jp: "助詞",
      sample: "は、を"
    },
  ];
  return (
    <div className={styles.homeBoardContainer}>
      <div className={styles.homeBoard}>
        {indexes.map((index: HomeIndex, _idx: number) => {
          return (
            <div key={_idx}>
              <HomeBtn params={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
