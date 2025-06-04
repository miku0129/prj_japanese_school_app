"use client";

import { useRouter } from "next/navigation";
import { Button } from "@msano/prj_msano_lib";

export default function RomajisMenuBtn({
  params,
}: {
  params: RomajisQuestion;
}) {
  const router = useRouter();
  return (
    <div>
      <Button
        size="lg"
        onClick={() =>
          router.push(
            `/${params.category}/${params.categoryId}?group=${params.group}`
          )
        }
      >
        <p>{params.groupExp}</p>
      </Button>
    </div>
  );
}
