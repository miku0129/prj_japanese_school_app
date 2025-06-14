"use client";

import MenuBtn from "../menu-btn/menu-btn.component";

export default function RomajisMenuBoard({
  params,
}: {
  params: RomajisQuestion[];
}) {
  return (
    <div className="h-svh flex justify-center">
      <div className="flex flex-col justify-center gap-5">
        {params
          .filter((item: RomajisQuestion) => item.isIndex)
          .map((item: RomajisQuestion) => {
            return (
              <div key={item.id}>
                <MenuBtn item={item}>{item.groupExp}</MenuBtn>
              </div>
            );
          })}
      </div>
    </div>
  );
}
