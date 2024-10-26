interface SearchParams {
  [key: string]: string | string[] | undefined;
}
interface Params {
  [key: string]: string;
}

interface ItemSkeleton {
  id: number;
  category: string;
  category_id: number;
  level: string;
}

interface ChoiceSkeleton {
  id: number;
  character: string;
}

interface ParticleChoice extends ChoiceSkeleton {
  en: string;
  props: string;
  image: string;
}

interface ItemParticle extends ItemSkeleton {
  character: string;
  phrase_front: string;
  phrase_back: string;
  choices: ParticleChoice[];
  tags?: string;
}

interface DragItemProps {
  children: ItemParticle;
  dragging: HTMLElement | null;
  handleDragEnter: (ev: DragEvent<HTMLDivElement>) => void;
  handleDragStart: (ev: DragEvent<HTMLDivElement>) => void;
  isDragging: boolean;
}
