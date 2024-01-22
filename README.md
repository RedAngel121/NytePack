# NytePack
The new Minecraft Pack that has been in the works for like *forever* and never actually getting done.
- Maybe I should describe it here better... but that will come with "effort" into the pack.

Join Our Discord: https://discord.gg/kkjwfuz

WARNING: Single player worlds will break repeatedly as the pack is still under heavy development!
- If you still want to play it then expect your stuff to be reset/borked a lot.
- You can get the pack as a full release [here](https://github.com/RedAngel121/NytePack/releases/download/NytePack/NytePack_Installer.zip)
- Just Import to any non vanilla launcher (MultiMC, Prism, ATLauncher) to play
- Once a public server is ready we will be making an announcement in the Discord.

Important Mods List: (~150 mods in total)

- Agricraft
- Apotheosis
- Blood Magic
- Chipped
- Construction Wand
- Cooking and Farming for Blockheads
- Corail Tombstone
- Create + Extras
- Dymanic Trees
- Immersive Aircraft
- Immersive Engineering
- Immersive Petroleum
- Lightmans Currency
- Little Logistics
- Open Parties and Claims
- Pams Harvestcraft 2
- Pnumaticraft
- Silent Gear
- Sophisticated Storage
- Toms Storage
- Tool Belt

We need to dive into Vein Mining and by extension... Farming

Right now we have EXTREMELY large veins sparsely placed in the world, no other ore gen exists (other than Create's world gen stuff)

"Ore factories" will have different ways of processing ore per type:
- Initial layout will be one raw chunk of ore in a furnace makes a nugget
- More complex ore processing will yield better results
- Mekanism (not included) is a good example of this

We need to talk about Currency and Proper Chunk Claiming and how to pay for it through Lightmans Currency (pending big update for 1.18).
- How does this factor into Starting Cash/Mob drops/Chest Loot/UBI+Taxes and other options?
- What options do we have for purchasing chunk loading time? cant find anything on this yet...

Balance is Key!

Check out:

    QOL:
        None at this time

    Mods:
        SOMETHING that will spruce up The End a bit without breaking YUNG's End Island Overhaul Mod

    World:
        None at this time

Soft No:

    QOL:
        FancyMenu (Lots of work)
        PackMenu (Lots of work)
        Simple Voice Chat (Possible Server Overhead/Network Issues)

    Mods:
        Beyond Earth (Awating 7.0 update and maybe even avoiding depeding on whats included)
        Create Interactive (propbably not happning due to possible performance/compat issues, will test later)
        Alex's Mobs (some of the mobs are just horrible and need to be disabled)
        Mekanism + Extras (most likely not included because its too streamlined and would need heavy edits)
        Supplementaries (lots of problems with this that im not super intersted in fine tuning yet)
        Comforts (possible compat issues)
        Lootr (will not be added as it floods the market with items)
        Nightmare Epic Siege ( :Sweats: yea idk yet, some of these things are just not ok but the options for intelegent mobs would be interesting)
        Enhanced Celestials (as long as we can disable the blood moon and the stupid moon noises)
        Aquaculture (remove neptunium stuff?)
        Natures Aura (possible server overhead issues)

    World:
        Terralith (chunk generation issues)
        Deeper and Darker (not available for 1.18)
        The Undergarden (not something i want because its far outside the realm of the pack)

        Swap for Geolosys?: disinclined...
            https://www.curseforge.com/minecraft/mc-mods/large-ore-deposits
                https://legacy.curseforge.com/minecraft/mc-mods/advanced-finders
            https://www.curseforge.com/minecraft/mc-mods/pollution-of-the-realms
                https://www.curseforge.com/minecraft/mc-mods/advanced-chimneys

DO:

    Mod Changes:
        PERMANENTLY DISABLE WANDERING TRADER
        Philip's Ruins - Remove MiniBoss Ruins
        Determine how Vein Mining is actually going to affect the player hunger and tool durability
        Do something about the Create Mechanical Drill, makes things too easy (slow down or disable ore drilling?)
        Adjust Scaling Health Mod
        - Distance instead of time
        - Set max health limits "higher"
        - Disable all drops
        - Set Health From XP to amount of XP points instead of +1 heart every 10 levels
        - Use https://github.com/SilentChaos512/ScalingHealth/wiki/Making-a-datapack
        Create Deco - investigate and possibly Disable "coin stacks" to prevent confusion
        Investigate steam and rails for stuff we dont want (phantom rails/bogies?)
        Investigate Glassential functional glass blocks
        Investigate secret rooms
        Blood Magic Sigil of Air and (something about a meteor that dev is concerned about)
        Disable IE Wooden Storage Crate and Wooden Barrel
        Use Oil and settings provided by Immersive Petroleum
        Adjust Sophisticated Storage settings
        Gateways to Eternity
        - Add an absolute metric ton of gateways cause thats going to be fun
        - Could have integration with lightmans for special purchases (Tickets for Heart Canisters?)
        Baubley Heart Canisters
        - Heart cans need to be added to purchasable items from server vending machines (red = 1 / yellow = 2 / green = 4 / blue = 8)
        Loot: 1/1000 chance of a stick named "Fred's Other Cousin" / 1/10000 chance of spawning a blaze rod named "Fred's Cousin" / 1/100000 chance of spawning a pufferfish named "Fred"

    Config Changes:
        Agricraft - Test if mutated crops hold stats after gowing without crop sticks and replanting and replanting and replanting
        Fix the last of the ores and just make everything large bubbles like gold.json... no sense in keeping disks or pylons right now
        SOL Apple Pie - check configs to make sure its going to work like we want, config added and needs adjustment after testing
        Adjust the corail tombstone config as needed
        Apotheosis disable armor drops from every mob, adjust settings
        CC Tweaked - TURN OFF THE TURTLES
        Farming for Blockheads - Disable Market
        Aircraft needs adjustments (nerf pedal craft) and better integration with crafting recp (possible steel aircraft industry?)
        Fix Starter Kit to include things players should have day one
        Check toolbelt config for item white/blacklist (sadly cannot change its size)
        Serene Seasons: crops (temp and season bands) and manage tectonic biomes
        Lightmans needs to update to v2.2 - Change the coin upgrade size to 100/1

Lastly, 
- Agricraft disable "Missing JSON Gen" (L13)
- Remove World Edit Mods and other Admin only mods
- Sort out Server vs Client side mods
- Edit the Server Startup Script to allow packwiz management
- Turn off Wandering Trader `/gamerule doTraderSpawning false` (or find the config)

Server Update Command Line:
- `java -jar packwiz-installer-bootstrap.jar https://redangel121.github.io/NytePack/pack.toml -g -s server`
- Then start the minecraft dedicated server using the premade server script