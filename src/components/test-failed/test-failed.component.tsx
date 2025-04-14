"use client";

import { useRouter } from "next/navigation";
import CustomVerticalText from "../custom-vertical-text";
import CustomBtn from "../custom-btn";

export default function TestFailed() {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="h-screen flex flex-col justify-evenly ">
        <CustomVerticalText
          phrase="はずれ"
          className="text-5xl text-pink-600"
        />
        <CustomBtn onClick={() => router.back()}>
          <i className="fa-solid fa-rotate-right text-white"></i>
        </CustomBtn>
      </div>
    </div>
  );
}
