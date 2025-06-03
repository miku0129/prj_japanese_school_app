"use client";

import { useRouter } from "next/navigation";
import { Button } from "@msano/prj_msano_lib";

export default function HomeBtn({ params: index }: { params: HomeIndex }) {
  const router = useRouter();
  return (
    <Button size="lg" onClick={() => router.push(`/${index.en}`)}>
      {index.sample}をまなぶ
    </Button>
  );
}
