"use client";

import { useRouter } from "next/navigation";
import styles from "./home-btn.module.scss";

export default function HomeBtn({ params: index }: { params: HomeIndex }) {
  const router = useRouter();
  return (
    <div>
      <button
        className={styles.homeBtn}
        onClick={() => router.push(`/${index.en}`)}
      >
        『{index.sample}』をれんしゅうする
      </button>
    </div>
  );
}
