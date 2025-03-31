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

interface Choice extends ItemSkeleton {
  character: string;
  en: string;
  image: string;
  styleHeight?: string | null;
  styleWidth?: string | null;

}
interface ChoiceContainer {
  choice: Choice;
  choiceId: number;
  questionId: number;
}
interface AdditionalQuestion extends ItemSkeleton {
  phrase_front?: string | null;
  phrase_back?: string | null;
  sound_resource?: string | null;
}

interface Question extends ItemSkeleton {
  category: string;
  categoryId: number;
  level: string;
  isIndex: boolean;
  additionalQuestion: AdditionalQuestion | null;
  choices: ChoiceContainer[];
  character?: string | null;
  answer?: string | null;
}

interface DragItemProps {
  children: Question;
  dragging: HTMLElement | null;
  handleDragEnter: (ev: DragEvent<HTMLDivElement>) => void;
  handleDragStart: (ev: DragEvent<HTMLDivElement>) => void;
  isDragging: boolean;
}

interface QuestionRomaji extends ItemSkeleton {
  category: string;
  categoryId: number;
  isIndex: boolean;
  hiragana: string; 
  answer: string | null;
}
