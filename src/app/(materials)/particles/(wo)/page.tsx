import DragContainerBtn from "./components/drag-container-btn/drag-container-btn.component";

export const DATA = [
  {
    id: 1,
    phrase_front: "おにぎり",
    phrase_back: "たべる",
    choices: [
      {
        id: 1,
        character: "お",
        pron: "o",
        props: "solid 3px blue",
        image: "https://i.ibb.co/3TjcvyJ/img-o.png",
      },
      {
        id: 2,
        character: "を",
        pron: "wo",
        props: "solid 3px red",
        image: "https://i.ibb.co/Gnyk250/img-wo.png",
      },
    ],
    character: "wo",
  },
  {
    id: 2,
    phrase_front: "いもうと",
    phrase_back: "よぶ",
    choices: [
      {
        id: 1,
        character: "を",
        pron: "wo",
        props: "solid 3px red",
        image: "https://i.ibb.co/Gnyk250/img-wo.png",
      },
      {
        id: 2,
        character: "お",
        pron: "o",
        props: "solid 3px blue",
        image: "https://i.ibb.co/3TjcvyJ/img-o.png",
      },
    ],
    character: "wo",
  },
];

export default function Page() {
  return (
    <div>
      {DATA.map((item: ItemParticle) => {
        return (
          <div key={item.id}>
            <DragContainerBtn params={item} />
          </div>
        );
      })}
    </div>
  );
}
