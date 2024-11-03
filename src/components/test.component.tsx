"use client";

interface TestChoice {
  id: number;
  character: string;
  en: string;
  image: string;
  style_height?: number;
  style_width?: number;
}

interface TestChoiceContainer {
  choice: TestChoice;
  choiceId: number;
  questionId: number;
}

interface TestAdditionalQuestion {
  id: number;
  phrase_front?: string | null;
  phrase_back?: string | null;
  sound_resource?: string | null;
}

interface TestQuestion {
  id: number;
  category: string;
  categoryId: number;
  level: string;
  isIndex: boolean;
  character?: string | null;
  answer?: string | null;
  additionalQuestion?: TestAdditionalQuestion | null;
  choices?: TestChoiceContainer[] | null;
}

export default function TestComponent({ params }: { params: TestQuestion[] }) {
  console.log("category", params);
  return (
    <div>
      {params.map((item: TestQuestion) => {
        return (
          <div key={item.id}>
            <p>{item.character}</p>
            {/* <p>{item.additionalQuestion!.phrase_front}</p> */}
            {/* <p>{item.choices![0].character}</p> */}
          </div>
        );
      })}
    </div>
  );
}
