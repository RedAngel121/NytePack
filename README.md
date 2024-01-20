# NytePack
The new Minecraft Pack that has been in the works for like *forever* and never actually getting done.

Important Mods List: (~150 mods in total)

    Agricraft
    Apotheosis
    Blood Magic
    Chipped
    Construction Wand
    Cooking and Farming for Blockheads
    Corail Tombstone
    Create + extras
    Immersive Engineering + extras
    Lightmans Currency
    Little Logistics
    Open Parties and Claims
    Pams Harvestcraft 2
    Pnumaticraft
    Silent Gear
    Sophisticated Storage
    Toms Storage
    Tool Belt

We need to talk about Ore Gen... and how that works THEN how it factors in Vein Mining + Farming.
Ore factories will have different ways of processing ore per type
We need to talk about Currency and Proper Chunk Claiming and how to pay for it. How does this factor into Starting Cash/Mob drops/Loot Chests/UBI + Taxes and other options.

Balance is Key!

Check out:

    QOL:
        None at this time

    Mods:
        Create: The Factory Must Grow   ???
        Create: Diesel Generators       ???
        Gateways to Eternity
            Add an absolute metric ton of gateways cause thats going to be fun
            Could have integration with lightmans for special purchases (Hearts?)
        Baubley Heart Canisters
            Hearts need to be added to purchaseable items from server vending machines

    World:
        Towns and Towers

Soft No:

    QOL:
        FancyMenu
        PackMenu
        Simple Voice Chat

    Mods:
        Create Interactive
        Alex's Mobs (some of the mobs are just horrible)
        Mekanism + Extras
        Supplementaries
        Comforts
        Lootr
        Nightmare Epic Siege
        Enhanced Celestials
        Aquaculture (remove fake/non-players from getting neptunium stuff)
        Natures Aura (possible server overhead issues)

    World:
        Deeper and Darker
        The Undergarden
        Philip's Ruins

        Swap for Geolosys?: disenclined...
            https://www.curseforge.com/minecraft/mc-mods/large-ore-deposits
                https://legacy.curseforge.com/minecraft/mc-mods/advanced-finders
            https://www.curseforge.com/minecraft/mc-mods/pollution-of-the-realms
                https://www.curseforge.com/minecraft/mc-mods/advanced-chimneys

DO:

    Changes:
        DISABLE WANDERING TRADER
        Determine how Vein Mining is actually going to affect the player hunger and tool durability
        Do something about the Create Mechanical Drill, makes things too easy (slow down or disable ore drilling?)
        Adjust Scaling Health Mod
            - Distance instead of time
            - Set max health limits "higher"
            - Disable all drops
            - Set Health From XP to amount of XP points instead of +1 heart every 10 levels
            - Use https://github.com/SilentChaos512/ScalingHealth/wiki/Making-a-datapack
        Create Deco - investigate and possibly Disable "coin stacks"?
        Investigate steam and rails for stuff we dont want (phantom rails/bogies?)
        Investigate Glassential functional glass blocks
        Investigate secret rooms
        Blood Magic Sigil of Air and (something about a meteor that dev is concerned about)
        IE Wooden Storage Crate and Wooden Barrel?
        Adjust Sophisticated Storage settings

    CONFIGS:
        SWAP SWEET POTATO FOR APPLE PIE check configs to make sure its worth the change
        adjust the corail tombstone config as needed
        Apotheosis disable armor drops from every mob, adjust settings
        CC Tweaked - TURN OFF THE TURTLES
        Farming for Blockheads - Disable Market
        Aircraft needs adjustments (nerf pedal craft) and better integration with crafting recp (possible steel aircraft industry?)
        Fix Starter Kit to include things players should have day one
        check toolbelt config for item white/blacklist (sadly cannot change its size)
        Serene Seasons: crops (temp and season bands) and manage tectonic biomes
        Lightmans needs to update to v2.2 - Change the coin upgrade size to 100/1


Server Update Command Line:
`java -jar packwiz-installer-bootstrap.jar https://redangel121.github.io/NytePack/pack.toml -g -s server` then start the minecraft dedi