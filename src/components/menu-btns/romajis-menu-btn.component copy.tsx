"use client";

import { useRouter } from "next/navigation";
import CustomBtn from "../custom-btn";

export default function RomajisMenuBtn({ params }: { params: QuestionRomaji }) {
  const router = useRouter();
  return (
    <div className="flex text-3xl">
      <div className="flex flex-col justify-center">
        <p>ローマ字の練習</p>
      </div>

      <div className="text-center p-8">
        <CustomBtn
          onClick={() =>
            router.push(
              // `/${params.category}/${params.categoryId}?level=${params.level}`
              `/${params.category}/${params.categoryId}`
            )
          }
        >
          <i className="fa-solid fa-check"></i>
        </CustomBtn>
      </div>
    </div>
  );
}
