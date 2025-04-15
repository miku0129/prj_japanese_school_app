"use client";

import PaticlesMenuBtn from "../menu-btn/particles-menu-btn.component";

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
              <div key={item.id}>
                <PaticlesMenuBtn params={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
