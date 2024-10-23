"use client";

import { useRouter } from "next/navigation";

export default function DragContainerBtn({
  params: item,
}: {
  params: ItemParticle;
}) {
  const router = useRouter();
  return <button onClick={() => router.push(`/particles/${item.id}`)}>{item.id}</button>;
}
