"use client";

import { useRouter } from "next/navigation";
import CustomBtn from "../custom-btn";

export default function RomajisMenuBtn({ params }: { params: QuestionRomaji }) {
  const router = useRouter();
  return (
    <div>
      <CustomBtn
        onClick={() =>
          router.push(
            `/${params.category}/${params.categoryId}?group=${params.group}`
          )
        }
      >
        <p>{params.groupExp}</p>
      </CustomBtn>
    </div>
  );
}
