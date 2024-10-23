import DragContainer from "../components/drag-container/drag-container.component";
import { DATA } from "../data";

export default function Page({ params }: { params: { id: string } }) {
  const data = DATA.find((item) => {
    const id: string = String(item.id);
    return id === params.id;
  });
  if (data) {
    return <div>{<DragContainer params={data} />}</div>;
  }
}
