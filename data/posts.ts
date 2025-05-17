export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    picture: string;
  };
  tags: string[];
}

export const posts: Post[] = [
  {
    id: 'viagem-serra-catarinense',
    title: 'Aventura na Serra Catarinense',
    date: '2025-05-15',
    excerpt: 'Uma jornada inesquecível pelas paisagens deslumbrantes da Serra Catarinense, com direito a campos de altitude, araucárias e muito frio!',
    content: `
      <p>A Serra Catarinense é um dos destinos mais impressionantes do sul do Brasil. Com suas paisagens de tirar o fôlego, campos de altitude, araucárias centenárias e temperaturas que podem chegar a negativas durante o inverno, a região é um verdadeiro paraíso para os amantes da natureza e da fotografia.</p>
      
      <p>Nossa viagem começou em Urubici, pequena cidade que serve como porta de entrada para as maravilhas da serra. Logo no primeiro dia, visitamos o Morro da Igreja, ponto mais alto do sul do Brasil com seus 1.822 metros de altitude. De lá, é possível avistar a famosa Pedra Furada, uma formação rochosa impressionante esculpida pela natureza.</p>
      
      <p>Nos dias seguintes, exploramos a região de São Joaquim, conhecida como a cidade mais fria do Brasil. As vinícolas de altitude são uma atração à parte, produzindo vinhos de excelente qualidade graças ao clima único da região.</p>
      
      <p>Um dos momentos mais especiais foi acordar cedo para ver o fenômeno da "inversão térmica", quando as nuvens ficam abaixo do nível onde estamos, criando um verdadeiro "mar de nuvens" que se estende até onde a vista alcança.</p>
      
      <p>Para os aventureiros, a região oferece trilhas incríveis, como a do Cânion das Laranjeiras e a da Cascata do Avencal. Já para quem busca um pouco mais de conforto, as pousadas da região oferecem experiências aconchegantes, com lareiras, vinhos locais e a tradicional gastronomia serrana.</p>
      
      <p>A Serra Catarinense é, sem dúvida, um destino que merece estar no roteiro de qualquer viajante que aprecie a natureza em seu estado mais puro e majestoso.</p>
    `,
    coverImage: '/images/serra-catarinense.jpg',
    author: {
      name: 'Estradeirando',
      picture: '/images/author.jpg',
    },
    tags: ['Santa Catarina', 'Montanhas', 'Natureza', 'Frio', 'Vinícolas']
  },
  {
    id: 'praias-paradisiacas-nordeste',
    title: 'As Praias Paradisíacas do Nordeste Brasileiro',
    date: '2025-04-20',
    excerpt: 'Um roteiro pelas mais belas praias do Nordeste, com águas cristalinas, coqueirais e pores do sol inesquecíveis.',
    content: `
      <p>O Nordeste brasileiro é conhecido mundialmente por suas praias paradisíacas, e não é para menos. Com mais de 3.000 km de costa, a região oferece uma diversidade impressionante de paisagens litorâneas, desde praias urbanas agitadas até recantos quase intocados.</p>
      
      <p>Nossa jornada começou por Maragogi, em Alagoas, conhecida como o "Caribe Brasileiro" devido às suas águas cristalinas de tom turquesa. As piscinas naturais formadas nos recifes de corais durante a maré baixa são um espetáculo à parte, permitindo nadar entre peixes coloridos em um verdadeiro aquário natural.</p>
      
      <p>Seguimos para a Praia do Patacho, um paraíso ainda pouco explorado pelo turismo de massa. Com sua extensa faixa de areia branca, coqueirais e águas calmas, é o lugar perfeito para quem busca tranquilidade e contato com a natureza.</p>
      
      <p>Já em Pernambuco, Porto de Galinhas nos encantou com suas famosas piscinas naturais e a charmosa vila de pescadores, que hoje abriga restaurantes, pousadas e lojas de artesanato. Um passeio de jangada pelos recifes é programa obrigatório!</p>
      
      <p>Na Bahia, a Península de Maraú nos surpreendeu com praias desertas, lagoas de águas cristalinas e uma natureza exuberante. Barra Grande, com seu clima descontraído e pores do sol inesquecíveis, conquistou nossos corações.</p>
      
      <p>Finalizamos nossa viagem em Jericoacoara, no Ceará, um antigo vilarejo de pescadores transformado em um dos destinos mais desejados do Brasil. Suas dunas móveis, lagoas de águas doces e a famosa Pedra Furada compõem cenários de tirar o fôlego.</p>
      
      <p>O Nordeste brasileiro é, sem dúvida, um destino que combina belezas naturais impressionantes com a calorosa hospitalidade de seu povo, criando experiências inesquecíveis para qualquer viajante.</p>
    `,
    coverImage: '/images/praias-nordeste.jpg',
    author: {
      name: 'Estradeirando',
      picture: '/images/author.jpg',
    },
    tags: ['Nordeste', 'Praias', 'Mar', 'Verão', 'Relaxamento']
  },
  {
    id: 'pantanal-safari-brasileiro',
    title: 'Pantanal: O Safari Brasileiro',
    date: '2025-03-10',
    excerpt: 'Uma imersão na maior planície alagável do mundo, lar de uma biodiversidade impressionante e cenário para encontros inesquecíveis com a fauna brasileira.',
    content: `
      <p>O Pantanal é considerado a maior área úmida continental do planeta e abriga uma das maiores concentrações de vida selvagem das Américas. Nossa expedição por esse santuário ecológico nos proporcionou encontros memoráveis com a fauna brasileira em seu habitat natural.</p>
      
      <p>Diferente da Amazônia, onde a densa vegetação dificulta a observação de animais, o Pantanal, com suas vastas planícies e vegetação mais aberta, oferece condições ideais para o avistamento de espécies. E não demorou muito para termos nosso primeiro encontro com uma onça-pintada, o maior felino das Américas, descansando tranquilamente à beira de um rio.</p>
      
      <p>Os safáris fotográficos, realizados em veículos adaptados, barcos ou mesmo a cavalo, nos permitiram registrar uma diversidade impressionante de aves, como tuiuiús, garças, araras-azuis e tucanos. Os jacarés, presentes em grande número nos rios e lagoas, também foram protagonistas de muitas de nossas fotos.</p>
      
      <p>Uma experiência marcante foi a pescaria de piranhas, seguida de um almoço onde pudemos degustar esse peixe típico da região, preparado na brasa com temperos locais. A gastronomia pantaneira, aliás, é um capítulo à parte, com pratos como o arroz carreteiro, a carne de sol e o tradicional churrasco pantaneiro.</p>
      
      <p>As pousadas e lodges da região, muitas delas antigas fazendas adaptadas para o ecoturismo, oferecem uma experiência autêntica, com atividades como cavalgadas, focagem noturna de jacarés e trilhas interpretativas pela mata.</p>
      
      <p>O Pantanal nos mostrou que o Brasil possui um "safari" tão impressionante quanto os africanos, com o diferencial de uma biodiversidade única e a oportunidade de conhecer um ecossistema de importância global para a conservação da natureza.</p>
    `,
    coverImage: '/images/pantanal.jpg',
    author: {
      name: 'Estradeirando',
      picture: '/images/author.jpg',
    },
    tags: ['Pantanal', 'Fauna', 'Natureza', 'Safari', 'Fotografia']
  }
];

export function getPostById(id: string): Post | undefined {
  return posts.find(post => post.id === id);
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByTag(tag: string): Post[] {
  return posts
    .filter(post => post.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
