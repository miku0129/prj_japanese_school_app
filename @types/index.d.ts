interface ItemSkeleton {
  id: number;
  character: string;
  category: string;
  subcategory: string;
  sub_id: number; 
}

interface ChoiceSkeleton {
  id: number;
  character: string;
}

interface ParticleChoice extends ChoiceSkeleton {
  pron: string;
  props: string;
  image: string;
}

interface ItemParticle extends ItemSkeleton {
  phrase_front: string;
  phrase_back: string;
  choices: ParticleChoice[];
  character: string;
  tags?: string;
}

interface DragItemProps {
  children: ItemParticle;
  dragging: HTMLElement | null;
  handleDragEnter: (ev: DragEvent<HTMLDivElement>) => void;
  handleDragStart: (ev: DragEvent<HTMLDivElement>) => void;
  isDragging: boolean;
}
