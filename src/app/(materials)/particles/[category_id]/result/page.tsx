import Fail from "@/components/fail/fail.component";
import Pass from "@/components/pass/pass.component";

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const result = searchParams.state === "true" ? true : false;
  return (
    <div>
      {result && <Pass />}
      {!result && <Fail />}
    </div>
  );
}
