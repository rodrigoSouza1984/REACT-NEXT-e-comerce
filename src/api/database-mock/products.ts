export const products = [
  {
    id: 1,
    name: "Camiseta Ramones",
    typeProduct: "shirt",
    quantity: 10,
    category: [
      {
        id: 1,
        productId: 1,
        categoryId: 1,
        categoryType: 'clothes'
      },
      {
        id: 2,
        productId: 1,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    size: [
      {
        id: 1,
        size: 'P',
        width_in_centimeters: 0,
        height_in_centimeters: 0,
        depth_in_centimeters: 0,
        color: [
          {
            id: 1,
            color: 'black',
            quantity: 3
          },
          {
            id: 2,
            color: 'red',
            quantity: 4
          }
        ]
      },
      {
        id: 2,
        size: 'M',
        width_in_centimeters: 0,
        height_in_centimeters: 0,
        depth_in_centimeters: 0,
        color: [
          {
            id: 1,
            color: 'black',
            quantity: 1
          }          
        ]
      },
      {
        id: 3,
        size: 'G',
        width_in_centimeters: 0,
        height_in_centimeters: 0,
        depth_in_centimeters: 0,
        color: [
          {
            id: 1,
            color: 'black',
            quantity: 2
          }          
        ]
      }      
    ],
    flavor: [//exemplo sabores
      {
        id: 1,
        flavor: 'chocolate',
        Weight_in_grams: [
          {
            id: 1,
            Weight_in_grams: 1000,
            quantoty: 2
          },
        ]
      },
      {
        id: 1,
        flavor: 'morango',
        Weight_in_grams: [
          {
            id: 2,
            Weight_in_grams: 1000,
            quantoty: 2
          },
        ]
      }
    ],   
    descount_in_percent: 10,
    descount_in_cents: 0,
    price_in_cents: 7042,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 50,
    description: "At sed adipisci ut ullam eaque. Et totam architecto eligendi. Eos sed veniam praesentium consequatur assumenda. Ut impedit quo a officiis est corrupti atque ea. Dignissimos voluptatem eaque nesciunt. Aut ipsam aut.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
    images: [
      {
        id: 1,
        name: '1',
        productAddedId: 1,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 2,
        name: '2',
        productAddedId: 1,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 3,
        name: '4',
        productAddedId: 1,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 1,
        productAddedLike: 1,
        userLiked: 1
      },
      {
        id: 2,
        productAddedLike: 1,
        userLiked: 2
      }
    ]
  },
  {
    id: 2,
    name: "Caneca Never settle",
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    size: [
      {
        id: 1,
        size: '',
        width_in_centimeters: 10,
        height_in_centimeters: 20,
        depth_in_centimeters: 30,
        color: [
          {
            id: 1,
            color: 'black',
            quantity: 3
          },
          {
            id: 2,
            color: 'red',
            quantity: 4
          }
        ]
      },
      {
        id: 2,
        size: '',
        width_in_centimeters: 40,
        height_in_centimeters: 20,
        depth_in_centimeters: 10,
        color: [
          {
            id: 1,
            color: 'black',
            quantity: 1
          }          
        ]
      },
      {
        id: 3,
        size: '',
        width_in_centimeters: 20,
        height_in_centimeters: 20,
        depth_in_centimeters: 20,
        color: [
          {
            id: 1,
            color: 'black',
            quantity: 2
          }          
        ]
      }      
    ],
    flavor: [//exemplo sabores
      {
        id: 1,
        flavor: 'chocolate',
        Weight_in_grams: [
          {
            id: 1,
            Weight_in_grams: 1000,
            quantoty: 2
          },
        ]
      },
      {
        id: 1,
        flavor: 'morango',
        Weight_in_grams: [
          {
            id: 2,
            Weight_in_grams: 1000,
            quantoty: 2
          },
        ]
      }
    ], 
    descount_in_percent: 0,
    descount_in_cents: 0,
    quantity: 0,
    price_in_cents: 8652,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 5,
    description: "Qui beatae provident eos vitae libero ut neque. Quisquam hic quas repellat natus illo ex. Enim debitis repudiandae veniam non quos dolores maxime. Inventore labore sint id. Labore repudiandae deserunt sed quia.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
    images: [
      {
        id: 4,
        name: '4',
        productAddedId: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 5,
        name: '5',
        productAddedId: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 6,
        name: '6',
        productAddedId: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 3,
        productAddedLike: 2,
        userLiked: 1
      },
      {
        id: 4,
        productAddedLike: 2,
        userLiked: 2
      }
    ]
  },
  {
    id: 3,
    name: "Caneca de cerâmica rústica",
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    quantity: 10,
    descount_in_percent: 0,
    descount_in_cents: 0,
    price_in_cents: 2606,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 30,
    description: "Est et enim consequuntur. Quaerat saepe possimus est in veritatis. Repellendus corporis culpa voluptas voluptatibus numquam vel corporis mollitia. Natus vero laudantium explicabo sapiente tenetur. Non est consequuntur sit facilis quia.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
    images: [
      {
        id: 7,
        name: '7',
        productAddedId: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 8,
        name: '8',
        productAddedId: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 9,
        name: '9',
        productAddedId: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 5,
        productAddedLike: 3,
        userLiked: 1
      },
      {
        id: 6,
        productAddedLike: 3,
        userLiked: 2
      }
    ]
  },
  {
    id: 4,
    name: "Caneca Decaf! P&Co",
    price_in_cents: 6084,
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    quantity: 10,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 25,
    description: "Consequatur rerum tenetur eum et est ipsum voluptate. Tempora voluptatem nihil dolores sed dolorem. Deleniti accusamus reprehenderit iste iure eligendi.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
    images: [
      {
        id: 10,
        name: '10',
        productAddedId: 4,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 11,
        name: '11',
        productAddedId: 4,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 12,
        name: '12',
        productAddedId: 4,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 7,
        productAddedLike: 4,
        userLiked: 1
      },
      {
        id: 8,
        productAddedLike: 4,
        userLiked: 2
      }
    ]
  },
  {
    id: 5,
    name: "Camiseta not today.",
    typeProduct: "shirt",
    category: [
      {
        id: 1,
        productId: 1,
        categoryId: 1,
        categoryType: 'clothes'
      },
      {
        id: 2,
        productId: 1,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    quantity: 10,
    price_in_cents: 7548,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 32,
    description: "Qui a et quis commodi earum. Repellat soluta eligendi officiis repellat architecto qui odit non. Neque aut quod. Aut omnis quasi suscipit amet itaque. Eos omnis quam aperiam deserunt nobis et quod totam.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
    images: [
      {
        id: 14,
        name: '14',
        productAddedId: 5,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 15,
        name: '15',
        productAddedId: 5,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 16,
        name: '16',
        productAddedId: 5,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 9,
        productAddedLike: 3,
        userLiked: 1
      },
      {
        id: 10,
        productAddedLike: 3,
        userLiked: 2
      }
    ]
  },
  {
    id: 6,
    name: "Caneca Black Ring",
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    quantity: 10,
    descount_in_percent: 0,
    descount_in_cents: 0,
    price_in_cents: 2931,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 44,
    description: "Optio eos sit. Deleniti eos quo alias consequatur. Facere quos rem aut aut. Laboriosam recusandae expedita. Ad molestiae pariatur maxime assumenda quis labore voluptatem quisquam. Velit quos unde minus quod earum recusandae accusamus omnis.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
    images: [
      {
        id: 17,
        name: '17',
        productAddedId: 6,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 18,
        name: '18',
        productAddedId: 6,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 19,
        name: '19',
        productAddedId: 6,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 11,
        productAddedLike: 3,
        userLiked: 1
      },
      {
        id: 12,
        productAddedLike: 3,
        userLiked: 2
      }
    ]
  },

  {
    id: 7,
    name: "Camiseta Ramones",
    typeProduct: "shirt",
    quantity: 10,
    category: [
      {
        id: 1,
        productId: 1,
        categoryId: 1,
        categoryType: 'clothes'
      },
      {
        id: 2,
        productId: 1,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    price_in_cents: 7042,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 50,
    description: "At sed adipisci ut ullam eaque. Et totam architecto eligendi. Eos sed veniam praesentium consequatur assumenda. Ut impedit quo a officiis est corrupti atque ea. Dignissimos voluptatem eaque nesciunt. Aut ipsam aut.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
    images: [
      {
        id: 1,
        name: '1',
        productAddedId: 1,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 2,
        name: '2',
        productAddedId: 1,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 3,
        name: '4',
        productAddedId: 1,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 1,
        productAddedLike: 1,
        userLiked: 1
      },
      {
        id: 2,
        productAddedLike: 1,
        userLiked: 2
      }
    ]
  },
  {
    id: 8,
    name: "Caneca Never settle",
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    quantity: 10,
    price_in_cents: 8652,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 5,
    description: "Qui beatae provident eos vitae libero ut neque. Quisquam hic quas repellat natus illo ex. Enim debitis repudiandae veniam non quos dolores maxime. Inventore labore sint id. Labore repudiandae deserunt sed quia.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
    images: [
      {
        id: 4,
        name: '4',
        productAddedId: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 5,
        name: '5',
        productAddedId: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 6,
        name: '6',
        productAddedId: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 3,
        productAddedLike: 2,
        userLiked: 1
      },
      {
        id: 4,
        productAddedLike: 2,
        userLiked: 2
      }
    ]
  },
  {
    id: 9,
    name: "Caneca de cerâmica rústica",
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    quantity: 10,
    descount_in_percent: 0,
    descount_in_cents: 0,
    price_in_cents: 2606,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 30,
    description: "Est et enim consequuntur. Quaerat saepe possimus est in veritatis. Repellendus corporis culpa voluptas voluptatibus numquam vel corporis mollitia. Natus vero laudantium explicabo sapiente tenetur. Non est consequuntur sit facilis quia.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
    images: [
      {
        id: 7,
        name: '7',
        productAddedId: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 8,
        name: '8',
        productAddedId: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 9,
        name: '9',
        productAddedId: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 5,
        productAddedLike: 3,
        userLiked: 1
      },
      {
        id: 6,
        productAddedLike: 3,
        userLiked: 2
      }
    ]
  },
  {
    id: 10,
    name: "Caneca Decaf! P&Co",
    price_in_cents: 6084,
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    quantity: 10,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 25,
    description: "Consequatur rerum tenetur eum et est ipsum voluptate. Tempora voluptatem nihil dolores sed dolorem. Deleniti accusamus reprehenderit iste iure eligendi.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
    images: [
      {
        id: 10,
        name: '10',
        productAddedId: 4,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 11,
        name: '11',
        productAddedId: 4,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 12,
        name: '12',
        productAddedId: 4,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 7,
        productAddedLike: 4,
        userLiked: 1
      },
      {
        id: 8,
        productAddedLike: 4,
        userLiked: 2
      }
    ]
  },
  {
    id: 11,
    name: "Camiseta not today.",
    typeProduct: "shirt",
    category: [
      {
        id: 1,
        productId: 1,
        categoryId: 1,
        categoryType: 'clothes'
      },
      {
        id: 2,
        productId: 1,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    quantity: 10,
    price_in_cents: 7548,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 32,
    description: "Qui a et quis commodi earum. Repellat soluta eligendi officiis repellat architecto qui odit non. Neque aut quod. Aut omnis quasi suscipit amet itaque. Eos omnis quam aperiam deserunt nobis et quod totam.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
    images: [
      {
        id: 14,
        name: '14',
        productAddedId: 5,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 15,
        name: '15',
        productAddedId: 5,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 16,
        name: '16',
        productAddedId: 5,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 9,
        productAddedLike: 3,
        userLiked: 1
      },
      {
        id: 10,
        productAddedLike: 3,
        userLiked: 2
      }
    ]
  },
  {
    id: 12,
    name: "Caneca Black Ring",
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    quantity: 10,
    descount_in_percent: 0,
    descount_in_cents: 0,
    price_in_cents: 2931,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 44,
    description: "Optio eos sit. Deleniti eos quo alias consequatur. Facere quos rem aut aut. Laboriosam recusandae expedita. Ad molestiae pariatur maxime assumenda quis labore voluptatem quisquam. Velit quos unde minus quod earum recusandae accusamus omnis.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
    images: [
      {
        id: 17,
        name: '17',
        productAddedId: 6,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 18,
        name: '18',
        productAddedId: 6,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 19,
        name: '19',
        productAddedId: 6,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 11,
        productAddedLike: 3,
        userLiked: 1
      },
      {
        id: 12,
        productAddedLike: 3,
        userLiked: 2
      }
    ]
  },

  {
    id: 13,
    name: "Camiseta Ramones",
    typeProduct: "shirt",
    quantity: 10,
    category: [
      {
        id: 1,
        productId: 1,
        categoryId: 1,
        categoryType: 'clothes'
      },
      {
        id: 2,
        productId: 1,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    price_in_cents: 7042,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 50,
    description: "At sed adipisci ut ullam eaque. Et totam architecto eligendi. Eos sed veniam praesentium consequatur assumenda. Ut impedit quo a officiis est corrupti atque ea. Dignissimos voluptatem eaque nesciunt. Aut ipsam aut.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
    images: [
      {
        id: 1,
        name: '1',
        productAddedId: 1,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 2,
        name: '2',
        productAddedId: 1,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 3,
        name: '4',
        productAddedId: 1,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 1,
        productAddedLike: 1,
        userLiked: 1
      },
      {
        id: 2,
        productAddedLike: 1,
        userLiked: 2
      }
    ]
  },
  {
    id: 14,
    name: "Caneca Never settle",
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    quantity: 10,
    price_in_cents: 8652,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 5,
    description: "Qui beatae provident eos vitae libero ut neque. Quisquam hic quas repellat natus illo ex. Enim debitis repudiandae veniam non quos dolores maxime. Inventore labore sint id. Labore repudiandae deserunt sed quia.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
    images: [
      {
        id: 4,
        name: '4',
        productAddedId: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 5,
        name: '5',
        productAddedId: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 6,
        name: '6',
        productAddedId: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 3,
        productAddedLike: 2,
        userLiked: 1
      },
      {
        id: 4,
        productAddedLike: 2,
        userLiked: 2
      }
    ]
  },
  {
    id: 15,
    name: "Caneca de cerâmica rústica",
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    quantity: 10,
    descount_in_percent: 0,
    descount_in_cents: 0,
    price_in_cents: 2606,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 30,
    description: "Est et enim consequuntur. Quaerat saepe possimus est in veritatis. Repellendus corporis culpa voluptas voluptatibus numquam vel corporis mollitia. Natus vero laudantium explicabo sapiente tenetur. Non est consequuntur sit facilis quia.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
    images: [
      {
        id: 7,
        name: '7',
        productAddedId: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 8,
        name: '8',
        productAddedId: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 9,
        name: '9',
        productAddedId: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 5,
        productAddedLike: 3,
        userLiked: 1
      },
      {
        id: 6,
        productAddedLike: 3,
        userLiked: 2
      }
    ]
  },
  {
    id: 16,
    name: "Caneca Decaf! P&Co",
    price_in_cents: 6084,
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    quantity: 10,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 25,
    description: "Consequatur rerum tenetur eum et est ipsum voluptate. Tempora voluptatem nihil dolores sed dolorem. Deleniti accusamus reprehenderit iste iure eligendi.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
    images: [
      {
        id: 10,
        name: '10',
        productAddedId: 4,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 11,
        name: '11',
        productAddedId: 4,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 12,
        name: '12',
        productAddedId: 4,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 7,
        productAddedLike: 4,
        userLiked: 1
      },
      {
        id: 8,
        productAddedLike: 4,
        userLiked: 2
      }
    ]
  },
  {
    id: 17,
    name: "Camiseta not today.",
    typeProduct: "shirt",
    category: [
      {
        id: 1,
        productId: 1,
        categoryId: 1,
        categoryType: 'clothes'
      },
      {
        id: 2,
        productId: 1,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    quantity: 10,
    price_in_cents: 7548,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 32,
    description: "Qui a et quis commodi earum. Repellat soluta eligendi officiis repellat architecto qui odit non. Neque aut quod. Aut omnis quasi suscipit amet itaque. Eos omnis quam aperiam deserunt nobis et quod totam.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
    images: [
      {
        id: 14,
        name: '14',
        productAddedId: 5,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 15,
        name: '15',
        productAddedId: 5,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 16,
        name: '16',
        productAddedId: 5,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 9,
        productAddedLike: 3,
        userLiked: 1
      },
      {
        id: 10,
        productAddedLike: 3,
        userLiked: 2
      }
    ]
  },
  {
    id: 18,
    name: "Caneca Black Ring",
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    quantity: 10,
    descount_in_percent: 0,
    descount_in_cents: 0,
    price_in_cents: 2931,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 44,
    description: "Optio eos sit. Deleniti eos quo alias consequatur. Facere quos rem aut aut. Laboriosam recusandae expedita. Ad molestiae pariatur maxime assumenda quis labore voluptatem quisquam. Velit quos unde minus quod earum recusandae accusamus omnis.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
    images: [
      {
        id: 17,
        name: '17',
        productAddedId: 6,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 18,
        name: '18',
        productAddedId: 6,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 19,
        name: '19',
        productAddedId: 6,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 11,
        productAddedLike: 3,
        userLiked: 1
      },
      {
        id: 12,
        productAddedLike: 3,
        userLiked: 2
      }
    ]
  },

  {
    id: 19,
    name: "Camiseta Ramones",
    typeProduct: "shirt",
    quantity: 10,
    category: [
      {
        id: 1,
        productId: 1,
        categoryId: 1,
        categoryType: 'clothes'
      },
      {
        id: 2,
        productId: 1,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    price_in_cents: 7042,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 50,
    description: "At sed adipisci ut ullam eaque. Et totam architecto eligendi. Eos sed veniam praesentium consequatur assumenda. Ut impedit quo a officiis est corrupti atque ea. Dignissimos voluptatem eaque nesciunt. Aut ipsam aut.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
    images: [
      {
        id: 1,
        name: '1',
        productAddedId: 1,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 2,
        name: '2',
        productAddedId: 1,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 3,
        name: '4',
        productAddedId: 1,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 1,
        productAddedLike: 1,
        userLiked: 1
      },
      {
        id: 2,
        productAddedLike: 1,
        userLiked: 2
      }
    ]
  },
  {
    id: 20,
    name: "Caneca Never settle",
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    quantity: 10,
    price_in_cents: 8652,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 5,
    description: "Qui beatae provident eos vitae libero ut neque. Quisquam hic quas repellat natus illo ex. Enim debitis repudiandae veniam non quos dolores maxime. Inventore labore sint id. Labore repudiandae deserunt sed quia.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
    images: [
      {
        id: 4,
        name: '4',
        productAddedId: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 5,
        name: '5',
        productAddedId: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 6,
        name: '6',
        productAddedId: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 3,
        productAddedLike: 2,
        userLiked: 1
      },
      {
        id: 4,
        productAddedLike: 2,
        userLiked: 2
      }
    ]
  },
  {
    id: 21,
    name: "Caneca de cerâmica rústica",
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    quantity: 10,
    descount_in_percent: 0,
    descount_in_cents: 0,
    price_in_cents: 2606,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 30,
    description: "Est et enim consequuntur. Quaerat saepe possimus est in veritatis. Repellendus corporis culpa voluptas voluptatibus numquam vel corporis mollitia. Natus vero laudantium explicabo sapiente tenetur. Non est consequuntur sit facilis quia.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
    images: [
      {
        id: 7,
        name: '7',
        productAddedId: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 8,
        name: '8',
        productAddedId: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 9,
        name: '9',
        productAddedId: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 5,
        productAddedLike: 3,
        userLiked: 1
      },
      {
        id: 6,
        productAddedLike: 3,
        userLiked: 2
      }
    ]
  },
  {
    id: 22,
    name: "Caneca Decaf! P&Co",
    price_in_cents: 6084,
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    quantity: 10,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 25,
    description: "Consequatur rerum tenetur eum et est ipsum voluptate. Tempora voluptatem nihil dolores sed dolorem. Deleniti accusamus reprehenderit iste iure eligendi.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
    images: [
      {
        id: 10,
        name: '10',
        productAddedId: 4,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 11,
        name: '11',
        productAddedId: 4,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 12,
        name: '12',
        productAddedId: 4,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 7,
        productAddedLike: 4,
        userLiked: 1
      },
      {
        id: 8,
        productAddedLike: 4,
        userLiked: 2
      }
    ]
  },
  {
    id: 23,
    name: "Camiseta not today.",
    typeProduct: "shirt",
    category: [
      {
        id: 1,
        productId: 1,
        categoryId: 1,
        categoryType: 'clothes'
      },
      {
        id: 2,
        productId: 1,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    descount_in_percent: 0,
    descount_in_cents: 0,
    quantity: 10,
    price_in_cents: 7548,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 32,
    description: "Qui a et quis commodi earum. Repellat soluta eligendi officiis repellat architecto qui odit non. Neque aut quod. Aut omnis quasi suscipit amet itaque. Eos omnis quam aperiam deserunt nobis et quod totam.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
    images: [
      {
        id: 14,
        name: '14',
        productAddedId: 5,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 15,
        name: '15',
        productAddedId: 5,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 16,
        name: '16',
        productAddedId: 5,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 9,
        productAddedLike: 3,
        userLiked: 1
      },
      {
        id: 10,
        productAddedLike: 3,
        userLiked: 2
      }
    ]
  },
  {
    id: 24,
    name: "Caneca Black Ring",
    typeProduct: "mug",
    category: [
      {
        id: 2,
        productId: 2,
        categoryId: 3,
        categoryType: 'Housewares'
      },
      {
        id: 3,
        productId: 2,
        categoryId: 2,
        categoryType: 'gift'
      },
    ],
    quantity: 10,
    descount_in_percent: 0,
    descount_in_cents: 0,
    price_in_cents: 2931,
    qtdNote0: 1,
    qtdNoteHalf: 2,
    qtdNote1: 10,
    qtdNote1AndHalf: 12,
    qtdNote2: 10,
    qtdNote2AndHalf: 8,
    qtdNote3: 9,
    qtdNote3AndHalf: 11,
    qtdNote4: 20,
    qtdNote4AndHalf: 21,
    qtdNote5: 44,
    description: "Optio eos sit. Deleniti eos quo alias consequatur. Facere quos rem aut aut. Laboriosam recusandae expedita. Ad molestiae pariatur maxime assumenda quis labore voluptatem quisquam. Velit quos unde minus quod earum recusandae accusamus omnis.",
    coverImage: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
    images: [
      {
        id: 17,
        name: '17',
        productAddedId: 6,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 18,
        name: '18',
        productAddedId: 6,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        mimeType: 'image/jpeg'
      },
      {
        id: 19,
        name: '19',
        productAddedId: 6,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg",
        mimeType: 'video/mp4'
      }
    ],
    likes: [
      {
        id: 11,
        productAddedLike: 3,
        userLiked: 1
      },
      {
        id: 12,
        productAddedLike: 3,
        userLiked: 2
      }
    ]
  }
];