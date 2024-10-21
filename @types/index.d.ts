interface Item {
  id: number;
  character: string;
}

interface ItemParticle extends Item {
  tags?: string;
}

interface DragItemProps {
  children: ItemParticle;
  dragging: HTMLElement | null;
  handleDragEnter: (ev: DragEvent<HTMLDivElement>) => void;
  handleDragStart: (ev: DragEvent<HTMLDivElement>) => void;
  isDragging: boolean;
}
