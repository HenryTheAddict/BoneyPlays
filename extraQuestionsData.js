/* Merged into cardsData at load — three extra trivia questions per action */
const extraQuestionsData = {
  "FemFemFemur::Whack!": [
    { question: "The femur is classified as what type of bone?", options: ["Long bone", "Flat bone", "Sesamoid bone", "Floating bone"], answer: 0 },
    { question: "Which sport often sees femur stress fractures in runners?", options: ["Long-distance running", "Chess", "Swimming only", "Archery"], answer: 0 },
    { question: "Approximate adult femur length is often closest to?", options: ["About 1.5–2 feet", "3 inches", "6 feet", "Same as your arm"], answer: 0 }
  ],
  "FemFemFemur::Through": [
    { question: "Yellow marrow in long bones is mainly?", options: ["Fat storage", "Blood cell factory", "Nerve hub", "Cartilage"], answer: 0 },
    { question: "Red marrow is most active in children in the femur’s?", options: ["Central shaft early on; shifts with age", "Only the kneecap", "Skin", "Toes"], answer: 0 },
    { question: "A ‘greenstick’ fracture is more common in?", options: ["Children with softer bones", "Elderly only", "Birds", "Robots"], answer: 0 }
  ],
  "SharkTooth::Tooth Dart": [
    { question: "Shark skin feels like sandpaper because of?", options: ["Dermal denticles", "Scales like fish", "Glue", "Velcro"], answer: 0 },
    { question: "Great whites are mostly warm-blooded or cold-blooded?", options: ["Regionally endothermic (partially warm)", "Always cold", "Always hot", "Room temperature"], answer: 0 },
    { question: "Which sense is extremely strong in many sharks?", options: ["Electroreception", "Nothing special", "Only color vision", "Taste for candy"], answer: 0 }
  ],
  "SharkTooth::Impale": [
    { question: "Hemorrhage means mostly what?", options: ["Heavy bleeding", "Healing", "Sleep", "Bone growth"], answer: 0 },
    { question: "Platelets help blood to?", options: ["Clot", "Stay thin forever", "Turn blue", "Evaporate"], answer: 0 },
    { question: "A ‘bleed’ effect in games usually means damage over?", options: ["Multiple turns/time", "Exactly one frame", "Never", "Only if you pause"], answer: 0 }
  ],
  "TheBONE::Bone": [
    { question: "Osteoblasts mainly do what?", options: ["Build bone matrix", "Destroy bone", "Carry oxygen", "Digest food"], answer: 0 },
    { question: "Osteoclasts mainly do what?", options: ["Resorb (break down) bone", "Make new bone only", "Pump blood", "See light"], answer: 0 },
    { question: "Vitamin D helps the body absorb?", options: ["Calcium", "Only sugar", "Plastic", "Helium"], answer: 0 }
  ],
  "TheBONE::Bootleg Surgery": [
    { question: "Probability of fair coin heads is?", options: ["1/2", "1", "0", "2"], answer: 0 },
    { question: "A clavicle fracture often happens from?", options: ["Falling on shoulder or outstretched arm", "Sleeping", "Reading", "Blinking"], answer: 0 },
    { question: "Sterile technique in surgery reduces?", options: ["Infection risk", "Success rate", "Gravity", "Time always"], answer: 0 }
  ],
  "TriloBite::Bite": [
    { question: "Trilobites are extinct?", options: ["Yes", "No, they rule cities", "Only in fiction never real", "Only on Mars"], answer: 0 },
    { question: "The Cambrian explosion refers to?", options: ["Rapid diversification of life", "A volcano", "Meteor shower", "First pizza"], answer: 0 },
    { question: "An exoskeleton is on the?", options: ["Outside the body", "Inside only", "Only in dreams", "Moon"], answer: 0 }
  ],
  "TriloBite::Chomp": [
    { question: "Index fossils help geologists?", options: ["Date rock layers", "Cook pasta", "Predict weather only", "Paint"], answer: 0 },
    { question: "Permineralization is a type of?", options: ["Fossilization", "Dance", "Metal genre", "Swim stroke"], answer: 0 },
    { question: "Paleontology studies mostly?", options: ["Ancient life via fossils", "Future phones", "Cloud shapes", "Card games"], answer: 0 }
  ],
  "Fern::EAT": [
    { question: "Fronds are part of?", options: ["Ferns", "Sharks", "Engines", "Pianos"], answer: 0 },
    { question: "Spores are single-celled reproductive units in?", options: ["Ferns and fungi among others", "Only mammals", "Rocks only", "Wi-Fi"], answer: 0 },
    { question: "Photosynthesis outputs oxygen from?", options: ["Water splitting in light reactions", "Eating meat", "Dark magic", "Loud music"], answer: 0 }
  ],
  "Fern::Choke": [
    { question: "Heimlich maneuver helps with?", options: ["Airway obstruction", "Broken femur", "Sunburn", "Sleep"], answer: 0 },
    { question: "Choking risk rises with?", options: ["Eating too fast or large bites", "Slow chewing", "Drinking water normally", "Yoga"], answer: 0 },
    { question: "Trachea is part of?", options: ["Respiratory airway", "Digestive acid tank", "Ear canal", "Knee"], answer: 0 }
  ],
  "SaintGerken::Yell": [
    { question: "Decibels measure?", options: ["Sound intensity", "Light brightness", "Speed only", "Weight"], answer: 0 },
    { question: "Vocal cords vibrate to produce?", options: ["Voice", "Light", "Magnetism", "Gravity"], answer: 0 },
    { question: "Echo happens because of?", options: ["Sound reflection", "Sound deletion", "Silence particles", "Black holes"], answer: 0 }
  ],
  "SaintGerken::Crack a joke": [
    { question: "A pun relies on?", options: ["Word double meanings", "Only numbers", "Silence", "Gravity"], answer: 0 },
    { question: "Comedy timing is about?", options: ["Rhythm and surprise", "Always talking slow", "Never pausing", "Random caps lock"], answer: 0 },
    { question: "‘Gamble’ in games often means?", options: ["Random risk/reward", "Guaranteed win", "Skipping turns forever", "Healing only"], answer: 0 }
  ],
  "Javier::Summon Tux": [
    { question: "Countershading helps penguins?", options: ["Camouflage from above/below", "Fly higher", "Dig faster", "Glow"], answer: 0 },
    { question: "Penguin feathers trap air for?", options: ["Insulation", "Making noise only", "Photosynthesis", "Magnetism"], answer: 0 },
    { question: "Antarctic treaty protects mostly?", options: ["Scientific peace use of continent", "Oil only", "Nothing", "Penguin voting"], answer: 0 }
  ],
  "Javier::Cheat": [
    { question: "Neurotoxins often target?", options: ["Nervous system signaling", "Only bones", "Plant roots", "Clouds"], answer: 0 },
    { question: "Antivenom often contains?", options: ["Antibodies", "More venom only", "Sugar only", "Helium"], answer: 0 },
    { question: "DoT in games means?", options: ["Damage over time", "Damage one time only", "Draw one token", "Delete opponent turn"], answer: 0 }
  ],
  "JawiusJr::Summon Jaw": [
    { question: "Sedimentary rocks often contain?", options: ["Fossils", "Only diamonds", "Pure gold always", "Nothing"], answer: 0 },
    { question: "Erosion moves material by?", options: ["Water, wind, ice", "Thought alone", "Silence", "RGB"], answer: 0 },
    { question: "A geode is?", options: ["Rock cavity lined with crystals", "A fish", "A cloud type", "CPU part"], answer: 0 }
  ],
  "JawiusJr::Seething Rage": [
    { question: "Ruminants digest plants using?", options: ["Multiple stomach chambers", "One tiny stomach", "Gills", "Photosynthesis"], answer: 0 },
    { question: "Cellulose is hard to digest without?", options: ["Special microbes/enzymes", "Nothing", "Ice cream", "Loud music"], answer: 0 },
    { question: "An extra turn in card games lets you?", options: ["Act again before opponent", "Never play", "Skip deck", "Lose instantly"], answer: 0 }
  ],
  "SomeGirl::Explode!": [
    { question: "Apex predator means?", options: ["Top of food chain", "Bottom feeder only", "Plant eater only", "Photosynthetic"], answer: 0 },
    { question: "Pack hunters include?", options: ["Some wolves", "Only jellyfish", "Trees", "Rocks"], answer: 0 },
    { question: "Removing cards from hand in games simulates?", options: ["Resource denial", "Healing", "Drawing infinite", "Time stop"], answer: 0 }
  ],
  "Theodore::Rain": [
    { question: "Dew forms mainly from?", options: ["Condensation on cool surfaces", "Rain upward", "Lava", "Static"], answer: 0 },
    { question: "Cirrus clouds are usually?", options: ["High and wispy", "Low thunder clouds", "On the ground", "Underwater"], answer: 0 },
    { question: "Lightning heats air fast causing?", options: ["Thunder shock wave", "Silence", "Snow instantly", "Gravity reversal"], answer: 0 }
  ],
  "Theodore::Piano": [
    { question: "Soundboards in pianos help?", options: ["Amplify string vibration", "Block sound", "Cool CPU", "Store cards"], answer: 0 },
    { question: "Equal temperament tunes octaves into?", options: ["12 semitones", "5 notes only", "Infinite notes", "One note"], answer: 0 },
    { question: "A grand piano frame is often?", options: ["Cast iron for tension", "Paper", "Rubber only", "Ice"], answer: 0 }
  ],
  "BigS::Lie": [
    { question: "Prefrontal cortex is linked to?", options: ["Planning and honesty control", "Only hearing", "Digestion", "Balance only"], answer: 0 },
    { question: "Dopamine is often associated with?", options: ["Reward learning", "Bone hardness", "UV blocking", "Plant roots"], answer: 0 },
    { question: "Synaptic plasticity allows?", options: ["Learning by changing connections", "Frozen brain forever", "No memory", "Instant teleport"], answer: 0 }
  ],
  "BigS::Seek Javi": [
    { question: "Hippocampus is heavily involved in?", options: ["Memory formation", "Digesting steak", "Hearing bass", "Bone length"], answer: 0 },
    { question: "REM sleep is linked to?", options: ["Dreaming and memory", "Bone melting", "Photosynthesis", "Hibernation of GPUs"], answer: 0 },
    { question: "Healing in games restores?", options: ["HP", "Enemy HP always", "Deck size only", "Gravity"], answer: 0 }
  ],
  "OneyPlays::OneyDance": [
    { question: "Peristalsis moves food by?", options: ["Muscle waves in tubes", "Magnets in stomach", "Gravity only always", "Luck"], answer: 0 },
    { question: "Liver also processes?", options: ["Toxins and nutrients", "Only oxygen", "Sound waves", "Wi-Fi"], answer: 0 },
    { question: "Poison stacking means multiple sources?", options: ["Add damage each tick", "Cancel each other", "Heal you", "Do nothing"], answer: 0 }
  ],
  "OneyPlays::Slap": [
    { question: "Abdominal muscles protect?", options: ["Organs and support core", "Only ears", "Hair color", "Screen pixels"], answer: 0 },
    { question: "Bile emulsifies?", options: ["Fats", "Only water", "Air in lungs", "Neurons"], answer: 0 },
    { question: "Slap impact is a type of?", options: ["Sudden force trauma (mild)", "Chemical burn", "Radiation", "Teleport"], answer: 0 }
  ],
  "BigJohnAI::AI Fard": [
    { question: "GPUs accelerate AI mainly via?", options: ["Parallel matrix math", "Alphabetical sorting only", "Printing", "Cooling room air"], answer: 0 },
    { question: "Overfitting means a model?", options: ["Memorizes training, fails new data", "Is perfect always", "Has no parameters", "Runs without electricity"], answer: 0 },
    { question: "A token in LLMs is roughly?", options: ["A chunk of text", "A physical coin", "A GPU fan", "A bone"], answer: 0 }
  ],
  "BigJohnAI::Gemini": [
    { question: "Renewable energy for grids can include?", options: ["Wind and solar", "Only coal forever", "Thoughts", "Dice rolls"], answer: 0 },
    { question: "Embodied carbon refers to?", options: ["Emissions from making things", "Only tailpipes", "Dreams", "RAM speed"], answer: 0 },
    { question: "Heat reuse in data centers can?", options: ["Warm buildings or water", "Never help", "Freeze servers only", "Stop bits"], answer: 0 }
  ],
  "FalaredMeat::Damnage": [
    { question: "Pride parades often celebrate?", options: ["LGBTQ+ visibility and rights", "Only weather", "Stock market", "Bone density"], answer: 0 },
    { question: "Marbling in steak is?", options: ["Intramuscular fat streaks", "Bone chips", "Food dye only", "Salt crust"], answer: 0 },
    { question: "Safe cooking reduces risk of?", options: ["Foodborne illness", "Better Wi-Fi", "Louder music", "Faster GPUs"], answer: 0 }
  ],
  "FalaredMeat::Mog": [
    { question: "Expected value of fair coin flip reward is?", options: ["Average of heads/tails outcomes", "Always heads", "Always tails", "Undefined always"], answer: 0 },
    { question: "Allies listen and?", options: ["Support without overriding voices", "Talk over everyone", "Ignore all", "Only meme"], answer: 0 },
    { question: "High-risk high-reward moves in games?", options: ["Can win big or lose big", "Always neutral", "Illegal", "Heal only"], answer: 0 }
  ],
  "davidsblackball::No idea": [
    { question: "Schwarzschild radius relates to?", options: ["Black hole event horizon scale", "Piano keys", "Fern size", "Card sleeves"], answer: 0 },
    { question: "Spaghettification is?", options: ["Tidal stretching near black holes", "Pasta recipe", "A dance", "GPU term"], answer: 0 },
    { question: "Strongest card heuristic uses?", options: ["Approximate power from actions", "Card sleeve color", "Player name length", "Coin flip"], answer: 0 }
  ],
  "davidsblackball::Squeeze": [
    { question: "Ashoka Chakra spokes number is?", options: ["24", "8", "12", "100"], answer: 0 },
    { question: "Stacked poison ticks sum?", options: ["All active stack damages", "Only the smallest", "Zero always", "Random one"], answer: 0 },
    { question: "Tricolor UI during curse is?", options: ["Cosmetic + Hindi labels", "Deletes save files", "Bans players", "Stops music forever"], answer: 0 }
  ]
};
