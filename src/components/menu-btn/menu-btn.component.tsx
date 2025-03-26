"use client";

import { useRouter } from "next/navigation";
import CustomVerticalText from "../custom-vertical-text";
import CustomBtn from "../custom-btn";

export default function MenuBtn({ params }: { params: Question }) {
  const router = useRouter();
  return (
    <div className="text-3xl">
      {params.level === "beginner" && (
        <CustomVerticalText phrase="ことばをさがそう" />
      )}
      {params.level === "intermediate" && (
        <CustomVerticalText phrase="ことばをつくろう" />
      )}
      {params.level === "advanced" && (
        <CustomVerticalText phrase="ことばをかきとろう" />
      )}

      <div className="text-center p-8">
        <CustomBtn
          onClick={() =>
            router.push(
              `/${params.category}/${params.categoryId}?level=${params.level}`
            )
          }
        >
          <i className="fa-solid fa-check"></i>
        </CustomBtn>
      </div>
    </div>
  );
}
