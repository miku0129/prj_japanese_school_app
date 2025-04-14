"use client";

import { useRouter } from "next/navigation";
import CustomVerticalText from "../custom-vertical-text";
import CustomBtn from "../custom-btn";

export default function ParticlesMenuBtn({
  params,
}: {
  params: ParticlesQuestion;
}) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5 text-3xl">
      {params.group === "beginner" && (
        <CustomVerticalText phrase="ことばをさがそう" />
      )}
      {params.group === "intermediate" && (
        <CustomVerticalText phrase="ことばをつくろう" />
      )}
      {params.group === "advanced" && (
        <CustomVerticalText phrase="ことばをかきとろう" />
      )}

      <CustomBtn
        onClick={() =>
          router.push(
            `/${params.category}/${params.categoryId}?group=${params.group}`
          )
        }
      >
        <i className="fa-solid fa-check text-white"></i>
      </CustomBtn>
    </div>
  );
}
