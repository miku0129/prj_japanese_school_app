"use client";

import { useRouter } from "next/navigation";
import { Button } from "@msano/prj_msano_lib";
import CustomVerticalText from "../custom-vertical-text";

export default function TestFailed() {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="h-screen flex flex-col justify-evenly ">
        <CustomVerticalText
          phrase="はずれ"
          className="text-5xl text-orange-500"
        />
        <Button size="lg" variant="warning" onClick={() => router.back()}>
          <i className="fa-solid fa-rotate-right"></i>
        </Button>
      </div>
    </div>
  );
}
