"use client";

import MenuBtn from "../menu-btn/menu-btn.component";
import styles from "./menu-board.module.scss";

export default function MenuBoard({
  params,
}: {
  params: ( ItemParticleBeginner | ItemParticleIntermediate | ItemParticleAdvanced) [];
}) {
  return (
    <div className={styles.menuBoard}>
      {params
        .filter(
          (item: ItemParticleBeginner | ItemParticleIntermediate | ItemParticleAdvanced) =>
            item.is_index
        )
        .map((item: ItemParticleBeginner | ItemParticleIntermediate | ItemParticleAdvanced) => {
          return (
            <div key={item.id}>
              <MenuBtn params={item} />
            </div>
          );
        })}
    </div>
  );
}
