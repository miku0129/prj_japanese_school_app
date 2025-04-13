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

interface Choice extends ItemSkeleton { //ParticlesOption
  character: string;
  en: string;
  image: string;
  styleHeight?: string | null;
  styleWidth?: string | null;
}

interface ChoiceContainer { //ParticlesOptionContainer
  choice: Choice; //option: ParticlesOption
  choiceId: number; //optionId: number
  questionId: number; 
}

interface AdditionalQuestion extends ItemSkeleton {
  phrase_front?: string | null;
  phrase_back?: string | null;
  sound_resource?: string | null;
}

interface Question extends ItemSkeleton { // ParticlesQuestion
  category: string;
  categoryId: number;
  group: string;
  isIndex: boolean;
  choices: ChoiceContainer[]; // options: ParticlesOptionContainer[]
  additionalQuestion: AdditionalQuestion | null;
  character?: string | null;
  answer?: string | null;
}

interface DragItemProps { //ParticlesDragItemProps
  children: Question; // children: ParticlesQuestion
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
