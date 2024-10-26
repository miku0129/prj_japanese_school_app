"use client";

import MenuBtn from "../menu-btn/menu-btn.component";

export default function MenuBoard({ params }: { params: ItemParticle[] }) {
  return (
    <div>
      {params
        .filter((item: ItemParticle) => item.category_id === 1)
        .map((item: ItemParticle) => {
          return (
            <div key={item.id}>
              <MenuBtn params={item} />
            </div>
          );
        })}
    </div>
  );
}
