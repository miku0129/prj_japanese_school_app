"use client";

import MenuBtn from "../menu-btn/menu-btn.component";
import CustomVerticalText from "../custom-vertical-text";

export default function ParticlesMenuBoard({
  params,
}: {
  params: ParticlesQuestion[];
}) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row-reverse justify-center gap-10">
        {params
          .filter((item: ParticlesQuestion) => item.isIndex)
          .map((item: ParticlesQuestion) => {
            return (
              <div key={item.id} className="flex flex-col gap-2">
                <CustomVerticalText phrase={item.groupExp} />
                <MenuBtn item={item}>
                  <i className="fa-solid fa-check"></i>
                </MenuBtn>
              </div>
            );
          })}
      </div>
    </div>
  );
}
