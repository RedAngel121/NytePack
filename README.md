# NytePack
**Welcome to NytePack where innovation is productivity!**
- [Join The GameNytes Discord!](https://discord.gg/kkjwfuz)

# WARNING:
### Single player worlds will break repeatedly as the pack is still under heavy development!
- If you still want to play it then expect your stuff to be reset/borked a lot
- No, I'm not helping you if something breaks, I'm probably working that problem anyway
- You can get the pack as a full and always up to date release [here](https://github.com/RedAngel121/NytePack/releases/download/NytePack/NytePack_Installer.zip)
- Requires Prism Launcher or AT Launcher to play, ***CurseForge and Microsoft are not compatable.***
- Once a public server is ready I will be making an announcement in the Discord

### Multiplayer Server Rules and things to know:
- Spawn is a Safe Haven; Protected and Defended. Do not find a way to destroy it lest your life be forefit.
- Food and XP grow your health, both are reset on death. Find a way to make better foods and earn more XP to stay alive.
- PVP is enabled but not encouraged, unsecured items can be stolen if you left out... so maybe dont do that.
- After a Players death, the items will be locked in the corpse for 7 days, after which corpses become lootable.
- You can Claim Land by purchasing the amount you want, Claims will be deleted after 90 days of inactivity.
- Enemies grow stronger with distance from spawn, do not stray far without preparing yourself for that.
- Different dimensions empower enemies greatly, steel yourself for the fights of your life.
- More info to come when I need to share it

# Important Mods List:
- Agricraft
- Apotheosis
- Cataclysm
- Chipped
- Cooking for Blockheads
- Create + TFMG
- Dynamic Trees
- FLAN
- Immersive Aircraft
- Lightmans Currency
- Pams Harvestcraft 2
- Silent Gear
- Sophisticated Storage
- Toms Storage
- Tool Belt
- And More!

# ~ BUILD TEAM NOTES ~
## Pack Build Rules are as follows:
1. No Easy Teleporting items or players (Stargates Exception because power limitations)
2. No Easy Backpacks or On-Person Inventory Storage (Toolbelt and Agricraft Pouch Exceptions or similar item specific inv spaces)
3. Pack Theme is more Dieselpunk/Factory with long-term goals and community play, Endgame TBD (InterPlanetary/Travel/Stargates/?)
4. Crafting Recipes Inter-Connectivity is desired between most mods for increased complexity pack longevity
5. Power storage, production, and transfer, will be handled in world and not by items on the player (to the best of ability)
6. Player travel will be with large scale projects such as Planes/Trains/Stargates/Rockets and not on person items like jetpacks (apoth excluded)

# Initial Changes
- Add and Configure [NoMo' Portals](https://www.curseforge.com/minecraft/mc-mods/no-mo-portals) After the v6 Update
- [x] Upgraded Terrain Generation and Ore Generation
- [x] Adapted Ore Generation from all different mods
- [x] Vein Mining Enchant configs to determine its effects on hunger and durability
- [x] Turn off Vanilla Village generation
- [x] I need to hash out Proper Chunk Claiming (FLAN) and how to pay for it with Lightmans Currency
- [x] Standardize Mob Cash Drops: lowered natural drop count to 1-5 coins per mob
- [x] Fix the Scaling health Mobs.JSON to include level minimums and more types of effects
- [x] Create Mechanical Drill Disabled
- [x] Immersive Aircraft Recipe Integration with alternative tech mods
  - [ ] setup `create:mechanical_crafting` recipes for Immersive Warship, Economy Plane, and Scarlet Biplane
- [x] Added The Undergarden
- [x] ADD [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism)
  - [x] standardize ore gen and drops
  - [x] recipe changes to include Naq as base material (steel_casing and metallurgic_infuser)
  - [ ] disable teleportation stuff?

# Big Changes
- [ ] Modify Bronze Ingot recipe to include create machines
- [ ] Add Naquadah to silent gear better than Netherite
- [ ] Improve Undergarden mats for silent gear to be better than Naquadah
- [ ] Rearrange all the mobs in lightmans configs to basic 1-6 tier instead of starting with 2nd tier :facepalm: then add the mobs from other mods
- [ ] Modify SGJ recipes to make building a stargate more difficult and resource intensive
- [ ] "Ore Factories" will have different ways of processing ore per type:
  - [x] Standard Ore Block drops the same rate as raw copper
  - [ ] Initial smelting layout will be one raw ore in a furnace makes {X} nuggets
  - [ ] 1 raw chunk in create mixer with water makes {2X} nuggets
  - [ ] 1 raw chunk in a grind mill makes 1-2 crushed ore, each smelted for {1.5X} nuggets or washed for {3X} nuggets
  - [ ] More complex ore processing will yield better results
- [ ] Gateways to Eternity
  - Add an absolute metric ton of gateways with all types of mobs (add alex mobs?) *cause **thats** going to be fun*
  - Find out what rewards should be allowed
- [ ] Change the required items in the More Minecarts mod chunk loader to accept coins instead of "crystal" stuff ([not yet possible](https://github.com/ryyanmapes/minecart-mod/issues/97))
- [ ] Sparky's Loot Box: 1/1000 chance of a stick named "Fred's Other Cousin" / 1/10000 chance of spawning a blaze rod named "Fred's Cousin" / 1/100000 chance of spawning a pufferfish named "Fred"

# Ongoing Changes
- Chicken Shed Configs can allow other mobs to drop items once every 20 min
- Add loot tabes from other mods for lightmans to insert coins into

# Interesting Ideas:
- [FancyMenu](https://www.curseforge.com/minecraft/mc-mods/fancymenu) OR [PackMenu](https://www.curseforge.com/minecraft/mc-mods/packmenu): Both are lots of work...
- [Alex's Mobs](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs): some of the mobs are just horrible and need to be disabled
- [Aquaculture](https://www.curseforge.com/minecraft/mc-mods/aquaculture): remove neptunium stuff or adjust it
- [Beyond Earth](https://www.curseforge.com/minecraft/mc-mods/beyond-earth):
  - Progression beyond steel/netherite and I make other planets actually useful
  - Awating 7.0 update and maybe even avoiding depeding on whats included (July 2024?)
- [Comforts](https://www.curseforge.com/minecraft/mc-mods/comforts)
- [Create: Dreams and Desires](https://www.curseforge.com/minecraft/mc-mods/create-dreams-desires): Possibly incompatable with pack direction due to tools
- [Mana and Artifice](https://www.curseforge.com/minecraft/mc-mods/mana-and-artifice): will need mob controls / possible starter book for sale / Ore Generation changes
- [Natures Aura](https://www.curseforge.com/minecraft/mc-mods/natures-aura): possible server overhead issues because of the chunk aura updates
- [Nightmare Epic Siege](https://www.curseforge.com/minecraft/mc-mods/nightmareesm): Disable 90% of the mod: Most things are not ok but more intelligent mobs could be interesting
- [PneumaticCraft: Repressurized](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized) And [Compressed Creativity](https://www.curseforge.com/minecraft/mc-mods/compressedcreativity)
- [Supplementaries](https://www.curseforge.com/minecraft/mc-mods/supplementaries): lots of problems with this that im not super intersted in fine tuning yet

# Additional Server World Changes:
- Find out how much Starting Cash will be needed to play on the server
- Disable Portals to other Dims and use a Stargate instead (Add a mod to do this)
  - Stargate will need to be **Pay to Enter** based on destination and have easy access to return from each dimension
  - **Nether** payment will be Iron coins and a diamond
  - **End** payment will be Gold coins and netherite ingot
  - **Abydos** payment will be Emerald coins and block of azure silver?
  - **Undergarden** payment will be Diamond coins and a stargate base block
- Starting town built by hand or built with minecolonies fortress and more stuff
  - Will need seperate buildings for different styles of gameplay
  - Server Owned Vending machines as money sinks: Starter Gear, Armors, Weapons, Basic Food, Wallet, and other Simple Items
- Add items to spawn that are common for players to use:
  - Multiple Crafting Tables
  - Anvil and Smith Table
  - Apotheosis Tables
  - Basic Enchanting
  - Vending Machines
- Baubley Heart Canisters need to be added to purchasable items from server vending machines
  - Amulet can be purchased for 1 copper / maybe Earned with Easy Gateways?
  - bones can be earned with gateways and natural mob spawns
  - red can = 5 wither bones
  - yellow can = 5 red cans and an iron coin
  - green can = 5 yellow cans and a gold coin
  - blue can = 5 green cans and an emerald coin

# Lastly,
- Change Client keybind config and upload to the Nytepack_Installer.Zip
- Remove World Stripper and other Admin only mods
- Sort out Server vs Client side only mods
- Edit the Server Startup Script to allow packwiz management
- Turn off Wandering Trader `/gamerule doTraderSpawning false` (or find it in server configs)
- Change Sleep % to 1 (add sleeping bags or something if you want more than 10%)

### Server Update Command Line:
- `java -jar packwiz-installer-bootstrap.jar https://redangel121.github.io/NytePack/pack.toml -g -s server`
- For use on servers, add the `-g` flag to disable the GUI and `-s server` to download only server-side mods
- Then start the minecraft dedicated server using the premade server script