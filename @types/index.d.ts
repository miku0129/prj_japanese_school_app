interface Params {
  [key: string]: string;
}

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

interface ItemSkeleton {
  id: number;
  category: string;
  level: string;
  category_id: number;
  is_index: boolean;
}

interface ChoiceSkeleton {
  id: number;
  character: string;
}

interface Choice extends ChoiceSkeleton {
  en: string;
  image: string;
  style_border?: string;
  style_height?: number;
  style_width?: number;
}

interface ItemParticleBeginner extends ItemSkeleton {
  character: string;
  phrase_front: string;
  phrase_back: string;
  choices: Choice[];
}

interface ItemParticleIntermediate extends ItemSkeleton {
  character: string;
  choices: Choice[];
  answer: string;
}

interface DragItemProps {
  children: ItemParticleBeginner | ItemParticleIntermediate;
  dragging: HTMLElement | null;
  handleDragEnter: (ev: DragEvent<HTMLDivElement>) => void;
  handleDragStart: (ev: DragEvent<HTMLDivElement>) => void;
  isDragging: boolean;
}
