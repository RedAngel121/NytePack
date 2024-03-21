# NytePack
**Welcome to NytePack where innovation is productivity!**
- [Join The GameNytes Discord!](https://discord.gg/kkjwfuz)

# WARNING:
Single player worlds will break repeatedly as the pack is still under heavy development!
- If you still want to play it then expect your stuff to be reset/borked a lot
- No, I'm not helping you if something breaks, I'm probably working on a problem
- You can get the pack as a full and always up to date release [here](https://github.com/RedAngel121/NytePack/releases/download/NytePack/NytePack_Installer.zip)
- Requires Prism Launcher or AT Launcher to play, ***CurseForge and Microsoft are not compatable.***
- Once a public server is ready we will be making an announcement in the Discord

# Important Mods List:
- Agricraft
- Apotheosis
- Chipped
- Construction Wand
- Cooking and Farming for Blockheads
- Corail Tombstone
- Create + Extras
- Dynamic Trees
- Geolosys
- Immersive Aircraft
- Immersive Engineering
- Immersive Petroleum
- Lightmans Currency
- Little Logistics
- Mana & Artiface
- Open Parties and Claims
- Pams Harvestcraft 2
- Pnumaticraft
- Silent Gear
- Sophisticated Storage
- Tectonic
- Toms Storage
- Tool Belt
- +150 more!

# ~ BUILD TEAM NOTES ~
## Pack Build Rules are as follows:
1. No Easy Teleporting items or players (CoRail's Death Key Exception / Eventually Stargates when 1.20.1 happens)
2. No Easy Backpacks or On-Person Inventory Storage (Toolbelt and Agricraft Pouch Exception + Similar item specific inv space)
3. Pack Theme is more Dieselpunk/Factory with long-term goals and community play, Endgame TBD (Planetary Travel?)
4. Crafting Recipe Inter-Connectivity is desired (How do we manage Power storage and generation?)

## More Immediete Settings and Changes
1. We need to dive into Vein Mining (and by extension Farming) to determine how Vein Mining is actually going to affect the player hunger and tool durability.
2. Right now we have EXTREMELY large veins sparsely placed in the world, no other ore gen exists other than Create's world gen stuff (which may be expanded with New Create Mods in 1.20.1)
3. "Ore Factories" will have different ways of processing ore per type:
- Initial layout will be one raw chunk of ore in a furnace makes a nugget
- More complex ore processing will yield better results
- Mekanism (not included) is a good example of this
4. We need to talk about Currency and Proper Chunk Claiming and how to pay for it through Lightmans Currency.
- How does this factor into Starting Cash? Mob Cash Drops? Chest Loot? Taxes? and other options?
- What options do we have for purchasing chunk loading times? cant find anything on this yet... find a chunk loader that accepts "fuel"
## Update to 1.20.1 in June 2024
### Only if ALL mods are available. After update look into:
From what I can tell we are missing:
- Agricraft+InfinityLib (May 2024)
- DynTreesPlus (unknown) and PHC2 Compat (unknown)
- Geolosys (May 2024)
- IE/IP (Replace with TFMG and more Create stuff) 

- Replace IE and IP with [C:TFMG](https://www.curseforge.com/minecraft/mc-mods/create-industry)
- Mechano (Mod Still Under Heavy Development)
- [NuclearCraft](https://www.curseforge.com/minecraft/mc-mods/nuclearcraft-neoteric)
- An End Overhaul that will spruce up The End a bit without breaking YUNG's End Island
  - Investigate https://www.curseforge.com/minecraft/mc-mods/nullscape
  - Investigate https://www.curseforge.com/minecraft/mc-mods/unusual-end
  - Investigate https://www.curseforge.com/minecraft/mc-mods/endless-biomes
- [Quark](https://www.curseforge.com/minecraft/mc-mods/quark) With [Zeta](https://www.curseforge.com/minecraft/mc-mods/zeta)
  - We can remove all inventroy sorting as Quark handles it
  - Blacklist Soph Chests from Sorting buttons as they have built in sorting
  - Disable Quark's Backpack and other inventory expansion options
- [Stargate Journey](https://www.curseforge.com/minecraft/mc-mods/sgjourney)
  - [Common Stargates](https://www.curseforge.com/minecraft/texture-packs/common-stargates)
  - Already got a KubeJS setup for [MoreGates](https://www.curseforge.com/minecraft/mc-addons/more-stargates), but still check for updates on this.
- [Finite water](https://legacy.curseforge.com/minecraft/mc-mods/finitewater/files/5077993)
  - The tag is called /data/finitewater/tags/worldgen/biome/has_infinite_water.json found [here](https://github.com/JDKDigital/finitewater/blob/dev-1.20.1/src/main/resources/data/finitewater/tags/worldgen/biome/has_infinite_water.json), just put this in and you're set!
```json
{
  "values": [
    "#minecraft:is_ocean",
    "#minecraft:is_river"
  ]
}
```

# Balance is Key! Check These Out:
### QOL:
- [Staaaaaaaaaaaack (Stxck)](https://www.curseforge.com/minecraft/mc-mods/staaaaaaaaaaaack)
- [No More Piglin Portal Spawning](https://www.curseforge.com/minecraft/mc-mods/no-more-piglin-portal-spawning)
- [Experimental Settings Disabler](https://www.curseforge.com/minecraft/mc-mods/experimental-settings-disabler)

### Mods:
- [Daves Potioneering](https://www.curseforge.com/minecraft/mc-mods/daves-potioneering): what does this mod even do?
- [Aquaculture](https://www.curseforge.com/minecraft/mc-mods/aquaculture): remove neptunium stuff
- [NoMo' Portals](https://legacy.curseforge.com/minecraft/mc-mods/no-mo-portals): maybe add this to force travel by spaceship/stargate? (nether/end excluded?)
- [Beyond Earth](https://www.curseforge.com/minecraft/mc-mods/beyond-earth):
  - Progression beyond steel/netherite and we make other planets actually useful
  - Awating 7.0 update and maybe even avoiding depeding on whats included (May 2024)
  - Stargate integration using kubejs/data/sgjourney/tags/worldgen/biome/has_structure/stargate_pedestal/stargate_pedestal_biomes.json
- [Create: Dreams and Desires](https://www.curseforge.com/minecraft/mc-mods/create-dreams-desires): check for Ore Gen and see whats not compatable
- [Create: Connected](https://www.curseforge.com/minecraft/mc-mods/create-connected): should be fine but still look at it first

### World:
- Find a way to increase world build height and lower bedrock + Flat Bedrock (wont work with TFMG Oil Gen)
  - [Shattered World Limits](https://www.curseforge.com/minecraft/mc-mods/new-world-height-and-depth)?

# Soft No:
### QOL:
- [FancyMenu](https://www.curseforge.com/minecraft/mc-mods/fancymenu): Lots of work
- [PackMenu](https://www.curseforge.com/minecraft/mc-mods/packmenu): Lots of work
- [Simple Voice Chat](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat): Possible Server Overhead/Network Cap issues
### Mods:
- [Create Interactive](https://www.curseforge.com/minecraft/mc-mods/create-interactive): probably not happening due to possible performance/compat issues, will test later
- [Alex's Mobs](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs): some of the mobs are just horrible and need to be disabled
- [Supplementaries](https://www.curseforge.com/minecraft/mc-mods/supplementaries): lots of problems with this that im not super intersted in fine tuning yet
- [Comforts](https://www.curseforge.com/minecraft/mc-mods/comforts): possible compat issues with Serene Seasons?
- [Nightmare Epic Siege](https://www.curseforge.com/minecraft/mc-mods/nightmareesm): Disable 90% of the mod: Most things are not ok but more intelligent mobs could be interesting
- [Natures Aura](https://www.curseforge.com/minecraft/mc-mods/natures-aura): possible server overhead issues because of the chunk aura updates
- [Lit it Up](https://legacy.curseforge.com/minecraft/mc-mods/lit-it-up): making furnaces more realistic
- [Burning Furnace](https://legacy.curseforge.com/minecraft/mc-mods/burning-furnace): making furnaces more dangerous

### World:
- [Terralith](https://www.curseforge.com/minecraft/mc-mods/terralith): slow chunk generation issues and needs [DynTrees Compat](https://www.curseforge.com/minecraft/mc-mods/dynamic-trees-terralith)
- [Deeper and Darker](https://www.curseforge.com/minecraft/mc-mods/deeperdarker): not available for 1.18
- [The Undergarden](https://www.curseforge.com/minecraft/mc-mods/the-undergarden)
  -  Not something i want personally, but how far outside the realm of the pack is it really?
  -  We could turn it into a planet instead of a portal for use with Beyond Earth?
- Swap for Geolosys? Disinclined as Geolosys is being worked on for 1.20.1 now...
  - https://www.curseforge.com/minecraft/mc-mods/large-ore-deposits
  - https://legacy.curseforge.com/minecraft/mc-mods/advanced-finders
  - https://www.curseforge.com/minecraft/mc-mods/pollution-of-the-realms
  - https://www.curseforge.com/minecraft/mc-mods/advanced-chimneys

# Hard No:
- Enhanced Celestials (harvest moon is the only befenit and doesnt provide enough to warrant including the mod)
- Lootr (will not be added as it floods the market with items)
- Mekanism + Extras (most likely not included because its too streamlined or technically advanced and would need heavy edits to function the way we want)

# Additional Mod/Config Changes:
- Connected Textures do not work with Framed Blocks...
  - CT does not work with Framed Blocks in 1.18.2: frame blocks register CT but not with each other or orig block
  - Same but backwards in 1.20.1: frame blocks do not register CT even though orig block registers and connects correctly
- Investigate Create: Steam and Rails for stuff we dont want like phantom rails/bogies
- Investigate Glassential functional glass blocks
- Investigate secret rooms mod
- Investigate Sophisticated Storage settings or disable some upgrades
- Agricraft: Test if mutated crops hold stats after gowing without crop sticks and replanting and replanting and replanting
- Apotheosis disable armor drops from every mob and adjust settings
- Adjust the corail tombstone config as needed
- CC Tweaked: TURN OFF THE TURTLES!
- Toolbelt Blacklist?
- Fix Starter Kit to include things players should have day one... What items tho?
- Fine Tune Geolosys as needed
- Sparky's Loot Box: 1/1000 chance of a stick named "Fred's Other Cousin" / 1/10000 chance of spawning a blaze rod named "Fred's Cousin" / 1/100000 chance of spawning a pufferfish named "Fred"
- Farming for Blockheads
  - Disable the Market
  - Check everything else to make sure it doesnt break the spirit of the pack
- Lightmans Currency update to v2.2
  - Change the coin upgrade size to 100/1
  - investigate all new config system
- Immersive Aircraft
  - nerf pedal crafts
  - better integration with alternative tech and crafting recipes
  - possible steel aircraft industry?
- Philip's Ruins
  - Increase Distance Between Ruins
  - Remove MiniBoss Ruins?
- Create Mod Possible Issues:
  - Mechanical Drill, makes things too easy, slow down or disable ore drilling?
  - Hose Pulley makes the nether an infinite lava source (do we care? its no different than Overworld oceans...)
- Adjust Scaling Health Mod:
  - Set max health limits higher or unlimited
  - Remove the crafting items or change the recipies
  - Set "Health From XP" to amount of XP points instead of XP levels
  - Use https://github.com/SilentChaos512/ScalingHealth/wiki/Making-a-datapack
- Create Deco
  - Disable coins and coin stacks to prevent confusion
  - add them to a new Currency Chain after LC-2.2 update?
- Gateways to Eternity
  - Add an absolute metric ton of gateways cause thats going to be fun
  - Could have integration with lightmans for special purchases (Tickets for Heart Canisters?)
- Baubley Heart Canisters
  - Heart cans need to be added to purchasable items from server vending machines (red = 1 / yellow = 2 / green = 4 / blue = 8)
- Immersive Engineering:
  - garden_cloche needs growth_modifier adjustments
  - Disable crate minecart and reinforced crate minecart
- Disable Pnumaticraft Chest
- Mana and Artiface
  - Check into symbols and spells and see what can be used to make OP spells
  - Increase distance slightly between cache/structure world gen
  - Disable and Migrate New Vinteum Ore into Geolosys using the Iron Ore config
  - https://github.com/Mithion/Mana-And-Artifice/issues/644 Ore Cannot be Disabled until updated

# Lastly,
- Change Client keybind config and upload to the Nytepack_Installer.Zip
- Agricraft disable "Missing JSON Gen" (L13)
- Remove World Edit Mods and other Admin only mods
- Sort out Server vs Client side mods
- Edit the Server Startup Script to allow packwiz management
- Turn off Wandering Trader `/gamerule doTraderSpawning false` (or find it in a config)
- Change Sleep % to 50

### Server Update Command Line:
- `java -jar packwiz-installer-bootstrap.jar https://redangel121.github.io/NytePack/pack.toml -g -s server`
- Then start the minecraft dedicated server using the premade server script