"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "@msano/prj_msano_lib";
import CustomVerticalText from "../custom-vertical-text";

export default function TestPassed({
  params,
}: {
  params: ParticlesQuestion[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = pathname.split("/")[1];
  const category_id = pathname.split("/")[2];
  const group = searchParams.get("group");

  const router = useRouter();
  const getMessage = () => {
    window.alert("💯クリアおめでとう！");
    router.push(`/${category}`);
  };

  const current_exercise_group = params
    .filter((question) => question.category === category)
    .filter((question) => question.group === group);

  return (
    <div className="flex justify-center">
      <div className="h-screen flex flex-col justify-evenly ">
        <CustomVerticalText
          phrase="あたり!"
          className="text-5xl text-green-600"
        />
        {current_exercise_group[current_exercise_group.length - 1].categoryId >
          Number(category_id) && (
          <Button
            size="lg"
            onClick={() =>
              router.push(
                `/${category}/${Number(category_id) + 1}?group=${group}`
              )
            }
          >
            <i className="fa-solid fa-check"></i>
          </Button>
        )}
        {current_exercise_group[current_exercise_group.length - 1]
          .categoryId === Number(category_id) && (
          <Button size="lg" onClick={getMessage}>
            <i className="fa-regular fa-face-smile-wink"></i>
          </Button>
        )}
      </div>
    </div>
  );
}
