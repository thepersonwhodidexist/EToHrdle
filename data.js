// ToHrdle — tower dataset
// Sourced from https://jtoh.fandom.com/wiki/Tower and
// https://gist.github.com/SirSamiboi/cc1e1dee46b92fa6c53bdb328ecdeff9
// Add new towers here (same shape) to expand the game's pool.

const REALM_INFERNO = "The Great Inferno (Rings)";
const REALM_SPATIAL = "The Spatial System (Zones)";

const DIFF_ORDER = [
  "Easy","Medium","Hard","Difficult","Challenging","Intense",
  "Remorseless","Insane","Extreme","Terrifying","Horrific","Unreal","Catastrophic"
];

const TOWERS = [
    {
    name: "Citadel of Victory", abbr:"CoV", type:"Citadel",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Difficult", rating:4.25, creators:["TheBirbsWord"],
    fact:"Designed as most players' first-ever citadel, expanding on backtracking and secret endings."
  },

  {
    name: "Tower of A Simple Time", abbr:"ToAST", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Easy", rating:1.25, creators:["plant9seeds"],
    fact:"This tower is inspired by Tower of Phone Snapping and Tower of Madness's revamp."
  },
  {
    name: "Tower of Anger", abbr:"ToA", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Easy", rating:1.5, creators:["dreamyallyy"],
    fact:"This was the first Easy tower in the game."
  },
  {
    name: "Tower of Madness", abbr:"ToM", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Medium", rating:2.12, creators:["Gammattor","TheBirbsWord"],
    fact:"The classic version of this tower formerly had the world record for having the longest completed run (1 day and 14 hours)."
  },
  {
    name: "Tower of Hecc", abbr:"ToH", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Hard", rating:3.3, creators:["ObrenTune"],
    fact:"Alongside being the first tower in EToH, this tower was also the first known tower-style obby on Roblox."
  },
  {
    name: "Tower of Killjoys", abbr:"ToK", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Hard", rating:3.47, creators:["Karinriine","ciel_azulsky"],
    fact:"This tower was originally rated as easier than Tower of Hecc. However, Karinriine swapped them during a Ring 1 and Forgotten Ridge difficulty chart revamp in 2021."
  },
  {
    name: "Tower of Stress", abbr:"ToS", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Difficult", rating:4.88, creators:["zanychrome","T3mpl4te"],
    fact:"The infamously long truss on floor 9 used to only be climbable at regular speed in the original tower. (It has since had a speedbooster added if you hold jump on the truss.)"
  },
  {
    name: "Tower of Screen Punching", abbr:"ToSP", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Challenging", rating:5.2, creators:["ObrenTune"],
    fact:"This tower is the first to feature obstacles shaped like text, specifically the letters 'LOL' found on floor 4."
  },
  {
    name: "Tower of Rage", abbr:"ToR", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Challenging", rating:5.58, creators:["novaskaiii","t_azk"],
    fact:"There is an 'inverse' version of this tower in Zone 1, known as Tower of Absolute Vexation."
  },
  {
    name: "Tower of Impossible Expectations", abbr:"ToIE", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Intense", rating:6.01, creators:["ObrenTune","awesomecoolpop"],
    fact:"This is the first tower to: Maintain its hardest tower title even after the addition of new towers. Use Pushing Platforms, Moving Platforms, Loose Platforms, Seats and Emitters. Require the use of a glitch. Use one song on two floors, those being floor 7 and floor 8. (alot eh?)"
  },

  {
    name: "Tower of Inception", abbr:"ToI", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 4",
    difficulty:"Terrifying", rating:10.87, creators:["It_Near"],
    fact:"The first ever wacky-framed tower, nesting five floors inside one another."
  },
  {
    name: "Totally A Tower", abbr:"TAT", type:"Mini Tower",
    realm: REALM_INFERNO, area:"Ring 3",
    difficulty:"Intense", creators:["bLockerman666","aamo_s"],
    fact:"Beating it awards a badge called \"You fell for it!\" instead of a Tower Point."
  },
  {
    name: "Likely A Tower", abbr:"LAT", type:"Mini Tower",
    realm: REALM_INFERNO, area:"Ring 5",
    difficulty:"Difficult", creators:["Temmeh8274","t_azk"],
    fact:"Known for its unique frame and stud texture unlike most other mini towers."
  },
  {
    name: "Steeple of Towering Pillars", abbr:"SoTP", type:"Steeple",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Remorseless", rating:7.65, creators:["UttermostTree"],
    fact:"Was the hardest canon steeple in the game for years before Steeple of Forlorn Blizzard."
  },
  {
    name: "Steeple of Forlorn Blizzard", abbr:"SoFB", type:"Steeple",
    realm: REALM_INFERNO, area:"The Starlit Archives",
    difficulty:"Remorseless", rating:7.64, creators:["zNoxR","chereyii"],
    fact:"Themed on a mountaineer climbing through a blizzard; inspired by Celeste's Summit Down-Side."
  },
  {
    name: "Citadel of Tricky Situations", abbr:"CoTS", type:"Citadel",
    realm: REALM_SPATIAL, area:"Zone 3",
    difficulty:"Difficult", rating:4.98, creators:["KEVBloxTime","vendetta06","wllsknwlls"],
    fact:"Sits at the center of the satellite floating above Zone 3's lobby."
  },
  {
    name: "Citadel of Inside Situations", abbr:"CoIS", type:"Citadel",
    realm: REALM_SPATIAL, area:"Lost River",
    difficulty:"Difficult", rating:4.6, creators:["TromTimee"],
    fact:"Almost its entire structure takes place inside the frame, except the final floor."
  },
  {
    name: "Tower of Six Feet Under", abbr:"ToSFU", type:"Tower",
    realm: REALM_SPATIAL, area:"Zone 3",
    difficulty:"Easy", rating:1.05, creators:["Knighterisk"],
    fact:"Was the easiest tower in the game until Tower of Genesis released in Purgatorio."
  },
  {
    name: "Tower of Raging Tempest", abbr:"ToRT", type:"Tower",
    realm: REALM_SPATIAL, area:"Zone 10",
    difficulty:"Catastrophic", rating:11.64, creators:["ijivri","Cll0y"],
    fact:"The current hardest canon tower in the Spatial System, ascending through a collapsing greenhouse storm."
  }
];

const AREA_GROUPS = [
  { realm: REALM_INFERNO, main:"Ring 0 - Purgatorio" },
  { realm: REALM_INFERNO, main:"Ring 1 - Limbo", sub:"Forgotten Ridge" },
  { realm: REALM_INFERNO, main:"Ring 2", sub:"Garden of Eeshol" },
  { realm: REALM_INFERNO, main:"Ring 3" },
  { realm: REALM_INFERNO, main:"Ring 4", sub:"Silent Abyss" },
  { realm: REALM_INFERNO, main:"Ring 5 - Wrath", sub:"Lost River" },
  { realm: REALM_INFERNO, main:"Ring 6", sub:"Ashen Towerworks" },
  { realm: REALM_INFERNO, main:"Ring 7" },
  { realm: REALM_INFERNO, main:"Ring 8", sub:"The Starlit Archives" },
  { realm: REALM_INFERNO, main:"Ring 9" },
  { realm: REALM_SPATIAL, main:"Zone 1", sub:"Steelspire Horizon" },
  { realm: REALM_SPATIAL, main:"Zone 2", sub:"Arcane Area" },
  { realm: REALM_SPATIAL, main:"Zone 3", sub:"Paradise Atoll" },
  { realm: REALM_SPATIAL, main:"Zone 4" },
  { realm: REALM_SPATIAL, main:"Zone 5" },
  { realm: REALM_SPATIAL, main:"Zone 6" },
  { realm: REALM_SPATIAL, main:"Zone 7" },
  { realm: REALM_SPATIAL, main:"Zone 8" },
  { realm: REALM_SPATIAL, main:"Zone 9" },
  { realm: REALM_SPATIAL, main:"Zone 10" }
];
