let categorys = {
  science: {
    easy: [
      {
        "¿Qué parte de la planta absorbe agua y nutrientes del suelo?": {
          correct: "Las raíces",
          incorrect: ["Las hojas", "El tallo", "Las flores"],
          explanation:
            "Las raíces son responsables de absorber agua y nutrientes del suelo.",
        },
      },
      {
        "¿Cuál es el líquido esencial para la vida que cubre alrededor del 71% de la superficie de la Tierra?":
          {
            correct: "Agua",
            incorrect: ["Oxygeno", "Hidrógeno", "Nitrógeno"],
            explanation:
              "El agua es fundamental para todos los seres vivos y cubre la mayor parte de la superficie terrestre.",
          },
      },
      {
        "¿Qué tipo de energía se obtiene del viento?": {
          correct: "Energía eólica",
          incorrect: [
            "Energía solar",
            "Energía geotérmica",
            "Energía hidráulica",
          ],
          explanation:
            "La energía eólica se produce aprovechando la energía del viento mediante aerogeneradores.",
        },
      },
      {
        "¿Qué órgano en el cuerpo humano es responsable de la producción de insulina?":
          {
            correct: "Páncreas",
            incorrect: ["Hígado", "Riñón", "Estómago"],
            explanation:
              "El páncreas produce insulina, una hormona crucial para regular los niveles de glucosa en la sangre.",
          },
      },
      {
        "¿Qué tipo de animal es un delfín?": {
          correct: "Mamífero",
          incorrect: ["Pez", "Reptil", "Anfibio"],
          explanation:
            "Los delfines son mamíferos marinos que pertenecen a la familia de los cetáceos y respiran aire a través de un orificio en la parte superior de su cabeza.",
        },
      },
      {
        "¿Qué es una célula?": {
          correct: "La unidad básica de la vida.",
          incorrect: [
            "Un tipo de tejido.",
            "Un órgano del cuerpo.",
            "Una parte del sistema inmunológico.",
          ],
          explanation:
            "Una célula es la unidad estructural y funcional básica de todos los seres vivos, capaz de realizar funciones vitales de manera independiente.",
        },
      },
      {
        "¿Cuál es el planeta más cercano al sol?": {
          correct: "Mercurio",
          incorrect: ["Venus", "Tierra", "Marte"],
          explanation:
            "Mercurio es el planeta más cercano al sol y tiene una órbita muy rápida.",
        },
      },
      {
        "¿Qué gas respiramos principalmente?": {
          correct: "Oxígeno",
          incorrect: ["Dióxido de carbono", "Nitrógeno", "Hidrógeno"],
          explanation:
            "El oxígeno es el gas que los seres humanos y otros organismos necesitan para respirar, y constituye aproximadamente el 21% del aire.",
        },
      },
      {
        "¿Cuál es el órgano principal del sistema circulatorio?": {
          correct: "Corazón",
          incorrect: ["Hígado", "Pulmones", "Riñones"],
          explanation:
            "El corazón bombea sangre a través de todo el cuerpo, siendo fundamental para el sistema circulatorio.",
        },
      },

      {
        "¿Qué es la fotosíntesis?": {
          correct: "El proceso por el cual las plantas producen su alimento.",
          incorrect: [
            "La reproducción de las plantas.",
            "La absorción de agua por las raíces.",
            "La creación de flores.",
          ],
          explanation:
            "La fotosíntesis es el proceso mediante el cual las plantas convierten la luz solar en energía química.",
        },
      },
    ],
    medium: [
      {
        "¿Qué es un átomo?": {
          correct: "La unidad básica de la materia.",
          incorrect: [
            "Una molécula.",
            "Un tipo de célula.",
            "Un compuesto químico.",
          ],
          explanation:
            "Un átomo es la unidad más pequeña que conserva las propiedades de un elemento.",
        },
      },
      {
        "¿Cuál es la fórmula química del agua?": {
          correct: "H2O",
          incorrect: ["CO2", "O2", "H2O2"],
          explanation:
            "La fórmula química del agua es H2O, lo que indica que cada molécula de agua está compuesta por dos átomos de hidrógeno y uno de oxígeno.",
        },
      },
      {
        "¿Cuál es la función de las neuronas?": {
          correct: "Transmitir señales",
          incorrect: [
            "Producir hormonas",
            "Filtrar sangre",
            "Absorber nutrientes",
          ],
          explanation:
            "Las neuronas son células del sistema nervioso que transmiten señales eléctricas y químicas, permitiendo la comunicación entre el cerebro y el resto del cuerpo.",
        },
      },
      {
        "¿Qué tipo de energía es la energía solar?": {
          correct: "Renovable",
          incorrect: ["No renovable", "Térmica", "Nuclear"],
          explanation:
            "La energía solar es considerada energía renovable porque se obtiene del sol, una fuente inagotable de energía en escalas humanas.",
        },
      },
      {
        "¿Qué es un ecosistema?": {
          correct: "Conjunto de organismos y su entorno",
          incorrect: [
            "Un tipo de célula",
            "Un planeta",
            "Un sistema de transporte",
          ],
          explanation:
            "Un ecosistema es un sistema formado por un conjunto de organismos que interactúan entre sí y con su entorno físico en un área determinada.",
        },
      },
      {
        "¿Qué tipo de energía es la energía solar?": {
          correct: "Energía renovable",
          incorrect: [
            "Energía no renovable",
            "Energía fósil",
            "Energía nuclear",
          ],
          explanation:
            "La energía solar es considerada energía renovable porque se obtiene del sol, que es inagotable en términos humanos.",
        },
      },
      {
        "¿Cuál es el proceso por el cual el agua se convierte en vapor?": {
          correct: "Evaporación",
          incorrect: ["Condensación", "Precipitación", "Transpiración"],
          explanation:
            "La evaporación es el proceso en el que el agua se convierte en vapor debido al calor.",
        },
      },
      {
        "¿Cómo se llama el proceso de división celular en células eucariotas que resulta en dos células hijas idénticas?":
          {
            correct: "Mitosis",
            incorrect: ["Meiosis", "Fagocitosis", "Citosinesis"],
            explanation:
              "La mitosis es el proceso mediante el cual una célula eucariota se divide para formar dos células hijas genéticamente idénticas.",
          },
      },
      {
        "¿Qué tipo de vínculo químico se forma cuando los átomos comparten electrones?":
          {
            correct: "Enlace covalente",
            incorrect: [
              "Enlace iónico",
              "Enlace metálico",
              "Enlace de hidrógeno",
            ],
            explanation:
              "El enlace covalente se forma cuando dos átomos comparten uno o más pares de electrones, lo que permite a cada átomo completar su capa de electrones.",
          },
      },
      {
        "¿Cuál es el elemento químico más abundante en la atmósfera terrestre?":
          {
            correct: "Nitrógeno",
            incorrect: ["Oxígeno", "Dióxido de carbono", "Argón"],
            explanation:
              "El nitrógeno constituye aproximadamente el 78% de la atmósfera terrestre, lo que lo convierte en el gas más abundante.",
          },
      },
    ],
    hard: [
      {
        "¿Qué es la teoría de la relatividad?": {
          correct:
            "Una teoría que describe la gravedad y la relación entre espacio y tiempo.",
          incorrect: [
            "Una teoría sobre la evolución de las especies.",
            "Una teoría sobre la estructura atómica.",
            "Una teoría sobre la química orgánica.",
          ],
          explanation:
            "La teoría de la relatividad, formulada por Albert Einstein, revolucionó nuestra comprensión del espacio, el tiempo y la gravedad.",
        },
      },
      {
        "¿Qué es un ácido?": {
          correct: "Una sustancia que libera protones en solución.",
          incorrect: [
            "Una sustancia que absorbe electrones.",
            "Una sustancia que no reacciona con bases.",
            "Una sustancia que siempre es líquida.",
          ],
          explanation:
            "Los ácidos son compuestos que, en solución, liberan protones (H+) y tienen un pH menor a 7.",
        },
      },
      {
        "¿Cuál es la ley que describe la relación entre la fuerza, la masa y la aceleración de un objeto, formulada por Isaac Newton?":
          {
            correct: "Ley de Newton (F = m*a)",
            incorrect: [
              "Ley de la conservación de la energía",
              "Ley de la gravitación universal",
              "Ley de Coulomb",
            ],
            explanation:
              "La segunda ley de Newton establece que la fuerza aplicada a un objeto es igual a la masa del objeto multiplicada por su aceleración.",
          },
      },
      {
        "¿Qué es la biotecnología?": {
          correct: "El uso de organismos vivos para desarrollar productos.",
          incorrect: [
            "El estudio de los ecosistemas.",
            "La investigación sobre el clima.",
            "La creación de nuevos planetas.",
          ],
          explanation:
            "La biotecnología implica manipular organismos vivos para crear productos útiles, como medicamentos y cultivos.",
        },
      },
      {
        "¿Qué es la teoría celular?": {
          correct:
            "La idea de que todos los organismos están compuestos de células.",
          incorrect: [
            "La teoría de que las células son siempre multicelulares.",
            "La teoría de que las células no pueden reproducirse.",
            "La teoría de que las células son solo parte de los animales.",
          ],
          explanation:
            "La teoría celular establece que todos los seres vivos están formados por células, que son la unidad básica de la vida.",
        },
      },
      {
        "¿Qué es la homeostasis?": {
          correct:
            "El proceso por el cual un organismo mantiene un ambiente interno estable.",
          incorrect: [
            "La capacidad de un organismo para crecer.",
            "La forma en que los organismos se reproducen.",
            "La manera en que los organismos obtienen energía.",
          ],
          explanation:
            "La homeostasis es crucial para la supervivencia, ya que permite a los organismos regular su entorno interno.",
        },
      },
      {
        "¿Cuál es la teoría que explica el origen del universo?": {
          correct: "Big Bang",
          incorrect: [
            "Teoría de la relatividad",
            "Teoría de cuerdas",
            "Teoría del todo",
          ],
          explanation:
            "La teoría del Big Bang sugiere que el universo se originó a partir de una gran explosión hace aproximadamente 13.8 mil millones de años.",
        },
      },
      {
        "¿Cuál es el principio de la selección natural propuesto por Darwin?": {
          correct: "Supervivencia del más apto",
          incorrect: [
            "La vida se crea a partir de la materia inerte",
            "Las especies son inmutables",
            "La herencia es siempre perfecta",
          ],
          explanation:
            "El principio de la selección natural, propuesto por Charles Darwin, sugiere que los organismos mejor adaptados a su entorno tienen más probabilidades de sobrevivir y reproducirse.",
        },
      },
      {
        "¿Qué es el bosón de Higgs y por qué es importante en la física de partículas?":
          {
            correct: "Una partícula que da masa a otras partículas",
            incorrect: [
              "Una partícula que transporta la fuerza nuclear",
              "Una partícula que altera el tiempo",
              "Una partícula que anula la gravedad",
            ],
            explanation:
              "El bosón de Higgs es fundamental en el modelo estándar de física de partículas porque explica cómo las partículas adquieren masa.",
          },
      },
      {
        "¿Qué es un organismo eucariota?": {
          correct: "Organismo con células con núcleo definido",
          incorrect: [
            "Organismo sin núcleo",
            "Organismo unicelular",
            "Organismo que no se reproduce",
          ],
          explanation:
            "Un organismo eucariota es aquel cuyas células tienen un núcleo definido y compartimentos internos, lo que incluye a plantas, animales y hongos.",
        },
      },
    ],
  },
  art: {
    easy: [
      {
        "¿Quién pintó la Mona Lisa?": {
          correct: "Leonardo da Vinci",
          incorrect: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
          explanation:
            "La Mona Lisa es una pintura famosa creada por Leonardo da Vinci durante el Renacimiento.",
        },
      },
      {
        "¿En qué país se encuentra el Museo del Louvre?": {
          correct: "Francia",
          incorrect: ["Italia", "España", "Alemania"],
          explanation:
            "El Museo del Louvre, hogar de la Mona Lisa, está ubicado en París, Francia.",
        },
      },
      {
        "¿Qué estilo artístico está asociado con Salvador Dalí?": {
          correct: "Surrealismo",
          incorrect: ["Impresionismo", "Cubismo", "Expresionismo"],
          explanation:
            "Salvador Dalí es conocido por sus obras surrealistas, que exploran el subconsciente y los sueños.",
        },
      },
      {
        "¿Qué famoso pintor es conocido por cortar parte de su oreja?": {
          correct: "Vincent van Gogh",
          incorrect: ["Pablo Picasso", "Claude Monet", "Rembrandt"],
          explanation:
            "Vincent van Gogh, un pintor postimpresionista, es famoso por haberse cortado parte de su oreja.",
        },
      },
      {
        "¿Cuál es la técnica principal usada en la pintura al óleo?": {
          correct: "Óleo sobre lienzo",
          incorrect: [
            "Acuarela sobre papel",
            "Tinta sobre pergamino",
            "Carboncillo sobre madera",
          ],
          explanation:
            "La técnica de óleo sobre lienzo es una de las más utilizadas en la historia del arte.",
        },
      },
      {
        "¿Quién pintó la obra 'La Noche Estrellada'?": {
          correct: "Vincent van Gogh",
          incorrect: ["Claude Monet", "Pablo Picasso", "Henri Matisse"],
          explanation:
            "'La Noche Estrellada' es una de las pinturas más icónicas de Vincent van Gogh.",
        },
      },
      {
        "¿Qué artista es conocido por su serie de latas de sopa Campbell?": {
          correct: "Andy Warhol",
          incorrect: ["Roy Lichtenstein", "Jackson Pollock", "Piet Mondrian"],
          explanation:
            "Andy Warhol fue una figura clave en el movimiento del arte pop, famoso por su serie de latas de sopa Campbell.",
        },
      },
      {
        "¿Qué movimiento artístico es conocido por su uso de puntos de colores?":
          {
            correct: "Puntillismo",
            incorrect: ["Impresionismo", "Cubismo", "Futurismo"],
            explanation:
              "El puntillismo es un estilo de pintura en el que pequeños puntos de color se combinan para formar una imagen.",
          },
      },
      {
        "¿Qué estilo arquitectónico es caracterizado por altas catedrales y vitrales?":
          {
            correct: "Gótico",
            incorrect: ["Románico", "Barroco", "Renacentista"],
            explanation:
              "El estilo gótico es conocido por sus estructuras altas, arcos puntiagudos y amplios vitrales.",
          },
      },
      {
        "¿Quién esculpió 'El Pensador'?": {
          correct: "Auguste Rodin",
          incorrect: ["Michelangelo", "Donatello", "Gian Lorenzo Bernini"],
          explanation:
            "'El Pensador' es una famosa escultura creada por el artista francés Auguste Rodin.",
        },
      },
    ],
    medium: [
      {
        "¿Quién es el autor de la escultura 'El David'?": {
          correct: "Miguel Ángel",
          incorrect: ["Donatello", "Bernini", "Leonardo da Vinci"],
          explanation:
            "La escultura 'El David' es una obra maestra del Renacimiento creada por Miguel Ángel.",
        },
      },
      {
        "¿Qué corriente artística se caracteriza por la representación de escenas de la vida cotidiana?":
          {
            correct: "Realismo",
            incorrect: ["Impresionismo", "Barroco", "Surrealismo"],
            explanation:
              "El realismo es un movimiento artístico que se enfoca en representar la vida cotidiana con detalle y precisión.",
          },
      },
      {
        "¿Qué obra famosa fue pintada por Sandro Botticelli?": {
          correct: "El nacimiento de Venus",
          incorrect: ["La Última Cena", "La creación de Adán", "Las Meninas"],
          explanation:
            "'El nacimiento de Venus' es una de las obras más conocidas del pintor renacentista Sandro Botticelli.",
        },
      },
      {
        "¿Qué arquitecto es responsable de diseñar la cúpula de la Basílica de San Pedro en el Vaticano?":
          {
            correct: "Michelangelo",
            incorrect: [
              "Filippo Brunelleschi",
              "Donato Bramante",
              "Gian Lorenzo Bernini",
            ],
            explanation:
              "Michelangelo fue el arquitecto que diseñó la cúpula de la Basílica de San Pedro, una de las obras maestras del Renacimiento.",
          },
      },
      {
        "¿Qué técnica de pintura utiliza pigmentos mezclados con huevo?": {
          correct: "Temple",
          incorrect: ["Acuarela", "Óleo", "Fresco"],
          explanation:
            "La técnica del temple utiliza pigmentos mezclados con huevo para crear una pintura duradera y vibrante.",
        },
      },
      {
        "¿Qué artista es famoso por sus obras cubistas?": {
          correct: "Pablo Picasso",
          incorrect: ["Salvador Dalí", "Joan Miró", "Edvard Munch"],
          explanation:
            "Pablo Picasso es uno de los fundadores del cubismo, un movimiento artístico que fragmenta y reconstruye la realidad en formas geométricas.",
        },
      },
      {
        "¿En qué país se desarrolló el movimiento artístico conocido como el Renacimiento?":
          {
            correct: "Italia",
            incorrect: ["Francia", "España", "Países Bajos"],
            explanation:
              "El Renacimiento fue un movimiento cultural y artístico que surgió en Italia durante los siglos XIV y XV.",
          },
      },
      {
        "¿Quién pintó 'La persistencia de la memoria'?": {
          correct: "Salvador Dalí",
          incorrect: ["René Magritte", "Pablo Picasso", "Max Ernst"],
          explanation:
            "'La persistencia de la memoria', con sus relojes derretidos, es una de las obras más famosas de Salvador Dalí.",
        },
      },
      {
        "¿Qué técnica de grabado utiliza una plancha de metal cubierta con una capa de barniz?":
          {
            correct: "Aguafuerte",
            incorrect: ["Xilografía", "Litografía", "Serigrafía"],
            explanation:
              "El aguafuerte es una técnica de grabado en la que una plancha de metal se cubre con barniz y luego se graba con ácido.",
          },
      },
      {
        "¿Qué arquitecto diseñó el Panteón de Roma?": {
          correct: "Apollodoro de Damasco",
          incorrect: ["Vitruvio", "Filippo Brunelleschi", "Andrea Palladio"],
          explanation:
            "El Panteón de Roma, una de las estructuras más influyentes de la arquitectura clásica, fue diseñado por Apollodoro de Damasco.",
        },
      },
    ],
    hard: [
      {
        "¿En qué año se completó la Capilla Sixtina?": {
          correct: "1512",
          incorrect: ["1508", "1520", "1536"],
          explanation:
            "La Capilla Sixtina, con su famoso techo pintado por Miguel Ángel, fue completada en 1512.",
        },
      },
      {
        "¿Qué técnica de grabado fue desarrollada por Albrecht Dürer?": {
          correct: "Xilografía",
          incorrect: ["Aguafuerte", "Litografía", "Serigrafía"],
          explanation:
            "Albrecht Dürer es conocido por su maestría en la xilografía, una técnica de grabado en madera.",
        },
      },
      {
        "¿Cuál es el verdadero nombre del artista conocido como Caravaggio?": {
          correct: "Michelangelo Merisi",
          incorrect: [
            "Gian Lorenzo Bernini",
            "Jacopo Robusti",
            "Giovanni Bellini",
          ],
          explanation:
            "Caravaggio, un maestro del barroco italiano, nació con el nombre de Michelangelo Merisi.",
        },
      },
      {
        "¿Qué movimiento artístico fue fundado por André Breton en 1924?": {
          correct: "Surrealismo",
          incorrect: ["Dadaísmo", "Expresionismo", "Futurismo"],
          explanation:
            "El surrealismo, un movimiento que explora lo irracional y el subconsciente, fue fundado por André Breton en 1924.",
        },
      },
      {
        "¿En qué museo se encuentra la obra 'Las Meninas' de Velázquez?": {
          correct: "Museo del Prado",
          incorrect: ["Museo del Louvre", "Galería Uffizi", "Museo Británico"],
          explanation:
            "'Las Meninas', una de las obras maestras de Diego Velázquez, se encuentra en el Museo del Prado en Madrid.",
        },
      },
      {
        "¿Quién pintó el fresco 'La escuela de Atenas'?": {
          correct: "Rafael",
          incorrect: ["Leonardo da Vinci", "Michelangelo", "Sandro Botticelli"],
          explanation:
            "'La escuela de Atenas' es un famoso fresco del Renacimiento pintado por Rafael en el Vaticano.",
        },
      },
      {
        "¿Qué obra de Rembrandt es conocida por su uso innovador de la luz y la sombra?":
          {
            correct: "La ronda de noche",
            incorrect: [
              "La lección de anatomía",
              "El retrato de Jan Six",
              "Los síndicos del gremio de pañeros",
            ],
            explanation:
              "'La ronda de noche' es famosa por su dramático uso del claroscuro, una técnica que Rembrandt dominó.",
          },
      },
      {
        "¿Qué técnica artística implica la aplicación de pigmentos sobre yeso húmedo?":
          {
            correct: "Fresco",
            incorrect: ["Tempera", "Encáustica", "Sfumato"],
            explanation:
              "La técnica del fresco consiste en aplicar pigmentos sobre yeso húmedo, permitiendo que la pintura se integre con la pared.",
          },
      },
      {
        "¿Qué artista renacentista diseñó los planos de la Basílica de San Pedro en el Vaticano antes de su muerte?":
          {
            correct: "Donato Bramante",
            incorrect: [
              "Leonardo da Vinci",
              "Michelangelo",
              "Filippo Brunelleschi",
            ],
            explanation:
              "Donato Bramante fue el arquitecto original de la Basílica de San Pedro, y su diseño influyó en las futuras modificaciones.",
          },
      },
      {
        "¿Qué obra de El Greco es conocida por su dramática representación del entierro de un noble toledano?":
          {
            correct: "El entierro del Conde de Orgaz",
            incorrect: [
              "Laocoonte",
              "La vista de Toledo",
              "El caballero de la mano en el pecho",
            ],
            explanation:
              "'El entierro del Conde de Orgaz' es una de las obras más conocidas de El Greco, famosa por su composición y simbolismo religioso.",
          },
      },
    ],
  },
  sport: {
    easy: [
      {
        "¿Cuántos jugadores forman un equipo de fútbol en el campo?": {
          correct: "11 jugadores",
          incorrect: ["9 jugadores", "10 jugadores", "12 jugadores"],
          explanation:
            "En un partido de fútbol, cada equipo tiene 11 jugadores en el campo, incluyendo al portero.",
        },
      },
      {
        "¿Qué deporte se juega con una raqueta y una pelota en una cancha dividida por una red?":
          {
            correct: "Tenis",
            incorrect: ["Bádminton", "Ping-pong", "Squash"],
            explanation:
              "El tenis es un deporte en el que se utiliza una raqueta para golpear una pelota sobre una red.",
          },
      },
      {
        "¿Qué deporte es conocido como 'el deporte rey'?": {
          correct: "Fútbol",
          incorrect: ["Béisbol", "Baloncesto", "Atletismo"],
          explanation:
            "El fútbol es conocido popularmente como 'el deporte rey' debido a su gran popularidad en todo el mundo.",
        },
      },
      {
        "¿Cuántos anillos olímpicos hay en la bandera olímpica?": {
          correct: "5",
          incorrect: ["4", "6", "7"],
          explanation:
            "La bandera olímpica tiene 5 anillos entrelazados, que representan los continentes del mundo.",
        },
      },
      {
        "¿En qué deporte se puede hacer un 'strike'?": {
          correct: "Bolos",
          incorrect: ["Tenis", "Golf", "Fútbol"],
          explanation:
            "En los bolos, un 'strike' ocurre cuando todos los pinos son derribados con el primer lanzamiento.",
        },
      },
      {
        "¿Qué país ha ganado más Copas del Mundo de fútbol?": {
          correct: "Brasil",
          incorrect: ["Alemania", "Argentina", "Italia"],
          explanation:
            "Brasil ha ganado la Copa del Mundo de fútbol en 5 ocasiones, más que cualquier otro país.",
        },
      },
      {
        "¿Qué deporte se practica en el Tour de Francia?": {
          correct: "Ciclismo",
          incorrect: ["Automovilismo", "Atletismo", "Esquí"],
          explanation:
            "El Tour de Francia es una de las competiciones de ciclismo más prestigiosas del mundo.",
        },
      },
      {
        "¿En qué deporte se utiliza un bate para golpear una pelota?": {
          correct: "Béisbol",
          incorrect: ["Golf", "Hockey", "Críquet"],
          explanation:
            "El béisbol es un deporte en el que se usa un bate para golpear una pelota y correr entre bases.",
        },
      },
      {
        "¿Cuál es el deporte más popular en Estados Unidos?": {
          correct: "Fútbol americano",
          incorrect: ["Béisbol", "Baloncesto", "Hockey sobre hielo"],
          explanation:
            "El fútbol americano es el deporte más popular en Estados Unidos, especialmente la NFL.",
        },
      },
      {
        "¿Qué deporte se juega principalmente en una cancha con dos aros en los extremos?":
          {
            correct: "Baloncesto",
            incorrect: ["Voleibol", "Hockey", "Fútbol"],
            explanation:
              "El baloncesto se juega en una cancha con dos aros, uno en cada extremo, y el objetivo es encestar la pelota.",
          },
      },
    ],
    medium: [
      {
        "¿Qué boxeador es conocido como 'El Más Grande'?": {
          correct: "Muhammad Ali",
          incorrect: ["Mike Tyson", "Floyd Mayweather", "Joe Frazier"],
          explanation:
            "Muhammad Ali es considerado uno de los mejores boxeadores de todos los tiempos, conocido como 'El Más Grande'.",
        },
      },
      {
        "¿En qué ciudad se celebraron los primeros Juegos Olímpicos modernos?":
          {
            correct: "Atenas",
            incorrect: ["París", "Londres", "Roma"],
            explanation:
              "Los primeros Juegos Olímpicos modernos se celebraron en Atenas, Grecia, en 1896.",
          },
      },
      {
        "¿Qué tenista tiene el récord de más títulos de Grand Slam?": {
          correct: "Roger Federer",
          incorrect: ["Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
          explanation:
            "Roger Federer es uno de los tenistas más exitosos de la historia, con múltiples títulos de Grand Slam.",
        },
      },
      {
        "¿Qué país ganó la primera Copa del Mundo de fútbol en 1930?": {
          correct: "Uruguay",
          incorrect: ["Argentina", "Brasil", "Italia"],
          explanation:
            "Uruguay ganó la primera Copa del Mundo de la FIFA en 1930, derrotando a Argentina en la final.",
        },
      },
      {
        "¿Qué jugador de baloncesto es conocido como 'Air Jordan'?": {
          correct: "Michael Jordan",
          incorrect: ["LeBron James", "Kobe Bryant", "Magic Johnson"],
          explanation:
            "Michael Jordan es apodado 'Air Jordan' debido a su habilidad para saltar y encestar con estilo.",
        },
      },
      {
        "¿En qué deporte se compite por la 'Copa América'?": {
          correct: "Fútbol",
          incorrect: ["Rugby", "Baloncesto", "Voleibol"],
          explanation:
            "La Copa América es un torneo internacional de fútbol que se celebra entre selecciones de América del Sur.",
        },
      },
      {
        "¿Qué atleta ganó 8 medallas de oro en los Juegos Olímpicos de Beijing 2008?":
          {
            correct: "Michael Phelps",
            incorrect: ["Usain Bolt", "Carl Lewis", "Mark Spitz"],
            explanation:
              "Michael Phelps ganó 8 medallas de oro en natación durante los Juegos Olímpicos de Beijing 2008, un récord histórico.",
          },
      },
      {
        "¿En qué deporte se utiliza un balón ovalado y se juega en una cancha con postes en forma de H?":
          {
            correct: "Rugby",
            incorrect: ["Fútbol americano", "Fútbol", "Balonmano"],
            explanation:
              "El rugby es un deporte en el que se usa un balón ovalado y el objetivo es llevarlo más allá de la línea de gol o patearlo entre los postes en forma de H.",
          },
      },
      {
        "¿Qué equipo de la NBA ha ganado más campeonatos en la historia?": {
          correct: "Los Angeles Lakers",
          incorrect: [
            "Chicago Bulls",
            "Boston Celtics",
            "Golden State Warriors",
          ],
          explanation:
            "Los Angeles Lakers son uno de los equipos más exitosos en la historia de la NBA, con múltiples campeonatos ganados.",
        },
      },
      {
        "¿Qué deportista es conocido por haber ganado siete veces el Tour de Francia, aunque posteriormente fue despojado de los títulos?":
          {
            correct: "Lance Armstrong",
            incorrect: ["Miguel Induráin", "Eddy Merckx", "Chris Froome"],
            explanation:
              "Lance Armstrong ganó el Tour de Francia siete veces, pero luego fue despojado de sus títulos debido a un escándalo de dopaje.",
          },
      },
    ],
    hard: [
      {
        "¿Quién fue el primer piloto de Fórmula 1 en ganar siete campeonatos mundiales?":
          {
            correct: "Michael Schumacher",
            incorrect: ["Ayrton Senna", "Lewis Hamilton", "Alain Prost"],
            explanation:
              "Michael Schumacher fue el primer piloto en la historia de la Fórmula 1 en ganar siete campeonatos mundiales.",
          },
      },
      {
        "¿En qué deporte se utiliza una pelota con 18 paneles hexagonales y 12 pentagonales?":
          {
            correct: "Fútbol",
            incorrect: ["Balonmano", "Rugby", "Voleibol"],
            explanation:
              "El diseño clásico de un balón de fútbol está compuesto por 32 paneles, 18 hexagonales y 12 pentagonales.",
          },
      },
      {
        "¿Qué golfista es conocido por haber ganado 18 títulos principales en su carrera?":
          {
            correct: "Jack Nicklaus",
            incorrect: ["Tiger Woods", "Arnold Palmer", "Ben Hogan"],
            explanation:
              "Jack Nicklaus es ampliamente reconocido como uno de los mejores golfistas de todos los tiempos, con 18 títulos principales.",
          },
      },
      {
        "¿Qué equipo de fútbol ha ganado más veces la UEFA Champions League?": {
          correct: "Real Madrid",
          incorrect: ["AC Milan", "Liverpool", "Bayern Múnich"],
          explanation:
            "El Real Madrid ha ganado la UEFA Champions League más veces que cualquier otro club, con numerosos títulos en su haber.",
        },
      },
      {
        "¿Quién es el máximo goleador de la historia de la Copa del Mundo de la FIFA?":
          {
            correct: "Miroslav Klose",
            incorrect: ["Pelé", "Ronaldo Nazário", "Gerd Müller"],
            explanation:
              "Miroslav Klose, de Alemania, es el máximo goleador en la historia de la Copa del Mundo de la FIFA, con 16 goles.",
          },
      },
      {
        "¿En qué año se celebraron los primeros Juegos Olímpicos de la era moderna?":
          {
            correct: "1896",
            incorrect: ["1900", "1888", "1892"],
            explanation:
              "Los primeros Juegos Olímpicos de la era moderna se celebraron en Atenas en 1896.",
          },
      },
      {
        "¿Qué tenista ha ganado el mayor número de títulos en Wimbledon?": {
          correct: "Roger Federer",
          incorrect: ["Rafael Nadal", "Pete Sampras", "Björn Borg"],
          explanation:
            "Roger Federer ha ganado Wimbledon en múltiples ocasiones, más que cualquier otro jugador en la historia del torneo.",
        },
      },
      {
        "¿En qué deporte se utiliza un disco llamado 'puck'?": {
          correct: "Hockey sobre hielo",
          incorrect: ["Hockey sobre césped", "Béisbol", "Balonmano"],
          explanation:
            "El hockey sobre hielo utiliza un disco de goma llamado 'puck', que se golpea con un palo para anotar goles.",
        },
      },
      {
        "¿Qué equipo de béisbol de la MLB ha ganado más Series Mundiales?": {
          correct: "New York Yankees",
          incorrect: [
            "Boston Red Sox",
            "Los Angeles Dodgers",
            "San Francisco Giants",
          ],
          explanation:
            "Los New York Yankees son el equipo más exitoso en la historia de la MLB, con el mayor número de Series Mundiales ganadas.",
        },
      },
      {
        "¿Qué es el 'Grand Slam' en el tenis?": {
          correct: "Ganar los cuatro torneos principales en un año",
          incorrect: [
            "Ganar un torneo sin perder un set",
            "Ganar un torneo con sets seguidos",
            "Ganar los tres primeros sets de un partido",
          ],
          explanation:
            "El 'Grand Slam' en el tenis se refiere a ganar los cuatro torneos principales (Australian Open, Roland Garros, Wimbledon y US Open) en un solo año.",
        },
      },
    ],
  },
  history: {
    easy: [
      {
        "¿En qué año se descubrió América?": {
          correct: "1492",
          incorrect: ["1498", "1500", "1482"],
          explanation:
            "Cristóbal Colón llegó al continente americano en 1492, marcando un evento crucial en la historia mundial.",
        },
      },
      {
        "¿Quién fue el primer presidente de los Estados Unidos?": {
          correct: "George Washington",
          incorrect: ["Thomas Jefferson", "Abraham Lincoln", "John Adams"],
          explanation:
            "George Washington fue el primer presidente de los Estados Unidos, sirviendo de 1789 a 1797.",
        },
      },
      {
        "¿Cuál fue la civilización que construyó las pirámides de Egipto?": {
          correct: "Egipcios",
          incorrect: ["Romanos", "Mayas", "Griegos"],
          explanation:
            "Las pirámides de Egipto fueron construidas por la antigua civilización egipcia como tumbas para sus faraones.",
        },
      },
      {
        "¿Qué país fue liderado por Adolf Hitler durante la Segunda Guerra Mundial?":
          {
            correct: "Alemania",
            incorrect: ["Italia", "Japón", "Rusia"],
            explanation:
              "Adolf Hitler fue el líder de Alemania durante la Segunda Guerra Mundial, conocido por su régimen nazi.",
          },
      },
      {
        "¿Quién escribió la 'Ilíada' y la 'Odisea'?": {
          correct: "Homero",
          incorrect: ["Sófocles", "Aristóteles", "Eurípides"],
          explanation:
            "Homero es el autor de la 'Ilíada' y la 'Odisea', dos de las epopeyas más importantes de la literatura antigua.",
        },
      },
      {
        "¿En qué ciudad se encuentra el Coliseo?": {
          correct: "Roma",
          incorrect: ["Atenas", "París", "Estambul"],
          explanation:
            "El Coliseo es un anfiteatro histórico situado en Roma, Italia, famoso por sus espectáculos de gladiadores.",
        },
      },
      {
        "¿Qué revolución comenzó en Francia en 1789?": {
          correct: "Revolución Francesa",
          incorrect: [
            "Revolución Industrial",
            "Revolución Americana",
            "Revolución Rusa",
          ],
          explanation:
            "La Revolución Francesa, que comenzó en 1789, fue un evento clave que condujo a cambios políticos y sociales significativos en Francia.",
        },
      },
      {
        "¿Quién fue el emperador romano que se convirtió al cristianismo?": {
          correct: "Constantino",
          incorrect: ["Julio César", "Nerón", "Augusto"],
          explanation:
            "Constantino el Grande fue el primer emperador romano en convertirse al cristianismo, influyendo profundamente en la historia del Imperio Romano.",
        },
      },
      {
        "¿Qué famosa reina egipcia fue amante de Julio César y Marco Antonio?":
          {
            correct: "Cleopatra",
            incorrect: ["Nefertiti", "Hatshepsut", "Isis"],
            explanation:
              "Cleopatra VII fue una reina egipcia conocida por sus relaciones con Julio César y Marco Antonio.",
          },
      },
      {
        "¿Quién fue el líder del movimiento de independencia de la India contra el dominio británico?":
          {
            correct: "Mahatma Gandhi",
            incorrect: [
              "Jawaharlal Nehru",
              "Subhas Chandra Bose",
              "Indira Gandhi",
            ],
            explanation:
              "Mahatma Gandhi fue un líder clave en la lucha por la independencia de la India, utilizando la resistencia pacífica como su principal herramienta.",
          },
      },
    ],
    medium: [
      {
        "¿Qué tratado puso fin a la Primera Guerra Mundial?": {
          correct: "Tratado de Versalles",
          incorrect: [
            "Tratado de París",
            "Tratado de Tordesillas",
            "Tratado de Utrecht",
          ],
          explanation:
            "El Tratado de Versalles, firmado en 1919, puso fin oficialmente a la Primera Guerra Mundial y estableció las condiciones de paz.",
        },
      },
      {
        "¿Quién fue el primer emperador de China?": {
          correct: "Qin Shi Huang",
          incorrect: ["Confucio", "Sun Tzu", "Kublai Khan"],
          explanation:
            "Qin Shi Huang fue el primer emperador de China, conocido por unificar el país y construir la Gran Muralla.",
        },
      },
      {
        "¿Qué ciudad fue destruida por la erupción del Vesubio en el 79 d.C.?":
          {
            correct: "Pompeya",
            incorrect: ["Roma", "Herculano", "Nápoles"],
            explanation:
              "Pompeya fue una ciudad romana que quedó sepultada por la erupción del Vesubio en el año 79 d.C.",
          },
      },
      {
        "¿Qué rey inglés tuvo seis esposas?": {
          correct: "Enrique VIII",
          incorrect: ["Ricardo III", "Eduardo VI", "Jorge III"],
          explanation:
            "Enrique VIII es famoso por haberse casado seis veces y por romper con la Iglesia Católica para formar la Iglesia Anglicana.",
        },
      },
      {
        "¿Quién pintó 'La última cena'?": {
          correct: "Leonardo da Vinci",
          incorrect: ["Miguel Ángel", "Rafael", "Tiziano"],
          explanation:
            "Leonardo da Vinci pintó 'La última cena', una de las obras maestras más reconocidas del Renacimiento.",
        },
      },
      {
        "¿Qué país fue gobernado por los zares hasta la Revolución de 1917?": {
          correct: "Rusia",
          incorrect: ["Alemania", "Francia", "Austria"],
          explanation:
            "Rusia fue gobernada por los zares hasta la Revolución Rusa de 1917, que llevó al establecimiento de la Unión Soviética.",
        },
      },
      {
        "¿Qué batalla marcó el fin del poder naval español en el siglo XVI?": {
          correct: "Batalla de Lepanto",
          incorrect: [
            "Batalla de Trafalgar",
            "Batalla de Hastings",
            "Batalla de Waterloo",
          ],
          explanation:
            "La Batalla de Lepanto en 1571 fue una victoria decisiva de la Liga Santa sobre el Imperio Otomano, marcando el declive del poder naval español.",
        },
      },
      {
        "¿Qué filósofo griego fue el maestro de Alejandro Magno?": {
          correct: "Aristóteles",
          incorrect: ["Platón", "Sócrates", "Epicuro"],
          explanation:
            "Aristóteles fue el maestro de Alejandro Magno, quien luego se convirtió en uno de los conquistadores más grandes de la historia.",
        },
      },
      {
        "¿Qué país fue fundado por Pedro el Grande en el siglo XVIII?": {
          correct: "San Petersburgo",
          incorrect: ["Moscú", "Varsovia", "Kiev"],
          explanation:
            "San Petersburgo fue fundada por Pedro el Grande en 1703 como la nueva capital de Rusia.",
        },
      },
      {
        "¿Quién fue el primer hombre en pisar la Luna?": {
          correct: "Neil Armstrong",
          incorrect: ["Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
          explanation:
            "Neil Armstrong fue el primer ser humano en pisar la Luna durante la misión Apollo 11 en 1969.",
        },
      },
    ],
    hard: [
      {
        "¿Qué guerra fue conocida como la 'Guerra para poner fin a todas las guerras'?":
          {
            correct: "Primera Guerra Mundial",
            incorrect: [
              "Segunda Guerra Mundial",
              "Guerra de los Cien Años",
              "Guerra de Secesión",
            ],
            explanation:
              "La Primera Guerra Mundial fue denominada la 'Guerra para poner fin a todas las guerras' debido a su escala y devastación sin precedentes.",
          },
      },
      {
        "¿Quién escribió 'El Príncipe', una obra fundamental de la teoría política?":
          {
            correct: "Nicolás Maquiavelo",
            incorrect: ["John Locke", "Thomas Hobbes", "Jean-Jacques Rousseau"],
            explanation:
              "Nicolás Maquiavelo escribió 'El Príncipe', una obra influyente en la teoría política sobre el poder y el liderazgo.",
          },
      },
      {
        "¿Qué conferencia de 1945 decidió la división de Alemania después de la Segunda Guerra Mundial?":
          {
            correct: "Conferencia de Yalta",
            incorrect: [
              "Conferencia de Potsdam",
              "Conferencia de Teherán",
              "Conferencia de París",
            ],
            explanation:
              "La Conferencia de Yalta, celebrada en 1945, fue donde los líderes aliados decidieron la división de Alemania en zonas de ocupación.",
          },
      },
      {
        "¿Qué emperador romano dividió el Imperio Romano en Oriente y Occidente?":
          {
            correct: "Diocleciano",
            incorrect: ["Constantino", "Nerón", "Adriano"],
            explanation:
              "Diocleciano fue el emperador romano que dividió el Imperio en dos partes: Oriente y Occidente, para una mejor administración.",
          },
      },
      {
        "¿Qué tratado de 1648 puso fin a la Guerra de los Treinta Años?": {
          correct: "Tratado de Westfalia",
          incorrect: [
            "Tratado de Viena",
            "Tratado de Utrecht",
            "Tratado de Aix-la-Chapelle",
          ],
          explanation:
            "El Tratado de Westfalia, firmado en 1648, puso fin a la Guerra de los Treinta Años y estableció un nuevo orden político en Europa.",
        },
      },
      {
        "¿Qué faraón egipcio es conocido por su tumba intacta descubierta en 1922?":
          {
            correct: "Tutankamón",
            incorrect: ["Ramsés II", "Akhenatón", "Seti I"],
            explanation:
              "Tutankamón es famoso por su tumba casi intacta, descubierta en el Valle de los Reyes por Howard Carter en 1922.",
          },
      },
      {
        "¿Qué evento dio inicio a la Segunda Guerra Mundial?": {
          correct: "Invasión de Polonia",
          incorrect: [
            "Ataque a Pearl Harbor",
            "Anschluss de Austria",
            "Firma del Pacto de Múnich",
          ],
          explanation:
            "La invasión de Polonia por Alemania en 1939 marcó el comienzo de la Segunda Guerra Mundial.",
        },
      },
      {
        "¿Qué civilización mesoamericana construyó la ciudad de Tenochtitlán?":
          {
            correct: "Aztecas",
            incorrect: ["Mayas", "Incas", "Olmecas"],
            explanation:
              "Los aztecas construyeron Tenochtitlán, su capital, en el lugar donde hoy se encuentra la Ciudad de México.",
          },
      },
      {
        "¿Qué explorador portugués fue el primero en circunnavegar el globo?": {
          correct: "Fernando de Magallanes",
          incorrect: ["Cristóbal Colón", "Vasco da Gama", "Bartolomé Díaz"],
          explanation:
            "Fernando de Magallanes lideró la primera expedición que circunnavegó el globo, aunque murió en Filipinas antes de completar el viaje.",
        },
      },
      {
        "¿Qué líder militar francés coronó a sí mismo emperador en 1804?": {
          correct: "Napoleón Bonaparte",
          incorrect: ["Luis XIV", "Carlos de Gaulle", "Francisco I"],
          explanation:
            "Napoleón Bonaparte se coronó a sí mismo como emperador de los franceses en 1804, marcando el comienzo del Primer Imperio Francés.",
        },
      },
    ],
  },
  geography: {
    easy: [
      {
        "¿Cuál es el río más largo del mundo?": {
          correct: "Río Amazonas",
          incorrect: ["Río Nilo", "Río Yangtsé", "Río Misisipi"],
          explanation:
            "El río Amazonas en América del Sur es considerado el río más largo del mundo, con una longitud de aproximadamente 7,000 km.",
        },
      },
      {
        "¿En qué continente se encuentra Egipto?": {
          correct: "África",
          incorrect: ["Asia", "Europa", "América"],
          explanation:
            "Egipto se encuentra en el continente africano, aunque su región del Sinaí está en Asia.",
        },
      },
      {
        "¿Cuál es el océano más grande del mundo?": {
          correct: "Océano Pacífico",
          incorrect: ["Océano Atlántico", "Océano Índico", "Océano Ártico"],
          explanation:
            "El Océano Pacífico es el más grande del mundo, cubriendo más del 30% de la superficie terrestre.",
        },
      },
      {
        "¿Qué país tiene la mayor cantidad de habitantes en el mundo?": {
          correct: "China",
          incorrect: ["India", "Estados Unidos", "Indonesia"],
          explanation:
            "China es el país más poblado del mundo, con más de 1,400 millones de habitantes.",
        },
      },
      {
        "¿Cuál es la capital de Francia?": {
          correct: "París",
          incorrect: ["Marsella", "Lyon", "Toulouse"],
          explanation:
            "París es la capital de Francia y uno de los principales centros culturales y económicos de Europa.",
        },
      },
      {
        "¿Qué desierto es el más grande del mundo?": {
          correct: "Desierto del Sahara",
          incorrect: [
            "Desierto de Gobi",
            "Desierto de Atacama",
            "Desierto de Kalahari",
          ],
          explanation:
            "El Desierto del Sahara en África es el desierto más grande del mundo si excluimos las regiones polares.",
        },
      },
      {
        "¿En qué país se encuentra la Torre Eiffel?": {
          correct: "Francia",
          incorrect: ["Italia", "España", "Alemania"],
          explanation:
            "La Torre Eiffel es uno de los monumentos más emblemáticos de Francia, situada en su capital, París.",
        },
      },
      {
        "¿Qué país tiene forma de bota en el mapa?": {
          correct: "Italia",
          incorrect: ["Grecia", "España", "Portugal"],
          explanation:
            "Italia es conocida por su distintiva forma de bota en el mapa.",
        },
      },
      {
        "¿En qué continente se encuentra Brasil?": {
          correct: "América del Sur",
          incorrect: ["África", "Europa", "Oceanía"],
          explanation:
            "Brasil se encuentra en América del Sur y es el país más grande de este continente.",
        },
      },
      {
        "¿Qué cadena montañosa separa a Europa de Asia?": {
          correct: "Montes Urales",
          incorrect: ["Alpes", "Himalaya", "Andes"],
          explanation:
            "Los Montes Urales se consideran la frontera natural entre Europa y Asia.",
        },
      },
    ],
    medium: [
      {
        "¿Cuál es la capital de Australia?": {
          correct: "Canberra",
          incorrect: ["Sídney", "Melbourne", "Brisbane"],
          explanation:
            "Canberra es la capital de Australia, aunque Sídney y Melbourne son sus ciudades más conocidas.",
        },
      },
      {
        "¿Qué país es conocido como la tierra de los mil lagos?": {
          correct: "Finlandia",
          incorrect: ["Suecia", "Noruega", "Canadá"],
          explanation:
            "Finlandia es conocida como la tierra de los mil lagos debido a la gran cantidad de lagos en su territorio.",
        },
      },
      {
        "¿En qué océano se encuentra la isla de Madagascar?": {
          correct: "Océano Índico",
          incorrect: [
            "Océano Atlántico",
            "Océano Pacífico",
            "Mar Mediterráneo",
          ],
          explanation:
            "Madagascar es una isla situada en el Océano Índico, al sureste de África.",
        },
      },
      {
        "¿Cuál es el país más grande en superficie de América del Sur?": {
          correct: "Brasil",
          incorrect: ["Argentina", "Perú", "Colombia"],
          explanation:
            "Brasil es el país más grande de América del Sur, abarcando gran parte del continente.",
        },
      },
      {
        "¿Qué mar se encuentra al este de Grecia?": {
          correct: "Mar Egeo",
          incorrect: ["Mar Mediterráneo", "Mar Negro", "Mar Jónico"],
          explanation:
            "El Mar Egeo está situado al este de Grecia, entre este país y Turquía.",
        },
      },
      {
        "¿Qué país africano tiene la mayor población?": {
          correct: "Nigeria",
          incorrect: ["Egipto", "Sudáfrica", "Etiopía"],
          explanation:
            "Nigeria es el país más poblado de África, con más de 200 millones de habitantes.",
        },
      },
      {
        "¿Qué cordillera atraviesa gran parte de América del Sur?": {
          correct: "Cordillera de los Andes",
          incorrect: ["Montañas Rocosas", "Alpes", "Himalaya"],
          explanation:
            "La Cordillera de los Andes se extiende a lo largo de la costa occidental de América del Sur.",
        },
      },
      {
        "¿Qué país europeo es conocido por su sistema de canales en Ámsterdam?":
          {
            correct: "Países Bajos",
            incorrect: ["Bélgica", "Dinamarca", "Alemania"],
            explanation:
              "Los Países Bajos son conocidos por sus canales, especialmente en Ámsterdam.",
          },
      },
      {
        "¿Cuál es la capital de Canadá?": {
          correct: "Ottawa",
          incorrect: ["Toronto", "Vancouver", "Montreal"],
          explanation:
            "Ottawa es la capital de Canadá, aunque Toronto y Vancouver son ciudades más grandes y conocidas.",
        },
      },
      {
        "¿Qué país es famoso por sus fiordos?": {
          correct: "Noruega",
          incorrect: ["Suecia", "Finlandia", "Islandia"],
          explanation:
            "Noruega es famosa por sus fiordos, que son profundas entradas del mar entre montañas.",
        },
      },
    ],
    hard: [
      {
        "¿Cuál es la montaña más alta fuera de Asia?": {
          correct: "Aconcagua",
          incorrect: ["Monte Kilimanjaro", "Monte Denali", "Mont Blanc"],
          explanation:
            "El Aconcagua, situado en Argentina, es la montaña más alta fuera de Asia, con una altura de 6,962 metros.",
        },
      },
      {
        "¿Cuál es el país más pequeño del mundo en términos de superficie?": {
          correct: "Ciudad del Vaticano",
          incorrect: ["Mónaco", "Nauru", "San Marino"],
          explanation:
            "Ciudad del Vaticano es el país más pequeño del mundo, con una superficie de aproximadamente 44 hectáreas.",
        },
      },
      {
        "¿Qué desierto ocupa la mayor parte del norte de África?": {
          correct: "Desierto del Sahara",
          incorrect: [
            "Desierto de Namib",
            "Desierto de Kalahari",
            "Desierto Arábigo",
          ],
          explanation:
            "El Desierto del Sahara es el desierto cálido más grande del mundo, ocupando gran parte del norte de África.",
        },
      },
      {
        "¿Qué país tiene el mayor número de islas en el mundo?": {
          correct: "Suecia",
          incorrect: ["Filipinas", "Indonesia", "Japón"],
          explanation:
            "Suecia tiene el mayor número de islas en el mundo, con aproximadamente 267,570 islas.",
        },
      },
      {
        "¿Qué país europeo tiene el mayor número de volcanes activos?": {
          correct: "Islandia",
          incorrect: ["Italia", "Grecia", "España"],
          explanation:
            "Islandia tiene el mayor número de volcanes activos en Europa, debido a su ubicación en la dorsal mesoatlántica.",
        },
      },
      {
        "¿Cuál es la capital más alta del mundo?": {
          correct: "La Paz",
          incorrect: ["Quito", "Katmandú", "Bogotá"],
          explanation:
            "La Paz, en Bolivia, es la capital administrativa más alta del mundo, situada a una altitud de aproximadamente 3,650 metros sobre el nivel del mar.",
        },
      },
      {
        "¿Cuál es la isla más poblada del mundo?": {
          correct: "Java",
          incorrect: ["Honshū", "Gran Bretaña", "Sumatra"],
          explanation:
            "Java, en Indonesia, es la isla más poblada del mundo, con una población que supera los 140 millones de habitantes.",
        },
      },
      {
        "¿En qué país se encuentra la cordillera más larga del mundo?": {
          correct: "Chile",
          incorrect: ["Argentina", "Perú", "Colombia"],
          explanation:
            "Chile es el país donde se encuentra la mayor parte de la Cordillera de los Andes, la cordillera más larga del mundo.",
        },
      },
      {
        "¿Qué país es conocido como 'la tierra del sol naciente'?": {
          correct: "Japón",
          incorrect: ["China", "Corea del Sur", "Filipinas"],
          explanation:
            "Japón es conocido como 'la tierra del sol naciente' debido a su ubicación en el extremo oriental de Asia.",
        },
      },
      {
        "¿Cuál es el lago más profundo del mundo?": {
          correct: "Lago Baikal",
          incorrect: ["Lago Tanganica", "Lago Victoria", "Lago Superior"],
          explanation:
            "El Lago Baikal, en Rusia, es el lago más profundo del mundo, con una profundidad de más de 1,600 metros.",
        },
      },
    ],
  },
  entertainment: {
    easy: [
      {
        "¿Quién es el personaje principal en la serie animada 'Los Simpson'?": {
          correct: "Homer Simpson",
          incorrect: ["Bart Simpson", "Lisa Simpson", "Marge Simpson"],
          explanation:
            "Homer Simpson es el personaje principal de 'Los Simpson', conocido por su característico humor y pereza.",
        },
      },
      {
        "¿Cuál es el nombre del mago protagonista en 'Harry Potter'?": {
          correct: "Harry Potter",
          incorrect: ["Ron Weasley", "Hermione Granger", "Albus Dumbledore"],
          explanation:
            "Harry Potter es el personaje principal de la famosa serie de libros y películas de 'Harry Potter'.",
        },
      },
      {
        "¿Cuál es el nombre del superhéroe que tiene una araña como símbolo?": {
          correct: "Spider-Man",
          incorrect: ["Batman", "Superman", "Iron Man"],
          explanation:
            "Spider-Man es el superhéroe cuyo símbolo es una araña, y su alter ego es Peter Parker.",
        },
      },
      {
        "¿Quién es el villano principal en 'Star Wars'?": {
          correct: "Darth Vader",
          incorrect: ["Luke Skywalker", "Yoda", "Han Solo"],
          explanation:
            "Darth Vader es el villano icónico de la saga 'Star Wars'.",
        },
      },
      {
        "¿Qué película de Disney presenta a una princesa llamada Ariel?": {
          correct: "La Sirenita",
          incorrect: ["Cenicienta", "Blancanieves", "La Bella Durmiente"],
          explanation:
            "Ariel es la protagonista de la película 'La Sirenita', una de las clásicas películas de Disney.",
        },
      },
      {
        "¿Cuál es la película más taquillera de todos los tiempos hasta 2023?":
          {
            correct: "Avatar",
            incorrect: [
              "Avengers: Endgame",
              "Titanic",
              "Star Wars: El despertar de la Fuerza",
            ],
            explanation:
              "'Avatar', dirigida por James Cameron, es la película más taquillera de todos los tiempos, superando los $2.9 mil millones en taquilla.",
          },
      },
      {
        "¿Cuál es la banda británica que lanzó el álbum 'Abbey Road'?": {
          correct: "The Beatles",
          incorrect: ["The Rolling Stones", "Pink Floyd", "Queen"],
          explanation:
            "'Abbey Road' es uno de los álbumes más icónicos lanzados por la banda británica The Beatles en 1969.",
        },
      },
      {
        "¿Cuál es el nombre del juguete cowboy en 'Toy Story'?": {
          correct: "Woody",
          incorrect: ["Buzz Lightyear", "Jessie", "Slinky"],
          explanation:
            "Woody es el juguete cowboy y uno de los personajes principales de la serie de películas 'Toy Story'.",
        },
      },
      {
        "¿Qué película animada de Pixar presenta a un robot llamado WALL-E?": {
          correct: "WALL-E",
          incorrect: ["Up", "Toy Story", "Monsters, Inc."],
          explanation:
            "'WALL-E' es una película de Pixar que sigue a un pequeño robot en una misión para salvar a la Tierra.",
        },
      },
      {
        "¿Cuál es el nombre del parque temático basado en las películas de Disney?":
          {
            correct: "Disneyland",
            incorrect: ["Universal Studios", "Six Flags", "Legoland"],
            explanation:
              "Disneyland es el famoso parque temático inspirado en las películas de Disney, con ubicaciones en varios países.",
          },
      },
    ],
    medium: [
      {
        "¿Cuál es el nombre real del superhéroe conocido como Iron Man?": {
          correct: "Tony Stark",
          incorrect: ["Bruce Wayne", "Peter Parker", "Steve Rogers"],
          explanation:
            "Tony Stark es el alter ego de Iron Man, un genio, multimillonario, playboy y filántropo en el universo Marvel.",
        },
      },
      {
        "¿Qué actor interpretó al Joker en la película 'The Dark Knight' de 2008?":
          {
            correct: "Heath Ledger",
            incorrect: ["Joaquin Phoenix", "Jack Nicholson", "Jared Leto"],
            explanation:
              "Heath Ledger interpretó al Joker en 'The Dark Knight', una actuación que le valió un Óscar póstumo.",
          },
      },
      {
        "¿En qué película de ciencia ficción de 1982 aparece el personaje Rick Deckard?":
          {
            correct: "Blade Runner",
            incorrect: ["Terminator", "Alien", "Mad Max"],
            explanation:
              "Rick Deckard es el protagonista de 'Blade Runner', una película de culto dirigida por Ridley Scott.",
          },
      },
      {
        "¿Qué famoso festival de música se celebró en 1969 en Nueva York?": {
          correct: "Woodstock",
          incorrect: ["Coachella", "Glastonbury", "Lollapalooza"],
          explanation:
            "Woodstock fue un festival de música icónico que se celebró en 1969 y es considerado un hito en la historia de la música.",
        },
      },
      {
        "¿Cuál es el nombre del dragón en la película 'Cómo entrenar a tu dragón'?":
          {
            correct: "Chimuelo",
            incorrect: ["Furia Nocturna", "Toothless", "Desdentado"],
            explanation:
              "Chimuelo (Toothless en inglés) es el dragón protagonista de la serie de películas 'Cómo entrenar a tu dragón'.",
          },
      },
      {
        "¿Qué serie de televisión sigue la vida de una familia de criminales en Birmingham después de la Primera Guerra Mundial?":
          {
            correct: "Peaky Blinders",
            incorrect: ["Boardwalk Empire", "The Sopranos", "Breaking Bad"],
            explanation:
              "'Peaky Blinders' es una serie que sigue la vida de la familia Shelby en Birmingham en los años 1920.",
          },
      },
      {
        "¿Qué película dirigida por Quentin Tarantino tiene capítulos titulados 'Vincent Vega y la esposa de Marsellus Wallace' y 'El reloj de oro'?":
          {
            correct: "Pulp Fiction",
            incorrect: ["Reservoir Dogs", "Kill Bill", "Django Unchained"],
            explanation:
              "'Pulp Fiction' es una de las películas más icónicas de Quentin Tarantino, famosa por su narrativa no lineal.",
          },
      },
      {
        "¿Cuál es el nombre de la ciudad ficticia donde se desarrolla la serie 'Stranger Things'?":
          {
            correct: "Hawkins",
            incorrect: ["Sunnydale", "Smallville", "Riverdale"],
            explanation:
              "Hawkins es la ciudad ficticia donde ocurre la mayoría de los eventos en la serie 'Stranger Things'.",
          },
      },
      {
        "¿Qué artista lanzó el álbum 'Thriller', que se convirtió en el más vendido de todos los tiempos?":
          {
            correct: "Michael Jackson",
            incorrect: ["Prince", "Madonna", "Elvis Presley"],
            explanation:
              "Michael Jackson lanzó 'Thriller' en 1982, y sigue siendo el álbum más vendido de todos los tiempos.",
          },
      },
      {
        "¿Qué película de Alfred Hitchcock presenta una famosa escena en la ducha?":
          {
            correct: "Psicosis",
            incorrect: ["Los pájaros", "Vértigo", "La ventana indiscreta"],
            explanation:
              "La escena de la ducha en 'Psicosis' es una de las más icónicas del cine y es obra del director Alfred Hitchcock.",
          },
      },
    ],
    hard: [
      {
        "¿Qué director ha ganado tres premios Óscar por mejor director por las películas 'Birdman', 'The Revenant' y 'Amores Perros'?":
          {
            correct: "Alejandro González Iñárritu",
            incorrect: [
              "Guillermo del Toro",
              "Alfonso Cuarón",
              "Pedro Almodóvar",
            ],
            explanation:
              "Alejandro González Iñárritu ha ganado tres premios Óscar por mejor director, incluyendo por 'Birdman' y 'The Revenant'.",
          },
      },
      {
        "¿Qué película ganó el primer Óscar a Mejor Película en 1929?": {
          correct: "Wings",
          incorrect: [
            "El Cantante de Jazz",
            "Metrópolis",
            "El Acorazado Potemkin",
          ],
          explanation:
            "'Wings' fue la primera película en ganar el Óscar a Mejor Película en la ceremonia inaugural de 1929.",
        },
      },
      {
        "¿Qué actor protagonizó junto a Tom Hanks la película 'Philadelphia'?":
          {
            correct: "Denzel Washington",
            incorrect: ["Morgan Freeman", "Samuel L. Jackson", "Will Smith"],
            explanation:
              "Denzel Washington protagonizó junto a Tom Hanks la película 'Philadelphia', un drama sobre el SIDA y la discriminación.",
          },
      },
      {
        "¿Cuál es el verdadero nombre del rapero conocido como Jay-Z?": {
          correct: "Shawn Carter",
          incorrect: ["Andre Young", "Marshall Mathers", "Calvin Broadus"],
          explanation:
            "El verdadero nombre de Jay-Z es Shawn Carter. Es uno de los raperos y productores más influyentes de la historia del hip-hop.",
        },
      },
      {
        "¿En qué año se lanzó el primer videojuego de la serie 'The Legend of Zelda'?":
          {
            correct: "1986",
            incorrect: ["1984", "1988", "1990"],
            explanation:
              "El primer videojuego de la serie 'The Legend of Zelda' fue lanzado en 1986 para la consola NES de Nintendo.",
          },
      },
      {
        "¿Quién fue el creador de la serie de televisión 'The Twilight Zone'?":
          {
            correct: "Rod Serling",
            incorrect: ["Alfred Hitchcock", "Gene Roddenberry", "David Lynch"],
            explanation:
              "Rod Serling fue el creador y presentador de la serie de televisión 'The Twilight Zone', que se estrenó en 1959.",
          },
      },
      {
        "¿Qué cantante ganó un Grammy por la canción 'Rolling in the Deep'?": {
          correct: "Adele",
          incorrect: ["Beyoncé", "Taylor Swift", "Lady Gaga"],
          explanation:
            "Adele ganó varios premios Grammy por su canción 'Rolling in the Deep', incluida la Grabación del Año.",
        },
      },
      {
        "¿En qué película de Quentin Tarantino se mencionan los '88 maníacos'?":
          {
            correct: "Kill Bill Vol. 1",
            incorrect: ["Pulp Fiction", "Reservoir Dogs", "Django Unchained"],
            explanation:
              "Los '88 maníacos' son un grupo de asesinos en 'Kill Bill Vol. 1', liderados por O-Ren Ishii, interpretada por Lucy Liu.",
          },
      },
      {
        "¿Qué comediante es conocido por su serie de stand-up 'Raw' y su papel en 'El profesor chiflado'?":
          {
            correct: "Eddie Murphy",
            incorrect: ["Richard Pryor", "Dave Chappelle", "Chris Rock"],
            explanation:
              "Eddie Murphy es un comediante y actor famoso por su stand-up 'Raw' y su papel en 'El profesor chiflado'.",
          },
      },
      {
        "¿Cuál es el nombre del actor que interpretó a Walter White en 'Breaking Bad'?":
          {
            correct: "Bryan Cranston",
            incorrect: ["Aaron Paul", "Bob Odenkirk", "Dean Norris"],
            explanation:
              "Bryan Cranston interpretó a Walter White en la serie 'Breaking Bad', un papel que le valió varios premios Emmy.",
          },
      },
    ],
  },
};

let categoriaElegida = "sport";
let dificultadElegida = "hard";
let yaPreguntadas = [];

let stopTimer = false;
let seconds = 20;
let continueBtn = document.getElementById("continue-button");

let corrects = 0;
let incorrects = 0;
let skipped = 0;
let alreadyAnswered = false;

function selectRandomQuestion() {
  let cantidadPreguntas = categorys[categoriaElegida][dificultadElegida].length;
  let random = 0;
  do {
    random = Math.floor(Math.random() * cantidadPreguntas);
  } while (yaPreguntadas.includes(random));
  yaPreguntadas.push(random);
  let question = Object.keys(
    categorys[categoriaElegida][dificultadElegida][random]
  )[0];
  return question;
}

function showQuestion(question) {
  let container = document.querySelector(".question");
  container.textContent = question;
  return;
}

function showAnswers(question) {
  let questionData = getQuestion(question);
  let correctAnswer = questionData[question].correct;
  let incorrectAnswers = questionData[question].incorrect;
  let allAnswers = [correctAnswer, ...incorrectAnswers];

  allAnswers = shuffle(allAnswers);

  for (let i = 0; i < allAnswers.length; i++) {
    let answerDiv = document.getElementById("answer-" + (i + 1));
    answerDiv.querySelector("p").textContent = allAnswers[i];
  }
  return;
}

function shuffle(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    let temporary = answers[i];
    answers[i] = answers[rand];
    answers[rand] = temporary;
  }
  return answers;
}

function loadButtons() {
  let buttons = document.querySelectorAll(".answer");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (!alreadyAnswered) {
        alreadyAnswered = true;
        let answer = button.textContent;
        let question = document.querySelector(".question").textContent;
        isCorrect(answer, question, button);
        stopTimer = true;
        changeButton();
      }
    });
  });
}
function getQuestion(question) {
  let questionData = categorys[categoriaElegida][dificultadElegida].find(
    function (searchedQuestion) {
      return Object.keys(searchedQuestion)[0] === question;
    }
  );
  return questionData;
}
function isCorrect(answer, question, button) {
  let questionData = getQuestion(question);
  let index =
    categorys[categoriaElegida][dificultadElegida].indexOf(questionData);
  if (
    answer.trim() ===
    categorys[categoriaElegida][dificultadElegida][index][
      question
    ].correct.toString()
  ) {
    button.style.backgroundColor = "#b4ec68";
    corrects++;
  } else {
    console.log("incorrecto");
    button.style.backgroundColor = "#d23232";
    incorrects++;
  }
  return;
}

function loadQuiz() {
  let question = selectRandomQuestion();
  showQuestion(question);
  showAnswers(question);
  alreadyAnswered = false;
  return;
}

function runOutOfTime() {
  alreadyAnswered = true;
  console.log("sin tiempo");
  changeButton();
  return;
}
function restartTime() {
  stopTimer = false;
  seconds = 20;
  setTimer();
  return;
}
function setTimer() {
  let timer = document.getElementById("timer");
  if (seconds >= 0 && !stopTimer) {
    timer.textContent = seconds;
    seconds--;
    manageTimer();
  } else if (!stopTimer) {
    runOutOfTime();
  }
  return;
}

function manageTimer() {
  if (seconds >= -1) {
    setTimeout(setTimer, 1000);
  }
  return;
}

function changeButton() {
  continueBtn.classList.toggle("next-answer-button");
  continueBtn.classList.toggle("skip-answer-button");
  continueBtn.textContent = "Next";
  return;
}

continueBtn.addEventListener("click", function () {
  loadQuiz();
  restartTime();
  if (continueBtn.textContent.trim() === "Skip") {
    skipped++;
    console.log("skipeada");
  }
  if (continueBtn.textContent.trim() === "Next") {
    changeButton();
    continueBtn.textContent = "Skip";
  }
});

window.addEventListener("load", function () {
  setTimer();
  loadButtons();
  loadQuiz();
});