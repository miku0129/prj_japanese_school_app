"use client";

import React, { DragEvent, SetStateAction, useEffect } from "react";
// import { useRouter } from "next/navigation";
import DragItem from "../dragItem/dragItem.component";
import { rotate } from "@/lib";
import "./dragContainer.styles.scss";


const DragContainer = () => {
  const [array, setArray] = React.useState<ItemParticle[] | null>([]);
  const [targetElementId, setTargetElementId] = React.useState<null | string>();
  const [dragging, setDragging] = React.useState<HTMLElement | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  // const router = useRouter();

  useEffect(() => {
    const characters:ItemParticle[] = [
      {
        id: 1,
        character: "お",
        tags: "",
      },
      {
        id: 2,
        character: "を",
        tags: "",
      },
    ];
    setArray(characters);
  }, []);

  const handleDragStart = (ev: DragEvent<HTMLDivElement>) => {
    const target = ev.target;
    /**
     * Note:
     * setTimeout HAS to be here to set dragItem class to hide content
     */
    setTimeout(
      () =>
        setDragging(
          (target as HTMLElement).closest(
            ".dragItem"
          ) as SetStateAction<HTMLElement | null>
        ),
      0
    );
    setTargetElementId((target as HTMLElement).closest(".dragItem")!.id);
    setIsDragging(true);
  };

  const handleDragEnter = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    /**
     * Note:
     * in order to allow onDrop event to work
     * you need to preventDefault on this event
     * and onDragOver event listener.
     */
    alternateIndexes((ev.target as HTMLElement).closest(".dragItem")!.id);
  };

  const handleDragLeave = (ev: DragEvent<HTMLLIElement>) => {
    ev.preventDefault();
    setIsDragging(false);
  };

  const handleDragDrop = (ev: DragEvent<HTMLLIElement>) => {
    ev.preventDefault();
    setDragging(null);
  };

  const alternateIndexes = (destinationPosition: string) => {
    if (array) {
      const originIndex = array
        .map((el) => el.id)
        .indexOf(parseFloat(targetElementId!));
      const targetIndex = array
        .map((el) => el.id)
        .indexOf(parseFloat(destinationPosition));
      const newArray = rotate(array, originIndex, targetIndex);
      setArray(newArray);
    }
  };

  const dragItemProps = {
    dragging,
    handleDragDrop,
    handleDragEnter,
    handleDragStart,
    isDragging,
  };

  return (
    <div className="dragContainer">
      {array &&
        array.map((item) => {
          return (
            <li
              key={item.id}
              className="dragListItem"
              onDragEnd={(ev) => {
                handleDragLeave(ev);
              }}
              onDrop={(ev) => {
                handleDragDrop(ev);
              }}
            >
              {/* <Link
                to={`/histories/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <DragItem {...dragItemProps}>{item}</DragItem>
              </Link> */}
              <DragItem {...dragItemProps}>{item}</DragItem>
            </li>
          );
        })}
    </div>
  );
};

export default DragContainer;
