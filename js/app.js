/* ================================================================
   js/app.js — YS Books
   Lógica completa: datos, carrito, wishlist, modales, paneles,
   búsqueda, filtros, notificaciones, mensajes y configuración.
================================================================ */

// ================================================================
// DATA
// ================================================================
const BOOKS = [
  {
    "id": 1,
    "title": "Roba como un artista: las 10 cosas que nadie te ha dicho acerca de ser creativo",
    "author": "Austin Kleon",
    "price": 72000,
    "rating": 4.2,
    "reads": "2.3K",
    "isbn": "97800000000001",
    "category": "arte",
    "badge": "especial",
    "discount": 20,
    "desc": "Roba como un artista: las 10 cosas que nadie te ha dicho acerca de ser creativo pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/1200x/c1/60/b7/c160b7b44b5d8a2be7ee355467a08734.jpg"
  },
  {
    "id": 2,
    "title": "Aprende a promocionar tu trabajo: 10 recursos para artistas, diseñadores y creativos",
    "author": "Austin Kleon",
    "price": 78571,
    "rating": 4.4,
    "reads": "3.6K",
    "isbn": "97800000000002",
    "category": "arte",
    "badge": "popular",
    "discount": 0,
    "desc": "Aprende a promocionar tu trabajo: 10 recursos para artistas, diseñadores y creativos pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/6b/79/24/6b79245833fee4fdba37508005650c7b.jpg"
  },
  {
    "id": 3,
    "title": "Roba a un artista: El diario",
    "author": "Austin Kleon",
    "price": 82143,
    "rating": 4.5,
    "reads": "4.9K",
    "isbn": "97800000000003",
    "category": "arte",
    "badge": null,
    "discount": 0,
    "desc": "Roba a un artista: El diario pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/c0/7c/a0/c07ca0e4d1e7513b28349d677317e847.jpg"
  },
  {
    "id": 4,
    "title": "Newspaper Blackout",
    "author": "Austin Kleon",
    "price": 150148,
    "rating": 4.7,
    "reads": "5.2K",
    "isbn": "97800000000004",
    "category": "arte",
    "badge": null,
    "discount": 0,
    "desc": "Newspaper Blackout pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/22/e1/8d/22e18da05e2ce520a09aa8b17ac8c518.jpg"
  },
  {
    "id": 5,
    "title": "Sigue avanzando 10 formas para mantenerse creativo en buenos y malos momentos",
    "author": "Austin Kleon",
    "price": 65477,
    "rating": 4.1,
    "reads": "6.5K",
    "isbn": "97800000000005",
    "category": "arte",
    "badge": null,
    "discount": 15,
    "desc": "Sigue avanzando 10 formas para mantenerse creativo en buenos y malos momentos pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/1200x/e1/2d/2b/e12d2bd52e239d721cb61fe537761b12.jpg"
  },
  {
    "id": 6,
    "title": "El sutil arte de que (casi todo) te importe una mierda",
    "author": "Mark Manson",
    "price": 71249,
    "rating": 4.2,
    "reads": "7.8K",
    "isbn": "97800000000006",
    "category": "psicologia",
    "badge": "especial",
    "discount": 20,
    "desc": "El sutil arte de que (casi todo) te importe una mierda pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/ec/59/4d/ec594de136b40ebdb87ca05ce4e6eb33.jpg"
  },
  {
    "id": 7,
    "title": "Todo está j*dido",
    "author": "Mark Manson",
    "price": 85499,
    "rating": 4.4,
    "reads": "8.1K",
    "isbn": "97800000000007",
    "category": "psicologia",
    "badge": "popular",
    "discount": 0,
    "desc": "Todo está j*dido pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/f5/df/a9/f5dfa98441f5d700e66c664bd58372cf.jpg"
  },
  {
    "id": 8,
    "title": "El Amor No Es Suficiente",
    "author": "Mark Manson",
    "price": 60638,
    "rating": 4.5,
    "reads": "9.4K",
    "isbn": "97800000000008",
    "category": "psicologia",
    "badge": null,
    "discount": 0,
    "desc": "El Amor No Es Suficiente pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/d1/66/a3/d166a32eff44f4bd1a21aff3ca8db63c.jpg"
  },
  {
    "id": 9,
    "title": "will",
    "author": "Mark Manson",
    "price": 49610,
    "rating": 4.7,
    "reads": "1.7K",
    "isbn": "97800000000009",
    "category": "psicologia",
    "badge": null,
    "discount": 0,
    "desc": "will pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/0d/46/2e/0d462e5899f7122e86104e80b3fb419b.jpg"
  },
  {
    "id": 10,
    "title": "models attract women through honesty",
    "author": "Mark Manson",
    "price": 71490,
    "rating": 4.1,
    "reads": "2.0K",
    "isbn": "97800000000010",
    "category": "psicologia",
    "badge": null,
    "discount": 15,
    "desc": "models attract women through honesty pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/77/4f/47/774f47497b0b35f20065326cac457df3.jpg"
  },
  {
    "id": 11,
    "title": "Asesinato en el Orient Express",
    "author": "Agatha Christie",
    "price": 44955,
    "rating": 4.2,
    "reads": "3.3K",
    "isbn": "97800000000011",
    "category": "misterio",
    "badge": "especial",
    "discount": 20,
    "desc": "Asesinato en el Orient Express pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/bd/3a/bc/bd3abcc90208aec1ba49ddba6fb57dc5.jpg"
  },
  {
    "id": 12,
    "title": "La casa torcida",
    "author": "Agatha Christie",
    "price": 83986,
    "rating": 4.4,
    "reads": "4.6K",
    "isbn": "97800000000012",
    "category": "misterio",
    "badge": "popular",
    "discount": 0,
    "desc": "La casa torcida pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/da/df/72/dadf7273c8aab7a2df10c91b8d95a690.jpg"
  },
  {
    "id": 13,
    "title": "Muerte en el Nilo",
    "author": "Agatha Christie",
    "price": 43724,
    "rating": 4.5,
    "reads": "5.9K",
    "isbn": "97800000000013",
    "category": "misterio",
    "badge": null,
    "discount": 0,
    "desc": "Muerte en el Nilo pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/6f/01/72/6f017252aeba67683f2e3688ca305428.jpg"
  },
  {
    "id": 14,
    "title": "El asesinato de Roger Ackroyd",
    "author": "Agatha Christie",
    "price": 54723,
    "rating": 4.7,
    "reads": "6.2K",
    "isbn": "97800000000014",
    "category": "misterio",
    "badge": null,
    "discount": 0,
    "desc": "El asesinato de Roger Ackroyd pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/e3/f8/73/e3f8736044ee8c995354ca6f093f821b.jpg"
  },
  {
    "id": 15,
    "title": "Y no quedó ninguno",
    "author": "Agatha Christie",
    "price": 27000,
    "rating": 4.1,
    "reads": "7.5K",
    "isbn": "97800000000015",
    "category": "misterio",
    "badge": null,
    "discount": 15,
    "desc": "Y no quedó ninguno pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/cf/69/47/cf694752307ad7bd026abd7221caf6cd.jpg"
  },
  {
    "id": 16,
    "title": "El poder de la mente subconsciente",
    "author": "Joseph Murphy",
    "price": 38292,
    "rating": 4.2,
    "reads": "8.8K",
    "isbn": "97800000000016",
    "category": "espiritualidad",
    "badge": "especial",
    "discount": 20,
    "desc": "El poder de la mente subconsciente pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/8a/e0/2c/8ae02c0b0283b732117a8ac8236a38c5.jpg"
  },
  {
    "id": 17,
    "title": "La magia de la fe",
    "author": "Joseph Murphy",
    "price": 187792,
    "rating": 4.4,
    "reads": "9.1K",
    "isbn": "97800000000017",
    "category": "espiritualidad",
    "badge": "popular",
    "discount": 0,
    "desc": "La magia de la fe pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/1200x/52/c3/61/52c36157950d5775e4425c1212c2a4e3.jpg"
  },
  {
    "id": 18,
    "title": "joseph murphy how to use your healing power",
    "author": "Joseph Murphy",
    "price": 120708,
    "rating": 4.5,
    "reads": "1.4K",
    "isbn": "97800000000018",
    "category": "espiritualidad",
    "badge": null,
    "discount": 0,
    "desc": "joseph murphy how to use your healing power pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/aa/37/2b/aa372b0c2b6dfc324f5f50ac4f309179.jpg"
  },
  {
    "id": 19,
    "title": "joseph murphy how to attract money",
    "author": "Joseph Murphy",
    "price": 66181,
    "rating": 4.7,
    "reads": "2.7K",
    "isbn": "97800000000019",
    "category": "espiritualidad",
    "badge": null,
    "discount": 0,
    "desc": "joseph murphy how to attract money pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/e8/ba/e0/e8bae0461fb59630cf48cf7a7fbd5c0e.jpg"
  },
  {
    "id": 20,
    "title": "telepsychics",
    "author": "Joseph Murphy",
    "price": 78920,
    "rating": 4.1,
    "reads": "3.0K",
    "isbn": "97800000000020",
    "category": "espiritualidad",
    "badge": null,
    "discount": 15,
    "desc": "telepsychics pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/fd/8a/2a/fd8a2acb1673c68d7594efd1b6f6209a.jpg"
  },
  {
    "id": 21,
    "title": "El alquimista",
    "author": "Paulo Coelho",
    "price": 41400,
    "rating": 4.2,
    "reads": "4.3K",
    "isbn": "97800000000021",
    "category": "novela",
    "badge": "especial",
    "discount": 20,
    "desc": "El alquimista pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/ee/fd/ee/eefdeefe02a77de2b2d10cf6e05d535a.jpg"
  },
  {
    "id": 22,
    "title": "Once minutos",
    "author": "Paulo Coelho",
    "price": 72292,
    "rating": 4.4,
    "reads": "5.6K",
    "isbn": "97800000000022",
    "category": "novela",
    "badge": "popular",
    "discount": 0,
    "desc": "Once minutos pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/1200x/57/2b/3e/572b3e9b6e2493ba0bb4c4251ad6d318.jpg"
  },
  {
    "id": 23,
    "title": "El Peregrino de Compostela",
    "author": "Paulo Coelho",
    "price": 47487,
    "rating": 4.5,
    "reads": "6.9K",
    "isbn": "97800000000023",
    "category": "novela",
    "badge": null,
    "discount": 0,
    "desc": "El Peregrino de Compostela pertenece a la colección seleccionada para esta tienda.",
    "image": "http://i.pinimg.com/736x/ff/a4/83/ffa483a598ec37cfb011728eb278c9e2.jpg"
  },
  {
    "id": 24,
    "title": "Adulterio (novela)",
    "author": "Paulo Coelho",
    "price": 31850,
    "rating": 4.7,
    "reads": "7.2K",
    "isbn": "97800000000024",
    "category": "novela",
    "badge": null,
    "discount": 0,
    "desc": "Adulterio (novela) pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/29/fc/60/29fc60f05b7907232861ca3b82f920b3.jpg"
  },
  {
    "id": 25,
    "title": "Maktub",
    "author": "Paulo Coelho",
    "price": 36099,
    "rating": 4.1,
    "reads": "8.5K",
    "isbn": "97800000000025",
    "category": "novela",
    "badge": null,
    "discount": 15,
    "desc": "Maktub pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/e7/9a/96/e79a969443ea880d514ad0f0c6e85651.jpg"
  },
  {
    "id": 26,
    "title": "Sapiens: De animales a dioses",
    "author": "Yuval Noah Harari",
    "price": 69261,
    "rating": 4.2,
    "reads": "9.8K",
    "isbn": "97800000000026",
    "category": "historia",
    "badge": "especial",
    "discount": 20,
    "desc": "Sapiens: De animales a dioses pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/1200x/ff/44/10/ff4410b8b9e9aed2f59669a5f0648565.jpg"
  },
  {
    "id": 27,
    "title": "Homo deus",
    "author": "Yuval Noah Harari",
    "price": 114222,
    "rating": 4.4,
    "reads": "1.1K",
    "isbn": "97800000000027",
    "category": "historia",
    "badge": "popular",
    "discount": 0,
    "desc": "Homo deus pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/fa/67/3e/fa673e206921da2417bff0fc3569add8.jpg"
  },
  {
    "id": 28,
    "title": "Nexus",
    "author": "Yuval Noah Harari",
    "price": 107259,
    "rating": 4.5,
    "reads": "2.4K",
    "isbn": "97800000000028",
    "category": "historia",
    "badge": null,
    "discount": 0,
    "desc": "Nexus pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/1200x/95/82/61/958261d1e5a63f603f90aecf6bad27fd.jpg"
  },
  {
    "id": 29,
    "title": "21 lecciones para el siglo XXI",
    "author": "Yuval Noah Harari",
    "price": 107571,
    "rating": 4.7,
    "reads": "3.7K",
    "isbn": "97800000000029",
    "category": "historia",
    "badge": null,
    "discount": 0,
    "desc": "21 lecciones para el siglo XXI pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/1200x/ef/05/1f/ef051f734ae35776b7fce4c393d33660.jpg"
  },
  {
    "id": 30,
    "title": "Estudio en escarlata",
    "author": "Arthur Conan Doyle",
    "price": 52249,
    "rating": 4.1,
    "reads": "4.0K",
    "isbn": "97800000000030",
    "category": "detective",
    "badge": null,
    "discount": 15,
    "desc": "Estudio en escarlata pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/bf/5c/82/bf5c823b10d0a4c240b53551ac51accd.jpg"
  },
  {
    "id": 31,
    "title": "El sabueso de los Baskerville",
    "author": "Arthur Conan Doyle",
    "price": 92245,
    "rating": 4.2,
    "reads": "5.3K",
    "isbn": "97800000000031",
    "category": "detective",
    "badge": "especial",
    "discount": 20,
    "desc": "El sabueso de los Baskerville pertenece a la colección seleccionada para esta tienda.",
    "image": "http://i.pinimg.com/736x/d8/68/56/d868569dc5d0e7a269953943a5a3de3e.jpg"
  },
  {
    "id": 32,
    "title": "El signo de los cuatro",
    "author": "Arthur Conan Doyle",
    "price": 79915,
    "rating": 4.4,
    "reads": "6.6K",
    "isbn": "97800000000032",
    "category": "detective",
    "badge": "popular",
    "discount": 0,
    "desc": "El signo de los cuatro pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/e1/4c/3b/e14c3b9ccf4a6f5a83d3fbb53be4de6c.jpg"
  },
  {
    "id": 33,
    "title": "Nunca te pares",
    "author": "Phil Knight",
    "price": 72000,
    "rating": 4.5,
    "reads": "7.9K",
    "isbn": "97800000000033",
    "category": "negocios",
    "badge": null,
    "discount": 0,
    "desc": "Nunca te pares pertenece a la colección seleccionada para esta tienda.",
    "image": "https://i.pinimg.com/736x/54/47/cd/5447cd9f9588fe1bbc9a7bf246c673ae.jpg"
  },
  {
    "id": 34,
    "title": "Shoe Dog: A Memoir by the Creator of Nike (en Inglés)",
    "author": "Phil Knight",
    "price": 67472,
    "rating": 4.7,
    "reads": "8.2K",
    "isbn": "97800000000034",
    "category": "negocios",
    "badge": null,
    "discount": 0,
    "desc": "Shoe Dog: A Memoir by the Creator of Nike (en Inglés) pertenece a la colección seleccionada para esta tienda.",
    "image": "https://images.cdn2.buscalibre.com/fit-in/360x360/b8/7c/b87c096545453f87dd952e54d3f447e1.jpg"
  },
  {
    "id": 35,
    "title": "L'art de la Victoire - Autobiographie du Fondateur de Nike (en Francés)",
    "author": "Phil Knight",
    "price": 54377,
    "rating": 4.1,
    "reads": "9.5K",
    "isbn": "97800000000035",
    "category": "negocios",
    "badge": null,
    "discount": 15,
    "desc": "L'art de la Victoire - Autobiographie du Fondateur de Nike (en Francés) pertenece a la colección seleccionada para esta tienda.",
    "image": "https://images.cdn2.buscalibre.com/fit-in/360x360/1c/62/1c623e1e79ecea0ba730594ff06c13d8.jpg"
  }
];

const AUTHORS = [
  {
    "id": 1,
    "name": "Austin Kleon",
    "role": "Escritor & Autor",
    "books": 5,
    "photo": "https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/q0iskt15tf12mu2n6fiotmp277.jpg",
    "bio": "Creatividad práctica y pensamiento visual."
  },
  {
    "id": 2,
    "name": "Mark Manson",
    "role": "Autor & Blogger",
    "books": 5,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Mark-manson-headshot-2018-1.jpg",
    "bio": "Ideas directas sobre hábitos, límites y vida real."
  },
  {
    "id": 3,
    "name": "Agatha Christie",
    "role": "Escritora de Misterio",
    "books": 5,
    "photo": "https://www.biografiasyvidas.com/biografia/c/fotos/christie.jpg",
    "bio": "Suspenso clásico y tramas inolvidables."
  },
  {
    "id": 4,
    "name": "Joseph Murphy",
    "role": "Autor & Orador",
    "books": 5,
    "photo": "https://m.media-amazon.com/images/I/41VDzk4kdML.jpg",
    "bio": "Mentalidad, enfoque y crecimiento personal."
  },
  {
    "id": 5,
    "name": "Paulo Coelho",
    "role": "Novelista",
    "books": 5,
    "photo": "https://proassetspdlcom.cdnstatics2.com/usuaris/autores_fotos/fotos/1/original/157_1_1200x1200_coelho_FACEBOOK.jpg",
    "bio": "Narrativas espirituales y viajes interiores."
  },
  {
    "id": 6,
    "name": "Yuval Noah Harari",
    "role": "Historiador & Autor",
    "books": 4,
    "photo": "https://imagessl.casadellibro.com/img/autores/w/Harari.webp",
    "bio": "Historia, humanidad y futuro."
  },
  {
    "id": 7,
    "name": "Arthur Conan Doyle",
    "role": "Escritor Clásico",
    "books": 3,
    "photo": "https://m.media-amazon.com/images/I/71gz1arlVdL.jpg",
    "bio": "Detectives, deducción y novelas inmortales."
  },
  {
    "id": 8,
    "name": "Phil Knight",
    "role": "Empresario & Autor",
    "books": 3,
    "photo": "https://imageio.forbes.com/specials-images/imageserve/6488d5874961598251b12f50/0x0.jpg",
    "bio": "Negocios, marca y memoria empresarial."
  }
];

const NOTIFICATIONS = [
  { id:1, icon:"📚", title:"Nuevo libro disponible",   msg:"'The Thursday Murder Club' ya está en nuestro catálogo. ¡No te lo pierdas!", time:"Hace 5 min",  unread:true },
  { id:2, icon:"🏷️", title:"Oferta especial — 40% OFF", msg:"Los libros de ciencia tienen 40% de descuento solo hoy. ¡Aprovecha!",        time:"Hace 1 hora", unread:true },
  { id:3, icon:"🚚", title:"Tu pedido fue enviado",     msg:"El pedido LIB-A3F7B2 ya está en camino. Llegará en 3-5 días hábiles.",        time:"Hace 3 horas", unread:true },
  { id:4, icon:"⭐", title:"Reseña aprobada",           msg:"Tu reseña de 'Sapiens' fue publicada y recibió 12 votos positivos.",          time:"Ayer",        unread:false },
  { id:5, icon:"🎉", title:"¡Bienvenido a YS Books!", msg:"Gracias por unirte. Explora nuestro catálogo y encuentra tu próximo libro.",  time:"Hace 2 días", unread:false },
];

const MESSAGES = [
  { id:1, from:"YS Books Soporte", initials:"LS", subject:"Confirmación de cuenta",           preview:"Tu cuenta ha sido verificada exitosamente. Ya puedes...", time:"10:30", unread:true,  body:"Tu cuenta ha sido verificada exitosamente. Ya puedes acceder a todos los beneficios de ser miembro de YS Books. ¡Bienvenido!" },
  { id:2, from:"Ofertas YS Books", initials:"OL", subject:"Esta semana: hasta 40% OFF",        preview:"Hola! Tenemos ofertas increíbles en libros de ciencia...", time:"Ayer",  unread:false, body:"¡Hola! Tenemos ofertas increíbles en libros de ciencia y arte esta semana. Entra ahora y aprovecha antes de que se acaben." },
  { id:3, from:"Sistema",           initials:"S",  subject:"Tu lista de deseos tiene novedades", preview:"Algunos libros de tu lista de deseos están en oferta...", time:"Mar",  unread:false, body:"Algunos libros de tu lista de deseos están en oferta esta semana. ¡Es el momento perfecto para comprarlos!" },
];

const GRADIENTS = [
  'linear-gradient(135deg,#7c3aed,#2563eb)',
  'linear-gradient(135deg,#db2777,#7c3aed)',
  'linear-gradient(135deg,#059669,#2563eb)',
  'linear-gradient(135deg,#d97706,#dc2626)',
  'linear-gradient(135deg,#0891b2,#7c3aed)',
  'linear-gradient(135deg,#65a30d,#0891b2)',
  'linear-gradient(135deg,#7c3aed,#db2777)',
  'linear-gradient(135deg,#1d4ed8,#059669)',
];
const EMOJIS = ['📚','✍️','🎨','🔬','🏛️','🔍','💡','🌟','🎭','📖','🌍','⚡'];

// ================================================================
// STATE
// ================================================================
let cart           = JSON.parse(localStorage.getItem('lib_cart') || '[]');
let wishlist       = JSON.parse(localStorage.getItem('lib_wish') || '[]');
let settings       = JSON.parse(localStorage.getItem('lib_settings') || '{}');
let activeCategory = null;
let openPanelId    = null;
let openModalId    = null;

// ================================================================
// HELPERS
// ================================================================
const $   = id => document.getElementById(id);
const pf  = n  => '$' + Math.round(n).toLocaleString('es-CO');
const grad = id => GRADIENTS[id % GRADIENTS.length];
const emj  = id => EMOJIS[id % EMOJIS.length];

function coverUrl(isbn, size = 'M') {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
}

function buildCover(book, h = 160) {
  const g = grad(book.id);
  const src = book.image || coverUrl(book.isbn);
  return `
    <img class="cover-real" src="${src}" alt="${book.title}" loading="lazy"
      onerror="this.classList.add('hidden');this.nextElementSibling.classList.remove('hidden');"/>
    <div class="cover-fallback hidden" style="background:${g};">
      <span style="font-size:${Math.round(h * .28)}px;">${emj(book.id)}</span>
      <span class="cover-fallback-title">${book.title}</span>
    </div>`;
}

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
// alias legacy por si queda alguna referencia
function scrollTo(id) { goTo(id); }

let toastTimer;
function showToast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ================================================================
// OVERLAY / PANELS / MODALS
// ================================================================
function openOverlay()  { $('mainOverlay').classList.add('open'); }
function closeOverlay() { $('mainOverlay').classList.remove('open'); }

function closePanel(id) {
  $(id)?.classList.remove('open');
  if (openPanelId === id) openPanelId = null;
  const anyOpen = ['notifPanel', 'mailPanel'].some(p => $(p)?.classList.contains('open'));
  if (!anyOpen) closeOverlay();
}

function openPanel(id) {
  ['notifPanel', 'mailPanel', 'cartDrawer'].forEach(p => {
    if (p !== id) $(p)?.classList.remove('open');
  });
  $(id).classList.add('open');
  openPanelId = id;
  openOverlay();
}

function closeAllPanels() {
  ['notifPanel', 'mailPanel', 'cartDrawer'].forEach(p => $(p)?.classList.remove('open'));
  closeOverlay();
  openPanelId = null;
}

function openModal(id) {
  closeAllPanels();
  $('modalOverlay').classList.add('open');
  $(id).classList.add('open');
  openModalId = id;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (openModalId) $(openModalId)?.classList.remove('open');
  $('modalOverlay').classList.remove('open');
  openModalId = null;
  document.body.style.overflow = '';
}

// ================================================================
// CART
// ================================================================
function saveCart() { localStorage.setItem('lib_cart', JSON.stringify(cart)); }

function addToCart(bookId, e) {
  if (e) e.stopPropagation();
  const book = BOOKS.find(b => b.id === bookId);
  if (!book) return;
  const existing = cart.find(i => i.id === bookId);
  existing ? existing.qty++ : cart.push({ ...book, qty: 1 });
  saveCart(); renderCart(); updateCartCount();
  showToast(`📚 "${book.title}" agregado al carrito`);
  const el = $('cartCount');
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 300);
}

function removeFromCart(bookId) {
  cart = cart.filter(i => i.id !== bookId);
  saveCart(); renderCart(); updateCartCount();
}

function changeQty(bookId, delta) {
  const item = cart.find(i => i.id === bookId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) return removeFromCart(bookId);
  saveCart(); renderCart(); updateCartCount();
}

function updateCartCount() {
  $('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function renderCart() {
  const c = $('cartItems'), t = $('cartTotal');
  if (!cart.length) {
    c.innerHTML = `<div class="cart-empty"><span>📚</span><p>Tu carrito está vacío</p></div>`;
    t.textContent = '$0'; return;
  }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  c.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-cover cover-wrap">
        <img class="cover-real" src="${coverUrl(item.isbn, 'S')}" alt="${item.title}"
          onerror="this.classList.add('hidden');this.nextElementSibling.classList.remove('hidden');"/>
        <div class="cover-fallback hidden" style="background:${grad(item.id)};">
          <span style="font-size:20px;">${emj(item.id)}</span>
        </div>
      </div>
      <div class="ci-info">
        <div class="ci-title">${item.title}</div>
        <div class="ci-author">${item.author}</div>
        <div class="ci-controls">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
        <span class="ci-price">${pf(item.price * item.qty)}</span>
        <button class="ci-remove" onclick="removeFromCart(${item.id})">✕ Quitar</button>
      </div>
    </div>`).join('');
  t.textContent = pf(total);
}

function toggleCart() {
  const open = $('cartDrawer').classList.contains('open');
  if (open) { closeAllPanels(); } else { openPanel('cartDrawer'); }
}

// ================================================================
// WISHLIST
// ================================================================
function saveWishlist() { localStorage.setItem('lib_wish', JSON.stringify(wishlist)); }

function toggleWishlist(bookId, e) {
  if (e) e.stopPropagation();
  const idx = wishlist.indexOf(bookId);
  if (idx === -1) { wishlist.push(bookId); showToast('❤️ Guardado en lista de deseos'); }
  else            { wishlist.splice(idx, 1); showToast('🗑️ Eliminado de lista de deseos'); }
  saveWishlist();
  document.querySelectorAll(`[data-wish="${bookId}"]`).forEach(el => {
    const on = wishlist.includes(bookId);
    el.classList.toggle('wished', on);
    el.textContent = on ? '❤️' : '🤍';
  });
}

// ================================================================
// RENDER BOOK CARD
// ================================================================
function bookCard(book) {
  const badge  = book.badge ? `<div class="book-badge">${book.badge}</div>` : '';
  const wished = wishlist.includes(book.id);
  return `
    <div class="book-card" onclick="openBookModal(${book.id})">
      <div class="book-cover cover-wrap">
        ${buildCover(book, 160)}
        ${badge}
        <button class="wish-btn${wished ? ' wished' : ''}" data-wish="${book.id}"
          onclick="toggleWishlist(${book.id},event)">${wished ? '❤️' : '🤍'}</button>
      </div>
      <div class="book-info">
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
        <div class="book-meta">
          <span class="book-price">${pf(book.price)}</span>
          <span class="book-rating"><span>★</span>${book.rating}</span>
        </div>
      </div>
      <button class="add-to-cart-btn" onclick="addToCart(${book.id},event)">+ Agregar al carrito</button>
    </div>`;
}

// ================================================================
// RENDER SECTIONS
// ================================================================
function renderPrevious() {
  $('previousBooks').innerHTML = BOOKS.slice(0, 7).map(b => bookCard(b)).join('');
}

function renderNewBooks(list) {
  const books = list ?? BOOKS.slice(0, 7);
  const c = $('newBooksGrid');
  if (!books.length) {
    c.innerHTML = `<p style="color:var(--text-muted);grid-column:1/-1;padding:20px 0;">Sin resultados.
      <button onclick="renderNewBooks();setSectionTitle('Nuevos libros')"
        style="color:var(--violet-lt);background:none;border:none;cursor:pointer;font-family:inherit;">
        Ver todos
      </button></p>`;
    return;
  }
  c.innerHTML = books.map(b => bookCard(b)).join('');
}

function renderOffers() {
  const offers = BOOKS.filter(b => b.discount > 0);
  $('offersGrid').innerHTML = offers.map(b => {
    const discounted = Math.round(b.price * (1 - b.discount / 100));
    return `
      <div class="offer-card" onclick="openBookModal(${b.id})">
        <div class="offer-cover cover-wrap">
          ${buildCover(b, 180)}
          <div class="offer-discount">-${b.discount}%</div>
        </div>
        <div class="offer-info">
          <div class="offer-title">${b.title}</div>
          <div class="offer-author">${b.author}</div>
          <div class="offer-prices">
            <span class="offer-new-price">${pf(discounted)}</span>
            <span class="offer-old-price">${pf(b.price)}</span>
          </div>
          <button class="offer-add-btn" onclick="addToCart(${b.id},event)">🛒 Agregar al carrito</button>
        </div>
      </div>`;
  }).join('');
}

function renderAuthorsSection() {
  $('authorsGrid').innerHTML = AUTHORS.slice(0, 6).map(a => authorCard(a, true)).join('');
}

function authorCard(a, mini = false) {
  return `
    <div class="${mini ? 'author-card' : 'all-author-card'}" onclick="openAuthorModal(${a.id})">
      <div class="${mini ? 'author-avatar-wrap' : 'all-author-avatar'}">
        <img src="${a.photo}" alt="${a.name}"
          onerror="this.classList.add('hidden');"
          style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;border-radius:50%;"/>
      </div>
      <div class="author-name-lg">${a.name}</div>
      <div class="author-role">${a.role}</div>
      <div class="author-books-count">${a.books} libros</div>
      ${mini ? `<div class="author-bio">${a.bio.substring(0, 80)}...</div>` : ''}
    </div>`;
}

function renderPopularGrid() {
  $('popularGrid').innerHTML = BOOKS.filter(b => b.badge === 'popular').slice(0, 7).map(b => `
    <div class="pop-card" style="cursor:default;">
      <div class="pop-cover cover-wrap">${buildCover(b, 88)}</div>
      <div class="pop-title">${b.title}</div>
      <div class="pop-rating"><span>★</span>${b.rating}</div>
    </div>`).join('');
}

function renderAuthorsCompact() {
  $('authorsCompact').innerHTML = AUTHORS.slice(0, 6).map(a => `
    <div class="author-mini" style="cursor:default;">
      <div class="author-mini-avatar">
        <img src="${a.photo}" alt="${a.name}"
          onerror="this.classList.add('hidden');"
          style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;border-radius:50%;"/>
      </div>
      <div class="author-mini-name">${a.name.split(' ')[0]}</div>
      <div class="author-mini-books">${a.books} lib.</div>
    </div>`).join('');
}

function renderSpecialList() {
  $('specialList').innerHTML = BOOKS.filter(b => b.badge === 'especial').slice(0, 7).map(b => `
    <div class="special-item" style="cursor:default;">
      <div class="special-cover cover-wrap">${buildCover(b, 52)}</div>
      <div class="special-info">
        <div class="special-title">${b.title}</div>
        <div class="special-author">${b.author}</div>
        <div class="special-price">${pf(b.price)}</div>
      </div>
    </div>`).join('');
}

function setSectionTitle(t) {
  const el = document.querySelector('#catalogo .section-header h2');
  if (el) el.textContent = t;
}

// ================================================================
// FILTER
// ================================================================
function filterByCategory(cat) {
  const same = activeCategory === cat;
  activeCategory = same ? null : cat;
  document.querySelectorAll('.subject-card').forEach(el =>
    el.classList.toggle('active', !same && el.dataset.category === cat)
  );
  if (same) { renderNewBooks(); setSectionTitle('Nuevos libros'); }
  else {
    const r = BOOKS.filter(b => b.category === cat);
    renderNewBooks(r);
    const labels = { arte:'Arte', psicologia:'Psicología', misterio:'Misterio', espiritualidad:'Espiritualidad', novela:'Novela', historia:'Historia', detective:'Detective', negocios:'Negocios' };
    setSectionTitle(`${labels[cat] || cat} (${r.length} libros)`);
  }
  goTo('catalogo');
  $('searchInput').value = '';
}

function openOffers() { goTo('ofertas'); }

// ================================================================
// SEARCH
// ================================================================
$('searchInput').addEventListener('input', function () {
  const q = this.value.toLowerCase().trim();
  if (!q) { renderNewBooks(); setSectionTitle('Nuevos libros'); return; }
  const r = BOOKS.filter(b =>
    b.title.toLowerCase().includes(q) ||
    b.author.toLowerCase().includes(q) ||
    b.category.includes(q)
  );
  renderNewBooks(r);
  setSectionTitle(`Resultados: "${this.value}" (${r.length})`);
  activeCategory = null;
  document.querySelectorAll('.subject-card').forEach(el => el.classList.remove('active'));
  goTo('catalogo');
});

// ================================================================
// BOOK DETAIL MODAL
// ================================================================
function openBookModal(bookId) {
  const book = BOOKS.find(b => b.id === bookId);
  if (!book) return;
  const wished = wishlist.includes(bookId);
  $('bookModalContent').innerHTML = `
    <div class="bm-cover">
      <img src="${coverUrl(book.isbn, 'L')}" alt="${book.title}"
        onerror="this.classList.add('hidden');this.nextElementSibling.classList.remove('hidden');"/>
      <div class="bm-cover-fallback hidden" style="background:${grad(book.id)};">
        <span style="font-size:64px;">${emj(book.id)}</span>
        <span style="color:rgba(255,255,255,.85);font-weight:700;text-align:center;padding:0 16px;font-size:14px;">${book.title}</span>
      </div>
      ${book.badge ? `<div class="bm-badge-pill">${book.badge}</div>` : ''}
    </div>
    <div class="bm-info">
      <div class="bm-cat">${book.category}</div>
      <h2 class="bm-title">${book.title}</h2>
      <div class="bm-author">por <strong>${book.author}</strong></div>
      <div class="bm-rating">
        <span class="bm-stars">${'★'.repeat(Math.floor(book.rating))}${'☆'.repeat(5 - Math.floor(book.rating))}</span>
        <span style="font-size:12px;color:var(--text-muted)">${book.rating} · ${book.reads} lectores</span>
      </div>
      <p class="bm-desc">${book.desc}</p>
      <div class="bm-isbn">ISBN: ${book.isbn}</div>
      <div class="bm-price-row">
        <span class="bm-price">${pf(book.price)}</span>
        <span class="bm-price-usd">≈ USD ${Math.round(book.price / 4200)}</span>
      </div>
      <div class="bm-actions">
        <button class="btn-primary" onclick="addToCart(${book.id},event);closeModal();">🛒 Agregar al carrito</button>
        <button class="btn-wish${wished ? ' wished' : ''}" data-wish="${book.id}" onclick="toggleWishlist(${book.id},event)">
          ${wished ? '❤️ Guardado' : '🤍 Guardar'}
        </button>
      </div>
    </div>`;
  openModal('bookModal');
}

// ================================================================
// ALL BOOKS MODAL
// ================================================================
function openAllBooksModal(filter) {
  const cats = [
    {k:'',l:'Todos'},
    {k:'arte',l:'Arte'},
    {k:'psicologia',l:'Psicología'},
    {k:'misterio',l:'Misterio'},
    {k:'espiritualidad',l:'Espiritualidad'},
    {k:'novela',l:'Novela'},
    {k:'historia',l:'Historia'},
    {k:'detective',l:'Detective'},
    {k:'negocios',l:'Negocios'},
    {k:'especial',l:'⭐ Especiales'},{k:'popular',l:'🔥 Populares'},
  ];
  $('modalFilterChips').innerHTML = cats.map(c =>
    `<button class="chip${(!filter && c.k === '') || c.k === filter ? ' active' : ''}"
      onclick="setModalFilter('${c.k}',this)">${c.l}</button>`
  ).join('');
  const books = filter === 'especial' ? BOOKS.filter(b => b.badge === 'especial')
              : filter === 'popular'  ? BOOKS.filter(b => b.badge === 'popular')
              : filter                ? BOOKS.filter(b => b.category === filter)
              : BOOKS;
  $('allBooksTitle').textContent = `Todos los libros (${books.length})`;
  $('allBooksGrid').innerHTML    = books.map(b => bookCard(b)).join('');
  $('allBooksSearch').value      = '';
  openModal('allBooksModal');
}

function setModalFilter(cat, btn) {
  document.querySelectorAll('#modalFilterChips .chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  const books = cat === 'especial' ? BOOKS.filter(b => b.badge === 'especial')
              : cat === 'popular'  ? BOOKS.filter(b => b.badge === 'popular')
              : cat                ? BOOKS.filter(b => b.category === cat)
              : BOOKS;
  $('allBooksTitle').textContent = `${btn.textContent.replace(/[🔥⭐]/g, '').trim()} (${books.length})`;
  $('allBooksGrid').innerHTML    = books.map(b => bookCard(b)).join('');
}

function filterAllBooks(q) {
  const r = BOOKS.filter(b =>
    b.title.toLowerCase().includes(q.toLowerCase()) ||
    b.author.toLowerCase().includes(q.toLowerCase())
  );
  $('allBooksTitle').textContent = `Resultados (${r.length})`;
  $('allBooksGrid').innerHTML    = r.map(b => bookCard(b)).join('');
  document.querySelectorAll('#modalFilterChips .chip').forEach(c => c.classList.remove('active'));
}

// ================================================================
// ALL AUTHORS MODAL
// ================================================================
function openAllAuthorsModal() {
  $('allAuthorsGrid').innerHTML = AUTHORS.map(a => authorCard(a, false)).join('');
  openModal('allAuthorsModal');
}

// ================================================================
// AUTHOR DETAIL MODAL
// ================================================================
function openAuthorModal(authorId) {
  const a = AUTHORS.find(x => x.id === authorId);
  if (!a) return;
  const authorBooks = BOOKS.filter(b => b.author === a.name);
  $('authorModalContent').innerHTML = `
    <div class="am-wrap">
      <div class="am-avatar">
        <img src="${a.photo}" alt="${a.name}" onerror="this.classList.add('hidden');"/>
      </div>
      <div class="am-info">
        <div class="am-name">${a.name}</div>
        <div class="am-role">${a.role}</div>
        <div style="display:flex;gap:16px;margin-bottom:8px;">
          <span style="font-size:12px;color:var(--violet-lt);font-weight:700;">${a.books} libros publicados</span>
          <span style="font-size:12px;color:var(--text-muted);">• ${authorBooks.length} en catálogo</span>
        </div>
        <p class="am-bio">${a.bio}</p>
        <button class="btn-primary" style="margin-top:4px;"
          onclick="closeModal();filterByCategory('${authorBooks[0]?.category || 'other'}')">
          Ver libros de este autor
        </button>
      </div>
    </div>
    ${authorBooks.length ? `
    <div class="am-books-section">
      <h4>Libros en catálogo (${authorBooks.length})</h4>
      <div class="am-books-row">${authorBooks.map(b => bookCard(b)).join('')}</div>
    </div>` : ''}`;
  openModal('authorModal');
}

// ================================================================
// CHECKOUT
// ================================================================
function openCheckout() {
  if (!cart.length) { showToast('⚠️ Tu carrito está vacío'); return; }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  $('checkoutTotal').textContent = pf(total);
  openModal('checkoutModal');
}

$('confirmOrder').addEventListener('click', () => {
  const num = 'YS-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  NOTIFICATIONS.unshift({
    id: Date.now(), icon: '🎉',
    title: `Pedido ${num} confirmado`,
    msg: 'Tu pedido fue confirmado. ¡Gracias por tu compra!',
    time: 'Ahora mismo', unread: true
  });
  closeModal();
  cart = []; saveCart(); renderCart(); updateCartCount();
  showToast(`✅ ¡Gracias! Tu pedido ${num} está confirmado 🎉`);
});

// ================================================================
// NOTIFICATIONS — STATIC (disabled)
// ================================================================
$('notifBtn').addEventListener('click', () => {
  // desactivado — sección estática
});

function renderNotifications() {
  const unread = NOTIFICATIONS.filter(n => n.unread).length;
  $('notifBadge').textContent = unread;
  $('notifBadge').style.display = unread ? 'flex' : 'none';
  $('notifList').innerHTML = NOTIFICATIONS.map(n => `
    <div class="notif-item${n.unread ? ' unread' : ''}" style="cursor:default;">
      <div class="notif-icon">${n.icon}</div>
      <div class="notif-body">
        <div class="notif-title">${n.title}</div>
        <div class="notif-msg">${n.msg}</div>
        <div class="notif-time">${n.time}</div>
      </div>
    </div>`).join('');
}

function readNotif(id) {}

function markAllRead() {}

// ================================================================
// MESSAGES / MAIL — STATIC (disabled)
// ================================================================
$('mailBtn').addEventListener('click', () => {
  // desactivado — sección estática
});

function renderMail() {
  const unread = MESSAGES.filter(m => m.unread).length;
  $('mailBadge').textContent = unread;
  $('mailBadge').style.display = unread ? 'flex' : 'none';
  $('mailList').innerHTML = MESSAGES.map(m => `
    <div class="mail-item${m.unread ? ' unread' : ''}" style="cursor:default;">
      <div class="mail-avatar">${m.initials}</div>
      <div class="mail-info">
        <div class="mail-from">${m.from}</div>
        <div class="mail-subject">${m.subject}</div>
        <div class="mail-preview">${m.preview}</div>
      </div>
      <div class="mail-time">${m.time}</div>
    </div>`).join('');
}

function openMailDetail(id) {}

function openComposeModal() {}

function sendMessage() {}

// ================================================================
// SETTINGS — STATIC (disabled)
// ================================================================
$('settingsBtn').addEventListener('click', () => {
  // desactivado — sección estática
});

function saveProfile() {}

$('userProfileBtn').addEventListener('click', () => {
  // desactivado — sección estática
});

// ================================================================
// LOGOUT BUTTON (header)
// ================================================================
$('logoutBtn').addEventListener('click', cerrarSesion);

// ================================================================
// CONTACT / HELP
// ================================================================
function openContactModal() { openModal('contactModal'); }
function openHelpModal()    { openModal('helpModal'); }

function sendContact() {
  const name  = $('ctName').value.trim();
  const email = $('ctEmail').value.trim();
  const msg   = $('ctMsg').value.trim();
  if (!name || !email || !msg) { showToast('⚠️ Completa todos los campos'); return; }
  closeModal();
  showToast(`✅ Mensaje enviado. Te responderemos a ${email}`);
  ['ctName','ctEmail','ctMsg'].forEach(id => $(id).value = '');
}

// ================================================================
// NAVIGATION — Sidebar + Header links
// ================================================================
document.querySelectorAll('.nav-icon').forEach(el => {
  el.addEventListener('click', () => {
    const sec = el.dataset.section;
    if (sec) scrollTo(sec);
    document.querySelectorAll('.nav-icon').forEach(n => n.classList.remove('active'));
    el.classList.add('active');
  });
});

document.querySelectorAll('.header-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) scrollTo(href.slice(1));
    document.querySelectorAll('.header-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Intersection Observer para resaltar sección activa
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.header-link').forEach(l =>
        l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id)
      );
      document.querySelectorAll('.nav-icon').forEach(n =>
        n.classList.toggle('active', n.dataset.section === entry.target.id)
      );
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('section[id],footer[id]').forEach(s => io.observe(s));

// Cart button sidebar
$('cartBtn').addEventListener('click', toggleCart);

// Close modal on overlay click
$('modalOverlay').addEventListener('click', closeModal);

// ================================================================
// INIT
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderPrevious();
  renderNewBooks();
  renderOffers();
  renderAuthorsSection();
  renderPopularGrid();
  renderAuthorsCompact();
  renderSpecialList();
  renderCart();
  updateCartCount();

  // Mostrar nombre del usuario en sesión
  const nombre = sessionStorage.getItem('nombreUsuario') || settings.name;
  if (nombre) {
    $('displayName').textContent   = nombre;
    $('displayAvatar').textContent = nombre.charAt(0).toUpperCase();
  }

  // Badges iniciales
  const unreadNotif = NOTIFICATIONS.filter(n => n.unread).length;
  $('notifBadge').textContent = unreadNotif;
  $('mailBadge').textContent  = MESSAGES.filter(m => m.unread).length;
});


// ================================================================
// FINAL OVERRIDE: autores con fotos reales en todos los bloques
// ================================================================
(function () {
  const authorMarkup = (a, mini = false) => `
    <div class="${mini ? 'author-card' : 'all-author-card'}" onclick="openAuthorModal(${a.id})">
      <div class="${mini ? 'author-avatar-wrap' : 'all-author-avatar'}">
        <img src="${a.photo}" alt="${a.name}" loading="lazy"
          onerror="this.classList.add('hidden');"
          style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;border-radius:50%;display:block;"/>
      </div>
      <div class="author-name-lg">${a.name}</div>
      <div class="author-role">${a.role}</div>
      <div class="author-books-count">${a.books} libros</div>
      ${mini ? `<div class="author-bio">${a.bio.substring(0, 80)}...</div>` : ''}
    </div>`;

  function paintMain() {
    const el = document.getElementById('authorsGrid');
    if (el) el.innerHTML = AUTHORS.slice(0, 6).map(a => authorMarkup(a, true)).join('');
  }

  function paintSide() {
    const el = document.getElementById('authorsCompact');
    if (el) el.innerHTML = AUTHORS.slice(0, 6).map(a => `
      <div class="author-mini" style="cursor:default;">
        <div class="author-mini-avatar">
          <img src="${a.photo}" alt="${a.name}" loading="lazy"
            onerror="this.classList.add('hidden');"
            style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;border-radius:50%;display:block;"/>
        </div>
        <div class="author-mini-name">${a.name.split(' ')[0]}</div>
        <div class="author-mini-books">${a.books} lib.</div>
      </div>`).join('');
  }

  function paintAll() {
    const el = document.getElementById('allAuthorsGrid');
    if (el) el.innerHTML = AUTHORS.map(a => authorMarkup(a, false)).join('');
  }

  // Reemplazar la acción del botón "Ver todos" para evitar cualquier render viejo
  window.openAllAuthorsModal = function () {
    paintAll();
    openModal('allAuthorsModal');
  };

  // Mantener consistencia visual al cargar y tras cambios de DOM
  window.renderAuthorsSection = paintMain;
  window.renderAuthorsCompact = paintSide;

  const run = () => {
    paintMain();
    paintSide();
    paintAll();
  };

  document.addEventListener('DOMContentLoaded', () => {
    run();
    setTimeout(run, 50);
    setTimeout(run, 400);
  });

  window.addEventListener('load', () => {
    run();
    setTimeout(run, 300);
  });
})();