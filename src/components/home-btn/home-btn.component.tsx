"use client";

import { useRouter } from "next/navigation";

export default function HomeBtn({ params: index }: { params: HomeIndex }) {
  const router = useRouter();
  return (
    <div>
      <button
        className="h-28 text-4xl bg-gray-300 border-0 rounded-lg py-4 px-8 cursor-pointer"
        onClick={() => router.push(`/${index.en}`)}
      >
        『{index.sample}』をれんしゅうする
      </button>
    </div>
  );
}
