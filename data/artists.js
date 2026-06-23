/* ============================================================
   Little Artists — ARTIST CONTENT
   ------------------------------------------------------------
   This is the ONE file a grown-up needs to edit to add or
   change an artist. Copy a { ... } block, paste it, and edit.

   Image fields use a Wikimedia Commons file name (`file`).
   The app turns it into a real picture link automatically.
   If a picture can't load (for example, you're offline), the
   site shows a pretty coloured placeholder instead — nothing
   ever looks broken.

   Fields for each artist:
     id            short nickname used in the web address
     name          full name
     lifespan      e.g. "1853–1890"
     nationality   e.g. "Dutch"
     funTagline    one cheerful sentence for the card
     emoji         a little picture clue
     themeColor    the artist's colour (used all over their page)
     style         their art style, in simple words
     howTheyLearned how they learned to make art
     life          a short, friendly life story (good to read aloud)
     highlights    a few star moments from their life
     whyKnowThem   why kids should get to know them
     famousWorks   their best-known artworks (with a link to learn more)
     funFacts      surprising "Did you know?" tidbits
     activities    a "try it yourself" art project
     portrait      a picture of the artist
     artworks      pictures of their art (with titles + credits)
   ============================================================ */

window.ARTISTS = [
  /* ---------------------------------------------------------- 1 */
  {
    id: "cassatt",
    name: "Mary Cassatt",
    lifespan: "1844–1926",
    nationality: "American (lived in France)",
    funTagline: "She painted cozy, loving moments between mothers and children.",
    emoji: "🤱",
    themeColor: "#d96a93",
    style:
      "Mary was an Impressionist. That means she used soft, quick brushstrokes and lots of light to show everyday moments — like a mom hugging her child or a little girl daydreaming in a big chair.",
    howTheyLearned:
      "Mary started art school in America when she was only 15. But she wanted to learn more, so she sailed all the way to Paris, France, to study the great paintings in person and practice every single day.",
    life:
      "Mary Cassatt grew up in America but fell in love with art and moved to France. There she became friends with famous painters like Edgar Degas, who invited her to show her work with the Impressionists. People told her women couldn't be serious artists — but Mary proved them wrong and became one of the most respected painters of her time.",
    highlights: [
      "She was one of the only American artists — and one of very few women — to join the famous Impressionists in Paris.",
      "Her friend Edgar Degas admired her talent and they helped each other become better artists.",
      "She helped wealthy American friends buy Impressionist paintings, which is why so many hang in U.S. museums today!",
    ],
    whyKnowThem:
      "Mary Cassatt showed the world that women can be brilliant artists. She painted ordinary, tender moments and made them feel important and beautiful.",
    famousWorks: [
      { title: "The Child's Bath", year: "1893", sourceUrl: "https://en.wikipedia.org/wiki/The_Child%27s_Bath" },
      { title: "Little Girl in a Blue Armchair", year: "1878", sourceUrl: "https://en.wikipedia.org/wiki/Little_Girl_in_a_Blue_Armchair" },
      { title: "The Boating Party", year: "1893–94", sourceUrl: "https://en.wikipedia.org/wiki/The_Boating_Party" },
    ],
    funFacts: [
      "Mary loved Japanese art prints and even made her own colorful prints inspired by them.",
      "She never had children of her own, but she's most famous for painting moms and kids!",
    ],
    activities: [
      "Draw someone you love doing an everyday thing — reading, brushing hair, or sharing a hug. Use soft, gentle colors like Mary did.",
    ],
    portrait: {
      file: "Mary Cassatt 1913.jpg",
      alt: "A photograph of the artist Mary Cassatt.",
      credit: "Wikimedia Commons (public domain)",
      sourceUrl: "https://en.wikipedia.org/wiki/Mary_Cassatt",
    },
    artworks: [
      { file: "Mary Cassatt - The Child's Bath - Google Art Project.jpg", title: "The Child's Bath", year: "1893",
        alt: "A woman gently washing a child's feet in a basin of water.",
        credit: "Art Institute of Chicago / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/The_Child%27s_Bath" },
      { file: "Mary Cassatt - The Boating Party - Google Art Project.jpg", title: "The Boating Party", year: "1893–94",
        alt: "A mother and baby in a small boat being rowed by a man in dark clothes.",
        credit: "National Gallery of Art / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/The_Boating_Party" },
      { file: "Cassatt Mary Little Girl in a Blue Armchair 1878.jpg", title: "Little Girl in a Blue Armchair", year: "1878",
        alt: "A young girl slouching comfortably across a big blue armchair, with a little dog nearby.",
        credit: "National Gallery of Art / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/Little_Girl_in_a_Blue_Armchair" },
    ],
  },

  /* ---------------------------------------------------------- 2 */
  {
    id: "morisot",
    name: "Berthe Morisot",
    lifespan: "1841–1895",
    nationality: "French",
    funTagline: "A founding Impressionist who painted sunny gardens and family life.",
    emoji: "🌳",
    themeColor: "#6c8cd5",
    style:
      "Berthe was an Impressionist too. Her brushstrokes look light and feathery — almost like the painting is still moving. She loved painting people outdoors in gardens and parks.",
    howTheyLearned:
      "Berthe and her sister took private art lessons as girls. She practiced by copying paintings in the Louvre museum, and learned a lot from the painter Camille Corot, who taught her to paint outside in nature.",
    life:
      "Berthe Morisot was one of the very first Impressionists — she helped start the whole movement! She showed her paintings in their famous first exhibition in 1874. In a time when women weren't expected to be professional artists, Berthe painted boldly and beautifully, and the other Impressionists respected her enormously.",
    highlights: [
      "She was a founding member of the Impressionists and joined almost every one of their exhibitions.",
      "She often painted her daughter Julie, sister Edma, and scenes from her own home and garden.",
      "Painter Édouard Manet was her good friend, and she married his brother Eugène.",
    ],
    whyKnowThem:
      "Berthe Morisot helped invent a brand-new way of painting. She's proof that girls have always been at the heart of great art.",
    famousWorks: [
      { title: "The Cradle", year: "1872", sourceUrl: "https://en.wikipedia.org/wiki/The_Cradle_(Morisot)" },
      { title: "Summer's Day", year: "1879", sourceUrl: "https://en.wikipedia.org/wiki/Summer%27s_Day_(painting)" },
    ],
    funFacts: [
      "Her painting 'The Cradle' shows her sister watching over a sleeping baby — so peaceful!",
      "Berthe could paint a whole scene in a single afternoon to catch the changing light.",
    ],
    activities: [
      "Go outside and draw a garden, a park, or your backyard. Try quick, light strokes and don't worry about making it perfect — catch the feeling of the sunshine!",
    ],
    portrait: {
      file: "Berthe Morisot.jpg",
      alt: "A portrait of the artist Berthe Morisot.",
      credit: "Wikimedia Commons (public domain)",
      sourceUrl: "https://en.wikipedia.org/wiki/Berthe_Morisot",
    },
    artworks: [
      { file: "Berthe Morisot - The Cradle - Google Art Project.jpg", title: "The Cradle", year: "1872",
        alt: "A mother in dark clothing gazing softly at her baby sleeping under a white draped cradle.",
        credit: "Musée d'Orsay / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/The_Cradle_(Morisot)" },
      { file: "Berthe Morisot 005.jpg", title: "Summer's Day", year: "1879",
        alt: "Two young women in a rowboat on a shimmering lake with ducks.",
        credit: "National Gallery, London / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/Summer%27s_Day_(painting)" },
    ],
  },

  /* ---------------------------------------------------------- 3 */
  {
    id: "frida",
    name: "Frida Kahlo",
    lifespan: "1907–1954",
    nationality: "Mexican",
    funTagline: "Bold, colorful self-portraits bursting with flowers and animals.",
    emoji: "🌺",
    themeColor: "#e63946",
    style:
      "Frida painted with bright, bold colors and lots of detail. Many of her paintings are self-portraits — pictures of herself — surrounded by flowers, jungle leaves, monkeys, and parrots. Her art shows exactly how she felt inside.",
    howTheyLearned:
      "Frida didn't go to art school. When she was a teenager she was badly hurt in a bus accident and had to rest in bed for a long time. Her parents gave her a special easel she could use lying down, and a mirror so she could paint herself. That's how she taught herself to paint!",
    life:
      "Frida Kahlo grew up in Mexico and loved her country's bright folk art, colors, and traditions. Even though she had a lot of pain in her life, she turned her feelings into amazing, powerful paintings. She wore beautiful Mexican dresses and flowers in her hair, and today she is one of the most famous artists in the whole world.",
    highlights: [
      "She taught herself to paint while recovering in bed after an accident.",
      "She filled her paintings with Mexican folk art, animals, and plants she loved.",
      "She was married to another famous Mexican artist, the muralist Diego Rivera.",
    ],
    whyKnowThem:
      "Frida turned hard times into beautiful art, and was proud of who she was. She teaches us to be brave, be ourselves, and never give up.",
    famousWorks: [
      { title: "Self-Portrait with Thorn Necklace and Hummingbird", year: "1940", sourceUrl: "https://en.wikipedia.org/wiki/Self-Portrait_with_Thorn_Necklace_and_Hummingbird" },
      { title: "The Two Fridas", year: "1939", sourceUrl: "https://en.wikipedia.org/wiki/The_Two_Fridas" },
      { title: "Self-Portrait with Monkey", year: "1938", sourceUrl: "https://en.wikipedia.org/wiki/Frida_Kahlo" },
    ],
    funFacts: [
      "Frida kept pet monkeys, parrots, and even a little deer — and painted them into her art!",
      "Her family home in Mexico, painted bright blue, is now a museum called 'La Casa Azul' (The Blue House).",
    ],
    activities: [
      "Paint a self-portrait! Use a mirror, then surround your face with your favorite things — flowers, pets, or colors that show how you feel.",
    ],
    portrait: {
      file: "Frida Kahlo, by Guillermo Kahlo.jpg",
      alt: "A photograph of the artist Frida Kahlo.",
      credit: "Photo by Guillermo Kahlo / Wikimedia Commons (public domain)",
      sourceUrl: "https://en.wikipedia.org/wiki/Frida_Kahlo",
    },
    artworks: [
      { file: "", title: "Self-Portrait with Thorn Necklace and Hummingbird", year: "1940",
        alt: "Frida's painting of herself surrounded by leaves, with a monkey and a black cat behind her.",
        credit: "© Frida Kahlo estate — shown for education. See the museum link to view it.",
        sourceUrl: "https://en.wikipedia.org/wiki/Self-Portrait_with_Thorn_Necklace_and_Hummingbird" },
      { file: "", title: "The Two Fridas", year: "1939",
        alt: "Two seated Fridas side by side, holding hands, in different dresses.",
        credit: "© Frida Kahlo estate — shown for education. See the museum link to view it.",
        sourceUrl: "https://en.wikipedia.org/wiki/The_Two_Fridas" },
    ],
  },

  /* ---------------------------------------------------------- 4 */
  {
    id: "kusama",
    name: "Yayoi Kusama",
    lifespan: "born 1929 (still making art today!)",
    nationality: "Japanese",
    funTagline: "Polka dots, giant pumpkins, and rooms full of sparkling lights!",
    emoji: "🔴",
    themeColor: "#e8413f",
    style:
      "Yayoi covers everything in DOTS! Big dots, little dots, dots in every color. She makes huge polka-dot pumpkins, mirror rooms full of twinkling lights, and paintings packed with patterns. Her art is playful and makes you feel like you've stepped into a whole new world.",
    howTheyLearned:
      "Yayoi started drawing dots and patterns as a young girl in Japan. She studied traditional Japanese painting, then moved all the way to New York City as a young woman to share her bold new ideas with the world.",
    life:
      "Yayoi Kusama has loved dots ever since she was little. She turned them into one of the most joyful kinds of art ever made. Now in her nineties, she STILL paints almost every day! Her 'Infinity Mirror Rooms' have lines of visitors around the world waiting to step inside and feel surrounded by endless sparkly lights.",
    highlights: [
      "She moved from Japan to New York City to follow her dream of being an artist.",
      "She invented amazing 'Infinity Mirror Rooms' that make dots and lights go on forever.",
      "She is one of the most popular living artists in the entire world.",
    ],
    whyKnowThem:
      "Yayoi shows that art can be pure fun and imagination. She followed her own one-of-a-kind ideas — and never stopped, even at age 90+!",
    famousWorks: [
      { title: "Pumpkin (yellow with black dots)", year: "1994", sourceUrl: "https://en.wikipedia.org/wiki/Yayoi_Kusama#Pumpkins" },
      { title: "Infinity Mirror Rooms", year: "1965–today", sourceUrl: "https://en.wikipedia.org/wiki/Infinity_Mirror_Room" },
    ],
    funFacts: [
      "Her most famous pumpkin sculpture sits at the end of a pier on a Japanese island, looking out at the sea.",
      "She sometimes asks visitors to cover a plain white room in colorful dot stickers until it's totally polka-dotted!",
    ],
    activities: [
      "Make a polka-dot masterpiece! Draw a pumpkin, a flower, or your own name and cover it in dots using markers, paint, or round stickers.",
    ],
    portrait: {
      file: "",
      alt: "A portrait of the artist Yayoi Kusama (photo shown on her museum page).",
      credit: "© Yayoi Kusama — see the link to view photos and art.",
      sourceUrl: "https://en.wikipedia.org/wiki/Yayoi_Kusama",
    },
    artworks: [
      { file: "", title: "Yellow Pumpkin", year: "1994",
        alt: "A giant bright-yellow pumpkin sculpture covered in black polka dots.",
        credit: "© Yayoi Kusama — shown for education. See the link to view it.",
        sourceUrl: "https://en.wikipedia.org/wiki/Yayoi_Kusama#Pumpkins" },
      { file: "", title: "Infinity Mirror Room", year: "1965–today",
        alt: "A dark room lined with mirrors and tiny colored lights that seem to go on forever.",
        credit: "© Yayoi Kusama — shown for education. See the link to view it.",
        sourceUrl: "https://en.wikipedia.org/wiki/Infinity_Mirror_Room" },
    ],
  },

  /* ---------------------------------------------------------- 5 */
  {
    id: "okeeffe",
    name: "Georgia O'Keeffe",
    lifespan: "1887–1986",
    nationality: "American",
    funTagline: "Giant, dreamy flowers and the wide-open desert sky.",
    emoji: "🌸",
    themeColor: "#e0843b",
    style:
      "Georgia painted flowers SO big they filled the whole canvas — bigger than your face! She used smooth, glowing colors and simple, flowing shapes. She also painted the deserts, mountains, and big skies of the American Southwest.",
    howTheyLearned:
      "Georgia studied at art schools in Chicago and New York. At first she copied other styles, but then she decided to paint in her very own way — and that's when her art became famous.",
    life:
      "Georgia O'Keeffe grew up on a farm and decided to be an artist when she was just a girl. She became one of the most important American painters ever. She fell in love with the New Mexico desert and moved there, painting its flowers, bones, hills, and endless sky for the rest of her long life.",
    highlights: [
      "She's often called the 'Mother of American Modernism.'",
      "She moved to the New Mexico desert and painted its landscapes for decades.",
      "She kept painting into her nineties, even as her eyesight faded.",
    ],
    whyKnowThem:
      "Georgia O'Keeffe teaches us to look closely at small things — like a single flower — and see how amazing they really are. She painted the world her own way.",
    famousWorks: [
      { title: "Red Canna", year: "1924", sourceUrl: "https://en.wikipedia.org/wiki/Red_Canna_(painting)" },
      { title: "Ram's Head, White Hollyhock and Little Hills", year: "1935", sourceUrl: "https://en.wikipedia.org/wiki/Georgia_O%27Keeffe" },
    ],
    funFacts: [
      "She collected animal bones in the desert and turned them into beautiful paintings.",
      "There's a whole museum just for her art in Santa Fe, New Mexico.",
    ],
    activities: [
      "Pick one flower (or a picture of one) and draw it SUPER big — so big it fills your whole page. Look closely at every curve and color!",
    ],
    portrait: {
      file: "",
      alt: "A portrait of the artist Georgia O'Keeffe (see the link for photos).",
      credit: "See the link for photos of the artist.",
      sourceUrl: "https://en.wikipedia.org/wiki/Georgia_O%27Keeffe",
    },
    artworks: [
      { file: "", title: "Red Canna", year: "1924",
        alt: "A close-up of a glowing red and orange flower that fills the whole canvas.",
        credit: "© Georgia O'Keeffe estate — shown for education. See the link to view it.",
        sourceUrl: "https://en.wikipedia.org/wiki/Red_Canna_(painting)" },
      { file: "", title: "Ram's Head, White Hollyhock and Little Hills", year: "1935",
        alt: "A ram's skull floating in a blue sky above desert hills, with a white flower.",
        credit: "© Georgia O'Keeffe estate — shown for education. See the link to view it.",
        sourceUrl: "https://en.wikipedia.org/wiki/Georgia_O%27Keeffe" },
    ],
  },

  /* ---------------------------------------------------------- 6 */
  {
    id: "vangogh",
    name: "Vincent van Gogh",
    lifespan: "1853–1890",
    nationality: "Dutch",
    funTagline: "Swirling starry skies and bright, sunny sunflowers.",
    emoji: "🌻",
    themeColor: "#1f6fb2",
    style:
      "Vincent painted with thick, swirly brushstrokes you can almost feel. He used super bright colors — golden yellows and deep blues — to show how things made him feel, not just how they looked. His skies seem to swirl and dance!",
    howTheyLearned:
      "Vincent mostly taught himself by drawing over and over, studying art books, and copying other paintings. He didn't start painting seriously until he was almost 30 — which shows it's never too late to start!",
    life:
      "Vincent van Gogh was a kind, sensitive man from the Netherlands. He worked very hard at his art but sold almost no paintings while he was alive. His brother Theo believed in him and helped him keep going. In just 10 years he made over 2,000 artworks! Today his paintings are some of the most loved and valuable in the world.",
    highlights: [
      "He created more than 2,000 artworks in only about 10 years.",
      "He painted his famous 'Sunflowers' to decorate his little yellow house for a friend.",
      "His brother Theo supported him with letters and money throughout his life.",
    ],
    whyKnowThem:
      "Van Gogh shows us that feelings can become beautiful art, and that working hard at something you love really matters — even if success comes later.",
    famousWorks: [
      { title: "The Starry Night", year: "1889", sourceUrl: "https://en.wikipedia.org/wiki/The_Starry_Night" },
      { title: "Sunflowers", year: "1888", sourceUrl: "https://en.wikipedia.org/wiki/Sunflowers_(Van_Gogh_series)" },
      { title: "Café Terrace at Night", year: "1888", sourceUrl: "https://en.wikipedia.org/wiki/Caf%C3%A9_Terrace_at_Night" },
    ],
    funFacts: [
      "He painted over 30 self-portraits because hiring models cost too much money.",
      "He loved the color yellow so much that he painted his house yellow too!",
    ],
    activities: [
      "Paint a swirly night sky! Use a dark blue background and add big yellow swirls and stars, moving your brush in curls like Van Gogh did.",
    ],
    portrait: {
      file: "Vincent van Gogh - Self-Portrait - Google Art Project.jpg",
      alt: "Vincent van Gogh's self-portrait.",
      credit: "Wikimedia Commons (public domain)",
      sourceUrl: "https://en.wikipedia.org/wiki/Vincent_van_Gogh",
    },
    artworks: [
      { file: "Van Gogh - Starry Night - Google Art Project.jpg", title: "The Starry Night", year: "1889",
        alt: "A swirling night sky full of glowing yellow stars above a sleeping village.",
        credit: "Museum of Modern Art / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/The_Starry_Night" },
      { file: "Vincent Willem van Gogh 127.jpg", title: "Sunflowers", year: "1888",
        alt: "A vase full of bright yellow sunflowers against a golden background.",
        credit: "National Gallery, London / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/Sunflowers_(Van_Gogh_series)" },
      { file: "Vincent Willem van Gogh - Cafe Terrace at Night (Yorck).jpg", title: "Café Terrace at Night", year: "1888",
        alt: "A cozy café with a glowing yellow awning under a starry blue night sky.",
        credit: "Kröller-Müller Museum / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/Caf%C3%A9_Terrace_at_Night" },
    ],
  },

  /* ---------------------------------------------------------- 7 */
  {
    id: "monet",
    name: "Claude Monet",
    lifespan: "1840–1926",
    nationality: "French",
    funTagline: "Dreamy water lilies, garden bridges, and shimmering light.",
    emoji: "🪷",
    themeColor: "#5fa777",
    style:
      "Claude Monet was the leader of Impressionism. He painted outdoors to catch the light at different times of day, using dabs and dashes of color. Stand back from his paintings and the dabs magically turn into ponds, gardens, and sunshine!",
    howTheyLearned:
      "As a boy, Monet loved drawing funny cartoons of people. An artist named Eugène Boudin taught him to paint outside in the open air, and Monet never stopped. He learned by watching how light and color changed everything.",
    life:
      "Claude Monet helped start Impressionism — in fact, the movement was named after his painting 'Impression, Sunrise.' He built a gorgeous garden at his home in Giverny, with a lily pond and a green Japanese bridge, and painted it again and again. Some of his water-lily paintings are so huge they wrap all the way around a room!",
    highlights: [
      "The whole Impressionist movement was named after his painting 'Impression, Sunrise.'",
      "He built and painted his famous water-lily garden at Giverny.",
      "He painted the same haystacks and cathedral over and over to show how light changes through the day.",
    ],
    whyKnowThem:
      "Monet teaches us to slow down and notice light, color, and nature. He proved that a simple garden can be pure magic.",
    famousWorks: [
      { title: "Impression, Sunrise", year: "1872", sourceUrl: "https://en.wikipedia.org/wiki/Impression,_Sunrise" },
      { title: "Water Lilies (series)", year: "1896–1926", sourceUrl: "https://en.wikipedia.org/wiki/Water_Lilies_(Monet_series)" },
      { title: "The Water Lily Pond (Japanese Bridge)", year: "1899", sourceUrl: "https://en.wikipedia.org/wiki/Bridge_over_a_Pond_of_Water_Lilies" },
    ],
    funFacts: [
      "He had his garden's lily pond specially dug just so he could paint it.",
      "As he grew old his eyesight changed, which made his colors even dreamier.",
    ],
    activities: [
      "Paint a pond! Dab on dots and short strokes of green, blue, pink, and purple. Don't blend them — let your eyes mix the colors when you step back.",
    ],
    portrait: {
      file: "Claude Monet 1899 Nadar crop.jpg",
      alt: "A photograph of the artist Claude Monet.",
      credit: "Photo by Nadar / Wikimedia Commons (public domain)",
      sourceUrl: "https://en.wikipedia.org/wiki/Claude_Monet",
    },
    artworks: [
      { file: "Claude Monet, Impression, soleil levant.jpg", title: "Impression, Sunrise", year: "1872",
        alt: "A misty harbor at sunrise with a glowing orange sun and small boats.",
        credit: "Musée Marmottan Monet / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/Impression,_Sunrise" },
      { file: "Claude Monet - Water Lilies - 1906, Ryerson.jpg", title: "Water Lilies", year: "1906",
        alt: "A pond surface covered with floating pink water lilies and reflections.",
        credit: "Art Institute of Chicago / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/Water_Lilies_(Monet_series)" },
      { file: "Monet Water Lilies 1916.jpg", title: "The Water Lily Pond", year: "1899",
        alt: "A green Japanese footbridge arching over a pond full of water lilies.",
        credit: "Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/Bridge_over_a_Pond_of_Water_Lilies" },
    ],
  },

  /* ---------------------------------------------------------- 8 */
  {
    id: "rousseau",
    name: "Henri Rousseau",
    lifespan: "1844–1910",
    nationality: "French",
    funTagline: "Magical jungles full of tigers, monkeys, and giant leaves.",
    emoji: "🐯",
    themeColor: "#2f8f5b",
    style:
      "Henri painted dreamy jungles bursting with huge leaves, bright flowers, and peeking animals. His style is called 'naïve' art — it looks simple and storybook-like, almost like a wonderful dream.",
    howTheyLearned:
      "Here's the amazing part: Henri NEVER took art lessons! He taught himself completely. He worked as a toll collector in Paris and painted in his spare time. People laughed at his style at first — but he kept going.",
    life:
      "Henri Rousseau didn't even start painting seriously until he was about 40 years old. He had never seen a real jungle — he made up his magical jungles by visiting the Paris zoo and botanical gardens, then using his imagination! Many artists made fun of him, but famous painters like Picasso saw how special his work was.",
    highlights: [
      "He was completely self-taught and painted in his spare time.",
      "He never saw a real jungle — he imagined them from zoos, gardens, and picture books!",
      "Young Pablo Picasso threw a party in his honor because he admired Henri's art.",
    ],
    whyKnowThem:
      "Henri Rousseau proves you don't need fancy lessons to be an artist — you just need imagination and the courage to keep going.",
    famousWorks: [
      { title: "The Sleeping Gypsy", year: "1897", sourceUrl: "https://en.wikipedia.org/wiki/The_Sleeping_Gypsy" },
      { title: "Tiger in a Tropical Storm (Surprised!)", year: "1891", sourceUrl: "https://en.wikipedia.org/wiki/Tiger_in_a_Tropical_Storm" },
      { title: "The Dream", year: "1910", sourceUrl: "https://en.wikipedia.org/wiki/The_Dream_(Rousseau_painting)" },
    ],
    funFacts: [
      "He counted every single leaf as he painted his jungles!",
      "He used the zoo's stuffed animals and the city's greenhouse plants as his models.",
    ],
    activities: [
      "Invent your own jungle! Fill the page with giant leaves and flowers, then hide a friendly animal peeking out from the plants.",
    ],
    portrait: {
      file: "Henri Rousseau 1902.jpg",
      alt: "A photograph of the artist Henri Rousseau.",
      credit: "Wikimedia Commons (public domain)",
      sourceUrl: "https://en.wikipedia.org/wiki/Henri_Rousseau",
    },
    artworks: [
      { file: "Henri Rousseau - Tiger in a Tropical Storm (Surprised!) - Google Art Project.jpg", title: "Tiger in a Tropical Storm (Surprised!)", year: "1891",
        alt: "A tiger crouching among bending jungle plants in a flash of lightning and rain.",
        credit: "National Gallery, London / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/Tiger_in_a_Tropical_Storm" },
      { file: "Henri Rousseau - The Sleeping Gypsy.jpg", title: "The Sleeping Gypsy", year: "1897",
        alt: "A lion sniffing a sleeping traveler beside a guitar under a full moon in the desert.",
        credit: "Museum of Modern Art / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/The_Sleeping_Gypsy" },
      { file: "Henri Rousseau - Il sogno.jpg", title: "The Dream", year: "1910",
        alt: "A woman resting on a couch inside a lush jungle with hidden lions and a flute player.",
        credit: "Museum of Modern Art / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/The_Dream_(Rousseau_painting)" },
    ],
  },

  /* ---------------------------------------------------------- 9 */
  {
    id: "hokusai",
    name: "Katsushika Hokusai",
    lifespan: "1760–1849",
    nationality: "Japanese",
    funTagline: "The artist behind the world-famous 'Great Wave.'",
    emoji: "🌊",
    themeColor: "#2a4d8f",
    style:
      "Hokusai made woodblock prints — pictures carved into wood, inked, and pressed onto paper so many copies could be made. He used bold outlines, flat patterns, and a beautiful blue. His most famous print shows a giant curling wave with tiny Mount Fuji behind it.",
    howTheyLearned:
      "Hokusai started as an apprentice in a print workshop when he was a teenager, learning to carve and print. He drew his whole life and kept trying to get better and better — he believed his best work was always still ahead of him.",
    life:
      "Katsushika Hokusai lived in Japan a long time ago and made tens of thousands of artworks. He changed his name more than 30 times and moved house almost 100 times! His series 'Thirty-six Views of Mount Fuji' — which includes 'The Great Wave' — made him famous around the world and even inspired the Impressionists in France.",
    highlights: [
      "He created the most famous Japanese artwork ever: 'The Great Wave off Kanagawa.'",
      "He made around 30,000 drawings, prints, and paintings in his lifetime.",
      "His prints traveled to Europe and inspired artists like Monet and Van Gogh.",
    ],
    whyKnowThem:
      "Hokusai shows that practicing your whole life makes you better and better — and that one bold idea, like a giant wave, can travel all around the world.",
    famousWorks: [
      { title: "The Great Wave off Kanagawa", year: "c. 1831", sourceUrl: "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa" },
      { title: "Fine Wind, Clear Morning (Red Fuji)", year: "c. 1831", sourceUrl: "https://en.wikipedia.org/wiki/Fine_Wind,_Clear_Morning" },
    ],
    funFacts: [
      "He kept changing his artist name — he used more than 30 different ones!",
      "Look closely at 'The Great Wave' and you'll spot tiny boats and people in the rough sea.",
    ],
    activities: [
      "Draw a giant ocean wave with curling, foamy fingers at the top. Add a tiny boat or mountain to show how BIG your wave is!",
    ],
    portrait: {
      file: "Hokusai portrait.png",
      alt: "A self-portrait drawing of the artist Hokusai.",
      credit: "Wikimedia Commons (public domain)",
      sourceUrl: "https://en.wikipedia.org/wiki/Hokusai",
    },
    artworks: [
      { file: "Tsunami by hokusai 19th century.jpg", title: "The Great Wave off Kanagawa", year: "c. 1831",
        alt: "A huge blue wave with white foamy claws towering over tiny boats, with Mount Fuji in the distance.",
        credit: "Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa" },
      { file: "Red Fuji southern wind clear morning.jpg", title: "Fine Wind, Clear Morning (Red Fuji)", year: "c. 1831",
        alt: "Mount Fuji glowing red against a blue sky with little clouds.",
        credit: "Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/Fine_Wind,_Clear_Morning" },
    ],
  },

  /* ---------------------------------------------------------- 10 */
  {
    id: "seurat",
    name: "Georges Seurat",
    lifespan: "1859–1891",
    nationality: "French",
    funTagline: "He painted whole pictures out of thousands of tiny dots!",
    emoji: "🟣",
    themeColor: "#2bb3a3",
    style:
      "Georges invented a style called Pointillism. Instead of brushstrokes, he made paintings out of thousands and thousands of tiny colored DOTS. Up close you just see dots — but step back and they blend into people, parks, and sunshine. It's like magic for your eyes!",
    howTheyLearned:
      "Georges studied at a famous art school in Paris and read science books about how our eyes see color. He combined art and science to invent his dot technique — and worked super carefully and patiently.",
    life:
      "Georges Seurat was a quiet, serious young artist who loved studying how colors work together. His giant masterpiece 'A Sunday Afternoon on the Island of La Grande Jatte' took him two whole years and millions of dots to finish! Sadly he died very young, at just 31, but his clever new style changed art forever.",
    highlights: [
      "He invented Pointillism — painting with tiny dots of pure color.",
      "His huge masterpiece took about two years and millions of dots to complete.",
      "He mixed science and art to figure out how to make colors glow.",
    ],
    whyKnowThem:
      "Seurat teaches us about patience and looking closely — and that there's more than one way to make a picture. Lots of tiny dots can add up to something amazing!",
    famousWorks: [
      { title: "A Sunday Afternoon on the Island of La Grande Jatte", year: "1884–86", sourceUrl: "https://en.wikipedia.org/wiki/A_Sunday_Afternoon_on_the_Island_of_La_Grande_Jatte" },
      { title: "Bathers at Asnières", year: "1884", sourceUrl: "https://en.wikipedia.org/wiki/Bathers_at_Asni%C3%A8res" },
    ],
    funFacts: [
      "His most famous painting is taller than a grown-up and about 3 meters wide!",
      "He even painted tiny dots around the edges to make his own painted 'frame.'",
    ],
    activities: [
      "Make a dot painting! Use cotton swabs or the end of a marker to fill a simple shape with dots of different colors. Step back to see them blend!",
    ],
    portrait: {
      file: "Georges Seurat 1888.jpg",
      alt: "A photograph of the artist Georges Seurat.",
      credit: "Wikimedia Commons (public domain)",
      sourceUrl: "https://en.wikipedia.org/wiki/Georges_Seurat",
    },
    artworks: [
      { file: "A Sunday on La Grande Jatte, Georges Seurat, 1884.jpg", title: "A Sunday Afternoon on the Island of La Grande Jatte", year: "1884–86",
        alt: "People relaxing in a sunny park by the river, the whole scene made of tiny dots.",
        credit: "Art Institute of Chicago / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/A_Sunday_Afternoon_on_the_Island_of_La_Grande_Jatte" },
      { file: "Georges Seurat 047.jpg", title: "Bathers at Asnières", year: "1884",
        alt: "Boys resting and swimming by a riverbank on a warm, hazy day.",
        credit: "National Gallery, London / Wikimedia Commons (public domain)",
        sourceUrl: "https://en.wikipedia.org/wiki/Bathers_at_Asni%C3%A8res" },
    ],
  },
];
