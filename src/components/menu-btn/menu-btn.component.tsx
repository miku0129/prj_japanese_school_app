"use client";

import { useRouter } from "next/navigation";
import { CustomIconBtnStyle } from "@/styles/styled-components/page";
import CustomPhrase from "../custom-phrase";

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
        <CustomIconBtnStyle
          onClick={() =>
            router.push(
              `/${params.category}/${params.categoryId}?level=${params.level}`
            )
          }
        >
          <i className="fa-solid fa-check"></i>
        </CustomIconBtnStyle>
      </div>
    </div>
  );
}
