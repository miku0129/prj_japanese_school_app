"use client";

import RomajisMenuBtn from "../menu-btn/romajis-menu-btn.component";

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
              <RomajisMenuBtn params={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
