"use client";

import { useRouter } from "next/navigation";
import CustomBtn from "../custom-btn";

export default function HomeBtn({ params: index }: { params: HomeIndex }) {
  const router = useRouter();
  return (
    <CustomBtn onClick={() => router.push(`/${index.en}`)} className="text-white">
      {index.sample}をまなぶ
    </CustomBtn>
  );
}
