"use client";

import MenuBtn from "../menu-btn/menu-btn.component";

export default function ProverbsMenuBoard({
  params,
}: {
  params: ProverbsQuestion[];
}) {
  return (
    <div className="h-svh flex flex-col justify-center">
      <div className="flex flex-row-reverse justify-center gap-10">
        {params
          .filter((item: ProverbsQuestion) => item.isIndex)
          .map((item: ProverbsQuestion) => {
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
