"use client";

import { useRouter } from "next/navigation";
import CustomBtn from "@/components/custom-btn";

export default function NavBoard() {
  const router = useRouter();
  return (
    <CustomBtn
      btnType="custom"
      className="bg-blue-300 text-lg text-white p-1.5"
      onClick={() => {
        router.push(`/`);
      }}
    >
      <i className="fa-solid fa-house"></i>
    </CustomBtn>
  );
}
