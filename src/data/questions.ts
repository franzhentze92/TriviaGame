export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  category: 'soil' | 'plant' | 'animal' | 'human' | 'planetary';
  difficulty: 'easy' | 'medium' | 'hard';
  explanation: string;
}

export const questions: Question[] = [
  // --- SOIL HEALTH: EASY ---
  {
    id: 'soil-1',
    text: 'What is soil made of?',
    options: ['Only rocks', 'Water and air only', 'Minerals, organic matter, water, and air', 'Just sand'],
    correctAnswer: 2,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Soil is a mixture of minerals, organic matter, water, and air.'
  },
  {
    id: 'soil-2',
    text: 'Which animal helps make soil healthy by breaking down dead plants?',
    options: ['Earthworm', 'Butterfly', 'Cat', 'Bird'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Earthworms break down dead plants and enrich the soil.'
  },
  {
    id: 'soil-3',
    text: 'What color is healthy soil often?',
    options: ['Bright blue', 'Dark brown or black', 'Pink', 'White'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Healthy soil is usually dark brown or black due to organic matter.'
  },
  {
    id: 'soil-4',
    text: 'What do plants get from soil?',
    options: ['Music', 'Nutrients and water', 'Light', 'Air only'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Plants absorb nutrients and water from the soil.'
  },
  {
    id: 'soil-5',
    text: 'Which of these is NOT found in soil?',
    options: ['Rocks', 'Plastic', 'Water', 'Air'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Plastic is not a natural part of healthy soil.'
  },
  {
    id: 'soil-6',
    text: 'What do we call the top layer of soil?',
    options: ['Bedrock', 'Topsoil', 'Mantle', 'Lava'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Topsoil is the uppermost layer of soil, rich in organic matter.'
  },
  {
    id: 'soil-7',
    text: 'Which tool is used to dig soil?',
    options: ['Spoon', 'Shovel', 'Pen', 'Brush'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'A shovel is commonly used to dig soil.'
  },
  {
    id: 'soil-8',
    text: 'What helps prevent soil from blowing away?',
    options: ['Trees and plants', 'Cars', 'Plastic bags', 'Loud noises'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Trees and plants hold soil in place with their roots.'
  },
  {
    id: 'soil-9',
    text: 'What is compost?',
    options: ['Old food and plants that turn into soil', 'Plastic waste', 'Rocks', 'Metal'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Compost is decomposed organic matter that enriches soil.'
  },
  {
    id: 'soil-10',
    text: 'Why do farmers add manure to soil?',
    options: ['To make it smell nice', 'To add nutrients', 'To make it hard', 'To dry it out'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Manure adds nutrients to the soil, helping plants grow.'
  },
  // --- SOIL HEALTH: EASY (ADDED) ---
  {
    id: 'soil-11',
    text: 'What is the main purpose of soil for plants?',
    options: ['To provide a place to play', 'To give nutrients and support', 'To keep them dry', 'To make them colorful'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Soil provides nutrients and physical support for plants to grow.'
  },
  {
    id: 'soil-12',
    text: 'Which of these is a living thing found in healthy soil?',
    options: ['Earthworm', 'Plastic bag', 'Glass', 'Metal can'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Earthworms are living creatures that help keep soil healthy.'
  },
  {
    id: 'soil-13',
    text: 'What do roots do in the soil?',
    options: ['Fly in the air', 'Absorb water and nutrients', 'Make noise', 'Glow in the dark'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Roots absorb water and nutrients from the soil for the plant.'
  },
  {
    id: 'soil-14',
    text: 'Which of these helps soil stay moist?',
    options: ['Mulch', 'Plastic', 'Rocks', 'Paper'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Mulch helps soil retain moisture and stay cool.'
  },
  {
    id: 'soil-15',
    text: 'What is a sign of healthy soil?',
    options: ['Lots of worms', 'No plants', 'Dry and cracked', 'Covered in trash'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Healthy soil often has many worms and other small creatures.'
  },
  {
    id: 'soil-16',
    text: 'Why should we avoid stepping on garden soil too much?',
    options: ['It makes it dirty', 'It compacts the soil', 'It makes it colorful', 'It makes it wet'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Stepping on soil too much compacts it, making it hard for roots to grow.'
  },
  {
    id: 'soil-17',
    text: 'What is the best way to add nutrients to soil?',
    options: ['Add compost', 'Add plastic', 'Add sand', 'Add stones'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Compost adds nutrients and organic matter to soil.'
  },
  {
    id: 'soil-18',
    text: 'Which of these is a type of soil?',
    options: ['Clay', 'Glass', 'Plastic', 'Metal'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Clay is a type of soil with small particles.'
  },
  {
    id: 'soil-19',
    text: 'What do you call soil that is good for growing plants?',
    options: ['Fertile', 'Sticky', 'Hard', 'Dry'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Fertile soil is rich in nutrients and good for growing plants.'
  },
  {
    id: 'soil-20',
    text: 'What can you add to soil to help plants grow better?',
    options: ['Fertilizer', 'Paint', 'Plastic', 'Sandpaper'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Fertilizer adds nutrients to soil, helping plants grow.'
  },
  {
    id: 'soil-21',
    text: 'What is soil erosion?',
    options: ['Soil being washed or blown away', 'Soil turning into water', 'Soil growing plants', 'Soil making noise'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Soil erosion is when soil is carried away by wind or water.'
  },
  {
    id: 'soil-22',
    text: 'Which of these helps keep soil healthy?',
    options: ['Planting cover crops', 'Leaving soil bare', 'Adding trash', 'Pouring oil'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Cover crops protect and enrich the soil.'
  },
  {
    id: 'soil-23',
    text: 'What is the main ingredient in sandy soil?',
    options: ['Sand', 'Clay', 'Plastic', 'Metal'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Sandy soil is made mostly of sand particles.'
  },
  {
    id: 'soil-24',
    text: 'Why do gardeners test soil?',
    options: ['To check nutrients and pH', 'To see if it is tasty', 'To make it colorful', 'To make it noisy'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Testing soil helps gardeners know what nutrients or changes are needed.'
  },
  {
    id: 'soil-25',
    text: 'What is the best way to keep soil from drying out?',
    options: ['Water it and use mulch', 'Add rocks', 'Add plastic', 'Leave it bare'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Watering and using mulch help keep soil moist.'
  },
  {
    id: 'soil-26',
    text: 'What do you call soil that is too wet and sticky?',
    options: ['Clay', 'Sand', 'Gravel', 'Dust'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Clay soil is often wet and sticky.'
  },
  {
    id: 'soil-27',
    text: 'What is the main job of soil in a garden?',
    options: ['Support and feed plants', 'Make noise', 'Grow rocks', 'Hold water only'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Soil supports plants and provides them with nutrients and water.'
  },
  {
    id: 'soil-28',
    text: 'Which of these is a benefit of earthworms in soil?',
    options: ['They make tunnels that help air and water move', 'They eat plants', 'They make soil hard', 'They dry out the soil'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Earthworms make tunnels that help air and water move through soil.'
  },
  {
    id: 'soil-29',
    text: 'What is the best way to keep soil healthy?',
    options: ['Add organic matter', 'Add plastic', 'Add salt', 'Add paint'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Adding organic matter like compost keeps soil healthy.'
  },
  {
    id: 'soil-30',
    text: 'What happens if soil is too hard?',
    options: ['Roots have trouble growing', 'Plants grow faster', 'Soil gets lighter', 'Soil turns blue'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Hard soil makes it difficult for roots to grow and for water to move.'
  },
  // --- SOIL HEALTH: EASY (ADDED 2) ---
  {
    id: 'soil-31',
    text: 'What is the main reason plants need soil?',
    options: ['To get nutrients and water', 'To fly', 'To make noise', 'To glow'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Soil provides plants with nutrients and water they need to grow.'
  },
  {
    id: 'soil-32',
    text: 'Which of these is a sign of poor soil health?',
    options: ['Few plants growing', 'Lots of worms', 'Dark color', 'Moisture'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'If few plants grow, the soil may be unhealthy.'
  },
  {
    id: 'soil-33',
    text: 'What do you call the process of adding dead plants to soil to help it?',
    options: ['Composting', 'Painting', 'Sweeping', 'Washing'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Composting adds nutrients to soil by breaking down dead plants.'
  },
  {
    id: 'soil-34',
    text: 'Which of these is NOT a type of soil?',
    options: ['Chocolate', 'Clay', 'Sand', 'Silt'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Chocolate is not a type of soil.'
  },
  {
    id: 'soil-35',
    text: 'What is the best way to keep soil from washing away?',
    options: ['Plant grass or trees', 'Remove all plants', 'Add plastic', 'Dig holes'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Plants help hold soil in place and prevent erosion.'
  },
  {
    id: 'soil-36',
    text: 'What is the main job of earthworms in soil?',
    options: ['Make tunnels and break down matter', 'Eat leaves', 'Make noise', 'Fly'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Earthworms make tunnels and help break down organic matter.'
  },
  {
    id: 'soil-37',
    text: 'Which of these is a benefit of adding mulch to soil?',
    options: ['Keeps soil moist', 'Makes soil hard', 'Removes nutrients', 'Adds plastic'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Mulch helps soil retain moisture and stay cool.'
  },
  {
    id: 'soil-38',
    text: 'What is the best way to improve sandy soil?',
    options: ['Add compost or organic matter', 'Add more sand', 'Add plastic', 'Add rocks'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Adding compost improves sandy soil by helping it hold water and nutrients.'
  },
  {
    id: 'soil-39',
    text: 'What is the main ingredient in clay soil?',
    options: ['Tiny particles', 'Big rocks', 'Plastic', 'Glass'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Clay soil is made of very tiny particles.'
  },
  {
    id: 'soil-40',
    text: 'Why is it important to keep soil covered with plants or mulch?',
    options: ['To prevent erosion and keep moisture', 'To make it look pretty', 'To keep it cold', 'To attract animals'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Covering soil prevents erosion and helps retain moisture.'
  },
  {
    id: 'soil-41',
    text: 'What is the best way to test if soil is healthy?',
    options: ['Look for worms and plant growth', 'Check if it is dry', 'See if it is hard', 'Smell it'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Healthy soil usually has worms and lots of plant growth.'
  },
  {
    id: 'soil-42',
    text: 'What happens if you add too much water to soil?',
    options: ['It can drown plant roots', 'It makes plants grow faster', 'It adds nutrients', 'It makes soil disappear'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Too much water can drown plant roots and harm plants.'
  },
  {
    id: 'soil-43',
    text: 'Which of these is a natural way to add nutrients to soil?',
    options: ['Compost', 'Plastic', 'Paint', 'Glass'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Compost is a natural way to add nutrients to soil.'
  },
  {
    id: 'soil-44',
    text: 'What is the main job of soil in a forest?',
    options: ['Support trees and plants', 'Make noise', 'Grow rocks', 'Hold water only'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Soil supports trees and plants in a forest.'
  },
  {
    id: 'soil-45',
    text: 'What is the best way to keep soil from blowing away in the wind?',
    options: ['Plant grass or shrubs', 'Remove all plants', 'Add plastic', 'Dig holes'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Plants help hold soil in place and prevent wind erosion.'
  },
  {
    id: 'soil-46',
    text: 'What is the main reason to add compost to a garden?',
    options: ['To add nutrients', 'To make it hard', 'To dry it out', 'To add plastic'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Compost adds nutrients to the soil, helping plants grow.'
  },
  {
    id: 'soil-47',
    text: 'What is the best way to keep soil healthy in a garden?',
    options: ['Rotate crops', 'Plant the same thing every year', 'Add plastic', 'Add salt'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Rotating crops helps keep soil healthy and prevents disease.'
  },
  {
    id: 'soil-48',
    text: 'What is the main job of soil in a farm?',
    options: ['Support crops and provide nutrients', 'Make noise', 'Grow rocks', 'Hold water only'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Soil supports crops and provides them with nutrients and water.'
  },
  {
    id: 'soil-49',
    text: 'What is the best way to keep soil from getting too hard?',
    options: ['Add organic matter and avoid stepping on it', 'Add plastic', 'Add salt', 'Add paint'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Adding organic matter and avoiding compaction keeps soil loose and healthy.'
  },
  {
    id: 'soil-50',
    text: 'What is the main reason to keep soil healthy?',
    options: ['To grow strong plants', 'To make it colorful', 'To make it noisy', 'To attract animals'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'easy',
    explanation: 'Healthy soil is needed to grow strong, healthy plants.'
  },
  // --- SOIL HEALTH: MEDIUM ---
  {
    id: 'soil-51',
    text: 'What is the main function of mycorrhizal fungi in soil?',
    options: [
      'Help plants absorb nutrients',
      'Cause soil erosion',
      'Make soil dry',
      'Increase soil compaction'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Mycorrhizal fungi form symbiotic relationships with plant roots, helping them absorb nutrients.'
  },
  {
    id: 'soil-52',
    text: 'Which soil property is measured by a penetrometer?',
    options: [
      'Compaction',
      'Color',
      'pH',
      'Temperature'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'A penetrometer measures how compacted the soil is.'
  },
  {
    id: 'soil-53',
    text: 'What is the main cause of soil acidification?',
    options: [
      'Overuse of nitrogen fertilizers',
      'Adding compost',
      'Planting trees',
      'Using mulch'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Excessive use of nitrogen fertilizers can make soil more acidic.'
  },
  {
    id: 'soil-54',
    text: 'Which soil layer contains the most plant roots?',
    options: [
      'Topsoil',
      'Bedrock',
      'Subsoil',
      'Parent material'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Most plant roots are found in the topsoil layer.'
  },
  {
    id: 'soil-55',
    text: 'What is the main benefit of crop rotation for soil?',
    options: [
      'Prevents nutrient depletion',
      'Increases soil erosion',
      'Reduces soil moisture',
      'Makes soil harder'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Crop rotation helps maintain soil fertility and prevents nutrient depletion.'
  },
  {
    id: 'soil-56',
    text: 'Which element is essential for chlorophyll production in plants?',
    options: [
      'Magnesium',
      'Iron',
      'Calcium',
      'Sulfur'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Magnesium is a key component of chlorophyll.'
  },
  {
    id: 'soil-57',
    text: 'What is the main function of soil aggregates?',
    options: [
      'Improve soil structure and water movement',
      'Increase soil acidity',
      'Reduce soil fertility',
      'Make soil heavier'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Soil aggregates help water and air move through soil and improve structure.'
  },
  {
    id: 'soil-58',
    text: 'Which farming practice can lead to soil salinization?',
    options: [
      'Over-irrigation',
      'Crop rotation',
      'Adding compost',
      'Mulching'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Over-irrigation without proper drainage can cause salts to build up in soil.'
  },
  {
    id: 'soil-59',
    text: 'What is the main role of earthworms in soil?',
    options: [
      'Decompose organic matter',
      'Eat plant roots',
      'Increase soil acidity',
      'Reduce soil moisture'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Earthworms break down organic matter and improve soil structure.'
  },
  {
    id: 'soil-60',
    text: 'Which soil property affects how much water it can hold?',
    options: [
      'Texture',
      'Color',
      'Smell',
      'Temperature'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Soil texture (sand, silt, clay) determines water-holding capacity.'
  },
  {
    id: 'soil-61',
    text: 'What is the main cause of nutrient leaching in soil?',
    options: [
      'Excessive rainfall or irrigation',
      'Adding mulch',
      'Planting cover crops',
      'Using compost'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Too much water can wash nutrients out of the soil.'
  },
  {
    id: 'soil-62',
    text: 'Which soil organism is important for nitrogen fixation?',
    options: [
      'Rhizobium bacteria',
      'Earthworms',
      'Ants',
      'Beetles'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Rhizobium bacteria fix nitrogen in the soil, making it available to plants.'
  },
  {
    id: 'soil-63',
    text: 'What is the main function of humus in soil?',
    options: [
      'Retain moisture and nutrients',
      'Increase soil temperature',
      'Make soil acidic',
      'Reduce plant growth'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Humus helps soil retain moisture and nutrients.'
  },
  {
    id: 'soil-64',
    text: 'Which soil type is best for growing most crops?',
    options: [
      'Loam',
      'Clay',
      'Sand',
      'Gravel'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Loam is a balanced soil type ideal for most crops.'
  },
  {
    id: 'soil-65',
    text: 'What is the main effect of soil compaction?',
    options: [
      'Reduces air and water movement',
      'Increases plant growth',
      'Makes soil lighter',
      'Adds nutrients'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Compacted soil has less space for air and water, making it harder for plants to grow.'
  },
  {
    id: 'soil-66',
    text: 'Which process describes the breakdown of rocks into soil?',
    options: [
      'Weathering',
      'Photosynthesis',
      'Evaporation',
      'Respiration'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Weathering is the process that breaks down rocks into soil.'
  },
  {
    id: 'soil-67',
    text: 'What is the main benefit of adding organic matter to soil?',
    options: [
      'Improves soil structure and fertility',
      'Makes soil harder',
      'Reduces plant growth',
      'Increases soil acidity'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Organic matter improves soil structure and fertility.'
  },
  {
    id: 'soil-68',
    text: 'Which soil property is measured by a pH meter?',
    options: [
      'Acidity or alkalinity',
      'Color',
      'Texture',
      'Temperature'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'A pH meter measures how acidic or alkaline the soil is.'
  },
  {
    id: 'soil-69',
    text: 'What is the main cause of soil erosion?',
    options: [
      'Wind and water movement',
      'Adding compost',
      'Planting trees',
      'Using mulch'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Wind and water can carry soil away, causing erosion.'
  },
  {
    id: 'soil-70',
    text: 'Which farming practice helps prevent soil erosion?',
    options: [
      'Contour plowing',
      'Overgrazing',
      'Monoculture',
      'Deforestation'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Contour plowing helps prevent soil erosion on slopes.'
  },
  {
    id: 'soil-71',
    text: 'Which mineral is most important for root development in plants?',
    options: ['Phosphorus', 'Iron', 'Potassium', 'Zinc'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Phosphorus is essential for strong root growth in plants.'
  },
  {
    id: 'soil-72',
    text: 'What is the main function of soil microorganisms?',
    options: ['Decompose organic matter', 'Increase soil compaction', 'Reduce soil fertility', 'Make soil dry'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Soil microorganisms break down organic matter and recycle nutrients.'
  },
  {
    id: 'soil-73',
    text: 'Which soil amendment is used to raise soil pH?',
    options: ['Lime', 'Sulfur', 'Compost', 'Sand'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Lime is commonly used to make soil less acidic (raise pH).'
  },
  {
    id: 'soil-74',
    text: 'What is the main cause of soil nutrient depletion?',
    options: ['Continuous cropping without replenishment', 'Adding compost', 'Planting cover crops', 'Using mulch'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Growing crops repeatedly without adding nutrients depletes soil fertility.'
  },
  {
    id: 'soil-75',
    text: 'Which soil property is most affected by organic matter?',
    options: ['Water retention', 'Color', 'Temperature', 'Slope'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Organic matter helps soil retain water.'
  },
  {
    id: 'soil-76',
    text: 'What is the main benefit of reduced tillage farming?',
    options: ['Preserves soil structure and reduces erosion', 'Increases soil compaction', 'Removes nutrients', 'Makes soil dry'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Reduced tillage helps maintain soil structure and prevents erosion.'
  },
  {
    id: 'soil-77',
    text: 'Which soil type is most likely to become waterlogged?',
    options: ['Clay', 'Sand', 'Loam', 'Silt'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Clay soils have small particles and can easily become waterlogged.'
  },
  {
    id: 'soil-78',
    text: 'What is the main function of gypsum as a soil amendment?',
    options: ['Improves soil structure and drainage', 'Raises soil pH', 'Adds nitrogen', 'Increases soil compaction'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Gypsum helps improve soil structure and drainage, especially in clay soils.'
  },
  {
    id: 'soil-79',
    text: 'Which process describes the movement of water downward through soil?',
    options: ['Percolation', 'Evaporation', 'Photosynthesis', 'Respiration'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Percolation is the movement of water through soil layers.'
  },
  {
    id: 'soil-80',
    text: 'What is the main effect of excessive fertilizer use on soil?',
    options: ['Can lead to nutrient runoff and pollution', 'Improves soil structure', 'Reduces soil erosion', 'Makes soil more acidic'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Too much fertilizer can cause nutrients to run off into water bodies, causing pollution.'
  },
  {
    id: 'soil-81',
    text: 'Which soil property is measured by a soil thermometer?',
    options: ['Temperature', 'pH', 'Texture', 'Color'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'A soil thermometer measures the temperature of the soil.'
  },
  {
    id: 'soil-82',
    text: 'What is the main benefit of using cover crops?',
    options: ['Protects soil from erosion and adds organic matter', 'Increases soil compaction', 'Removes nutrients', 'Makes soil dry'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Cover crops protect soil and add organic matter when they decompose.'
  },
  {
    id: 'soil-83',
    text: 'Which element is a secondary macronutrient for plants?',
    options: ['Calcium', 'Nitrogen', 'Phosphorus', 'Potassium'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Calcium is a secondary macronutrient important for plant growth.'
  },
  {
    id: 'soil-84',
    text: 'What is the main function of soil pores?',
    options: ['Allow air and water movement', 'Increase soil compaction', 'Reduce plant growth', 'Make soil dry'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Soil pores are spaces that allow air and water to move through soil.'
  },
  {
    id: 'soil-85',
    text: 'Which soil property is most important for seed germination?',
    options: ['Moisture', 'Color', 'Slope', 'Smell'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Seeds need moisture in the soil to germinate.'
  },
  {
    id: 'soil-86',
    text: 'What is the main cause of soil crusting?',
    options: ['Heavy rain on bare soil', 'Adding mulch', 'Planting cover crops', 'Using compost'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Heavy rain on bare soil can cause a hard crust to form on the surface.'
  },
  {
    id: 'soil-87',
    text: 'Which soil property is measured by a soil test kit?',
    options: ['Nutrient content', 'Color', 'Slope', 'Temperature'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Soil test kits measure the nutrient content of soil.'
  },
  {
    id: 'soil-88',
    text: 'What is the main function of soil bacteria?',
    options: ['Decompose organic matter and recycle nutrients', 'Increase soil compaction', 'Reduce soil fertility', 'Make soil dry'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Soil bacteria break down organic matter and recycle nutrients.'
  },
  {
    id: 'soil-89',
    text: 'Which soil type is best for drainage?',
    options: ['Sand', 'Clay', 'Loam', 'Silt'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Sandy soils have large particles and drain water quickly.'
  },
  {
    id: 'soil-90',
    text: 'What is the main benefit of adding mulch to soil?',
    options: ['Reduces evaporation and keeps soil moist', 'Increases soil compaction', 'Removes nutrients', 'Makes soil dry'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Mulch helps reduce evaporation and keeps soil moist.'
  },
  // --- SOIL HEALTH: HARD ---
  {
    id: 'soil-21',
    text: 'Which element is a micronutrient essential for plant growth in soil?',
    options: ['Iron', 'Oxygen', 'Carbon', 'Neon'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Iron is a micronutrient that plants need in small amounts.'
  },
  {
    id: 'soil-22',
    text: 'What is the Cation Exchange Capacity (CEC) of soil?',
    options: ["Soil's ability to hold onto nutrients", "Soil's color", "Soil's temperature", "Soil's smell"],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'CEC measures how well soil can retain and supply nutrients to plants.'
  },
  {
    id: 'soil-23',
    text: 'Which soil horizon contains the most organic material?',
    options: ['O horizon', 'C horizon', 'R horizon', 'B horizon'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'The O horizon is the top layer, rich in organic material.'
  },
  {
    id: 'soil-24',
    text: 'What is mycorrhiza?',
    options: ['A fungus that forms a symbiotic relationship with plant roots', 'A type of soil insect', 'A soil mineral', 'A farming tool'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Mycorrhizae are fungi that help plants absorb nutrients from soil.'
  },
  {
    id: 'soil-25',
    text: 'What is the main cause of soil salinization?',
    options: ['Over-irrigation with poor drainage', 'Planting trees', 'Adding compost', 'Using cover crops'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Over-irrigation without proper drainage can cause salts to build up in soil.'
  },
  {
    id: 'soil-26',
    text: 'Which process converts atmospheric nitrogen into a form plants can use?',
    options: ['Nitrogen fixation', 'Photosynthesis', 'Respiration', 'Erosion'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Nitrogen fixation turns nitrogen gas into plant-usable forms.'
  },
  {
    id: 'soil-27',
    text: 'What is leaching in soil science?',
    options: ['Loss of nutrients from soil by water movement', 'Addition of nutrients', 'Soil compaction', 'Soil aeration'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Leaching is when water carries nutrients away from the soil.'
  },
  {
    id: 'soil-28',
    text: 'Which soil organism is known for decomposing tough plant material like cellulose?',
    options: ['Fungi', 'Ants', 'Earthworms', 'Beetles'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Fungi are excellent at breaking down tough plant material.'
  },
  {
    id: 'soil-29',
    text: 'What is the main function of soil aggregates?',
    options: ['Improve soil structure and water infiltration', 'Make soil heavier', 'Increase soil temperature', 'Add color to soil'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Soil aggregates help water move through soil and improve structure.'
  },
  {
    id: 'soil-30',
    text: 'What is biochar and how does it help soil?',
    options: ['Charcoal added to soil to improve fertility and carbon storage', 'A type of fertilizer', 'A soil pest', 'A plant disease'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Biochar is charcoal that improves soil fertility and stores carbon.'
  },
  // --- PLANT HEALTH: EASY (advanced) ---
  {
    id: 'plant-1',
    text: 'Which process allows plants to absorb water from the soil?',
    options: ['Transpiration', 'Osmosis', 'Photosynthesis', 'Respiration'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Osmosis is the process by which plants absorb water from the soil through their roots.'
  },
  {
    id: 'plant-2',
    text: 'What is the main function of stomata in plant leaves?',
    options: ['Absorb nutrients', 'Gas exchange', 'Anchor the plant', 'Store water'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Stomata are pores on leaves that allow for gas exchange (CO2 in, O2 out).'
  },
  {
    id: 'plant-3',
    text: 'Which macronutrient is most responsible for promoting root growth in plants?',
    options: ['Nitrogen', 'Phosphorus', 'Potassium', 'Calcium'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Phosphorus is essential for strong root development in plants.'
  },
  {
    id: 'plant-4',
    text: 'What is chlorosis in plants?',
    options: ['Wilting', 'Yellowing of leaves', 'Leaf drop', 'Root rot'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Chlorosis is the yellowing of leaves due to lack of chlorophyll.'
  },
  {
    id: 'plant-5',
    text: 'Which plant hormone is primarily responsible for cell elongation?',
    options: ['Auxin', 'Ethylene', 'Abscisic acid', 'Cytokinin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Auxin is the hormone that promotes cell elongation in plants.'
  },
  {
    id: 'plant-6',
    text: 'What is the function of xylem tissue?',
    options: ['Transport sugars', 'Transport water and minerals', 'Store starch', 'Protect against pests'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Xylem tissue transports water and minerals from roots to the rest of the plant.'
  },
  {
    id: 'plant-7',
    text: 'Which mineral deficiency causes blossom end rot in tomatoes?',
    options: ['Magnesium', 'Calcium', 'Iron', 'Nitrogen'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Calcium deficiency is the main cause of blossom end rot in tomatoes.'
  },
  {
    id: 'plant-8',
    text: 'What is the main symptom of powdery mildew on plants?',
    options: ['Black spots', 'White powdery coating', 'Wilting', 'Leaf curling'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Powdery mildew appears as a white, powdery coating on leaves and stems.'
  },
  {
    id: 'plant-9',
    text: 'Which part of the plant is responsible for photosynthesis?',
    options: ['Roots', 'Stems', 'Leaves', 'Flowers'],
    correctAnswer: 2,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Leaves contain chloroplasts, where photosynthesis occurs.'
  },
  {
    id: 'plant-10',
    text: 'What is the main role of potassium in plant health?',
    options: ['Root development', 'Disease resistance and water regulation', 'Flower color', 'Seed production'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Potassium helps regulate water and increases disease resistance in plants.'
  },
  // --- PLANT HEALTH: MEDIUM (expert) ---
  {
    id: 'plant-11',
    text: 'Which enzyme is essential for carbon fixation in the Calvin cycle?',
    options: ['Rubisco', 'Amylase', 'Catalase', 'Lipase'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Rubisco is the enzyme that catalyzes carbon fixation in the Calvin cycle.'
  },
  {
    id: 'plant-12',
    text: 'What is the main function of phloem tissue?',
    options: ['Water transport', 'Sugar transport', 'Support', 'Gas exchange'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Phloem tissue transports sugars produced in the leaves to other parts of the plant.'
  },
  {
    id: 'plant-13',
    text: 'Which plant hormone is involved in fruit ripening and leaf abscission?',
    options: ['Gibberellin', 'Ethylene', 'Auxin', 'Cytokinin'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Ethylene is a hormone that triggers fruit ripening and leaf drop.'
  },
  {
    id: 'plant-14',
    text: 'What is the primary cause of iron chlorosis in plants?',
    options: ['Low soil pH', 'High soil pH', 'Excess nitrogen', 'Overwatering'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'High soil pH can make iron unavailable to plants, causing chlorosis.'
  },
  {
    id: 'plant-15',
    text: 'Which structure in plant cells stores pigments, waste, and water?',
    options: ['Mitochondria', 'Vacuole', 'Nucleus', 'Ribosome'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The vacuole stores water, pigments, and waste products in plant cells.'
  },
  {
    id: 'plant-16',
    text: 'What is the main function of the Casparian strip in roots?',
    options: ['Prevents water loss', 'Controls uptake of minerals into the xylem', 'Stores starch', 'Supports root hairs'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The Casparian strip regulates the flow of minerals into the xylem.'
  },
  {
    id: 'plant-17',
    text: 'Which nutrient is most likely to leach from sandy soils, causing plant deficiency?',
    options: ['Potassium', 'Nitrogen', 'Calcium', 'Iron'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Nitrogen is highly soluble and easily leaches from sandy soils.'
  },
  {
    id: 'plant-18',
    text: 'What is allelopathy?',
    options: ['Plant disease', 'Chemical inhibition of one plant by another', 'Insect pollination', 'Root nodulation'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Allelopathy is when one plant releases chemicals that inhibit the growth of another.'
  },
  {
    id: 'plant-19',
    text: 'Which plant structure is responsible for gravitropism?',
    options: ['Stomata', 'Amyloplasts', 'Chloroplasts', 'Xylem'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Amyloplasts in root cells help plants sense gravity.'
  },
  {
    id: 'plant-20',
    text: 'What is the main function of lignin in plant cell walls?',
    options: ['Flexibility', 'Water transport', 'Structural strength and rigidity', 'Energy storage'],
    correctAnswer: 2,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Lignin provides structural strength and rigidity to plant cell walls.'
  },
  // --- PLANT HEALTH: HARD (expert) ---
  {
    id: 'plant-21',
    text: 'Which gene family is primarily responsible for disease resistance in plants?',
    options: ['MADS-box genes', 'NBS-LRR genes', 'MYB genes', 'WRKY genes'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'NBS-LRR genes are a major class of disease resistance genes in plants.'
  },
  {
    id: 'plant-22',
    text: 'What is the role of the apoplast in plant nutrient transport?',
    options: ['Symplastic movement', 'Extracellular movement of water and solutes', 'DNA replication', 'Hormone synthesis'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'The apoplast is the network of cell walls and intercellular spaces through which water and solutes move.'
  },
  {
    id: 'plant-23',
    text: 'Which process describes the movement of sugars from source to sink in plants?',
    options: ['Transpiration', 'Pressure-flow hypothesis', 'Diffusion', 'Capillarity'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'The pressure-flow hypothesis explains how sugars move from source to sink in phloem.'
  },
  {
    id: 'plant-24',
    text: 'What is the function of the enzyme nitrate reductase in plants?',
    options: ['Converts nitrate to nitrite', 'Fixes atmospheric nitrogen', 'Synthesizes amino acids', 'Breaks down proteins'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Nitrate reductase converts nitrate (NO3-) to nitrite (NO2-) in plants.'
  },
  {
    id: 'plant-25',
    text: 'Which signaling molecule is involved in systemic acquired resistance (SAR) in plants?',
    options: ['Salicylic acid', 'Abscisic acid', 'Auxin', 'Cytokinin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Salicylic acid is a key signaling molecule in SAR.'
  },
  {
    id: 'plant-26',
    text: 'What is the main function of plasmodesmata in plant cells?',
    options: ['Store water', 'Facilitate cell-to-cell communication', 'Photosynthesis', 'Anchor the cell'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Plasmodesmata are channels that allow communication and transport between plant cells.'
  },
  {
    id: 'plant-27',
    text: 'Which mineral is a cofactor for the enzyme superoxide dismutase in plants?',
    options: ['Zinc', 'Copper', 'Manganese', 'All of the above'],
    correctAnswer: 3,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Zinc, copper, and manganese can all act as cofactors for superoxide dismutase.'
  },
  {
    id: 'plant-28',
    text: 'What is the main effect of gibberellin deficiency in plants?',
    options: ['Dwarfism', 'Leaf yellowing', 'Root rot', 'Early flowering'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Gibberellin deficiency leads to dwarfism due to reduced cell elongation.'
  },
  {
    id: 'plant-29',
    text: 'Which pathogen type causes downy mildew in plants?',
    options: ['Fungus', 'Oomycete', 'Bacterium', 'Virus'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Downy mildew is caused by oomycetes, not true fungi.'
  },
  {
    id: 'plant-30',
    text: 'What is the function of phytochrome in plants?',
    options: ['Detects gravity', 'Senses light and regulates photoperiodism', 'Stores starch', 'Produces chlorophyll'],
    correctAnswer: 1,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Phytochrome is a photoreceptor that senses red/far-red light and regulates photoperiodism.'
  },
  // --- ANIMAL HEALTH: EASY (advanced) ---
  {
    id: 'animal-1',
    text: 'Which organ is primarily responsible for detoxification in mammals?',
    options: ['Heart', 'Liver', 'Kidney', 'Lung'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'easy',
    explanation: 'The liver is the main organ for detoxification in mammals.'
  },
  {
    id: 'animal-2',
    text: 'What is the main function of hemoglobin in blood?',
    options: ['Fight infection', 'Carry oxygen', 'Digest food', 'Produce hormones'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'easy',
    explanation: 'Hemoglobin carries oxygen from the lungs to the body tissues.'
  },
  {
    id: 'animal-3',
    text: 'Which mineral is essential for strong bones and teeth in animals?',
    options: ['Iron', 'Calcium', 'Sodium', 'Potassium'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'easy',
    explanation: 'Calcium is vital for bone and teeth strength.'
  },
  {
    id: 'animal-4',
    text: 'What is the primary symptom of anemia in animals?',
    options: ['Hair loss', 'Pale gums', 'Coughing', 'Excessive thirst'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'easy',
    explanation: 'Pale gums are a common sign of anemia.'
  },
  {
    id: 'animal-5',
    text: 'Which vitamin is necessary for blood clotting?',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin K', 'Vitamin D'],
    correctAnswer: 2,
    category: 'animal',
    difficulty: 'easy',
    explanation: 'Vitamin K is essential for the blood clotting process.'
  },
  {
    id: 'animal-6',
    text: 'What is the function of white blood cells?',
    options: ['Carry oxygen', 'Fight infection', 'Store fat', 'Produce energy'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'easy',
    explanation: 'White blood cells are part of the immune system and fight infection.'
  },
  {
    id: 'animal-7',
    text: 'Which organ system is responsible for hormone production?',
    options: ['Digestive', 'Endocrine', 'Respiratory', 'Muscular'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'easy',
    explanation: 'The endocrine system produces hormones.'
  },
  {
    id: 'animal-8',
    text: 'What is the main cause of rabies in animals?',
    options: ['Bacteria', 'Virus', 'Fungus', 'Parasite'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'easy',
    explanation: 'Rabies is caused by a virus.'
  },
  {
    id: 'animal-9',
    text: 'Which nutrient is most important for muscle development in animals?',
    options: ['Protein', 'Carbohydrate', 'Fat', 'Fiber'],
    correctAnswer: 0,
    category: 'animal',
    difficulty: 'easy',
    explanation: 'Protein is essential for muscle growth and repair.'
  },
  {
    id: 'animal-10',
    text: 'What is the normal body temperature range for most mammals (in Celsius)?',
    options: ['30–32°C', '35–37°C', '38–39°C', '42–44°C'],
    correctAnswer: 2,
    category: 'animal',
    difficulty: 'easy',
    explanation: 'Most mammals have a normal body temperature of 38–39°C.'
  },
  // --- ANIMAL HEALTH: MEDIUM (expert) ---
  {
    id: 'animal-11',
    text: 'Which antibody class is most abundant in mammalian blood?',
    options: ['IgA', 'IgG', 'IgM', 'IgE'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'medium',
    explanation: 'IgG is the most abundant antibody in blood.'
  },
  {
    id: 'animal-12',
    text: 'What is the function of the spleen in animals?',
    options: ['Produce insulin', 'Filter blood and recycle red blood cells', 'Store bile', 'Absorb nutrients'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'medium',
    explanation: 'The spleen filters blood and recycles old red blood cells.'
  },
  {
    id: 'animal-13',
    text: 'Which disease is caused by a deficiency of thiamine (vitamin B1) in animals?',
    options: ['Rickets', 'Scurvy', 'Beriberi', 'Anemia'],
    correctAnswer: 2,
    category: 'animal',
    difficulty: 'medium',
    explanation: 'Beriberi is caused by a lack of vitamin B1.'
  },
  {
    id: 'animal-14',
    text: 'What is the main function of alveoli in the lungs?',
    options: ['Trap dust', 'Exchange gases', 'Produce mucus', 'Move air'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'medium',
    explanation: 'Alveoli are the site of gas exchange in the lungs.'
  },
  {
    id: 'animal-15',
    text: 'Which parasite causes heartworm disease in dogs?',
    options: ['Tapeworm', 'Roundworm', 'Dirofilaria immitis', 'Hookworm'],
    correctAnswer: 2,
    category: 'animal',
    difficulty: 'medium',
    explanation: 'Dirofilaria immitis is the parasite that causes heartworm.'
  },
  {
    id: 'animal-16',
    text: 'What is the primary role of insulin in animal metabolism?',
    options: ['Break down proteins', 'Regulate blood sugar', 'Absorb calcium', 'Produce bile'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'medium',
    explanation: 'Insulin regulates blood sugar levels.'
  },
  {
    id: 'animal-17',
    text: 'Which organ produces bile for fat digestion?',
    options: ['Pancreas', 'Liver', 'Stomach', 'Spleen'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'medium',
    explanation: 'The liver produces bile for fat digestion.'
  },
  {
    id: 'animal-18',
    text: 'What is the main symptom of hypocalcemia in dairy cows?',
    options: ['Aggression', 'Milk fever', 'Blindness', 'Hair loss'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'medium',
    explanation: 'Milk fever is a symptom of hypocalcemia (low blood calcium) in dairy cows.'
  },
  {
    id: 'animal-19',
    text: 'Which hormone triggers milk letdown in mammals?',
    options: ['Prolactin', 'Oxytocin', 'Estrogen', 'Testosterone'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'medium',
    explanation: 'Oxytocin triggers milk letdown.'
  },
  {
    id: 'animal-20',
    text: 'What is the function of the myelin sheath in animal nerves?',
    options: ['Protects the heart', 'Speeds up nerve impulses', 'Produces hormones', 'Stores fat'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'medium',
    explanation: 'The myelin sheath insulates nerves and speeds up impulses.'
  },
  // --- ANIMAL HEALTH: HARD (expert) ---
  {
    id: 'animal-21',
    text: 'Which gene is commonly mutated in canine degenerative myelopathy?',
    options: ['SOD1', 'BRCA1', 'CFTR', 'TP53'],
    correctAnswer: 0,
    category: 'animal',
    difficulty: 'hard',
    explanation: 'SOD1 gene mutations are linked to canine degenerative myelopathy.'
  },
  {
    id: 'animal-22',
    text: 'What is the main function of the renin-angiotensin system in animals?',
    options: ['Regulate blood pressure and fluid balance', 'Control digestion', 'Produce red blood cells', 'Regulate body temperature'],
    correctAnswer: 0,
    category: 'animal',
    difficulty: 'hard',
    explanation: 'The renin-angiotensin system regulates blood pressure and fluid balance.'
  },
  {
    id: 'animal-23',
    text: "Which pathogen causes Johne's disease in cattle?",
    options: ['Mycobacterium avium subspecies paratuberculosis', 'Escherichia coli', 'Salmonella enterica', 'Pasteurella multocida'],
    correctAnswer: 0,
    category: 'animal',
    difficulty: 'hard',
    explanation: "Johne's disease is caused by Mycobacterium avium subspecies paratuberculosis."
  },
  {
    id: 'animal-24',
    text: 'What is the role of surfactant in the lungs?',
    options: ['Absorb oxygen', 'Reduce surface tension in alveoli', 'Trap pathogens', 'Produce mucus'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'hard',
    explanation: 'Surfactant reduces surface tension in the alveoli, preventing collapse.'
  },
  {
    id: 'animal-25',
    text: 'Which vitamin acts as a cofactor for the synthesis of collagen in animals?',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'hard',
    explanation: 'Vitamin C is required for collagen synthesis.'
  },
  {
    id: 'animal-26',
    text: 'What is the function of the loop of Henle in the kidney?',
    options: ['Filter blood', 'Concentrate urine', 'Produce hormones', 'Absorb nutrients'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'hard',
    explanation: 'The loop of Henle concentrates urine by reabsorbing water and salts.'
  },
  {
    id: 'animal-27',
    text: 'Which hormone is responsible for stimulating red blood cell production?',
    options: ['Insulin', 'Erythropoietin', 'Cortisol', 'Thyroxine'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'hard',
    explanation: 'Erythropoietin stimulates red blood cell production.'
  },
  {
    id: 'animal-28',
    text: 'What is the main cause of ketosis in dairy cows?',
    options: ['Excess protein', 'Negative energy balance', 'Vitamin deficiency', 'Dehydration'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'hard',
    explanation: 'Ketosis is caused by a negative energy balance, often in high-producing dairy cows.'
  },
  {
    id: 'animal-29',
    text: 'Which immune cells are responsible for producing antibodies?',
    options: ['T cells', 'B cells', 'Macrophages', 'Neutrophils'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'hard',
    explanation: 'B cells are responsible for antibody production.'
  },
  {
    id: 'animal-30',
    text: 'What is the function of the sinoatrial (SA) node in the heart?',
    options: ['Pump blood', 'Initiate the heartbeat (pacemaker)', 'Filter blood', 'Produce white blood cells'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'hard',
    explanation: 'The SA node is the pacemaker of the heart, initiating each heartbeat.'
  },
  {
    id: '7',
    text: 'Which gas do animals exhale that plants need?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
    correctAnswer: 2,
    category: 'animal',
    difficulty: 'easy',
    explanation: 'Animals exhale CO2 which plants use for photosynthesis.'
  },
  {
    id: '8',
    text: 'What is the normal body temperature for most mammals?',
    options: ['35°C', '37°C', '39°C', '41°C'],
    correctAnswer: 1,
    category: 'animal',
    difficulty: 'medium',
    explanation: '37°C (98.6°F) is the normal body temperature for mammals.'
  },
  {
    id: '9',
    text: 'Which animal has the strongest bite force?',
    options: ['Lion', 'Shark', 'Crocodile', 'Hippo'],
    correctAnswer: 2,
    category: 'animal',
    difficulty: 'hard',
    explanation: 'Saltwater crocodiles have the strongest recorded bite force.'
  },
  {
    id: '10',
    text: 'What is the largest organ in the human body?',
    options: ['Heart', 'Brain', 'Liver', 'Skin'],
    correctAnswer: 3,
    category: 'human',
    difficulty: 'easy',
    explanation: 'The skin is the largest organ and protects our body.'
  },
  {
    id: '11',
    text: 'How many bones are in an adult human body?',
    options: ['186', '206', '226', '246'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'medium',
    explanation: 'Adults have 206 bones, fewer than babies who have about 270.'
  },
  {
    id: '12',
    text: 'Which part of the brain controls balance?',
    options: ['Cerebrum', 'Cerebellum', 'Brainstem', 'Hypothalamus'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'hard',
    explanation: 'The cerebellum is responsible for balance and coordination.'
  },
  {
    id: '13',
    text: 'What percentage of Earth is covered by water?',
    options: ['50%', '61%', '71%', '81%'],
    correctAnswer: 2,
    category: 'planetary',
    difficulty: 'easy',
    explanation: 'About 71% of Earth surface is covered by water.'
  },
  {
    id: '14',
    text: 'Which layer of atmosphere contains the ozone layer?',
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'medium',
    explanation: 'The ozone layer is located in the stratosphere.'
  },
  {
    id: '15',
    text: 'What is the main cause of ocean acidification?',
    options: ['Plastic pollution', 'CO2 absorption', 'Oil spills', 'Overfishing'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'hard',
    explanation: 'Ocean acidification is primarily caused by CO2 absorption from the atmosphere.'
  },
  // --- HUMAN HEALTH: EASY (advanced) ---
  {
    id: 'human-1',
    text: 'Which organ is primarily responsible for filtering blood in the human body?',
    options: ['Heart', 'Liver', 'Kidney', 'Lung'],
    correctAnswer: 2,
    category: 'human',
    difficulty: 'easy',
    explanation: 'The kidneys filter waste from the blood.'
  },
  {
    id: 'human-2',
    text: 'What is the main function of red blood cells?',
    options: ['Fight infection', 'Carry oxygen', 'Produce hormones', 'Store fat'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'easy',
    explanation: 'Red blood cells transport oxygen from the lungs to the body.'
  },
  {
    id: 'human-3',
    text: 'Which vitamin is essential for calcium absorption?',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
    correctAnswer: 2,
    category: 'human',
    difficulty: 'easy',
    explanation: 'Vitamin D is necessary for calcium absorption.'
  },
  {
    id: 'human-4',
    text: 'What is the normal pH range of human blood?',
    options: ['5.5–6.0', '6.8–7.0', '7.35–7.45', '8.0–8.5'],
    correctAnswer: 2,
    category: 'human',
    difficulty: 'easy',
    explanation: 'Normal blood pH is tightly regulated between 7.35 and 7.45.'
  },
  {
    id: 'human-5',
    text: 'Which mineral is most important for oxygen transport in blood?',
    options: ['Calcium', 'Iron', 'Sodium', 'Potassium'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'easy',
    explanation: 'Iron is a key component of hemoglobin for oxygen transport.'
  },
  {
    id: 'human-6',
    text: 'What is the function of insulin in the human body?',
    options: ['Break down proteins', 'Regulate blood sugar', 'Absorb calcium', 'Produce bile'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'easy',
    explanation: 'Insulin helps regulate blood glucose levels.'
  },
  {
    id: 'human-7',
    text: 'Which part of the brain controls balance and coordination?',
    options: ['Cerebrum', 'Cerebellum', 'Brainstem', 'Hypothalamus'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'easy',
    explanation: 'The cerebellum is responsible for balance and coordination.'
  },
  {
    id: 'human-8',
    text: 'What is the main function of the alveoli in the lungs?',
    options: ['Trap dust', 'Exchange gases', 'Produce mucus', 'Move air'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'easy',
    explanation: 'Alveoli are the site of gas exchange in the lungs.'
  },
  {
    id: 'human-9',
    text: 'Which hormone regulates the sleep-wake cycle?',
    options: ['Insulin', 'Melatonin', 'Cortisol', 'Adrenaline'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'easy',
    explanation: 'Melatonin regulates the sleep-wake cycle.'
  },
  {
    id: 'human-10',
    text: 'What is the largest organ in the human body?',
    options: ['Heart', 'Brain', 'Liver', 'Skin'],
    correctAnswer: 3,
    category: 'human',
    difficulty: 'easy',
    explanation: 'The skin is the largest organ in the human body.'
  },
  // --- HUMAN HEALTH: MEDIUM (expert) ---
  {
    id: 'human-11',
    text: 'Which enzyme breaks down starches in the human digestive system?',
    options: ['Lipase', 'Amylase', 'Pepsin', 'Trypsin'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'medium',
    explanation: 'Amylase breaks down starches into sugars.'
  },
  {
    id: 'human-12',
    text: 'What is the primary function of the lymphatic system?',
    options: ['Oxygen transport', 'Fat digestion', 'Immune defense and fluid balance', 'Hormone production'],
    correctAnswer: 2,
    category: 'human',
    difficulty: 'medium',
    explanation: 'The lymphatic system is involved in immune defense and fluid balance.'
  },
  {
    id: 'human-13',
    text: 'Which vitamin deficiency causes pernicious anemia?',
    options: ['Vitamin B1', 'Vitamin B6', 'Vitamin B12', 'Vitamin C'],
    correctAnswer: 2,
    category: 'human',
    difficulty: 'medium',
    explanation: 'Vitamin B12 deficiency leads to pernicious anemia.'
  },
  {
    id: 'human-14',
    text: 'What is the main function of the sinoatrial (SA) node in the heart?',
    options: ['Pump blood', 'Initiate the heartbeat (pacemaker)', 'Filter blood', 'Produce white blood cells'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'medium',
    explanation: 'The SA node is the pacemaker of the heart.'
  },
  {
    id: 'human-15',
    text: 'Which hormone is responsible for stimulating uterine contractions during childbirth?',
    options: ['Prolactin', 'Oxytocin', 'Estrogen', 'Progesterone'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'medium',
    explanation: 'Oxytocin stimulates uterine contractions during labor.'
  },
  {
    id: 'human-16',
    text: 'What is the function of the myelin sheath in neurons?',
    options: ['Store neurotransmitters', 'Speed up nerve impulses', 'Produce hormones', 'Absorb nutrients'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'medium',
    explanation: 'The myelin sheath insulates neurons and speeds up nerve impulses.'
  },
  {
    id: 'human-17',
    text: 'Which organ produces most of the digestive enzymes in the human body?',
    options: ['Stomach', 'Pancreas', 'Liver', 'Small intestine'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'medium',
    explanation: 'The pancreas produces most digestive enzymes.'
  },
  {
    id: 'human-18',
    text: 'What is the main function of platelets in blood?',
    options: ['Carry oxygen', 'Fight infection', 'Clot blood', 'Produce hormones'],
    correctAnswer: 2,
    category: 'human',
    difficulty: 'medium',
    explanation: 'Platelets are responsible for blood clotting.'
  },
  {
    id: 'human-19',
    text: 'Which structure in the kidney is responsible for filtering blood?',
    options: ['Nephron', 'Glomerulus', 'Loop of Henle', 'Collecting duct'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'medium',
    explanation: 'The glomerulus is the main filtering unit in the kidney.'
  },
  {
    id: 'human-20',
    text: 'What is the primary function of the hypothalamus?',
    options: ['Memory storage', 'Regulate homeostasis and hormone release', 'Control movement', 'Digest food'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'medium',
    explanation: 'The hypothalamus regulates homeostasis and hormone release.'
  },
  // --- HUMAN HEALTH: HARD (expert) ---
  {
    id: 'human-21',
    text: 'Which gene is most commonly mutated in cystic fibrosis?',
    options: ['BRCA1', 'CFTR', 'TP53', 'HBB'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'hard',
    explanation: 'CFTR gene mutations cause cystic fibrosis.'
  },
  {
    id: 'human-22',
    text: 'What is the main function of the hepatic portal vein?',
    options: ['Carry oxygenated blood to the liver', 'Transport nutrients from the gut to the liver', 'Remove waste from the liver', 'Supply bile to the gallbladder'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'hard',
    explanation: 'The hepatic portal vein transports nutrients from the digestive tract to the liver.'
  },
  {
    id: 'human-23',
    text: 'Which neurotransmitter is primarily involved in mood regulation and is targeted by many antidepressants?',
    options: ['Dopamine', 'Serotonin', 'Acetylcholine', 'GABA'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'hard',
    explanation: 'Serotonin is a key neurotransmitter in mood regulation.'
  },
  {
    id: 'human-24',
    text: 'What is the role of telomerase in human cells?',
    options: ['Repair DNA damage', 'Lengthen telomeres and maintain chromosome stability', 'Synthesize proteins', 'Regulate cell membrane'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'hard',
    explanation: 'Telomerase lengthens telomeres and helps maintain chromosome stability.'
  },
  {
    id: 'human-25',
    text: 'Which hormone is secreted by the pineal gland?',
    options: ['Melatonin', 'Insulin', 'Cortisol', 'Thyroxine'],
    correctAnswer: 0,
    category: 'human',
    difficulty: 'hard',
    explanation: 'The pineal gland secretes melatonin.'
  },
  {
    id: 'human-26',
    text: 'What is the function of the renin-angiotensin-aldosterone system (RAAS)?',
    options: ['Regulate blood pressure and fluid balance', 'Control digestion', 'Produce red blood cells', 'Regulate body temperature'],
    correctAnswer: 0,
    category: 'human',
    difficulty: 'hard',
    explanation: 'RAAS regulates blood pressure and fluid balance.'
  },
  {
    id: 'human-27',
    text: 'Which vitamin acts as a cofactor for the synthesis of collagen in humans?',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'hard',
    explanation: 'Vitamin C is required for collagen synthesis.'
  },
  {
    id: 'human-28',
    text: 'What is the main function of the HLA (human leukocyte antigen) system?',
    options: ['Oxygen transport', 'Immune system recognition', 'Hormone production', 'Blood clotting'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'hard',
    explanation: 'The HLA system is crucial for immune system recognition.'
  },
  {
    id: 'human-29',
    text: 'Which enzyme is deficient in people with phenylketonuria (PKU)?',
    options: ['Lactase', 'Phenylalanine hydroxylase', 'Amylase', 'Sucrase'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'hard',
    explanation: 'Phenylketonuria is caused by a deficiency of phenylalanine hydroxylase.'
  },
  {
    id: 'human-30',
    text: 'What is the primary function of the blood-brain barrier?',
    options: ['Produce cerebrospinal fluid', 'Protect the brain from toxins and pathogens', 'Transmit nerve impulses', 'Regulate body temperature'],
    correctAnswer: 1,
    category: 'human',
    difficulty: 'hard',
    explanation: 'The blood-brain barrier protects the brain from harmful substances.'
  },
  // --- PLANETARY HEALTH: EASY (advanced) ---
  {
    id: 'planetary-1',
    text: "Which gas is the most abundant in Earth's atmosphere?",
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'easy',
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
  },
  {
    id: 'planetary-2',
    text: 'What is the main cause of global sea level rise?',
    options: ['Volcanic eruptions', 'Melting glaciers and ice sheets', 'Earthquakes', 'Deforestation'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'easy',
    explanation: 'Melting glaciers and ice sheets add water to the oceans, raising sea levels.'
  },
  {
    id: 'planetary-3',
    text: 'Which process removes carbon dioxide from the atmosphere?',
    options: ['Respiration', 'Photosynthesis', 'Combustion', 'Erosion'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'easy',
    explanation: 'Photosynthesis by plants removes CO₂ from the atmosphere.'
  },
  {
    id: 'planetary-4',
    text: 'What is the primary greenhouse gas emitted by human activities?',
    options: ['Methane', 'Nitrous oxide', 'Carbon dioxide', 'Ozone'],
    correctAnswer: 2,
    category: 'planetary',
    difficulty: 'easy',
    explanation: 'Carbon dioxide is the main greenhouse gas from fossil fuel burning.'
  },
  {
    id: 'planetary-5',
    text: 'Which layer of the atmosphere contains the ozone layer?',
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'easy',
    explanation: 'The ozone layer is found in the stratosphere.'
  },
  {
    id: 'planetary-6',
    text: 'What is the main cause of ocean acidification?',
    options: ['Plastic pollution', 'CO₂ absorption', 'Oil spills', 'Overfishing'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'easy',
    explanation: 'Oceans absorb CO₂, which lowers pH and causes acidification.'
  },
  {
    id: 'planetary-7',
    text: 'Which ecosystem stores the most carbon per hectare?',
    options: ['Grassland', 'Boreal forest', 'Tropical rainforest', 'Wetland'],
    correctAnswer: 3,
    category: 'planetary',
    difficulty: 'easy',
    explanation: 'Wetlands store more carbon per hectare than any other ecosystem.'
  },
  {
    id: 'planetary-8',
    text: 'What is the largest source of renewable energy worldwide?',
    options: ['Solar', 'Wind', 'Hydropower', 'Geothermal'],
    correctAnswer: 2,
    category: 'planetary',
    difficulty: 'easy',
    explanation: 'Hydropower is the largest source of renewable energy globally.'
  },
  {
    id: 'planetary-9',
    text: 'Which human activity is the largest contributor to biodiversity loss?',
    options: ['Urbanization', 'Agriculture', 'Mining', 'Overfishing'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'easy',
    explanation: 'Agriculture is the leading cause of biodiversity loss.'
  },
  {
    id: 'planetary-10',
    text: 'What is the main cause of coral bleaching?',
    options: ['Overfishing', 'Rising sea temperatures', 'Oil spills', 'Plastic pollution'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'easy',
    explanation: 'Rising sea temperatures cause coral bleaching.'
  },
  // --- PLANETARY HEALTH: MEDIUM (expert) ---
  {
    id: 'planetary-11',
    text: 'Which protocol was established to phase out ozone-depleting substances?',
    options: ['Kyoto Protocol', 'Paris Agreement', 'Montreal Protocol', 'Rio Declaration'],
    correctAnswer: 2,
    category: 'planetary',
    difficulty: 'medium',
    explanation: 'The Montreal Protocol phased out ozone-depleting substances.'
  },
  {
    id: 'planetary-12',
    text: 'What is the main source of anthropogenic methane emissions?',
    options: ['Rice paddies', 'Landfills', 'Livestock', 'Coal mining'],
    correctAnswer: 2,
    category: 'planetary',
    difficulty: 'medium',
    explanation: 'Livestock are the largest source of methane emissions from human activity.'
  },
  {
    id: 'planetary-13',
    text: "Which country emits the most carbon dioxide annually?",
    options: ['United States', 'China', 'India', 'Russia'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'medium',
    explanation: "China is the world's largest emitter of CO₂."
  },
  {
    id: 'planetary-14',
    text: 'What is the main driver of ocean deoxygenation?',
    options: ['Oil spills', 'Nutrient pollution and warming', 'Overfishing', 'Plastic waste'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'medium',
    explanation: 'Nutrient pollution and warming reduce oxygen in the oceans.'
  },
  {
    id: 'planetary-15',
    text: 'Which chemical is most responsible for stratospheric ozone depletion?',
    options: ['Carbon dioxide', 'Methane', 'Chlorofluorocarbons (CFCs)', 'Nitrous oxide'],
    correctAnswer: 2,
    category: 'planetary',
    difficulty: 'medium',
    explanation: 'CFCs are the main cause of ozone depletion.'
  },
  {
    id: 'planetary-16',
    text: 'What is the main environmental impact of nitrogen fertilizer runoff?',
    options: ['Soil erosion', 'Ocean acidification', 'Eutrophication', 'Deforestation'],
    correctAnswer: 2,
    category: 'planetary',
    difficulty: 'medium',
    explanation: 'Nitrogen runoff causes eutrophication, leading to dead zones.'
  },
  {
    id: 'planetary-17',
    text: 'Which biome is most threatened by desertification?',
    options: ['Tundra', 'Grassland', 'Tropical rainforest', 'Savanna'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'medium',
    explanation: 'Grasslands are highly vulnerable to desertification.'
  },
  {
    id: 'planetary-18',
    text: 'What is the main cause of microplastic pollution in oceans?',
    options: ['Oil spills', 'Breakdown of larger plastics', 'Agricultural runoff', 'Mining'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'medium',
    explanation: 'Microplastics mainly come from the breakdown of larger plastic items.'
  },
  {
    id: 'planetary-19',
    text: 'Which renewable energy source has the lowest carbon footprint per kWh?',
    options: ['Solar', 'Wind', 'Hydropower', 'Biomass'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'medium',
    explanation: 'Wind energy has the lowest carbon footprint per kWh.'
  },
  {
    id: 'planetary-20',
    text: 'What is the main function of wetlands in planetary health?',
    options: ['Store carbon and filter water', 'Increase soil erosion', 'Produce methane', 'Support mining'],
    correctAnswer: 0,
    category: 'planetary',
    difficulty: 'medium',
    explanation: 'Wetlands store carbon and filter water, supporting planetary health.'
  },
  // --- PLANETARY HEALTH: HARD (expert) ---
  {
    id: 'planetary-21',
    text: 'Which feedback loop accelerates Arctic warming as ice melts?',
    options: ['Carbon cycle feedback', 'Albedo feedback', 'Methane clathrate feedback', 'Ocean conveyor feedback'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'hard',
    explanation: 'Albedo feedback accelerates Arctic warming as ice melts.'
  },
  {
    id: 'planetary-22',
    text: 'What is the main mechanism by which black carbon affects climate?',
    options: ['Absorbs sunlight and warms the atmosphere', 'Increases cloud formation', 'Promotes plant growth', 'Cools the ocean'],
    correctAnswer: 0,
    category: 'planetary',
    difficulty: 'hard',
    explanation: 'Black carbon absorbs sunlight and warms the atmosphere.'
  },
  {
    id: 'planetary-23',
    text: 'Which international agreement aims to limit global warming to well below 2°C?',
    options: ['Montreal Protocol', 'Paris Agreement', 'Kyoto Protocol', 'Stockholm Convention'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'hard',
    explanation: 'The Paris Agreement aims to limit global warming to well below 2°C.'
  },
  {
    id: 'planetary-24',
    text: 'What is the main source of nitrous oxide emissions globally?',
    options: ['Fossil fuel combustion', 'Industrial processes', 'Agricultural soils', 'Landfills'],
    correctAnswer: 2,
    category: 'planetary',
    difficulty: 'hard',
    explanation: 'Agricultural soils are the main source of nitrous oxide emissions.'
  },
  {
    id: 'planetary-25',
    text: 'Which process describes the movement of persistent organic pollutants (POPs) to polar regions?',
    options: ['Bioaccumulation', 'Global distillation', 'Eutrophication', 'Photodegradation'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'hard',
    explanation: 'Global distillation moves POPs to polar regions.'
  },
  {
    id: 'planetary-26',
    text: 'What is the main ecological risk of ocean acidification?',
    options: ['Coral reef degradation', 'Oil spills', 'Overfishing', 'Algal blooms'],
    correctAnswer: 0,
    category: 'planetary',
    difficulty: 'hard',
    explanation: 'Ocean acidification threatens coral reefs.'
  },
  {
    id: 'planetary-27',
    text: 'Which satellite system is used for global climate monitoring?',
    options: ['GPS', 'Landsat', 'GOES', 'Copernicus'],
    correctAnswer: 3,
    category: 'planetary',
    difficulty: 'hard',
    explanation: 'Copernicus is a key satellite system for climate monitoring.'
  },
  {
    id: 'planetary-28',
    text: 'What is the main function of the Intergovernmental Panel on Climate Change (IPCC)?',
    options: ['Enforce environmental laws', 'Provide scientific assessments on climate change', 'Fund renewable energy projects', 'Monitor air quality'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'hard',
    explanation: 'The IPCC provides scientific assessments on climate change.'
  },
  {
    id: 'planetary-29',
    text: 'Which process is responsible for the long-term removal of carbon dioxide from the atmosphere?',
    options: ['Photosynthesis', 'Ocean acidification', 'Weathering of rocks', 'Respiration'],
    correctAnswer: 2,
    category: 'planetary',
    difficulty: 'hard',
    explanation: 'Weathering of rocks removes CO₂ from the atmosphere over long timescales.'
  },
  {
    id: 'planetary-30',
    text: 'What is the main impact of permafrost thawing on planetary health?',
    options: ['Increases freshwater supply', 'Releases greenhouse gases', 'Reduces soil fertility', 'Promotes plant growth'],
    correctAnswer: 1,
    category: 'planetary',
    difficulty: 'hard',
    explanation: 'Thawing permafrost releases greenhouse gases like methane and CO₂.'
  },
  {
    id: 'soil-91',
    text: 'What is the primary function of glomalin in soil?',
    options: [
      'Stabilizes soil aggregates and stores carbon',
      'Acts as a plant hormone',
      'Increases soil acidity',
      'Reduces soil temperature'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Glomalin, produced by mycorrhizal fungi, helps bind soil particles and sequester carbon.'
  },
  {
    id: 'soil-92',
    text: 'Which process is responsible for the conversion of ammonium to nitrate in soil?',
    options: [
      'Nitrification',
      'Denitrification',
      'Ammonification',
      'Mineralization'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Nitrification is the microbial process that converts ammonium to nitrate.'
  },
  {
    id: 'soil-93',
    text: 'What is the main role of actinomycetes in soil?',
    options: [
      'Decompose complex organic compounds like cellulose and chitin',
      'Fix atmospheric nitrogen',
      'Increase soil salinity',
      'Reduce soil pH'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Actinomycetes are bacteria that break down tough organic matter in soil.'
  },
  {
    id: 'soil-94',
    text: 'Which soil enzyme is most closely associated with phosphorus cycling?',
    options: [
      'Phosphatase',
      'Dehydrogenase',
      'Urease',
      'Catalase'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Phosphatase enzymes release phosphate from organic matter.'
  },
  {
    id: 'soil-95',
    text: 'What is the typical Cation Exchange Capacity (CEC) range for clay soils (in cmol/kg)?',
    options: [
      '20-50',
      '1-5',
      '5-10',
      '50-100'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Clay soils typically have a CEC of 20-50 cmol/kg.'
  },
  {
    id: 'soil-96',
    text: 'Which soil order is characterized by a high content of organic matter and is common in wetlands?',
    options: [
      'Histosols',
      'Oxisols',
      'Aridisols',
      'Vertisols'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Histosols are organic-rich soils found in wetlands and bogs.'
  },
  {
    id: 'soil-97',
    text: 'What is the main effect of aluminum toxicity in acidic soils?',
    options: [
      'Inhibits root growth and nutrient uptake',
      'Increases soil pH',
      'Promotes nitrogen fixation',
      'Enhances microbial activity'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Aluminum toxicity in acidic soils can severely inhibit root growth.'
  },
  {
    id: 'soil-98',
    text: 'Which process describes the loss of nitrogen from soil as a gas?',
    options: [
      'Denitrification',
      'Nitrification',
      'Mineralization',
      'Immobilization'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Denitrification is the process where nitrate is reduced and lost as nitrogen gas.'
  },
  {
    id: 'soil-99',
    text: 'What is the main function of the O horizon in a soil profile?',
    options: [
      'Contains organic matter such as decomposing leaves',
      'Stores groundwater',
      'Is the main mineral layer',
      'Contains weathered bedrock'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'The O horizon is the top layer, rich in organic material.'
  },
  {
    id: 'soil-100',
    text: 'Which soil mineral is most responsible for cation exchange?',
    options: [
      'Montmorillonite',
      'Quartz',
      'Calcite',
      'Gypsum'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Montmorillonite, a type of clay, has a high cation exchange capacity.'
  },
  {
    id: 'soil-101',
    text: 'What is the main cause of sodic soil formation?',
    options: [
      'Excess sodium ions displacing calcium and magnesium',
      'High organic matter',
      'Low rainfall',
      'High phosphorus content'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Sodic soils form when sodium ions dominate the cation exchange sites.'
  },
  {
    id: 'soil-102',
    text: 'Which soil property is measured by the Atterberg limits?',
    options: [
      'Plasticity of fine-grained soils',
      'Soil color',
      'Soil pH',
      'Soil temperature'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Atterberg limits measure the plasticity and consistency of fine-grained soils.'
  },
  {
    id: 'soil-103',
    text: 'What is the main function of protozoa in soil?',
    options: [
      'Regulate bacterial populations and nutrient cycling',
      'Fix nitrogen',
      'Increase soil acidity',
      'Decompose cellulose'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Protozoa feed on bacteria and help release nutrients in soil.'
  },
  {
    id: 'soil-104',
    text: 'Which soil test is used to estimate available phosphorus?',
    options: [
      'Olsen test',
      'Kjeldahl method',
      'Loss on ignition',
      'Bouyoucos hydrometer'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'The Olsen test is commonly used to estimate available phosphorus in soil.'
  },
  {
    id: 'soil-105',
    text: 'What is the main effect of soil bulk density on plant growth?',
    options: [
      'High bulk density restricts root penetration and water movement',
      'Increases nutrient availability',
      'Improves soil aeration',
      'Reduces soil temperature'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'High soil bulk density can limit root growth and water infiltration.'
  },
  {
    id: 'soil-106',
    text: 'Which soil organism is most effective at decomposing lignin?',
    options: [
      'White rot fungi',
      'Earthworms',
      'Nematodes',
      'Actinomycetes'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'White rot fungi are specialized in breaking down lignin in plant material.'
  },
  {
    id: 'soil-107',
    text: 'What is the main cause of acid sulfate soils?',
    options: [
      'Oxidation of sulfide minerals when soils are drained',
      'Addition of lime',
      'High organic matter',
      'Low rainfall'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Acid sulfate soils form when sulfide minerals are exposed to air and oxidize.'
  },
  {
    id: 'soil-108',
    text: 'Which soil property is most affected by the presence of humic substances?',
    options: [
      'Cation exchange capacity',
      'Soil temperature',
      'Soil slope',
      'Soil color'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Humic substances greatly increase the cation exchange capacity of soil.'
  },
  {
    id: 'soil-109',
    text: 'What is the main function of the B horizon in a soil profile?',
    options: [
      'Zone of accumulation of leached materials',
      'Rich in organic matter',
      'Contains unweathered rock',
      'Is the surface layer'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'The B horizon accumulates minerals leached from above.'
  },
  {
    id: 'soil-110',
    text: 'Which soil process is most responsible for the formation of laterite soils?',
    options: [
      'Intense leaching in tropical climates',
      'Glacial deposition',
      'Volcanic activity',
      'Wind erosion'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Laterite soils form through intense leaching in hot, wet climates.'
  },
  {
    id: 'soil-111',
    text: 'Which soil process is responsible for the reduction of nitrate to nitrogen gas under anaerobic conditions?',
    options: [
      'Denitrification',
      'Nitrification',
      'Ammonification',
      'Mineralization'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Denitrification is the microbial process that reduces nitrate to nitrogen gas in the absence of oxygen.'
  },
  {
    id: 'soil-112',
    text: 'What is the main function of the C horizon in a soil profile?',
    options: [
      'Consists of weathered parent material',
      'Rich in organic matter',
      'Zone of leaching',
      'Contains the most plant roots'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'The C horizon is made up of weathered parent material and little organic matter.'
  },
  {
    id: 'soil-113',
    text: 'Which soil order is most commonly associated with volcanic ash soils?',
    options: [
      'Andisols',
      'Ultisols',
      'Spodosols',
      'Mollisols'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Andisols are soils formed from volcanic ash.'
  },
  {
    id: 'soil-114',
    text: 'What is the main effect of sodicity on soil structure?',
    options: [
      'Disperses clay particles and destroys soil aggregates',
      'Increases soil fertility',
      'Improves drainage',
      'Enhances microbial activity'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Sodicity causes clay particles to disperse, leading to poor soil structure.'
  },
  {
    id: 'soil-115',
    text: 'Which soil property is measured by the Proctor test?',
    options: [
      'Maximum dry density and optimum moisture content',
      'Soil pH',
      'Cation exchange capacity',
      'Soil color'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'The Proctor test determines the compaction characteristics of soil.'
  },
  {
    id: 'soil-116',
    text: 'What is the main function of the enzyme urease in soil?',
    options: [
      'Hydrolyzes urea to ammonia and carbon dioxide',
      'Oxidizes iron',
      'Reduces nitrate to nitrite',
      'Decomposes cellulose'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Urease breaks down urea, releasing ammonia and carbon dioxide.'
  },
  {
    id: 'soil-117',
    text: 'Which soil mineral is most effective at adsorbing phosphate ions?',
    options: [
      'Goethite (iron oxide)',
      'Quartz',
      'Calcite',
      'Gypsum'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Goethite, an iron oxide, strongly adsorbs phosphate ions in soil.'
  },
  {
    id: 'soil-118',
    text: 'What is the main cause of gleyed soil color (gray/blue) in the subsoil?',
    options: [
      'Prolonged water saturation and reduction of iron',
      'High organic matter',
      'Presence of manganese',
      'Volcanic ash'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Gleyed colors indicate reduced iron due to waterlogged, anaerobic conditions.'
  },
  {
    id: 'soil-119',
    text: 'Which soil process is most responsible for the formation of spodic horizons?',
    options: [
      'Leaching of organic matter and aluminum/iron',
      'Accumulation of calcium carbonate',
      'Clay illuviation',
      'Salt accumulation'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Spodic horizons form by leaching and accumulation of organic matter and metals.'
  },
  {
    id: 'soil-120',
    text: 'What is the main function of the enzyme dehydrogenase in soil?',
    options: [
      'Indicator of total microbial oxidative activity',
      'Breaks down cellulose',
      'Oxidizes ammonia',
      'Reduces nitrate'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Dehydrogenase activity reflects overall microbial activity in soil.'
  },
  {
    id: 'soil-121',
    text: 'Which soil property is most affected by the presence of sodium ions?',
    options: [
      'Soil dispersion and poor structure',
      'Soil color',
      'Soil temperature',
      'Soil pH'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Sodium ions cause soil particles to disperse, leading to poor structure.'
  },
  {
    id: 'soil-122',
    text: 'What is the main effect of biochar addition to soil?',
    options: [
      'Improves cation exchange capacity and water retention',
      'Increases soil acidity',
      'Reduces organic matter',
      'Promotes soil compaction'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Biochar can improve soil fertility, CEC, and water retention.'
  },
  {
    id: 'soil-123',
    text: 'Which soil process is responsible for the transformation of organic nitrogen to ammonium?',
    options: [
      'Mineralization',
      'Nitrification',
      'Denitrification',
      'Immobilization'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Mineralization converts organic nitrogen to ammonium.'
  },
  {
    id: 'soil-124',
    text: 'What is the main function of the enzyme catalase in soil?',
    options: [
      'Breaks down hydrogen peroxide into water and oxygen',
      'Decomposes cellulose',
      'Oxidizes ammonia',
      'Reduces nitrate'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Catalase protects soil microbes by breaking down hydrogen peroxide.'
  },
  {
    id: 'soil-125',
    text: 'Which soil order is most common in arid and semi-arid regions?',
    options: [
      'Aridisols',
      'Mollisols',
      'Ultisols',
      'Spodosols'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Aridisols are soils found in dry climates.'
  },
  {
    id: 'soil-126',
    text: 'What is the main effect of manganese toxicity in soil?',
    options: [
      'Inhibits plant growth and causes leaf chlorosis',
      'Increases soil pH',
      'Promotes nitrogen fixation',
      'Enhances microbial activity'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Excess manganese can be toxic to plants, causing chlorosis and stunted growth.'
  },
  {
    id: 'soil-127',
    text: 'Which soil process is most responsible for the formation of caliche layers?',
    options: [
      'Accumulation of calcium carbonate in arid soils',
      'Clay illuviation',
      'Salt leaching',
      'Organic matter decomposition'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Caliche forms by the accumulation of calcium carbonate in dry soils.'
  },
  {
    id: 'soil-128',
    text: 'What is the main function of the enzyme β-glucosidase in soil?',
    options: [
      'Breaks down cellulose into glucose',
      'Oxidizes ammonia',
      'Reduces nitrate',
      'Decomposes lignin'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'β-glucosidase is involved in cellulose degradation, releasing glucose.'
  },
  {
    id: 'soil-129',
    text: 'Which soil property is most affected by the presence of iron oxides?',
    options: [
      'Soil color (red/yellow hues)',
      'Soil pH',
      'Soil temperature',
      'Soil texture'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'Iron oxides give soil its characteristic red or yellow color.'
  },
  {
    id: 'soil-130',
    text: 'What is the main effect of soil salinity on plant growth?',
    options: [
      'Reduces water uptake and causes osmotic stress',
      'Increases nutrient availability',
      'Improves soil structure',
      'Promotes root elongation'
    ],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'hard',
    explanation: 'High soil salinity makes it harder for plants to absorb water, causing stress.'
  },
  {
    id: 'plant-31',
    text: 'Which plant hormone is primarily responsible for cell elongation and growth?',
    options: ['Auxin', 'Ethylene', 'Gibberellin', 'Cytokinin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Auxin is a key hormone that promotes cell elongation and growth in plants.'
  },
  {
    id: 'plant-32',
    text: 'What is the main function of stomata in plant leaves?',
    options: ['Gas exchange', 'Water storage', 'Nutrient absorption', 'Support'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Stomata are pores that allow for gas exchange (CO₂ in, O₂ out) in leaves.'
  },
  {
    id: 'plant-33',
    text: 'Which pigment is essential for photosynthesis in plants?',
    options: ['Chlorophyll', 'Carotene', 'Anthocyanin', 'Xanthophyll'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Chlorophyll is the green pigment that captures light energy for photosynthesis.'
  },
  {
    id: 'plant-34',
    text: 'What is the process by which plants lose water vapor through their leaves?',
    options: ['Transpiration', 'Respiration', 'Photosynthesis', 'Germination'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Transpiration is the loss of water vapor from plant leaves.'
  },
  {
    id: 'plant-35',
    text: 'Which macronutrient is most important for strong root development in plants?',
    options: ['Phosphorus', 'Nitrogen', 'Potassium', 'Calcium'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Phosphorus is essential for healthy root growth.'
  },
  {
    id: 'plant-36',
    text: 'What is the main function of xylem tissue in plants?',
    options: ['Transport water and minerals', 'Store starch', 'Produce flowers', 'Absorb sunlight'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Xylem transports water and minerals from roots to the rest of the plant.'
  },
  {
    id: 'plant-37',
    text: 'Which part of the plant is primarily responsible for anchoring it in the soil?',
    options: ['Roots', 'Stems', 'Leaves', 'Flowers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Roots anchor the plant and absorb water and nutrients.'
  },
  {
    id: 'plant-38',
    text: 'What is the main function of phloem tissue in plants?',
    options: ['Transport sugars and nutrients', 'Absorb water', 'Support the plant', 'Produce seeds'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Phloem transports sugars and nutrients produced by photosynthesis.'
  },
  {
    id: 'plant-39',
    text: 'Which element is a micronutrient essential for chlorophyll synthesis?',
    options: ['Magnesium', 'Iron', 'Copper', 'Zinc'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Magnesium is a central atom in the chlorophyll molecule.'
  },
  {
    id: 'plant-40',
    text: 'What is the main function of guard cells in plant leaves?',
    options: ['Regulate the opening and closing of stomata', 'Store water', 'Produce pollen', 'Absorb minerals'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Guard cells control the opening and closing of stomata for gas exchange.'
  },
  {
    id: 'plant-41',
    text: 'Which process allows plants to convert light energy into chemical energy?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Fermentation'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Photosynthesis converts light energy into chemical energy (glucose).'
  },
  {
    id: 'plant-42',
    text: 'Which plant structure is responsible for producing seeds?',
    options: ['Flower', 'Leaf', 'Root', 'Stem'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Flowers are the reproductive structures that produce seeds.'
  },
  {
    id: 'plant-43',
    text: 'What is the main function of root hairs?',
    options: ['Increase surface area for water and nutrient absorption', 'Store starch', 'Anchor the plant', 'Produce flowers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Root hairs increase the surface area for absorption.'
  },
  {
    id: 'plant-44',
    text: 'Which plant hormone is responsible for fruit ripening?',
    options: ['Ethylene', 'Auxin', 'Gibberellin', 'Cytokinin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Ethylene is a gaseous hormone that promotes fruit ripening.'
  },
  {
    id: 'plant-45',
    text: 'What is the main function of the cuticle on plant leaves?',
    options: ['Reduce water loss', 'Absorb sunlight', 'Produce seeds', 'Transport nutrients'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'The cuticle is a waxy layer that reduces water loss from leaves.'
  },
  {
    id: 'plant-46',
    text: 'Which process describes the movement of sugars from leaves to other parts of the plant?',
    options: ['Translocation', 'Transpiration', 'Respiration', 'Germination'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Translocation is the movement of sugars through the phloem.'
  },
  {
    id: 'plant-47',
    text: 'Which mineral deficiency causes interveinal chlorosis in young leaves?',
    options: ['Iron', 'Magnesium', 'Potassium', 'Calcium'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Iron deficiency causes yellowing between the veins of young leaves.'
  },
  {
    id: 'plant-48',
    text: 'What is the main function of lenticels on plant stems?',
    options: ['Allow gas exchange', 'Store water', 'Produce flowers', 'Absorb nutrients'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Lenticels are small openings that allow gas exchange in stems.'
  },
  {
    id: 'plant-49',
    text: 'Which process is responsible for the uptake of water by plant roots?',
    options: ['Osmosis', 'Diffusion', 'Active transport', 'Transpiration'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Osmosis is the movement of water into roots from the soil.'
  },
  {
    id: 'plant-50',
    text: 'Which plant structure is responsible for the perception of gravity?',
    options: ['Statoliths in root cap cells', 'Guard cells', 'Xylem vessels', 'Phloem fibers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Statoliths are specialized organelles in root cap cells that help plants sense gravity.'
  },
  {
    id: 'plant-51',
    text: 'Which process describes the movement of water from roots to leaves in plants?',
    options: ['Cohesion-tension', 'Diffusion', 'Active transport', 'Fermentation'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'The cohesion-tension theory explains how water moves upward through xylem.'
  },
  {
    id: 'plant-52',
    text: 'What is the main function of the endodermis in plant roots?',
    options: ['Regulates water and nutrient uptake', 'Stores starch', 'Produces flowers', 'Absorbs sunlight'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'The endodermis acts as a selective barrier for water and nutrients entering the vascular system.'
  },
  {
    id: 'plant-53',
    text: 'Which plant hormone is primarily responsible for seed dormancy?',
    options: ['Abscisic acid', 'Auxin', 'Gibberellin', 'Ethylene'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Abscisic acid (ABA) maintains seed dormancy until conditions are right for germination.'
  },
  {
    id: 'plant-54',
    text: 'What is the main function of the palisade mesophyll in leaves?',
    options: ['Photosynthesis', 'Water storage', 'Support', 'Transport'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'The palisade mesophyll contains many chloroplasts and is the main site of photosynthesis.'
  },
  {
    id: 'plant-55',
    text: 'Which mineral is essential for the synthesis of ATP in plants?',
    options: ['Phosphorus', 'Magnesium', 'Potassium', 'Calcium'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Phosphorus is a key component of ATP, the energy currency of cells.'
  },
  {
    id: 'plant-56',
    text: 'What is the main function of the pericycle in plant roots?',
    options: ['Initiates lateral root growth', 'Absorbs water', 'Stores starch', 'Produces flowers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'The pericycle is a layer of cells that gives rise to lateral roots.'
  },
  {
    id: 'plant-57',
    text: 'Which pigment protects plants from excessive light by dissipating excess energy?',
    options: ['Carotenoids', 'Chlorophyll', 'Anthocyanins', 'Phytochrome'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Carotenoids protect plants from photooxidative damage.'
  },
  {
    id: 'plant-58',
    text: 'What is the main function of the casparian strip in roots?',
    options: ['Prevents uncontrolled water flow into the vascular system', 'Stores nutrients', 'Produces hormones', 'Absorbs sunlight'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'The casparian strip is a barrier that regulates water and solute movement into the xylem.'
  },
  {
    id: 'plant-59',
    text: 'Which process is responsible for the opening of stomata in response to light?',
    options: ['Active transport of potassium ions', 'Diffusion of CO₂', 'Transpiration', 'Fermentation'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Potassium ions are actively transported into guard cells, causing stomata to open.'
  },
  {
    id: 'plant-60',
    text: 'What is the main function of phytochrome in plants?',
    options: ['Senses red/far-red light and regulates photoperiodism', 'Stores starch', 'Absorbs water', 'Produces flowers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Phytochrome is a photoreceptor that helps plants sense day length.'
  },
  {
    id: 'plant-61',
    text: 'Which mineral is essential for the activation of many plant enzymes?',
    options: ['Magnesium', 'Iron', 'Zinc', 'Copper'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Magnesium is a cofactor for many plant enzymes.'
  },
  {
    id: 'plant-62',
    text: 'What is the main function of the spongy mesophyll in leaves?',
    options: ['Facilitates gas exchange', 'Stores water', 'Provides support', 'Produces seeds'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'The spongy mesophyll has air spaces that facilitate gas exchange.'
  },
  {
    id: 'plant-63',
    text: 'Which process describes the movement of sugars from source to sink in plants?',
    options: ['Pressure-flow hypothesis', 'Cohesion-tension', 'Diffusion', 'Fermentation'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'The pressure-flow hypothesis explains how sugars move through phloem.'
  },
  {
    id: 'plant-64',
    text: 'What is the main function of the apical meristem?',
    options: ['Promotes primary growth and elongation', 'Stores nutrients', 'Absorbs water', 'Produces flowers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'The apical meristem is a region of active cell division at the tips of roots and shoots.'
  },
  {
    id: 'plant-65',
    text: 'Which plant hormone is primarily responsible for stem elongation?',
    options: ['Gibberellin', 'Auxin', 'Cytokinin', 'Ethylene'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Gibberellins promote stem elongation and seed germination.'
  },
  {
    id: 'plant-66',
    text: 'What is the main function of the periderm in woody plants?',
    options: ['Protects against water loss and pathogens', 'Stores starch', 'Absorbs sunlight', 'Produces seeds'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'The periderm (bark) protects woody stems from water loss and infection.'
  },
  {
    id: 'plant-67',
    text: 'Which mineral is essential for the synthesis of chlorophyll and is often deficient in sandy soils?',
    options: ['Magnesium', 'Calcium', 'Potassium', 'Sulfur'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Magnesium is a central component of chlorophyll and is often low in sandy soils.'
  },
  {
    id: 'plant-68',
    text: 'What is the main function of the vascular cambium?',
    options: ['Produces new xylem and phloem', 'Stores water', 'Absorbs nutrients', 'Produces flowers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'The vascular cambium is a lateral meristem that produces secondary xylem and phloem.'
  },
  {
    id: 'plant-69',
    text: 'Which process describes the loss of water from plant leaves at night?',
    options: ['Guttation', 'Transpiration', 'Respiration', 'Fermentation'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'Guttation is the exudation of water droplets from leaf edges, usually at night.'
  },
  {
    id: 'plant-70',
    text: 'What is the main function of the root cap?',
    options: ['Protects the root tip as it grows through soil', 'Absorbs water', 'Stores starch', 'Produces flowers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'easy',
    explanation: 'The root cap protects the delicate tip of the root as it pushes through soil.'
  },
  {
    id: 'plant-71',
    text: 'Which plant hormone is primarily responsible for closing stomata during drought stress?',
    options: ['Abscisic acid', 'Auxin', 'Gibberellin', 'Cytokinin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Abscisic acid signals guard cells to close stomata during drought.'
  },
  {
    id: 'plant-72',
    text: 'What is the main function of the pericycle in plant roots?',
    options: ['Initiates lateral root growth', 'Stores starch', 'Absorbs sunlight', 'Produces flowers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The pericycle is a layer of cells that gives rise to lateral roots.'
  },
  {
    id: 'plant-73',
    text: 'Which mineral is essential for the synthesis of chlorophyll and is often deficient in sandy soils?',
    options: ['Magnesium', 'Calcium', 'Potassium', 'Sulfur'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Magnesium is a central component of chlorophyll and is often low in sandy soils.'
  },
  {
    id: 'plant-74',
    text: 'What is the main function of the spongy mesophyll in leaves?',
    options: ['Facilitates gas exchange', 'Stores water', 'Provides support', 'Produces seeds'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The spongy mesophyll has air spaces that facilitate gas exchange.'
  },
  {
    id: 'plant-75',
    text: 'Which process describes the movement of sugars from source to sink in plants?',
    options: ['Pressure-flow hypothesis', 'Cohesion-tension', 'Diffusion', 'Fermentation'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The pressure-flow hypothesis explains how sugars move through phloem.'
  },
  {
    id: 'plant-76',
    text: 'Which mineral is essential for the activation of many plant enzymes?',
    options: ['Magnesium', 'Iron', 'Zinc', 'Copper'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Magnesium is a cofactor for many plant enzymes.'
  },
  {
    id: 'plant-77',
    text: 'What is the main function of the apical meristem?',
    options: ['Promotes primary growth and elongation', 'Stores nutrients', 'Absorbs water', 'Produces flowers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The apical meristem is a region of active cell division at the tips of roots and shoots.'
  },
  {
    id: 'plant-78',
    text: 'Which pigment protects plants from excessive light by dissipating excess energy?',
    options: ['Carotenoids', 'Chlorophyll', 'Anthocyanins', 'Phytochrome'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Carotenoids protect plants from photooxidative damage.'
  },
  {
    id: 'plant-79',
    text: 'What is the main function of the periderm in woody plants?',
    options: ['Protects against water loss and pathogens', 'Stores starch', 'Absorbs sunlight', 'Produces seeds'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The periderm (bark) protects woody stems from water loss and infection.'
  },
  {
    id: 'plant-80',
    text: 'Which process describes the loss of water from plant leaves at night?',
    options: ['Guttation', 'Transpiration', 'Respiration', 'Fermentation'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Guttation is the exudation of water droplets from leaf edges, usually at night.'
  },
  {
    id: 'plant-81',
    text: 'Which plant structure is responsible for the perception of gravity?',
    options: ['Statoliths in root cap cells', 'Guard cells', 'Xylem vessels', 'Phloem fibers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Statoliths are specialized organelles in root cap cells that help plants sense gravity.'
  },
  {
    id: 'plant-82',
    text: 'Which mineral deficiency causes interveinal chlorosis in young leaves?',
    options: ['Iron', 'Magnesium', 'Potassium', 'Calcium'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Iron deficiency causes yellowing between the veins of young leaves.'
  },
  {
    id: 'plant-83',
    text: 'What is the main function of lenticels on plant stems?',
    options: ['Allow gas exchange', 'Store water', 'Produce flowers', 'Absorb nutrients'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Lenticels are small openings that allow gas exchange in stems.'
  },
  {
    id: 'plant-84',
    text: 'Which process is responsible for the uptake of water by plant roots?',
    options: ['Osmosis', 'Diffusion', 'Active transport', 'Transpiration'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Osmosis is the movement of water into roots from the soil.'
  },
  {
    id: 'plant-85',
    text: 'Which plant hormone is primarily responsible for seed dormancy?',
    options: ['Abscisic acid', 'Auxin', 'Gibberellin', 'Ethylene'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Abscisic acid (ABA) maintains seed dormancy until conditions are right for germination.'
  },
  {
    id: 'plant-86',
    text: 'What is the main function of the palisade mesophyll in leaves?',
    options: ['Photosynthesis', 'Water storage', 'Support', 'Transport'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The palisade mesophyll contains many chloroplasts and is the main site of photosynthesis.'
  },
  {
    id: 'plant-87',
    text: 'Which process is responsible for the opening of stomata in response to light?',
    options: ['Active transport of potassium ions', 'Diffusion of CO₂', 'Transpiration', 'Fermentation'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Potassium ions are actively transported into guard cells, causing stomata to open.'
  },
  {
    id: 'plant-88',
    text: 'What is the main function of phytochrome in plants?',
    options: ['Senses red/far-red light and regulates photoperiodism', 'Stores starch', 'Absorbs water', 'Produces flowers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Phytochrome is a photoreceptor that helps plants sense day length.'
  },
  {
    id: 'plant-89',
    text: 'Which plant hormone is primarily responsible for stem elongation?',
    options: ['Gibberellin', 'Auxin', 'Cytokinin', 'Ethylene'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Gibberellins promote stem elongation and seed germination.'
  },
  {
    id: 'plant-90',
    text: 'What is the main function of the vascular cambium?',
    options: ['Produces new xylem and phloem', 'Stores water', 'Absorbs nutrients', 'Produces flowers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The vascular cambium is a lateral meristem that produces secondary xylem and phloem.'
  },
  {
    id: 'plant-91',
    text: 'Which plant hormone is most involved in the response to wounding and herbivory?',
    options: ['Jasmonic acid', 'Auxin', 'Gibberellin', 'Cytokinin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Jasmonic acid is a key hormone in plant defense against wounding and herbivores.'
  },
  {
    id: 'plant-92',
    text: 'What is the main function of the cuticle on plant leaves?',
    options: ['Prevents water loss', 'Absorbs sunlight', 'Stores starch', 'Produces seeds'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The cuticle is a waxy layer that prevents excessive water loss from leaves.'
  },
  {
    id: 'plant-93',
    text: 'Which mineral is a cofactor for the enzyme nitrate reductase in plants?',
    options: ['Molybdenum', 'Iron', 'Zinc', 'Copper'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Molybdenum is required for nitrate reductase activity.'
  },
  {
    id: 'plant-94',
    text: 'What is the main function of the endodermis in plant roots?',
    options: ['Regulates water and nutrient uptake', 'Stores starch', 'Produces flowers', 'Absorbs sunlight'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The endodermis acts as a selective barrier for water and nutrients entering the vascular system.'
  },
  {
    id: 'plant-95',
    text: 'Which process describes the movement of water through the plant from roots to leaves?',
    options: ['Transpiration stream', 'Diffusion', 'Active transport', 'Fermentation'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The transpiration stream is the flow of water from roots to leaves.'
  },
  {
    id: 'plant-96',
    text: 'Which plant structure is responsible for the majority of photosynthesis?',
    options: ['Palisade mesophyll', 'Spongy mesophyll', 'Guard cells', 'Root hairs'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The palisade mesophyll contains many chloroplasts and is the main site of photosynthesis.'
  },
  {
    id: 'plant-97',
    text: 'Which mineral is essential for the synthesis of DNA and RNA in plants?',
    options: ['Phosphorus', 'Potassium', 'Calcium', 'Magnesium'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Phosphorus is a key component of DNA and RNA.'
  },
  {
    id: 'plant-98',
    text: 'What is the main function of the Casparian strip in roots?',
    options: ['Blocks passive flow of substances into the stele', 'Stores water', 'Produces hormones', 'Absorbs sunlight'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The Casparian strip blocks passive flow of substances into the vascular cylinder.'
  },
  {
    id: 'plant-99',
    text: 'Which process is responsible for the movement of minerals into root cells against a concentration gradient?',
    options: ['Active transport', 'Diffusion', 'Osmosis', 'Transpiration'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Active transport moves minerals into root cells against a concentration gradient.'
  },
  {
    id: 'plant-100',
    text: 'Which plant hormone is most involved in promoting cell division?',
    options: ['Cytokinin', 'Auxin', 'Gibberellin', 'Abscisic acid'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Cytokinins are hormones that promote cell division in plant tissues.'
  },
  {
    id: 'plant-101',
    text: 'What is the main function of the pericycle in plant roots?',
    options: ['Initiates lateral root growth', 'Stores starch', 'Absorbs sunlight', 'Produces flowers'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'The pericycle is a layer of cells that gives rise to lateral roots.'
  },
  {
    id: 'plant-102',
    text: 'Which mineral is essential for the activation of Rubisco, the enzyme in photosynthesis?',
    options: ['Magnesium', 'Iron', 'Zinc', 'Copper'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Magnesium is required for Rubisco activation.'
  },
  {
    id: 'plant-103',
    text: 'What is the main function of the phloem in plants?',
    options: ['Transports sugars and nutrients', 'Transports water', 'Provides support', 'Produces seeds'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Phloem transports sugars and nutrients produced by photosynthesis.'
  },
  {
    id: 'plant-104',
    text: 'Which process describes the loss of water vapor from plant leaves?',
    options: ['Transpiration', 'Respiration', 'Photosynthesis', 'Germination'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Transpiration is the loss of water vapor from plant leaves.'
  },
  {
    id: 'plant-105',
    text: 'Which mineral is essential for the synthesis of chlorophyll?',
    options: ['Magnesium', 'Iron', 'Potassium', 'Calcium'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Magnesium is a central atom in the chlorophyll molecule.'
  },
  {
    id: 'plant-106',
    text: 'What is the main function of the guard cells in plant leaves?',
    options: ['Regulate the opening and closing of stomata', 'Store water', 'Produce pollen', 'Absorb minerals'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Guard cells control the opening and closing of stomata for gas exchange.'
  },
  {
    id: 'plant-107',
    text: 'Which plant hormone is responsible for fruit ripening?',
    options: ['Ethylene', 'Auxin', 'Gibberellin', 'Cytokinin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Ethylene is a gaseous hormone that promotes fruit ripening.'
  },
  {
    id: 'plant-108',
    text: 'Which process allows plants to convert light energy into chemical energy?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Fermentation'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Photosynthesis converts light energy into chemical energy (glucose).'
  },
  {
    id: 'plant-109',
    text: 'Which plant structure is responsible for producing seeds?',
    options: ['Flower', 'Leaf', 'Root', 'Stem'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Flowers are the reproductive structures that produce seeds.'
  },
  {
    id: 'plant-110',
    text: 'Which process is responsible for the movement of water into root cells from the soil?',
    options: ['Osmosis', 'Diffusion', 'Active transport', 'Transpiration'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'medium',
    explanation: 'Osmosis is the movement of water into roots from the soil.'
  },
  {
    id: 'plant-111',
    text: 'Which protein complex is responsible for the photolysis of water during photosynthesis?',
    options: ['Photosystem II', 'Photosystem I', 'ATP synthase', 'Rubisco'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Photosystem II splits water molecules, releasing oxygen and electrons.'
  },
  {
    id: 'plant-112',
    text: 'What is the main function of the glyoxylate cycle in plant seedlings?',
    options: ['Converts stored lipids to carbohydrates', 'Synthesizes chlorophyll', 'Fixes nitrogen', 'Produces ethylene'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'The glyoxylate cycle allows seedlings to convert fats into sugars for growth before photosynthesis is established.'
  },
  {
    id: 'plant-113',
    text: 'Which plant hormone is most directly involved in the triple response to mechanical stress in seedlings?',
    options: ['Ethylene', 'Auxin', 'Gibberellin', 'Cytokinin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Ethylene mediates the triple response: inhibition of stem elongation, stem thickening, and horizontal growth.'
  },
  {
    id: 'plant-114',
    text: 'What is the role of the enzyme ACC synthase in plants?',
    options: ['Catalyzes the rate-limiting step in ethylene biosynthesis', 'Fixes carbon dioxide', 'Synthesizes abscisic acid', 'Degrades auxin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'ACC synthase converts S-adenosylmethionine to ACC, a precursor of ethylene.'
  },
  {
    id: 'plant-115',
    text: 'Which mineral is a cofactor for the enzyme nitrate reductase in plants?',
    options: ['Molybdenum', 'Boron', 'Zinc', 'Copper'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Molybdenum is required for nitrate reductase activity.'
  },
  {
    id: 'plant-116',
    text: 'What is the function of the phytochrome-interacting factors (PIFs) in plants?',
    options: ['Regulate gene expression in response to light', 'Transport water', 'Synthesize chlorophyll', 'Fix nitrogen'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'PIFs are transcription factors that interact with phytochrome to regulate light-responsive genes.'
  },
  {
    id: 'plant-117',
    text: 'Which process is responsible for the movement of proteins and RNA between plant cells?',
    options: ['Plasmodesmata transport', 'Vesicle trafficking', 'Endocytosis', 'Phagocytosis'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Plasmodesmata are channels that allow the movement of proteins and RNA between cells.'
  },
  {
    id: 'plant-118',
    text: 'What is the main function of the enzyme superoxide dismutase in plants?',
    options: ['Detoxifies reactive oxygen species', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades starch'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Superoxide dismutase converts superoxide radicals to hydrogen peroxide, protecting cells from oxidative damage.'
  },
  {
    id: 'plant-119',
    text: 'Which plant hormone is most involved in the regulation of seed dormancy and drought tolerance?',
    options: ['Abscisic acid', 'Auxin', 'Gibberellin', 'Cytokinin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Abscisic acid (ABA) regulates seed dormancy and drought response.'
  },
  {
    id: 'plant-120',
    text: 'What is the main function of the enzyme rubisco activase?',
    options: ['Maintains rubisco in an active state for carbon fixation', 'Synthesizes ATP', 'Degrades starch', 'Fixes nitrogen'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Rubisco activase removes inhibitors from rubisco, allowing it to fix carbon dioxide.'
  },
  {
    id: 'plant-121',
    text: 'Which process describes the movement of water through the apoplast pathway in roots?',
    options: ['Movement through cell walls and intercellular spaces', 'Movement through cytoplasm', 'Movement through plasmodesmata', 'Movement through xylem vessels only'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'The apoplast pathway involves water movement through cell walls and spaces outside the plasma membrane.'
  },
  {
    id: 'plant-122',
    text: 'What is the main function of the enzyme glutamine synthetase in plants?',
    options: ['Assimilates ammonium into amino acids', 'Synthesizes DNA', 'Degrades proteins', 'Fixes nitrogen'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Glutamine synthetase incorporates ammonium into glutamine, a key step in nitrogen assimilation.'
  },
  {
    id: 'plant-123',
    text: 'Which mineral is essential for the synthesis of the plant hormone auxin?',
    options: ['Zinc', 'Calcium', 'Magnesium', 'Potassium'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Zinc is required for the synthesis of tryptophan, a precursor of auxin.'
  },
  {
    id: 'plant-124',
    text: 'What is the main function of the enzyme phenylalanine ammonia-lyase (PAL) in plants?',
    options: ['Initiates the synthesis of phenolic compounds', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades starch'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'PAL catalyzes the first step in the synthesis of phenolics, important for plant defense.'
  },
  {
    id: 'plant-125',
    text: 'Which process is responsible for the formation of aerenchyma in plant roots?',
    options: ['Programmed cell death', 'Cell elongation', 'Photosynthesis', 'Transpiration'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Aerenchyma forms through programmed cell death, creating air spaces for oxygen transport.'
  },
  {
    id: 'plant-126',
    text: 'What is the main function of the enzyme invertase in plants?',
    options: ['Hydrolyzes sucrose into glucose and fructose', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades proteins'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Invertase breaks down sucrose into its component sugars for metabolism.'
  },
  {
    id: 'plant-127',
    text: 'Which plant hormone is most involved in the regulation of apical dominance?',
    options: ['Auxin', 'Gibberellin', 'Cytokinin', 'Ethylene'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Auxin produced in the shoot tip suppresses the growth of lateral buds (apical dominance).'
  },
  {
    id: 'plant-128',
    text: 'What is the main function of the enzyme peroxidase in plants?',
    options: ['Detoxifies hydrogen peroxide and strengthens cell walls', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades starch'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Peroxidase detoxifies hydrogen peroxide and is involved in lignin formation.'
  },
  {
    id: 'plant-129',
    text: 'Which process is responsible for the movement of organic molecules through the phloem?',
    options: ['Mass flow', 'Diffusion', 'Active transport', 'Transpiration'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Mass flow (pressure flow) moves organic molecules through the phloem.'
  },
  {
    id: 'plant-130',
    text: 'What is the main function of the enzyme ascorbate peroxidase in plants?',
    options: ['Removes hydrogen peroxide using ascorbate as an electron donor', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades proteins'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Ascorbate peroxidase is a key enzyme in the detoxification of hydrogen peroxide in plant cells.'
  },
  {
    id: 'plant-131',
    text: 'Which enzyme is responsible for the initial carboxylation step in C4 photosynthesis?',
    options: ['PEP carboxylase', 'Rubisco', 'Nitrate reductase', 'ATP synthase'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'PEP carboxylase fixes CO2 in the mesophyll cells of C4 plants before the Calvin cycle.'
  },
  {
    id: 'plant-132',
    text: 'What is the main function of the tonoplast in plant cells?',
    options: ['Surrounds the vacuole and regulates ion movement', 'Synthesizes proteins', 'Stores starch', 'Produces chlorophyll'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'The tonoplast is the membrane surrounding the vacuole, controlling ion and molecule transport.'
  },
  {
    id: 'plant-133',
    text: 'Which plant hormone is most involved in the regulation of leaf senescence?',
    options: ['Ethylene', 'Auxin', 'Gibberellin', 'Cytokinin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Ethylene promotes leaf senescence and abscission.'
  },
  {
    id: 'plant-134',
    text: 'What is the main function of the enzyme allene oxide synthase in plants?',
    options: ['Catalyzes a key step in jasmonic acid biosynthesis', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades starch'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Allene oxide synthase is involved in the biosynthesis of jasmonic acid, a stress hormone.'
  },
  {
    id: 'plant-135',
    text: 'Which mineral is essential for the function of plastocyanin in the electron transport chain?',
    options: ['Copper', 'Iron', 'Manganese', 'Zinc'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Copper is a cofactor in plastocyanin, which transfers electrons in photosynthesis.'
  },
  {
    id: 'plant-136',
    text: 'What is the main function of the enzyme glutathione reductase in plants?',
    options: ['Regenerates reduced glutathione for antioxidant defense', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades proteins'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Glutathione reductase maintains the pool of reduced glutathione, a key antioxidant.'
  },
  {
    id: 'plant-137',
    text: 'Which process is responsible for the movement of calcium ions into the plant cell cytosol during signaling?',
    options: ['Calcium influx through ion channels', 'Active transport by ATPases', 'Diffusion through plasmodesmata', 'Mass flow'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Calcium influx through ion channels is a rapid signaling mechanism in plant cells.'
  },
  {
    id: 'plant-138',
    text: 'What is the main function of the enzyme S-adenosylmethionine synthetase in plants?',
    options: ['Synthesizes SAM, a methyl group donor for many reactions', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades proteins'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'S-adenosylmethionine synthetase produces SAM, important for methylation and ethylene biosynthesis.'
  },
  {
    id: 'plant-139',
    text: 'Which protein is responsible for blue light perception in plants?',
    options: ['Cryptochrome', 'Phytochrome', 'Rubisco', 'Plastocyanin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Cryptochromes are blue light photoreceptors involved in growth and circadian rhythms.'
  },
  {
    id: 'plant-140',
    text: 'What is the main function of the enzyme nitrate reductase in plants?',
    options: ['Reduces nitrate to nitrite', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades proteins'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Nitrate reductase catalyzes the reduction of nitrate to nitrite in nitrogen assimilation.'
  },
  {
    id: 'plant-141',
    text: 'Which process is responsible for the movement of potassium ions into guard cells during stomatal opening?',
    options: ['Active transport', 'Diffusion', 'Mass flow', 'Osmosis'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Active transport of potassium ions into guard cells causes water influx and stomatal opening.'
  },
  {
    id: 'plant-142',
    text: 'What is the main function of the enzyme UDP-glucose pyrophosphorylase in plants?',
    options: ['Synthesizes UDP-glucose for cell wall and starch biosynthesis', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades proteins'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'UDP-glucose pyrophosphorylase is essential for the synthesis of UDP-glucose, a precursor for polysaccharides.'
  },
  {
    id: 'plant-143',
    text: 'Which mineral is a cofactor for the enzyme carbonic anhydrase in plants?',
    options: ['Zinc', 'Iron', 'Copper', 'Manganese'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Zinc is required for carbonic anhydrase, which catalyzes the conversion of CO2 and water to bicarbonate.'
  },
  {
    id: 'plant-144',
    text: 'What is the main function of the enzyme ADP-glucose pyrophosphorylase in plants?',
    options: ['Initiates starch biosynthesis', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades proteins'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'ADP-glucose pyrophosphorylase catalyzes the first step in starch biosynthesis.'
  },
  {
    id: 'plant-145',
    text: 'Which protein is responsible for red light perception in plants?',
    options: ['Phytochrome', 'Cryptochrome', 'Rubisco', 'Plastocyanin'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Phytochromes are red/far-red light photoreceptors that regulate plant development.'
  },
  {
    id: 'plant-146',
    text: 'What is the main function of the enzyme malate dehydrogenase in plants?',
    options: ['Catalyzes the conversion of malate to oxaloacetate', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades proteins'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Malate dehydrogenase is involved in the citric acid cycle and C4 metabolism.'
  },
  {
    id: 'plant-147',
    text: 'Which mineral is essential for the function of the oxygen-evolving complex in photosystem II?',
    options: ['Manganese', 'Iron', 'Copper', 'Zinc'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Manganese is a key component of the oxygen-evolving complex that splits water in photosystem II.'
  },
  {
    id: 'plant-148',
    text: 'What is the main function of the enzyme ferredoxin-NADP+ reductase in plants?',
    options: ['Transfers electrons to NADP+ in the light reactions', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades proteins'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Ferredoxin-NADP+ reductase catalyzes the final electron transfer to NADP+ in photosynthesis.'
  },
  {
    id: 'plant-149',
    text: 'Which process is responsible for the movement of water through the symplast pathway in roots?',
    options: ['Movement through cytoplasm via plasmodesmata', 'Movement through cell walls', 'Movement through xylem vessels', 'Movement through intercellular spaces'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'The symplast pathway involves water movement through the cytoplasm and plasmodesmata.'
  },
  {
    id: 'plant-150',
    text: 'What is the main function of the enzyme polyphenol oxidase in plants?',
    options: ['Oxidizes phenolics to quinones for defense', 'Synthesizes ATP', 'Fixes nitrogen', 'Degrades proteins'],
    correctAnswer: 0,
    category: 'plant',
    difficulty: 'hard',
    explanation: 'Polyphenol oxidase is involved in plant defense by oxidizing phenolics to toxic quinones.'
  }
];