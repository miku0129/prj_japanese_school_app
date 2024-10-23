"use client";

import { CustomIconBtnStyle } from "@/styles/styled-components/page";
import { useRouter } from "next/navigation";

export default function DragContainerBtn({
  params: item,
}: {
  params: ItemParticle;
}) {
  const router = useRouter();
  return (
    <CustomIconBtnStyle onClick={() => router.push(`/particles/${item.id}`)}>
      <i className="fa-solid fa-backward-step"></i>
    </CustomIconBtnStyle>
  );
}
