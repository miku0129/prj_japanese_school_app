"use client";

import { useRouter } from "next/navigation";
import CustomVerticalText from "../custom-vertical-text";
import CustomBtn from "../custom-btn";

export default function ParticlesMenuBtn({ params }: { params: Question }) {
  const router = useRouter();
  return (
    <div>
      {params.group === "beginner" && (
        <CustomVerticalText phrase="ことばをさがそう" />
      )}
      {params.group === "intermediate" && (
        <CustomVerticalText phrase="ことばをつくろう" />
      )}
      {params.group === "advanced" && (
        <CustomVerticalText phrase="ことばをかきとろう" />
      )}

      <div className="text-3xl text-center p-8">
        <CustomBtn
          onClick={() =>
            router.push(
              `/${params.category}/${params.categoryId}?group=${params.group}`
            )
          }
        >
          <i className="fa-solid fa-check"></i>
        </CustomBtn>
      </div>
    </div>
  );
}
