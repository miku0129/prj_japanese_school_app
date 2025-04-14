"use client";

import RomajisMenuBtn from "../menu-btn/romajis-menu-btn.component copy";

export default function RomajisMenuBoard({
  params,
}: {
  params: RomajisQuestion[];
}) {
  return (
    <div className="h-screen flex flex-col justify-center gap-5 p-8">
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
  );
}
