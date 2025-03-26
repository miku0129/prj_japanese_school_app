"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import CustomVerticalText from "../custom-vertical-text";
import CustomBtn from "../custom-btn";

export default function TestPassed ({ params }: { params: Question[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = pathname.split("/")[1];
  const category_id = pathname.split("/")[2];
  const level = searchParams.get("level");

  const router = useRouter();
  const getMessage = () => {
    window.alert("💯クリアおめでとう！");
    router.push(`/${category}`);
  };

  const current_exercise = params
    .filter((question) => question.category === category)
    .filter((question) => question.level === level);

  return (
    <div className="flex justify-center">
      <div className="h-screen flex flex-col justify-evenly ">
        <CustomVerticalText
          phrase="あたり!"
          className="text-5xl text-green-600"
        />
        {current_exercise[current_exercise.length - 1].categoryId >
          Number(category_id) && (
          <CustomBtn
            onClick={() =>
              router.push(
                `/${category}/${Number(category_id) + 1}?level=${level}`
              )
            }
          >
            <i className="fa-solid fa-check"></i>
          </CustomBtn>
        )}
        {current_exercise[current_exercise.length - 1].categoryId ===
          Number(category_id) && (
          <CustomBtn onClick={getMessage}>
            <i className="fa-regular fa-face-smile-wink"></i>
          </CustomBtn>
        )}
      </div>
    </div>
  );
}
