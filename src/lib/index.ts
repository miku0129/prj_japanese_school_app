// Note: correct reordering algo
export const rotate = (
    array: Item[],
    originIndex: number,
    targetIndex: number
  ) => {
    const newArray = [...array];
    const originValue = newArray[originIndex];
    newArray.splice(originIndex, 1);
    newArray.splice(targetIndex, 0, originValue);
    return newArray;
  };