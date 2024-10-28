import { polyfill } from "mobile-drag-drop";
import { scrollBehaviourDragImageTranslateOverride } from "mobile-drag-drop/scroll-behaviour";
import "mobile-drag-drop/default.css";

// Note: correct reordering algo
export const rotate = (
  array: ItemParticleBeginner[],
  originIndex: number,
  targetIndex: number
) => {
  const newArray = [...array];
  const originValue = newArray[originIndex];
  newArray.splice(originIndex, 1);
  newArray.splice(targetIndex, 0, originValue);
  return newArray;
};

export const mobileDragNDrop = () => {
  // iOS/Androidのときだけ、usePolyfill=trueになる
  const usePolyfill = polyfill({
    dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride,
  });
  if (usePolyfill) {
    // https://github.com/timruffles/mobile-drag-drop#polyfill-requires-dragenter-listener
    // このpolyfill使用の場合 dragenter イベント時に Event.preventDefault() を呼ぶ必要がある
    document.addEventListener("dragenter", function (event) {
      event.preventDefault();
    });
    // https://github.com/timruffles/mobile-drag-drop/issues/77
    window.addEventListener("touchmove", function () {}, { passive: false });
  }
};
