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
  // --- SOIL HEALTH: MEDIUM ---
  {
    id: 'soil-11',
    text: 'What is the process called when soil is carried away by wind or water?',
    options: ['Erosion', 'Photosynthesis', 'Germination', 'Evaporation'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Erosion is the process of soil being moved by wind or water.'
  },
  {
    id: 'soil-12',
    text: 'Which nutrient is most important for plant growth in soil?',
    options: ['Nitrogen', 'Gold', 'Helium', 'Mercury'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Nitrogen is a key nutrient for plant growth.'
  },
  {
    id: 'soil-13',
    text: 'What do soil microbes do?',
    options: ['Make soil unhealthy', 'Help break down organic matter', 'Eat rocks', 'Make soil dry'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Soil microbes help decompose organic matter, enriching the soil.'
  },
  {
    id: 'soil-14',
    text: 'What is pH a measure of in soil?',
    options: ['Temperature', 'Acidity or alkalinity', 'Color', 'Smell'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Soil pH measures how acidic or alkaline the soil is.'
  },
  {
    id: 'soil-15',
    text: 'Which farming method helps keep soil healthy?',
    options: ['Crop rotation', 'Monoculture', 'Overgrazing', 'Deforestation'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Crop rotation helps maintain soil fertility and health.'
  },
  {
    id: 'soil-16',
    text: 'What is humus?',
    options: ['A type of rock', 'Decayed plant and animal matter in soil', 'A kind of insect', 'A fertilizer brand'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Humus is decomposed organic matter in soil.'
  },
  {
    id: 'soil-17',
    text: 'Why is soil texture important?',
    options: ["It affects water and air movement", "It changes the soil's color", "It makes soil taste better", "It helps plants sing"],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Soil texture affects how water and air move through soil.'
  },
  {
    id: 'soil-18',
    text: 'Which soil type holds the most water?',
    options: ['Sand', 'Clay', 'Gravel', 'Pebbles'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Clay soil holds more water than sandy or gravelly soils.'
  },
  {
    id: 'soil-19',
    text: 'What is a cover crop?',
    options: ['A crop grown to protect and enrich soil', 'A crop used for making clothes', 'A crop that covers animals', 'A crop that grows in water'],
    correctAnswer: 0,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Cover crops are grown to protect and improve soil health.'
  },
  {
    id: 'soil-20',
    text: 'What does soil compaction do?',
    options: ['Increases plant growth', 'Reduces air and water movement', 'Makes soil lighter', 'Adds nutrients'],
    correctAnswer: 1,
    category: 'soil',
    difficulty: 'medium',
    explanation: 'Compacted soil has less space for air and water, making it harder for plants to grow.'
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
  }
];