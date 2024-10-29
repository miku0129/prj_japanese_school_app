"use client";

import Audio from "@/components/audio/audio.component";
import styles from "./question-advanced.style.module.scss";

export default function QuestionAdvanced({
  params: item,
}: {
  params: ItemParticleAdvanced;
}) {
  return (
    <div className={styles.sample}>
      <div>this is {item.level}</div>
      <Audio audioLink={item.sound_resource} />
    </div>
  );
}
