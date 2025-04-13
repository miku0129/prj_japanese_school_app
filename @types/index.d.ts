interface HomeIndex {
  en: string;
  jp: string;
  sample: string;
}

interface Params {
  [key: string]: string;
}

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

interface ItemSkeleton {
  id: number;
}

interface ParticlesOption extends ItemSkeleton { 
  character: string;
  en: string;
  image: string;
  styleHeight?: string | null;
  styleWidth?: string | null;
}

interface ParticlesOptionContainer { 
  option: ParticlesOption;
  optionId: number;
  questionId: number; 
}

interface AdditionalQuestion extends ItemSkeleton {
  phrase_front?: string | null;
  phrase_back?: string | null;
  sound_resource?: string | null;
}

interface ParticlesQuestion extends ItemSkeleton { 
  category: string;
  categoryId: number;
  group: string;
  isIndex: boolean;
  options: ParticlesOptionContainer[];
  additionalQuestion: AdditionalQuestion | null;
  character?: string | null;
  answer?: string | null;
}

interface ParticlesDragItemProps {
  children: ParticlesQuestion;
  dragging: HTMLElement | null;
  handleDragEnter: (ev: DragEvent<HTMLDivElement>) => void;
  handleDragStart: (ev: DragEvent<HTMLDivElement>) => void;
  isDragging: boolean;
}

interface RomajisOption extends ItemSkeleton {
  option: string;
}

interface RomajisOptionContainer {
  option: RomajisOption;
  optionId: number;
  questionId: number;
}

interface RomajisQuestion extends ItemSkeleton {
  category: string;
  categoryId: number;
  group: string;
  groupExp: string;
  isIndex: boolean;
  hiragana: string;
  answer: (string | null)[];
  // options: RomajisOptionContainer[];
}
