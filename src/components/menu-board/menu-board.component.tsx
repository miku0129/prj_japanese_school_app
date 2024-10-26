"use client";

import { useRouter } from "next/navigation";

export default function MenuBoard({ params }: { params: ItemParticle[] }) {
  const router = useRouter();
  return (
    <div>
      {params
        .filter((item: ItemParticle) => item.category_id === 1)
        .map((item: ItemParticle) => {
          return (
            <div key={item.id}>
              <button
                onClick={() =>
                  router.push(
                    `/particles/${item.category_id}?level=${item.level}`
                  )
                }
              >
                {`${item.category_id} ${item.category}/ ${item.level}`}
              </button>
            </div>
          );
        })}
    </div>
  );
}
