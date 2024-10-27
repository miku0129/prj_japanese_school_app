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

interface ParticleChoice extends ChoiceSkeleton {
  en: string;
  props: string;
  image: string;
}

interface ItemParticleBeginner extends ItemSkeleton {
  character: string;
  phrase_front: string;
  phrase_back: string;
  choices: ParticleChoice[];
}

interface ItemParticleIntermediate extends ItemSkeleton {
  character: string;
  choices: ParticleChoice[];
}

interface DragItemProps {
  children: ItemParticleBeginner;
  dragging: HTMLElement | null;
  handleDragEnter: (ev: DragEvent<HTMLDivElement>) => void;
  handleDragStart: (ev: DragEvent<HTMLDivElement>) => void;
  isDragging: boolean;
}
