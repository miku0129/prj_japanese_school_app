"use client";

import { useRouter } from "next/navigation";
import { Button } from "@msano/prj_msano_lib";

export default function NavBoard(props: { text: string }) {
  const router = useRouter();
  return (
    <div className="flex justify-center gap-5 text-center pt-5 items-center opacity-50">
      <p className="text-2xl text-blue-500">{props.text}</p>
      <Button
        size="sm"
        onClick={() => {
          router.push(`/`);
        }}
      >
        <i className="fa-solid fa-house"></i>
      </Button>
    </div>
  );
}
