"use client";

import { useRouter } from "next/navigation";
import CustomPhrase from "../custom-phrase";
import CustomBtn from "../custom-btn";

export default function MenuBtn({ params }: { params: Question }) {
  const router = useRouter();
  return (
    <div>
      {params.level === "beginner" && (
        <CustomPhrase phrase="ことばをさがそう" />
      )}
      {params.level === "intermediate" && (
        <CustomPhrase phrase="ことばをつくろう" />
      )}
      {params.level === "advanced" && (
        <CustomPhrase phrase="ことばをかきとろう" />
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
