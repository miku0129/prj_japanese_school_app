"use client";

import { useRouter } from "next/navigation";
import { Button } from "@msano/prj_msano_lib";
import { ReactNode } from "react";

type MenuBtnProps = {
  item: ParticlesQuestion | RomajisQuestion | ProverbsQuestion;
  children: ReactNode;
};

export default function MenuBtn(params: MenuBtnProps) {
  const router = useRouter();
  const { item, children } = params;
  return (
    <div>
      <Button
        size="lg"
        onClick={() =>
          router.push(`/${item.category}/${item.id}?group=${item.group}`)
        }
      >
        {children}
      </Button>
    </div>
  );
}
