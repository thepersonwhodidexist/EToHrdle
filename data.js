const REALM_INFERNO = "The Great Inferno";
const REALM_SPATIAL = "The Spatial System";

const DIFF_ORDER = [
  "Easy","Medium","Hard","Difficult","Challenging","Intense",
  "Remorseless","Insane","Extreme","Terrifying","Catastrophic","Horrific","Unreal"
];

const TOWER_TYPES = ["Tower","Citadel","Steeple","Mini Tower"];

const TOWERS = [
  {
    name: "Tower of Genesis", abbr:"ToG", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Easy", rating:1.00, creators:["aetrnalis"],
    fact:"During the time period after the release of Ring 0, the #tower-winners channel in the EToH Discord Server was renamed to #tog-winners."
  },
  {
    name: "Tower of Motion Evolution", abbr:"ToME", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Easy", rating:1.46, creators:["Gammattor"],
    fact:"This tower introduces droppers and run-ending outside sections."
  },
  {
    name: "Tower of Buttons", abbr:"ToB", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Easy", rating:1.48, creators:["t_azk", "3_XW"],
    fact:"Prior to the removal of the Zone 2 tower of the same name, this tower was originally called 'Tower of Button Mania'. After removal, it took the name of the tower, 'Tower of Buttons'."
  },
  {
    name: "Tower of Critical Damage", abbr:"ToCD", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Easy", rating:1.93, creators:["novaskaiii", "ciel_azulsky"],
    fact:"This tower shares an acronym with Tower of Crystal Darkness, a deconfirmed tower. (Coincidentally, both of these towers were intended to be made by AzaZeall.)"
  },
  {
    name: "Tower of Boost Mayhem", abbr:"ToBM", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Medium", rating:2.00, creators:["RisenArtemis"],
    fact:"This tower's original name was Tower of Boosting Up, but its name was changed to Tower of Boost Mayhem when Tower of Button Mania was renamed to Tower of Buttons."
  },
  {
    name: "Tower of Various Pressures", abbr:"ToVP", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Medium", rating:2.44, creators:["Lizarpiz"],
    fact:"This tower introduces the first headhitters and stickout wraparounds in regular progression."
  },
  {
    name: "Tower of Kinetic Potential", abbr:"ToKP", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Medium", rating:2.54, creators:["arx_drahbea", "emflamed", "Adem_iere"],
    fact:"Upon its release, this tower dethroned Steeple of Overgrowth as the easiest tower in an Intermediate Towers Section."
  },
  {
    name: "Tower of No Strings Attached", abbr:"ToNSA", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Medium", rating:2.79, creators:["zanychrome"],
    fact:"The name 'Tower of No Strings Attached' was originally taken by Tower of Woven Technique, a scrapped Medium difficulty tower intended for Ring 0"
  },
  {
    name: "Tower of Keys To Success", abbr:"ToKTS", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Hard", rating:3.00, creators:["DispensableArray", "theultimatedianite"],
    fact:"The name of this tower is taken from a specific meme GIF parodying motivational images. The meme references the final key-related section of the Geometry Dash level Limbo."
  },
  {
    name: "Tower of Dancing All Night", abbr:"ToDAN", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Hard", rating:3.35, creators:["zachwro21"],
    fact:"As of 2026/08/11, This tower's badge description incorrectly labels itself as the hardest tower within Purgatorio, and hasn't been changed despite the fact that Citadel of Victory was moved above ToDAN on December 24, 2025."
  },
  {
    name: "Citadel of Victory", abbr:"CoV", type:"Citadel",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Difficult", rating:4.25, creators:["TheBirbsWord"],
    fact:"This tower is the easiest tower that cannot be beaten with Vertical Mobility."
  },
  {
    name: "Tower Not Found", abbr:"TNF", type:"Mini Tower",
    realm: REALM_INFERNO, area:"Ring 0",
    difficulty:"Hard", rating:3.11, creators:["TheBirbsWord"],
    fact:"Clicking on any sign in the tower will replace the text with a more in-depth explanation."
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
    difficulty:"Easy", rating:1.50, creators:["dreamyallyy"],
    fact:"This was the first Easy tower in the game."
  },
  {
    name: "Tower of Madness", abbr:"ToM", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Medium", rating:2.12, creators:["Gammattor","TheBirbsWord"],
    fact:"The classic version of this tower formerly had the world record for having the longest completed run (1 day and 14 hours)."
  },
  {
    name: "Tower of Noticeable Infuriation", abbr:"ToNI", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Medium", rating:2.80, creators:["Gammattor","TheBirbsWord"],
    fact:"The tic-tac-toe section on Floor 8 is a recreation of a match played between this tower's creators. (Gammattor was O and TheBirbsWord was X.)"
  },
  {
    name: "Tower of Hecc", abbr:"ToH", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Hard", rating:3.30, creators:["ObrenTune"],
    fact:"Alongside being the first tower in EToH, this tower was also the first known tower-style obby on Roblox."
  },
  {
    name: "Tower of Killjoys", abbr:"ToK", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Hard", rating:3.47, creators:["Karinriine","ciel_azulsky"],
    fact:"This tower was originally rated as easier than Tower of Hecc. However, Karinriine swapped them during a Ring 1 and Forgotten Ridge difficulty chart revamp in 2021."
  },
  {
    name: "Tower of Keyboard Yeeting", abbr:"ToKY", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Difficult", rating:4.10, creators:["p00ks1"],
    fact:"This tower's music was not chosen by its creator."
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
    difficulty:"Challenging", rating:5.20, creators:["ObrenTune"],
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
    fact:"This is the first tower to: Maintain its hardest tower title even after the addition of new towers. Use Pushing Platforms, Moving Platforms, Loose Platforms, Seats and Emitters. Require the use of a glitch. Use one song on 2 floors, those being floor 7 and floor 8. (wowzers)"
  },
  {
    name: "Citadel of Laptop Splitting", abbr:"CoLS", type:"Citadel",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Intense", rating:6.50, creators:["Karinriine"],
    fact:"There used to be a feature where you had to push Slamo into an incinerator on Floor 6 to progress. This has since been removed."
  },
  {
    name: "Tower of True Skill", abbr:"ToTS", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Remorseless", rating:7.09, creators:["Feodoric"],
    fact:"This tower was originally named 'Tower of Skill', but it was changed since the 'ToS' acronym was already taken by Tower of Stress."
  },
  {
    name: "Tower of Infinity Gauntlet", abbr:"ToIG", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Insane", rating:8.23, creators:["ciel_azulsky","aetrnalis"],
    fact:"This tower makes many small references to Citadel of Void, mainly its design style, song choices, and dropper progression on Floor 6."
  },
  {
    name: "Not Even A Tower", abbr:"NEAT", type:"Mini Tower",
    realm: REALM_INFERNO, area:"Ring 1",
    difficulty:"Easy", rating:1.11, creators:["ObrenTune"],
    fact:"On January 10, 2019, this tower received an extension from 3 floors to 5 and was temporarily Medium until the Ring 1 difficulty reclassification had happened."
  },

  {
    name: "Steeple of Meaningless Decisions", abbr:"SoMD", type:"Steeple",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Easy", rating:1.22, creators:["TheBirbsWord", "novaskaiii"],
    fact:"This steeple is one of the only two canon towers that have optional additional gameplay, the other being Tower of Cosmic Tides."
  },
  {
    name: "Tower of Jolly Good Fun", abbr:"ToJGF", type:"Tower",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Easy", rating:1.65, creators:["TheBirbsWord"],
    fact:"Until some point in 2025, novaskaiii was credited despite not contributing to the tower at all."
  },
  {
    name: "Steeple of Low Woe", abbr:"SoLW", type:"Steeple",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Medium", rating:2.78, creators:["3_XW"],
    fact:"This steeple is the first and only tower of any type to have a full set of both weekly and monthly Challenges dedicated to it."
  },
  {
    name: "Steeple of Pursuit", abbr:"SoP", type:"Steeple",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Medium", rating:2.86, creators:["Karinriine"],
    fact:"On June 10, 2021, this steeple was moved up to Hard, but it got changed back to Medium due to Karinriine nerfing the lava by making it can-collide true and having it deal twelve damage instead of instantly killing the player."
  },
  {
    name: "Steeple of Uninstalling Roblox", abbr:"SoUR", type:"Steeple",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Hard", rating:3.74, creators:["FreeThePolarBear"],
    fact:"This Tower took 3 days to make."
  },
  {
    name: "Tower of Immense Ire", abbr:"ToII", type:"Tower",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Difficult", rating:4.24, creators:["wllsknwlls"],
    fact:"This tower originally had intentional misalignments to maintain a 'classic' feeling, but they were removed after AzaZeall told him that wouldn't get him anything and hinted towards this only harming the tower's overall quality."
  },
  {
    name: "Steeple of Wall Punching", abbr:"SoWP", type:"Steeple",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Difficult", rating:4.57, creators:["Paramockss"],
    fact:"At most, this steeple was constructed within a span of four hours."
  },
  {
    name: "Tower of Versatility", abbr:"ToV", type:"Tower",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Difficult", rating:4.64, creators:["Auterus"],
    fact:"The creator initially made this Tower for the Ring 2 Peter Griffin contest, a contest for which one would replace Tower of One Equals Zero. However, none of its towers ended up replacing ToOEZ."
  },
  {
    name: "Tower of Triangular Covering", abbr:"ToTC", type:"Tower",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Challenging", rating:5.00, creators:["Lenazz16"],
    fact:"A secret room on floor 8 can be accessed via corner flipping. Inside, there is text that reads: 'franchun04 best verified builder! ... K ... ToNBA is difficult!'"
  },
  {
    name: "Steeple of Climbing", abbr:"SoC", type:"Steeple",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Challenging", rating:5.49, creators:["AzaZeall"],
    fact:"It was made by AzaZeall in two hours."
  },
  {
    name: "Steeple of Huge Pain", abbr:"SoHP", type:"Steeple",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Intense", rating:6.35, creators:["AzaZeall"],
    fact:"Floor 1 was changed from its original version to a floor from another tower."
  },
  {
    name: "Tower of Increasing Stress", abbr:"ToIS", type:"Tower",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Intense", rating:6.37, creators:["TheFredericChopin"],
    fact:"This tower used to have a miniature version of Tower of Table Flipping."
  },
  {
    name: "Tower of Dangerous Expeditions", abbr:"ToDE", type:"Tower",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Intense", rating:6.75, creators:["ObbyRobloxian3"],
    fact:"Floors 1 and 2 has music that is known for being used in the popular Roblox game Jailbreak. Specifically, the museum robbery mission."
  },
  {
    name: "Citadel of Weird Nostalgia", abbr:"CoWN", type:"Citadel",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Intense", rating:6.96, creators:["t_azk", "ciel_azulsky", "3_XW"],
    fact:"This citadel used to be the tallest citadel in the game. When it got revamped, the citadel was made shorter in height due to the addition of descending floors. Citadel of Wacky Strategy is now the tallest citadel."
  },
  {
    name: "Steeple of Towering Pillars", abbr:"SoTP", type:"Steeple",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Remorseless", rating:7.65, creators:["UttermostTree"],
    fact:"Was the hardest canon steeple in the game for years before Steeple of Forlorn Blizzard. But then SoFB difficulty was decreased, and Steeple of Cheesy Vengeance was moved above both of these steeples."
  },
  {
    name: "Tower of Mind Breaking", abbr:"ToMB", type:"Tower",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Insane", rating:8.36, creators:["novaskaiii"],
    fact:"For some reason, the tower and its island are rotated and are the only ones to be rotated in the area."
  },
  {
    name: "This Is Probably A Tower", abbr:"TIPAT", type:"Mini Tower",
    realm: REALM_INFERNO, area:"Forgotten Ridge",
    difficulty:"Hard", rating:3.61, creators:["bLockerman666"],
    fact:"The final jumps resemble the final outside section of Tower of True Skill."
  },

  {
    name: "Tower of Phone Snapping", abbr:"ToPS", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Medium", rating:2.76, creators:["Gammattor"],
    fact:"This tower had no bugs upon bugtesting."
  },
  {
    name: "Tower of Big Hole", abbr:"ToBH", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Hard", rating:3.40, creators:["AzaZeall"],
    fact:"When playing this tower, lanterns that are supposed to be visible only when going through this tower in Tower of Deep Darkness's tower crossing section are visible in normal runs of this tower."
  },
  {
    name: "Tower of Overcoming Hatred", abbr:"ToOH", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Hard", rating:3.73, creators:["plant9seeds", "hearttadri"],
    fact:"This tower's winpad was infamous for not working even after many attempts and could sometimes fling you, causing a dead run."
  },
  {
    name: "Tower of Cold Hands", abbr:"ToCH", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Difficult", rating:4.00, creators:["HilmNoobly", "ObrenTune"],
    fact:"This tower got its name when ObrenTune's hands got cold and he couldn't articulate well while making this tower."
  },
  {
    name: "Tower of Falling and Failing", abbr:"ToFAF", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Challenging", rating:5.61, creators:["Hat_Rox"],
    fact:"While this tower was rated Remorseless, it was technically the hardest tower ever beaten for a very brief amount of time, before it was lowered to Challenging. (However, this feat is often disregarded due to the former difficulty rating being generally not taken seriously.)"
  },
  {
    name: "Tower of Traps", abbr:"ToT", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Challenging", rating:5.71, creators:["Gammattor", "Paramockss"],
    fact:"The original submission version of this tower only had 9 floors."
  },
  {
    name: "Tower of Deep Darkness", abbr:"ToDD", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Challenging", rating:5.80, creators:["Karinriine", "ciel_azulsky", "Cll0y"],
    fact:"There was a planned sequel to this tower, called Citadel of True Darkness, but it got scrapped."
  },
  {
    name: "Tower of Shattered Dreams", abbr:"ToSD", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Challenging", rating:5.84, creators:["Fauxyde"],
    fact:"This tower was the first to be inserted into Ring 2, alongside Tower of Cold Hands."
  },
  {
    name: "Tower of Table Flipping", abbr:"ToTF", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Intense", rating:6.44, creators:["IceNsalt"],
    fact:"This tower used to have a miniature version in Tower of Increasing Stress."
  },
  {
    name: "Tower of Eternal Suffering", abbr:"ToES", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Remorseless", rating:7.50, creators:["tintom495"],
    fact:"This tower was inspired by tintom495's experience with Tower of Impossible Expectations, hence the few similarities."
  },
  {
    name: "Citadel of Wacky Strategy", abbr:"CoWS", type:"Citadel",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Remorseless", rating:7.96, creators:["Karinriine", "ciel_azulsky", "bLockerman666", "Professor_Skittles", "logicchecks", "aamo_s", "uuuuuuuurchinnnnnnnn", "AzaZeall"],
    fact:"In the original version of CoWS, Floor 21 used to have gameplay, before it was turned into a safety net/rest floor."
  },
  {
    name: "Tower of Difficulty Chart", abbr:"ToDC", type:"Tower",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Insane", rating:8.03, creators:["It_Near", "Lightsynth", "Cll0y"],
    fact:"This tower was inspired by tintom495's experience with Tower of Impossible Expectations, hence the few similarities."
  },
  {
    name: "Maybe A Tower", abbr:"MAT", type:"Mini Tower",
    realm: REALM_INFERNO, area:"Ring 2",
    difficulty:"Easy", rating:1.07, creators:["ObrenTune"],
    fact:"This is the shortest tower in the game, being able to be completed in under 15 seconds."
  },


  {
  name: "Tower of Broken Tables", abbr:"ToBT", type:"Tower",
  realm: REALM_INFERNO, area:"Ring 2",
  difficulty:"Unreal", rating:55.55, creators:[""YOUR FACE""],
  canon: false,
  fact:"testing..."
}
];

const AREA_GROUPS = [
  { realm: REALM_INFERNO, main:"Ring 0 - Purgatorio" },
  { realm: REALM_INFERNO, main:"Ring 1 - Limbo", sub:"Forgotten Ridge" },
  { realm: REALM_INFERNO, main:"Ring 2 - Desire", sub:"Garden of Eeshöl" },
  { realm: REALM_INFERNO, main:"Ring 3 - Gluttony" },
  { realm: REALM_INFERNO, main:"Ring 4 - Greed", sub:"Silent Abyss" },
  { realm: REALM_INFERNO, main:"Ring 5 - Wrath", sub:"Lost River" },
  { realm: REALM_INFERNO, main:"Ring 6 - Heresy", sub:"Ashen Towerworks" },
  { realm: REALM_INFERNO, main:"Ring 7 - Violence" },
  { realm: REALM_INFERNO, main:"Ring 8 - Fraud", sub:"The Starlit Archives" },
  { realm: REALM_INFERNO, main:"Ring 9 - Treachery" },
  { realm: REALM_SPATIAL, main:"Zone 1 - Sea", sub:"Steelspire Horizon" },
  { realm: REALM_SPATIAL, main:"Zone 2 - Surface", sub:"Arcane Area" },
  { realm: REALM_SPATIAL, main:"Zone 3 - Sky", sub:"Paradise Atoll" },
  { realm: REALM_SPATIAL, main:"Zone 4 - Exosphere" },
  { realm: REALM_SPATIAL, main:"Zone 5 - The Moon" },
  { realm: REALM_SPATIAL, main:"Zone 6 - Mars" },
  { realm: REALM_SPATIAL, main:"Zone 7 - Asteroid Belt" },
  { realm: REALM_SPATIAL, main:"Zone 8 - Pluto" },
  { realm: REALM_SPATIAL, main:"Zone 9 - Singularity" },
  { realm: REALM_SPATIAL, main:"Zone 10 - Interstellar Shore" }
];

const AREA_IMAGES = {
  "Ring 0 - Purgatorio": "images/ring0.png",
  "Ring 1 - Limbo": "images/ring1.png",
  "Forgotten Ridge": "images/forgottenridge.png"
};

const AREA_EMBLEMS = {
  "Ring 0 - Purgatorio": "images/emblems/ring0emblem.png",
  "Ring 1 - Limbo": "images/emblems/ring1emblem.png",
  "Forgotten Ridge": "images/emblems/forgottenridgeemblem.png"
};
