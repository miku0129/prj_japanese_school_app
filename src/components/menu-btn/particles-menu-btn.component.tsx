"use client";

import { useRouter } from "next/navigation";
import { Button } from "@msano/prj_msano_lib";
import CustomVerticalText from "../custom-vertical-text";

export default function ParticlesMenuBtn({
  params,
}: {
  params: ParticlesQuestion;
}) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5 text-3xl">
      {params.group === "beginner" && (
        <CustomVerticalText phrase="ことばをさがそう" />
      )}
      {params.group === "intermediate" && (
        <CustomVerticalText phrase="ことばをつくろう" />
      )}
      {params.group === "advanced" && (
        <CustomVerticalText phrase="ことばをかきとろう" />
      )}
      <Button
        size="lg"
        onClick={() =>
          router.push(
            `/${params.category}/${params.categoryId}?group=${params.group}`
          )
        }
      >
        <i className="fa-solid fa-check"></i>
      </Button>
    </div>
  );
}
