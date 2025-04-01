"use client";

import PaticlesMenuBtn from "../menu-btns/particles-menu-btn.component";

export default function ParticlesMenuBoard({ params }: { params: Question[] }) {
  return (
    <div className="flex flex-row-reverse justify-center p-8">
      {params
        .filter((item: Question) => item.isIndex)
        .map((item: Question) => {
          return (
            <div key={item.id}>
              <PaticlesMenuBtn params={item} />
            </div>
          );
        })}
    </div>
  );
}
