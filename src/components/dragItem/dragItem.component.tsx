"use client";

import React from "react";
import "./dragItem.styles.scss";

const DragItem = (props: DragItemProps) => {
  const { children, dragging, handleDragEnter, handleDragStart, isDragging } =
    props;

  const dragItemRef = React.useRef(null);

  const componentHandler = () => {
    if (
      isDragging &&
      dragItemRef.current !== null &&
      dragItemRef.current === dragging
    ) {
      // return <div className="placeHolder">Placeholder</div>;
      return <div className="placeHolder"></div>;
    } else {
      return (
        <div>
          <div>{children.character}</div>
        </div>
      );
    }
  };

  return (
    <div
      id={String(children.id)}
      ref={dragItemRef}
      className="dragItem"
      draggable="true"
      onDragOver={(ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      }}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnter={(e) => handleDragEnter(e)}
    >
      <div className="children-container">{componentHandler()}</div>
    </div>
  );
};

export default DragItem;
