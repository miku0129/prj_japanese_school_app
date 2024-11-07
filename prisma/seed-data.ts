export const SEEDS = [
  {
    id: 1,
    character: "wo",
    categoryId: 1,
    level: "beginner",
    isIndex: true,
    category: "particles",
    choices: [
      {
        choice: {
          create: {
            id: 1,
            character: "お",
            en: "o",
            image: "https://i.ibb.co/3TjcvyJ/img-o.png",
          },
        },
      },
      {
        choice: {
          create: {
            id: 2,
            character: "を",
            en: "wo",
            image: "https://i.ibb.co/Gnyk250/img-wo.png",
          },
        },
      },
    ],
    additionalQuestion: {
      phrase_front: "あめ",
      phrase_back: "なめる",
    },
  },
  {
    id: 2,
    character: "wo",
    categoryId: 2,
    level: "beginner",
    isIndex: false,
    category: "particles",
    choices: [
      {
        choice: {
          create: {
            id: 3,
            character: "お",
            en: "o",
            image: "https://i.ibb.co/3TjcvyJ/img-o.png",
          },
        },
      },
      {
        choice: {
          create: {
            id: 4,
            character: "を",
            en: "wo",
            image: "https://i.ibb.co/Gnyk250/img-wo.png",
          },
        },
      },
    ],
    additionalQuestion: {
      phrase_front: "あめ",
      phrase_back: "なめる",
    },
  },
  {
    id: 3,
    character: "wo",
    categoryId: 3,
    category: "particles",
    level: "intermediate",
    isIndex: true,
    answer: "imouto wo yobu",
    choices: [
      {
        choice: {
          create: {
            id: 5,
            character: "お",
            en: "o",
            image: "https://i.ibb.co/3TjcvyJ/img-o.png",
            styleHeight: "50",
            styleWidth: "50",
          },
        },
      },
      {
        choice: {
          create: {
            id: 6,
            character: "を",
            en: "wo",
            image: "https://i.ibb.co/Gnyk250/img-wo.png",
            styleHeight: "50",
            styleWidth: "50",
          },
        },
      },
      {
        choice: {
          create: {
            id: 7,
            character: "いもうと",
            en: "imouto",
            styleHeight: "200",
            styleWidth: "50",
            image: "https://i.ibb.co/kxKnG9P/img-imouto.jpg",
          },
        },
      },
      {
        choice: {
          create: {
            id: 8,
            character: "よぶ",
            en: "yobu",
            styleHeight: "100",
            styleWidth: "50",
            image: "https://i.ibb.co/SN8pcw8/img-yobu.jpg",
          },
        },
      },
    ],
  },
  {
    id: 4,
    character: "wo",
    categoryId: 4,
    category: "particles",
    level: "intermediate",
    isIndex: false,
    answer: "imouto wo yobu",
    choices: [
      {
        choice: {
          create: {
            id: 9,
            character: "お",
            en: "o",
            image: "https://i.ibb.co/3TjcvyJ/img-o.png",
            styleHeight: "50",
            styleWidth: "50",
          },
        },
      },
      {
        choice: {
          create: {
            id: 10,
            character: "を",
            en: "wo",
            image: "https://i.ibb.co/Gnyk250/img-wo.png",
            styleHeight: "50",
            styleWidth: "50",
          },
        },
      },
      {
        choice: {
          create: {
            id: 11,
            character: "いもうと",
            en: "imouto",
            styleHeight: "200",
            styleWidth: "50",
            image: "https://i.ibb.co/kxKnG9P/img-imouto.jpg",
          },
        },
      },
      {
        choice: {
          create: {
            id: 12,
            character: "よぶ",
            en: "yobu",
            styleHeight: "100",
            styleWidth: "50",
            image: "https://i.ibb.co/SN8pcw8/img-yobu.jpg",
          },
        },
      },
    ],
  },
  {
    id: 5,
    category: "particles",
    categoryId: 5,
    level: "advanced",
    isIndex: true,
    answer: "おにはこわい",
    choices: [],
    additionalQuestion: {
      sound_resource:
        "https://dl.dropboxusercontent.com/scl/fi/ybe00sx6hc87nhycica3n/onihakowai.m4a?rlkey=hcdddo8i2mjn7cl45ptkatwgs&st=gyzsimc9&dl=0",
    },
  },
  {
    id: 6,
    category: "particles",
    categoryId: 6,
    level: "advanced",
    isIndex: false,
    answer: "おにはこわい",
    choices: [],
    additionalQuestion: {
      sound_resource:
        "https://dl.dropboxusercontent.com/scl/fi/ybe00sx6hc87nhycica3n/onihakowai.m4a?rlkey=hcdddo8i2mjn7cl45ptkatwgs&st=gyzsimc9&dl=0",
    },
  },
];