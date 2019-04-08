const data = [
  {
    userId: 1,
    id: 1,
    task: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    task: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    task: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    task: "et porro tempora",
    completed: true
  },
  {
    userId: 1,
    id: 5,
    task: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
  {
    userId: 1,
    id: 6,
    task: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  },
  {
    userId: 1,
    id: 7,
    task: "illo expedita consequatur quia in",
    completed: false
  },
  {
    userId: 1,
    id: 8,
    task: "quo adipisci enim quam ut ab",
    completed: true
  },
  {
    userId: 1,
    id: 9,
    task: "molestiae perspiciatis ipsa",
    completed: false
  },
  {
    userId: 1,
    id: 10,
    task: "illo est ratione doloremque quia maiores aut",
    completed: true
  },
  {
    userId: 1,
    id: 11,
    task: "vero rerum temporibus dolor",
    completed: true
  },
  {
    userId: 1,
    id: 12,
    task: "ipsa repellendus fugit nisi",
    completed: true
  },
  {
    userId: 1,
    id: 13,
    task: "et doloremque nulla",
    completed: false
  },
  {
    userId: 1,
    id: 14,
    task: "repellendus sunt dolores architecto voluptatum",
    completed: true
  },
  {
    userId: 1,
    id: 15,
    task: "ab voluptatum amet voluptas",
    completed: true
  },
  {
    userId: 1,
    id: 16,
    task: "accusamus eos facilis sint et aut voluptatem",
    completed: true
  },
  {
    userId: 1,
    id: 17,
    task: "quo laboriosam deleniti aut qui",
    completed: true
  },
  {
    userId: 1,
    id: 18,
    task: "dolorum est consequatur ea mollitia in culpa",
    completed: false
  },
  {
    userId: 1,
    id: 19,
    task: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    completed: true
  },
  {
    userId: 1,
    id: 20,
    task: "ullam nobis libero sapiente ad optio sint",
    completed: true
  },
  {
    userId: 2,
    id: 21,
    task: "suscipit repellat esse quibusdam voluptatem incidunt",
    completed: false
  },
  {
    userId: 2,
    id: 22,
    task: "distinctio vitae autem nihil ut molestias quo",
    completed: true
  },
  {
    userId: 2,
    id: 23,
    task: "et itaque necessitatibus maxime molestiae qui quas velit",
    completed: false
  },
  {
    userId: 2,
    id: 24,
    task: "adipisci non ad dicta qui amet quaerat doloribus ea",
    completed: false
  },
  {
    userId: 2,
    id: 25,
    task: "voluptas quo tenetur perspiciatis explicabo natus",
    completed: true
  },
  {
    userId: 2,
    id: 26,
    task: "aliquam aut quasi",
    completed: true
  },
  {
    userId: 2,
    id: 27,
    task: "veritatis pariatur delectus",
    completed: true
  },
  {
    userId: 2,
    id: 28,
    task: "nesciunt totam sit blanditiis sit",
    completed: false
  },
  {
    userId: 2,
    id: 29,
    task: "laborum aut in quam",
    completed: false
  },
  {
    userId: 2,
    id: 30,
    task: "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
    completed: true
  },
  {
    userId: 2,
    id: 31,
    task: "repudiandae totam in est sint facere fuga",
    completed: false
  },
  {
    userId: 2,
    id: 32,
    task: "earum doloribus ea doloremque quis",
    completed: false
  },
  {
    userId: 2,
    id: 33,
    task: "sint sit aut vero",
    completed: false
  },
  {
    userId: 2,
    id: 34,
    task: "porro aut necessitatibus eaque distinctio",
    completed: false
  },
  {
    userId: 2,
    id: 35,
    task: "repellendus veritatis molestias dicta incidunt",
    completed: true
  },
  {
    userId: 2,
    id: 36,
    task: "excepturi deleniti adipisci voluptatem et neque optio illum ad",
    completed: true
  },
  {
    userId: 2,
    id: 37,
    task: "sunt cum tempora",
    completed: false
  },
  {
    userId: 2,
    id: 38,
    task: "totam quia non",
    completed: false
  },
  {
    userId: 2,
    id: 39,
    task: "doloremque quibusdam asperiores libero corrupti illum qui omnis",
    completed: false
  },
  {
    userId: 2,
    id: 40,
    task: "totam atque quo nesciunt",
    completed: true
  },
  {
    userId: 3,
    id: 41,
    task:
      "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
    completed: false
  },
  {
    userId: 3,
    id: 42,
    task: "rerum perferendis error quia ut eveniet",
    completed: false
  },
  {
    userId: 3,
    id: 43,
    task: "tempore ut sint quis recusandae",
    completed: true
  },
  {
    userId: 3,
    id: 44,
    task: "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
    completed: true
  },
  {
    userId: 3,
    id: 45,
    task: "velit soluta adipisci molestias reiciendis harum",
    completed: false
  },
  {
    userId: 3,
    id: 46,
    task: "vel voluptatem repellat nihil placeat corporis",
    completed: false
  },
  {
    userId: 3,
    id: 47,
    task: "nam qui rerum fugiat accusamus",
    completed: false
  },
  {
    userId: 3,
    id: 48,
    task: "sit reprehenderit omnis quia",
    completed: false
  },
  {
    userId: 3,
    id: 49,
    task: "ut necessitatibus aut maiores debitis officia blanditiis velit et",
    completed: false
  },
  {
    userId: 3,
    id: 50,
    task: "cupiditate necessitatibus ullam aut quis dolor voluptate",
    completed: true
  },
  {
    userId: 3,
    id: 51,
    task: "distinctio exercitationem ab doloribus",
    completed: false
  },
  {
    userId: 3,
    id: 52,
    task: "nesciunt dolorum quis recusandae ad pariatur ratione",
    completed: false
  },
  {
    userId: 3,
    id: 53,
    task: "qui labore est occaecati recusandae aliquid quam",
    completed: false
  },
  {
    userId: 3,
    id: 54,
    task: "quis et est ut voluptate quam dolor",
    completed: true
  },
  {
    userId: 3,
    id: 55,
    task:
      "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
    completed: true
  },
  {
    userId: 3,
    id: 56,
    task: "deleniti ea temporibus enim",
    completed: true
  },
  {
    userId: 3,
    id: 57,
    task: "pariatur et magnam ea doloribus similique voluptatem rerum quia",
    completed: false
  },
  {
    userId: 3,
    id: 58,
    task: "est dicta totam qui explicabo doloribus qui dignissimos",
    completed: false
  },
  {
    userId: 3,
    id: 59,
    task: "perspiciatis velit id laborum placeat iusto et aliquam odio",
    completed: false
  },
  {
    userId: 3,
    id: 60,
    task: "et sequi qui architecto ut adipisci",
    completed: true
  },
  {
    userId: 4,
    id: 61,
    task: "odit optio omnis qui sunt",
    completed: true
  },
  {
    userId: 4,
    id: 62,
    task: "et placeat et tempore aspernatur sint numquam",
    completed: false
  },
  {
    userId: 4,
    id: 63,
    task: "doloremque aut dolores quidem fuga qui nulla",
    completed: true
  },
  {
    userId: 4,
    id: 64,
    task: "voluptas consequatur qui ut quia magnam nemo esse",
    completed: false
  },
  {
    userId: 4,
    id: 65,
    task: "fugiat pariatur ratione ut asperiores necessitatibus magni",
    completed: false
  },
  {
    userId: 4,
    id: 66,
    task: "rerum eum molestias autem voluptatum sit optio",
    completed: false
  },
  {
    userId: 4,
    id: 67,
    task: "quia voluptatibus voluptatem quos similique maiores repellat",
    completed: false
  },
  {
    userId: 4,
    id: 68,
    task: "aut id perspiciatis voluptatem iusto",
    completed: false
  },
  {
    userId: 4,
    id: 69,
    task:
      "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
    completed: false
  },
  {
    userId: 4,
    id: 70,
    task: "ut sequi accusantium et mollitia delectus sunt",
    completed: false
  },
  {
    userId: 4,
    id: 71,
    task: "aut velit saepe ullam",
    completed: false
  },
  {
    userId: 4,
    id: 72,
    task: "praesentium facilis facere quis harum voluptatibus voluptatem eum",
    completed: false
  },
  {
    userId: 4,
    id: 73,
    task: "sint amet quia totam corporis qui exercitationem commodi",
    completed: true
  },
  {
    userId: 4,
    id: 74,
    task: "expedita tempore nobis eveniet laborum maiores",
    completed: false
  },
  {
    userId: 4,
    id: 75,
    task: "occaecati adipisci est possimus totam",
    completed: false
  },
  {
    userId: 4,
    id: 76,
    task: "sequi dolorem sed",
    completed: true
  },
  {
    userId: 4,
    id: 77,
    task:
      "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
    completed: false
  },
  {
    userId: 4,
    id: 78,
    task: "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
    completed: false
  },
  {
    userId: 4,
    id: 79,
    task: "eum ipsa maxime ut",
    completed: true
  },
  {
    userId: 4,
    id: 80,
    task: "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
    completed: true
  },
  {
    userId: 5,
    id: 81,
    task: "suscipit qui totam",
    completed: true
  },
  {
    userId: 5,
    id: 82,
    task: "voluptates eum voluptas et dicta",
    completed: false
  },
  {
    userId: 5,
    id: 83,
    task: "quidem at rerum quis ex aut sit quam",
    completed: true
  },
  {
    userId: 5,
    id: 84,
    task: "sunt veritatis ut voluptate",
    completed: false
  },
  {
    userId: 5,
    id: 85,
    task: "et quia ad iste a",
    completed: true
  },
  {
    userId: 5,
    id: 86,
    task: "incidunt ut saepe autem",
    completed: true
  },
  {
    userId: 5,
    id: 87,
    task: "laudantium quae eligendi consequatur quia et vero autem",
    completed: true
  },
  {
    userId: 5,
    id: 88,
    task: "vitae aut excepturi laboriosam sint aliquam et et accusantium",
    completed: false
  },
  {
    userId: 5,
    id: 89,
    task: "sequi ut omnis et",
    completed: true
  },
  {
    userId: 5,
    id: 90,
    task: "molestiae nisi accusantium tenetur dolorem et",
    completed: true
  },
  {
    userId: 5,
    id: 91,
    task: "nulla quis consequatur saepe qui id expedita",
    completed: true
  },
  {
    userId: 5,
    id: 92,
    task: "in omnis laboriosam",
    completed: true
  },
  {
    userId: 5,
    id: 93,
    task: "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
    completed: true
  },
  {
    userId: 5,
    id: 94,
    task: "facilis modi saepe mollitia",
    completed: false
  },
  {
    userId: 5,
    id: 95,
    task: "vel nihil et molestiae iusto assumenda nemo quo ut",
    completed: true
  },
  {
    userId: 5,
    id: 96,
    task: "nobis suscipit ducimus enim asperiores voluptas",
    completed: false
  },
  {
    userId: 5,
    id: 97,
    task: "dolorum laboriosam eos qui iure aliquam",
    completed: false
  },
  {
    userId: 5,
    id: 98,
    task:
      "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
    completed: true
  },
  {
    userId: 5,
    id: 99,
    task: "neque voluptates ratione",
    completed: false
  },
  {
    userId: 5,
    id: 100,
    task: "excepturi a et neque qui expedita vel voluptate",
    completed: false
  },
  {
    userId: 6,
    id: 101,
    task: "explicabo enim cumque porro aperiam occaecati minima",
    completed: false
  },
  {
    userId: 6,
    id: 102,
    task: "sed ab consequatur",
    completed: false
  },
  {
    userId: 6,
    id: 103,
    task: "non sunt delectus illo nulla tenetur enim omnis",
    completed: false
  },
  {
    userId: 6,
    id: 104,
    task: "excepturi non laudantium quo",
    completed: false
  },
  {
    userId: 6,
    id: 105,
    task: "totam quia dolorem et illum repellat voluptas optio",
    completed: true
  },
  {
    userId: 6,
    id: 106,
    task: "ad illo quis voluptatem temporibus",
    completed: true
  },
  {
    userId: 6,
    id: 107,
    task: "praesentium facilis omnis laudantium fugit ad iusto nihil nesciunt",
    completed: false
  },
  {
    userId: 6,
    id: 108,
    task: "a eos eaque nihil et exercitationem incidunt delectus",
    completed: true
  },
  {
    userId: 6,
    id: 109,
    task: "autem temporibus harum quisquam in culpa",
    completed: true
  },
  {
    userId: 6,
    id: 110,
    task: "aut aut ea corporis",
    completed: true
  },
  {
    userId: 6,
    id: 111,
    task: "magni accusantium labore et id quis provident",
    completed: false
  },
  {
    userId: 6,
    id: 112,
    task:
      "consectetur impedit quisquam qui deserunt non rerum consequuntur eius",
    completed: false
  },
  {
    userId: 6,
    id: 113,
    task: "quia atque aliquam sunt impedit voluptatum rerum assumenda nisi",
    completed: false
  },
  {
    userId: 6,
    id: 114,
    task: "cupiditate quos possimus corporis quisquam exercitationem beatae",
    completed: false
  },
  {
    userId: 6,
    id: 115,
    task: "sed et ea eum",
    completed: false
  },
  {
    userId: 6,
    id: 116,
    task: "ipsa dolores vel facilis ut",
    completed: true
  },
  {
    userId: 6,
    id: 117,
    task: "sequi quae est et qui qui eveniet asperiores",
    completed: false
  },
  {
    userId: 6,
    id: 118,
    task: "quia modi consequatur vero fugiat",
    completed: false
  },
  {
    userId: 6,
    id: 119,
    task: "corporis ducimus ea perspiciatis iste",
    completed: false
  },
  {
    userId: 6,
    id: 120,
    task: "dolorem laboriosam vel voluptas et aliquam quasi",
    completed: false
  },
  {
    userId: 7,
    id: 121,
    task: "inventore aut nihil minima laudantium hic qui omnis",
    completed: true
  },
  {
    userId: 7,
    id: 122,
    task: "provident aut nobis culpa",
    completed: true
  },
  {
    userId: 7,
    id: 123,
    task: "esse et quis iste est earum aut impedit",
    completed: false
  },
  {
    userId: 7,
    id: 124,
    task: "qui consectetur id",
    completed: false
  },
  {
    userId: 7,
    id: 125,
    task: "aut quasi autem iste tempore illum possimus",
    completed: false
  },
  {
    userId: 7,
    id: 126,
    task: "ut asperiores perspiciatis veniam ipsum rerum saepe",
    completed: true
  },
  {
    userId: 7,
    id: 127,
    task: "voluptatem libero consectetur rerum ut",
    completed: true
  },
  {
    userId: 7,
    id: 128,
    task: "eius omnis est qui voluptatem autem",
    completed: false
  },
  {
    userId: 7,
    id: 129,
    task: "rerum culpa quis harum",
    completed: false
  },
  {
    userId: 7,
    id: 130,
    task: "nulla aliquid eveniet harum laborum libero alias ut unde",
    completed: true
  },
  {
    userId: 7,
    id: 131,
    task: "qui ea incidunt quis",
    completed: false
  },
  {
    userId: 7,
    id: 132,
    task: "qui molestiae voluptatibus velit iure harum quisquam",
    completed: true
  },
  {
    userId: 7,
    id: 133,
    task: "et labore eos enim rerum consequatur sunt",
    completed: true
  },
  {
    userId: 7,
    id: 134,
    task: "molestiae doloribus et laborum quod ea",
    completed: false
  },
  {
    userId: 7,
    id: 135,
    task: "facere ipsa nam eum voluptates reiciendis vero qui",
    completed: false
  },
  {
    userId: 7,
    id: 136,
    task: "asperiores illo tempora fuga sed ut quasi adipisci",
    completed: false
  },
  {
    userId: 7,
    id: 137,
    task: "qui sit non",
    completed: false
  },
  {
    userId: 7,
    id: 138,
    task: "placeat minima consequatur rem qui ut",
    completed: true
  },
  {
    userId: 7,
    id: 139,
    task: "consequatur doloribus id possimus voluptas a voluptatem",
    completed: false
  },
  {
    userId: 7,
    id: 140,
    task: "aut consectetur in blanditiis deserunt quia sed laboriosam",
    completed: true
  },
  {
    userId: 8,
    id: 141,
    task: "explicabo consectetur debitis voluptates quas quae culpa rerum non",
    completed: true
  },
  {
    userId: 8,
    id: 142,
    task: "maiores accusantium architecto necessitatibus reiciendis ea aut",
    completed: true
  },
  {
    userId: 8,
    id: 143,
    task: "eum non recusandae cupiditate animi",
    completed: false
  },
  {
    userId: 8,
    id: 144,
    task: "ut eum exercitationem sint",
    completed: false
  },
  {
    userId: 8,
    id: 145,
    task: "beatae qui ullam incidunt voluptatem non nisi aliquam",
    completed: false
  },
  {
    userId: 8,
    id: 146,
    task: "molestiae suscipit ratione nihil odio libero impedit vero totam",
    completed: true
  },
  {
    userId: 8,
    id: 147,
    task: "eum itaque quod reprehenderit et facilis dolor autem ut",
    completed: true
  },
  {
    userId: 8,
    id: 148,
    task: "esse quas et quo quasi exercitationem",
    completed: false
  },
  {
    userId: 8,
    id: 149,
    task: "animi voluptas quod perferendis est",
    completed: false
  },
  {
    userId: 8,
    id: 150,
    task: "eos amet tempore laudantium fugit a",
    completed: false
  },
  {
    userId: 8,
    id: 151,
    task: "accusamus adipisci dicta qui quo ea explicabo sed vero",
    completed: true
  },
  {
    userId: 8,
    id: 152,
    task: "odit eligendi recusandae doloremque cumque non",
    completed: false
  },
  {
    userId: 8,
    id: 153,
    task: "ea aperiam consequatur qui repellat eos",
    completed: false
  },
  {
    userId: 8,
    id: 154,
    task: "rerum non ex sapiente",
    completed: true
  },
  {
    userId: 8,
    id: 155,
    task: "voluptatem nobis consequatur et assumenda magnam",
    completed: true
  },
  {
    userId: 8,
    id: 156,
    task: "nam quia quia nulla repellat assumenda quibusdam sit nobis",
    completed: true
  },
  {
    userId: 8,
    id: 157,
    task: "dolorem veniam quisquam deserunt repellendus",
    completed: true
  },
  {
    userId: 8,
    id: 158,
    task: "debitis vitae delectus et harum accusamus aut deleniti a",
    completed: true
  },
  {
    userId: 8,
    id: 159,
    task: "debitis adipisci quibusdam aliquam sed dolore ea praesentium nobis",
    completed: true
  },
  {
    userId: 8,
    id: 160,
    task: "et praesentium aliquam est",
    completed: false
  },
  {
    userId: 9,
    id: 161,
    task: "ex hic consequuntur earum omnis alias ut occaecati culpa",
    completed: true
  },
  {
    userId: 9,
    id: 162,
    task: "omnis laboriosam molestias animi sunt dolore",
    completed: true
  },
  {
    userId: 9,
    id: 163,
    task: "natus corrupti maxime laudantium et voluptatem laboriosam odit",
    completed: false
  },
  {
    userId: 9,
    id: 164,
    task: "reprehenderit quos aut aut consequatur est sed",
    completed: false
  },
  {
    userId: 9,
    id: 165,
    task: "fugiat perferendis sed aut quidem",
    completed: false
  },
  {
    userId: 9,
    id: 166,
    task: "quos quo possimus suscipit minima ut",
    completed: false
  },
  {
    userId: 9,
    id: 167,
    task: "et quis minus quo a asperiores molestiae",
    completed: false
  },
  {
    userId: 9,
    id: 168,
    task: "recusandae quia qui sunt libero",
    completed: false
  },
  {
    userId: 9,
    id: 169,
    task: "ea odio perferendis officiis",
    completed: true
  },
  {
    userId: 9,
    id: 170,
    task: "quisquam aliquam quia doloribus aut",
    completed: false
  },
  {
    userId: 9,
    id: 171,
    task: "fugiat aut voluptatibus corrupti deleniti velit iste odio",
    completed: true
  },
  {
    userId: 9,
    id: 172,
    task: "et provident amet rerum consectetur et voluptatum",
    completed: false
  },
  {
    userId: 9,
    id: 173,
    task: "harum ad aperiam quis",
    completed: false
  },
  {
    userId: 9,
    id: 174,
    task: "similique aut quo",
    completed: false
  },
  {
    userId: 9,
    id: 175,
    task:
      "laudantium eius officia perferendis provident perspiciatis asperiores",
    completed: true
  },
  {
    userId: 9,
    id: 176,
    task: "magni soluta corrupti ut maiores rem quidem",
    completed: false
  },
  {
    userId: 9,
    id: 177,
    task: "et placeat temporibus voluptas est tempora quos quibusdam",
    completed: false
  },
  {
    userId: 9,
    id: 178,
    task: "nesciunt itaque commodi tempore",
    completed: true
  },
  {
    userId: 9,
    id: 179,
    task: "omnis consequuntur cupiditate impedit itaque ipsam quo",
    completed: true
  },
  {
    userId: 9,
    id: 180,
    task: "debitis nisi et dolorem repellat et",
    completed: true
  },
  {
    userId: 10,
    id: 181,
    task: "ut cupiditate sequi aliquam fuga maiores",
    completed: false
  },
  {
    userId: 10,
    id: 182,
    task: "inventore saepe cumque et aut illum enim",
    completed: true
  },
  {
    userId: 10,
    id: 183,
    task: "omnis nulla eum aliquam distinctio",
    completed: true
  },
  {
    userId: 10,
    id: 184,
    task: "molestias modi perferendis perspiciatis",
    completed: false
  },
  {
    userId: 10,
    id: 185,
    task: "voluptates dignissimos sed doloribus animi quaerat aut",
    completed: false
  },
  {
    userId: 10,
    id: 186,
    task: "explicabo odio est et",
    completed: false
  },
  {
    userId: 10,
    id: 187,
    task: "consequuntur animi possimus",
    completed: false
  },
  {
    userId: 10,
    id: 188,
    task: "vel non beatae est",
    completed: true
  },
  {
    userId: 10,
    id: 189,
    task: "culpa eius et voluptatem et",
    completed: true
  },
  {
    userId: 10,
    id: 190,
    task: "accusamus sint iusto et voluptatem exercitationem",
    completed: true
  },
  {
    userId: 10,
    id: 191,
    task:
      "temporibus atque distinctio omnis eius impedit tempore molestias pariatur",
    completed: true
  },
  {
    userId: 10,
    id: 192,
    task: "ut quas possimus exercitationem sint voluptates",
    completed: false
  },
  {
    userId: 10,
    id: 193,
    task: "rerum debitis voluptatem qui eveniet tempora distinctio a",
    completed: true
  },
  {
    userId: 10,
    id: 194,
    task: "sed ut vero sit molestiae",
    completed: false
  },
  {
    userId: 10,
    id: 195,
    task: "rerum ex veniam mollitia voluptatibus pariatur",
    completed: true
  },
  {
    userId: 10,
    id: 196,
    task: "consequuntur aut ut fugit similique",
    completed: true
  },
  {
    userId: 10,
    id: 197,
    task: "dignissimos quo nobis earum saepe",
    completed: true
  },
  {
    userId: 10,
    id: 198,
    task: "quis eius est sint explicabo",
    completed: true
  },
  {
    userId: 10,
    id: 199,
    task: "numquam repellendus a magnam",
    completed: true
  },
  {
    userId: 10,
    id: 200,
    task: "ipsam aperiam voluptates qui",
    completed: false
  }
];

// The array where every object.completed has a false value.
const falseViaWhile = [];

const falseViaForEach = [];

let i = 0;

while (i < data.length) {
  if (data.completed === false) {
    falseViaWhile.push(data[i]);
  }
  i += 1;
}
console.log(falseViaWhile);

data.forEach(item => {
  if (data.completed === false) {
    falseViaForEach.push(data[item]);
  }
});
console.log(falseViaForEach);

const falseViaMap = data.map(element => element.completed === false);
console.log(falseViaMap);

const falseViaFilter = falseViaMap.filter(task => task.completed === false);
console.log(falseViaFilter);

/**
 * Given 'data' above, perform the following tasks, logging each to the terminal.
 * 1. Use `while` to 'manually' iterate over this `Array` and count up the number of incomplete tasks - that is occurrences of `completed: false`. HINT: You will most likely need to use `if` statements.
 * 2. Use `forEach` instead of `while` to repeat the same task above.
 * 3. Use filter() to show only `Object`s that have `completed: false`. If done correctly, you will have a similar set of data as `data`, but all of the `Object`s inside will show `completed: false` HINT: You can verify that it's done correctly if your new `Array` has length of 110.
 * 4. Use map() to build an `Array` of all the `task` values associated with `completed: false`. In other words, we are building a new `Array` of just all the tasks that are not completed.
 */
