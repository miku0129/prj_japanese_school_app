"use client";

import RomajisMenuBtn from "../menu-btns/romajis-menu-btn.component copy";

export default function RomajisMenuBoard({ params }: { params: QuestionRomaji[] }) {
  return (
    <div className="h-screen flex flex-col justify-center gap-5 p-8">
      {params
        .filter((item: QuestionRomaji) => item.isIndex)
        .map((item: QuestionRomaji) => {
          return (
            <div key={item.id}>
              <RomajisMenuBtn params={item} />
            </div>
          );
        })}
    </div>
  );
}
