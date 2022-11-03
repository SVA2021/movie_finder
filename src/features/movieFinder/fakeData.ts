import { TFullCard, TSmallCard } from "./movieFinderTypes";

// export const filmDataShort: TMovieShort = {
// 	filmId: 263531,
// 	nameRu: 'FakeNameRu',
// 	nameEn: 'FakeNameEng',
// 	type: 'FILM',
// 	year: '2000',
// 	description: 'FakeDescription',
// 	filmLength: 100,
// 	countries: [{ country: 'FakeCountry' }],
// 	genres: [{ genre: 'FakeGenre' }],
// 	rating: '85%',
// 	ratingVoteCount: 1000,
// 	posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg',
// 	posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg',
// }

// export const fakeSmallCard: TSmallCard = {
// 	filmId: 263531,
// 	nameRu: 'FakeNameRu',
// 	nameEn: 'FakeNameEng',
// 	year: 2000,
// 	filmLength: 100,
// 	countries: [{ country: 'FakeCountry' }],
// 	genres: [{ genre: 'FakeGenre' }],
// 	rating: 7.9,
// 	ratingVoteCount: 1000,
// 	posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg',
// 	posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg',
// }

// export const fakeSmallCard: TSmallCard = {
// 	"id": 395787,
// 	"nameRu": "Семь жизней",
// 	"nameEn": "Seven Pounds",
// 	"year": "2008",
// 	"filmLength": "01:58",
// 	"countries": [
// 		{
// 			"country": "США"
// 		}
// 	],
// 	"genres": [
// 		{
// 			"genre": "драма"
// 		},
// 		{
// 			"genre": "мелодрама"
// 		}
// 	],
// 	"rating": "8.2",
// 	"ratingVoteCount": 344640,
// 	"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/395787.jpg",
// 	"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/395787.jpg",
// 	"ratingChange": null
// }

export const fakeFullCard: TFullCard = {
	"kinopoiskId": 555,
	"imdbId": "tt0118715",
	"nameRu": "Большой Лебовски",
	"nameEn": null,
	"nameOriginal": "The Big Lebowski",
	"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/555.jpg",
	"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/555.jpg",
	"coverUrl": "https://avatars.mds.yandex.net/get-ott/239697/2a000001612cac1f659b8bf59d99a62d073c/orig",
	"logoUrl": null,
	"reviewsCount": 142,
	"ratingGoodReview": 93.3,
	"ratingGoodReviewVoteCount": 128,
	"ratingKinopoisk": 7.8,
	"ratingKinopoiskVoteCount": 242932,
	"ratingImdb": 8.1,
	"ratingImdbVoteCount": 792300,
	"ratingFilmCritics": 7.5,
	"ratingFilmCriticsVoteCount": 109,
	"ratingAwait": null,
	"ratingAwaitCount": 0,
	"ratingRfCritics": null,
	"ratingRfCriticsVoteCount": 2,
	"webUrl": "https://www.kinopoisk.ru/film/555/",
	"year": 1998,
	"filmLength": 117,
	"slogan": "It takes guys as simple as the Dude and Walter to make a story this complicated... and they'd really rather be bowling",
	"description": "Лос-Анджелес, 1991 год, война в Персидском заливе. Главный герой по прозвищу Чувак считает себя совершенно счастливым человеком. Его жизнь составляют игра в боулинг и выпивка. Но внезапно его счастье нарушается, гангстеры по ошибке принимают его за миллионера-однофамильца, требуют деньги, о которых он ничего не подозревает, и, ко всему прочему, похищают жену миллионера, будучи уверенными, что «муж» выплатит за нее любую сумму.",
	"shortDescription": "Тихого пофигиста по ошибке принимают за богача. Криминальная комедия братьев Коэн, которая разошлась на цитаты",
	"editorAnnotation": null,
	"isTicketsAvailable": false,
	"productionStatus": null,
	"type": "FILM",
	"ratingMpaa": "r",
	"ratingAgeLimits": "age18",
	"countries": [
		{
			"country": "США"
		},
		{
			"country": "Великобритания"
		}
	],
	"genres": [
		{
			"genre": "криминал"
		},
		{
			"genre": "комедия"
		}
	],
	"startYear": null,
	"endYear": null,
	"serial": false,
	"shortFilm": false,
	"completed": false,
	"hasImax": false,
	"has3D": false,
	"lastSync": "2022-06-05T12:58:15.228012"
}

export const fakeResponseByKeyword = {
  "total": 76,
  "totalPages": 4,
  "items": [
    {
      "kinopoiskId": 278522,
      "imdbId": "tt0903624",
      "nameRu": "Хоббит: Нежданное путешествие",
      "nameEn": null,
      "nameOriginal": "The Hobbit: An Unexpected Journey",
      "countries": [
        {
          "country": "США"
        },
        {
          "country": "Новая Зеландия"
        }
      ],
      "genres": [
        {
          "genre": "приключения"
        },
        {
          "genre": "боевик"
        },
        {
          "genre": "фэнтези"
        }
      ],
      "ratingKinopoisk": 8.1,
      "ratingImdb": 7.8,
      "year": 2012,
      "type": "FILM",
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/278522.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/278522.jpg"
    },
  ]
};

export const TOP2 = {
  "pagesCount": 13,
  "films": [
    {
      "filmId": 395787,
      "nameRu": "Семь жизней",
      "nameEn": "Seven Pounds",
      "year": "2008",
      "filmLength": "01:58",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "мелодрама"
        }
      ],
      "rating": "8.2",
      "ratingVoteCount": 351371,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/395787.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/395787.jpg",
      "ratingChange": null
    },
    {
      "filmId": 458,
      "nameRu": "Корпорация монстров",
      "nameEn": "Monsters, Inc.",
      "year": "2001",
      "filmLength": "01:32",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "приключения"
        },
        {
          "genre": "фэнтези"
        },
        {
          "genre": "комедия"
        },
        {
          "genre": "мультфильм"
        },
        {
          "genre": "семейный"
        }
      ],
      "rating": "8.1",
      "ratingVoteCount": 409339,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/458.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/458.jpg",
      "ratingChange": null
    },
    {
      "filmId": 714248,
      "nameRu": "Песнь моря",
      "nameEn": "Song of the Sea",
      "year": "2014",
      "filmLength": "01:33",
      "countries": [
        {
          "country": "Франция"
        },
        {
          "country": "Дания"
        },
        {
          "country": "Ирландия"
        },
        {
          "country": "Бельгия"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "приключения"
        },
        {
          "genre": "фэнтези"
        },
        {
          "genre": "мультфильм"
        },
        {
          "genre": "семейный"
        }
      ],
      "rating": "8.1",
      "ratingVoteCount": 81444,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/714248.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/714248.jpg",
      "ratingChange": null
    },
    {
      "filmId": 530,
      "nameRu": "Игры разума",
      "nameEn": "A Beautiful Mind",
      "year": "2001",
      "filmLength": "02:15",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "мелодрама"
        },
        {
          "genre": "биография"
        }
      ],
      "rating": "8.5",
      "ratingVoteCount": 448759,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/530.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/530.jpg",
      "ratingChange": null
    },
    {
      "filmId": 327,
      "nameRu": "Крестный отец 2",
      "nameEn": "The Godfather: Part II",
      "year": "1974",
      "filmLength": "03:22",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "криминал"
        }
      ],
      "rating": "8.5",
      "ratingVoteCount": 182923,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/327.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/327.jpg",
      "ratingChange": null
    },
    {
      "filmId": 399,
      "nameRu": "Храброе сердце",
      "nameEn": "Braveheart",
      "year": "1995",
      "filmLength": "02:58",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "биография"
        },
        {
          "genre": "военный"
        },
        {
          "genre": "история"
        }
      ],
      "rating": "8.3",
      "ratingVoteCount": 253676,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/399.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/399.jpg",
      "ratingChange": null
    },
    {
      "filmId": 104938,
      "nameRu": "В погоне за счастьем",
      "nameEn": "The Pursuit of Happyness",
      "year": "2006",
      "filmLength": "01:57",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "биография"
        }
      ],
      "rating": "8.3",
      "ratingVoteCount": 313870,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/104938.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/104938.jpg",
      "ratingChange": null
    },
    {
      "filmId": 456,
      "nameRu": "Унесённые ветром",
      "nameEn": "Gone with the Wind",
      "year": "1939",
      "filmLength": "03:42",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "мелодрама"
        },
        {
          "genre": "военный"
        },
        {
          "genre": "история"
        }
      ],
      "rating": "8.4",
      "ratingVoteCount": 172328,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/456.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/456.jpg",
      "ratingChange": null
    },
    {
      "filmId": 77269,
      "nameRu": "Шерлок Холмс и доктор Ватсон: Знакомство",
      "nameEn": null,
      "year": "1979",
      "filmLength": "01:08",
      "countries": [
        {
          "country": "СССР"
        }
      ],
      "genres": [
        {
          "genre": "криминал"
        },
        {
          "genre": "детектив"
        }
      ],
      "rating": "8.6",
      "ratingVoteCount": 144506,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/77269.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/77269.jpg",
      "ratingChange": null
    },
    {
      "filmId": 450213,
      "nameRu": "Невидимая сторона",
      "nameEn": "The Blind Side",
      "year": "2009",
      "filmLength": "02:09",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "биография"
        },
        {
          "genre": "спорт"
        }
      ],
      "rating": "8.2",
      "ratingVoteCount": 231733,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/450213.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/450213.jpg",
      "ratingChange": null
    },
    {
      "filmId": 280172,
      "nameRu": "Как приручить дракона",
      "nameEn": "How to Train Your Dragon",
      "year": "2010",
      "filmLength": "01:38",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "приключения"
        },
        {
          "genre": "фэнтези"
        },
        {
          "genre": "комедия"
        },
        {
          "genre": "мультфильм"
        },
        {
          "genre": "семейный"
        }
      ],
      "rating": "8.2",
      "ratingVoteCount": 492918,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/280172.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/280172.jpg",
      "ratingChange": null
    },
    {
      "filmId": 7103,
      "nameRu": "Назад в будущее 3",
      "nameEn": "Back to the Future Part III",
      "year": "1990",
      "filmLength": "01:58",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "фантастика"
        },
        {
          "genre": "приключения"
        },
        {
          "genre": "вестерн"
        },
        {
          "genre": "комедия"
        }
      ],
      "rating": "8.2",
      "ratingVoteCount": 310734,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/7103.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/7103.jpg",
      "ratingChange": null
    },
    {
      "filmId": 42172,
      "nameRu": "Тайна третьей планеты",
      "nameEn": null,
      "year": "1981",
      "filmLength": "00:50",
      "countries": [
        {
          "country": "СССР"
        }
      ],
      "genres": [
        {
          "genre": "фантастика"
        },
        {
          "genre": "приключения"
        },
        {
          "genre": "мультфильм"
        },
        {
          "genre": "семейный"
        }
      ],
      "rating": "8.1",
      "ratingVoteCount": 119051,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/42172.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/42172.jpg",
      "ratingChange": null
    },
    {
      "filmId": 9691,
      "nameRu": "Бесславные ублюдки",
      "nameEn": "Inglourious Basterds",
      "year": "2009",
      "filmLength": "02:33",
      "countries": [
        {
          "country": "США"
        },
        {
          "country": "Германия"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "боевик"
        },
        {
          "genre": "комедия"
        },
        {
          "genre": "военный"
        }
      ],
      "rating": "7.9",
      "ratingVoteCount": 424593,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/9691.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/9691.jpg",
      "ratingChange": null
    },
    {
      "filmId": 5277,
      "nameRu": "Мулан",
      "nameEn": "Mulan",
      "year": "1998",
      "filmLength": "01:24",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "приключения"
        },
        {
          "genre": "фэнтези"
        },
        {
          "genre": "комедия"
        },
        {
          "genre": "военный"
        },
        {
          "genre": "мультфильм"
        },
        {
          "genre": "семейный"
        },
        {
          "genre": "мюзикл"
        }
      ],
      "rating": "8.1",
      "ratingVoteCount": 242690,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5277.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5277.jpg",
      "ratingChange": null
    },
    {
      "filmId": 278522,
      "nameRu": "Хоббит: Нежданное путешествие",
      "nameEn": "The Hobbit: An Unexpected Journey",
      "year": "2012",
      "filmLength": "02:49",
      "countries": [
        {
          "country": "США"
        },
        {
          "country": "Новая Зеландия"
        }
      ],
      "genres": [
        {
          "genre": "приключения"
        },
        {
          "genre": "боевик"
        },
        {
          "genre": "фэнтези"
        }
      ],
      "rating": "8.1",
      "ratingVoteCount": 455782,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/278522.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/278522.jpg",
      "ratingChange": null
    },
    {
      "filmId": 5273,
      "nameRu": "Шрэк 2",
      "nameEn": "Shrek 2",
      "year": "2004",
      "filmLength": "01:33",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "мелодрама"
        },
        {
          "genre": "приключения"
        },
        {
          "genre": "фэнтези"
        },
        {
          "genre": "комедия"
        },
        {
          "genre": "мультфильм"
        },
        {
          "genre": "семейный"
        }
      ],
      "rating": "7.7",
      "ratingVoteCount": 257786,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5273.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5273.jpg",
      "ratingChange": null
    },
    {
      "filmId": 441,
      "nameRu": "Принцесса Мононоке",
      "nameEn": "Mononoke-hime",
      "year": "1997",
      "filmLength": "02:14",
      "countries": [
        {
          "country": "Япония"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "приключения"
        },
        {
          "genre": "фэнтези"
        },
        {
          "genre": "мультфильм"
        },
        {
          "genre": "аниме"
        }
      ],
      "rating": "8.2",
      "ratingVoteCount": 137308,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/441.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/441.jpg",
      "ratingChange": null
    },
    {
      "filmId": 102124,
      "nameRu": "Пираты Карибского моря: На краю света",
      "nameEn": "Pirates of the Caribbean: At World's End",
      "year": "2007",
      "filmLength": "02:49",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "приключения"
        },
        {
          "genre": "боевик"
        },
        {
          "genre": "фэнтези"
        }
      ],
      "rating": "8.0",
      "ratingVoteCount": 440467,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/102124.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/102124.jpg",
      "ratingChange": null
    },
    {
      "filmId": 470191,
      "nameRu": "Невероятный мир глазами Энцо",
      "nameEn": "The Art of Racing in the Rain",
      "year": "2019",
      "filmLength": "01:49",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "мелодрама"
        },
        {
          "genre": "комедия"
        },
        {
          "genre": "семейный"
        },
        {
          "genre": "спорт"
        }
      ],
      "rating": "8.2",
      "ratingVoteCount": 94545,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/470191.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/470191.jpg",
      "ratingChange": null
    }
  ]
};