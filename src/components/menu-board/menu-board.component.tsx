"use client";

import { useRouter } from "next/navigation";

export default function MenuBoard({ params }: { params: ItemParticle[] }) {
  const router = useRouter();
  console.log("data_source", params);
  return (
    <div>
      {/* 各単元各レベルの1問目のみだけ表示されるよう調整する */}
      {params.map((item: ItemParticle) => {
        return (
          <div key={item.id}>
            <button
              onClick={() =>
                router.push(
                  `/${item.category}/${item.character}/${item.subcategory}/${item.sub_id}`
                )
              }
            >
              {item.sub_id}
            </button>
          </div>
        );
      })}
    </div>
  );
}