import WoBeguinnerSect from "../components/wo-beginner-sect/wo-beginner-sect.component";
import { DATA } from "../data";

export default function Page({ params }: { params: { id: string } }) {
  const item = DATA.find((item) => {
    const id: string = String(item.id);
    return id === params.id;
  });
  if (item) {
    return <div>{<WoBeguinnerSect params={item} />}</div>;
  }
}