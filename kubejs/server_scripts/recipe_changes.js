// Adding 50% chance to drop one Vinteum Dust per mob
LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.ENTITY).killedByPlayer()
        .addLoot(LootEntry.of("mna:vinteum_dust").limitCount([0, 1]))
})

// Mats needing to be changed in tags and recipes
let materials = ["iron", "copper", "gold", "zinc", "lithium", "nickel", "osmium", "tin", "lead", "uranium", "crimson_iron", "azure_silver", "cloggrum", "froststeel"]

// Fix Tags
ServerEvents.tags("item", event => {
    event.add("forge:dusts/salt", "pamhc2foodcore:saltitem")
    event.add("create:crushed", "#create:crushed_raw_materials")
    for (let each of materials) {
        event.add("create:crushed/" + each, "create:crushed_raw_" + each)
    }
    event.add("create:crushed/aluminum", "create:crushed_raw_aluminum")
    // Adding a Coin Tag to every kind of Lightmans Coins
    let coins = ["iron", "copper", "gold", "diamond", "emerald", "netherite"]
    for (let each of coins) {
        event.add("forge:coins", "lightmanscurrency:coin_" + each)
        event.add("forge:coins", "lightmanscurrency:coinpile_" + each)
        event.add("forge:coins", "lightmanscurrency:coinblock_" + each)
    }
    // Adding the Shulker boats to the boats tag
    event.add("minecraft:boats", "quark:azalea_boat")
    event.add("minecraft:boats", "quark:azalea_chest_boat")
})

// Remove Unwanted Recipes
ServerEvents.recipes(event => {
    let recipes = [
        "agricraft:coal",
        "agricraft:diamond",
        "agricraft:emerald",
        "agricraft:quartz",
        "agricraft:netherite_scrap",
        "agricraft:amethyst_shard",
        "bhc:red_heart_patch",
        "bhc:yellow_heart_patch",
        "bhc:green_heart_patch",
        "bhc:blue_heart_patch",
        "bhc:red_heart_canister",
        "bhc:yellow_heart_canister",
        "bhc:green_heart_canister",
        "bhc:blue_heart_canister",
        "bhc:soul_heart_canister",
        "bhc:canister",
        "bhc:relic_apple",
        "computercraft:turtle_normal",
        "computercraft:turtle_normal_overlays/turtle_trans_overlay",
        "computercraft:turtle_normal_overlays/turtle_rainbow_overlay",
        "computercraft:turtle_advanced",
        "computercraft:turtle_advanced_upgrade",
        "computercraft:turtle_advanced_overlays/turtle_trans_overlay",
        "computercraft:turtle_advanced_overlays/turtle_rainbow_overlay",
        "create:crafting/kinetics/mechanical_drill",
        "createdeco:gold_coin",
        "createdeco:pressing/coins/gold_coin",
        "createdeco:gold_coinstack",
        "createdeco:netherite_coin",
        "createdeco:pressing/coins/netherite_coin",
        "createdeco:netherite_coinstack",
        "createdeco:brass_coin",
        "createdeco:pressing/coins/brass_coin",
        "createdeco:brass_coinstack",
        "createdeco:iron_coin",
        "createdeco:pressing/coins/iron_coin",
        "createdeco:iron_coinstack",
        "createdeco:copper_coin",
        "createdeco:pressing/coins/copper_coin",
        "createdeco:copper_coinstack",
        "createdeco:industrial_iron_coin",
        "createdeco:pressing/coins/industrial_iron_coin",
        "createdeco:industrial_iron_coinstack",
        "createdeco:zinc_coin",
        "createdeco:pressing/coins/zinc_coin",
        "createdeco:zinc_coinstack",
        "gateways:basic/blaze",
        "gateways:basic/enderman",
        "gateways:basic/slime",
        "gateways:endless/blaze",
        "gateways:emerald_grove",
        "gateways:hellish_fortress",
        "gateways:overworldian_nights",
        "jaopca:create.material_to_plate.steel",
        "lightmanscurrency:coinmint",
        "lightmanscurrency:gem_terminal",
        "lightmanscurrency:portable_gem_terminal",
        "lightmanscurrency:gem_terminal_swap",
        "lightmanscurrency:portable_gem_terminal_swap",
        "lightmanscurrency:slot_machine",
        "lightmanscurrency:traders/slot_machine",
        "lightmanscurrency:coin_chocolate_copper",
        "lightmanscurrency:coinpile_chocolate_copper",
        "lightmanscurrency:coinblock_chocolate_copper",
        "lightmanscurrency:coin_chocolate_iron",
        "lightmanscurrency:coinpile_chocolate_iron",
        "lightmanscurrency:coinblock_chocolate_iron",
        "lightmanscurrency:coin_chocolate_gold",
        "lightmanscurrency:coinpile_chocolate_gold",
        "lightmanscurrency:coinblock_chocolate_gold",
        "lightmanscurrency:coin_chocolate_emerald",
        "lightmanscurrency:coinpile_chocolate_emerald",
        "lightmanscurrency:coinblock_chocolate_emerald",
        "lightmanscurrency:coin_chocolate_diamond",
        "lightmanscurrency:coinpile_chocolate_diamond",
        "lightmanscurrency:coinblock_chocolate_diamond",
        "lightmanscurrency:coin_chocolate_netherite",
        "lightmanscurrency:coinpile_chocolate_netherite",
        "lightmanscurrency:coinblock_chocolate_netherite",
        "lightmanscurrency:coin_mint/mint_coin_copper",
        "lightmanscurrency:coin_mint/mint_coin_iron",
        "lightmanscurrency:coin_mint/mint_coin_gold",
        "lightmanscurrency:coin_mint/mint_coin_emerald",
        "lightmanscurrency:coin_mint/mint_coin_diamond",
        "lightmanscurrency:coin_mint/mint_coin_netherite",
        "lightmanscurrency:coin_mint/melt_coin_copper",
        "lightmanscurrency:coin_mint/melt_coin_iron",
        "lightmanscurrency:coin_mint/melt_coin_gold",
        "lightmanscurrency:coin_mint/melt_coin_emerald",
        "lightmanscurrency:coin_mint/melt_coin_diamond",
        "lightmanscurrency:coin_mint/melt_coin_netherite",
        "minecraft:ender_chest",
        "quark:tweaks/crafting/utility/misc/charcoal_to_black_dye",
        "railways:sequenced_assembly/track_phantom",
        "scalinghealth:heart_crystal",
        "scalinghealth:heart_dust",
        "scalinghealth:power_crystal",
        "scalinghealth:bandages",
        "scalinghealth:medkit",
        "silentgear:bronze_ingot",
        "tfmg:filling/bottle_of_battery_acid",
        "tfmg:filling/bottle_of_concrete",
        "torchmaster:dreadlamp",
        "torchmaster:feral_flare_lantern",
        "torchmaster:frozen_pearl",
        "torchmaster:megatorch",
        "utilitix:backpack",
        "utilitix:ender_cart",
        "undergarden:catalyst"
    ]
    for (let ID of recipes) {
        event.remove({ id: ID })
    }
    // Removing standard boats in favor of Nifty Ships
    event.remove({ output: "#minecraft:boats" })
    // Add New Recipes
    event.shapeless("minecraft:flint", "4x minecraft:gravel")
    event.recipes.create.pressing("#forge:paper", "#forge:paper_plants")
    event.recipes.create.pressing("silentgear:leather_scrap", "minecraft:rotten_flesh")
})

// Replace Vanilla ore processing with custom
ServerEvents.recipes(event => {
    for (let each of materials) {
        // Removal of every smelting and blasting recipe without harming other mods
        event.remove({ id: "minecraft:" + each + "_ingot_from_smelting_deepslate_" + each + "_ore" })
        event.remove({ id: "minecraft:" + each + "_ingot_from_blasting_deepslate_" + each + "_ore" })
        event.remove({ id: "minecraft:" + each + "_ingot_from_smelting_raw_" + each })
        event.remove({ id: "minecraft:" + each + "_ingot_from_blasting_raw_" + each })
        event.remove({ id: "create:crushing/raw_" + each })
        event.remove({ id: "create:crushing/raw_" + each + "_block" })
        event.remove({ id: "create:smelting/" + each + "_ingot_from_ore" })
        event.remove({ id: "create:blasting/" + each + "_ingot_from_ore" })
        event.remove({ id: "create:smelting/" + each + "_ingot_from_raw_ore" })
        event.remove({ id: "create:blasting/" + each + "_ingot_from_raw_ore" })
        event.remove({ id: "create:smelting/" + each + "_ingot_from_crushed" })
        event.remove({ id: "create:blasting/" + each + "_ingot_from_crushed" })
        event.remove({ id: "create:smelting/ingot_" + each + "_compat_mekanism" })
        event.remove({ id: "create:blasting/ingot_" + each + "_compat_mekanism" })
        event.remove({ id: "create:splashing/crushed_raw_" + each })
        event.remove({ id: "create:splashing/mekanism/crushed_raw_" + each })
        event.remove({ id: "mekanism:processing/" + each + "/ingot/from_ore_smelting" })
        event.remove({ id: "mekanism:processing/" + each + "/ingot/from_ore_blasting" })
        event.remove({ id: "mekanism:processing/" + each + "/ingot/from_raw_smelting" })
        event.remove({ id: "mekanism:processing/" + each + "/ingot/from_raw_blasting" })
        event.remove({ id: "mekanism:processing/" + each + "/ingot/from_dust_smelting" })
        event.remove({ id: "mekanism:processing/" + each + "/ingot/from_dust_blasting" })
        event.remove({ id: "tfmg:smelting/" + each + "_ingot" })
        event.remove({ id: "tfmg:smelting/blasting/" + each + "_ingot" })
        event.remove({ id: "tfmg:smelting/" + each + "_ingot_from_crushed" })
        event.remove({ id: "tfmg:smelting/blasting/" + each + "_ingot_from_crushed" })
        event.remove({ id: "silentgear:" + each + "_ore_smelting" })
        event.remove({ id: "silentgear:" + each + "_ore_blasting" })
        event.remove({ id: "silentgear:" + each + "_raw_ore_smelting" })
        event.remove({ id: "silentgear:" + each + "_raw_ore_blasting" })
        event.remove({ id: "silentgear:" + each + "_dust_smelting" })
        event.remove({ id: "silentgear:" + each + "_dust_blasting" })
        event.remove({ id: "undergarden:smelt_raw_" + each })
        event.remove({ id: "undergarden:blast_raw_" + each })
        event.remove({ id: "undergarden:smelt_depthrock_" + each + "_ore" })
        event.remove({ id: "undergarden:blast_depthrock_" + each + "_ore" })
        event.remove({ id: "undergarden:smelt_shiverstone_" + each + "_ore" })
        event.remove({ id: "undergarden:blast_shiverstone_" + each + "_ore" })
        event.remove({ id: "jaopca:dusts.to_material." + each })
        event.remove({ id: "jaopca:dusts.to_material_blasting." + each })
        event.remove({ id: "jaopca:create.crushed_to_material_smelting." + each })
        event.remove({ id: "jaopca:create.crushed_to_material_blasting." + each })
        event.remove({ id: "jaopca:create.crushed_to_nugget." + each })
        event.remove({ id: "jaopca:create.raw_storage_block_to_crushed." + each })
        event.remove({ id: "quark:tweaks/smelting/raw_" + each + "_block_smelt" })
        event.remove({ id: "quark:tweaks/smelting/raw_" + each + "_brick_smelt" })
        // Console Log : Nickel and Aluminum missing nugget form... wait for TFMG update?
        console.log("LOADING MATERIAL: " + each)
        // Add new recipes in the altered output system
        event.smelting("2x #forge:nuggets/" + each, "#forge:raw_materials/" + each)
        event.blasting("2x #forge:nuggets/" + each, "#forge:raw_materials/" + each)
        // event.smelting("2x #forge:ingots/" + each, "#forge:storage_blocks/raw_" + each)
        event.blasting("2x #forge:ingots/" + each, "#forge:storage_blocks/raw_" + each)
        event.recipes.create.splashing(["2x #forge:nuggets/" + each, Item.of("2x #forge:nuggets/" + each).withChance(0.5)], "#forge:raw_materials/" + each)
        event.recipes.create.milling(["#create:crushed/" + each, Item.of("#create:crushed/" + each).withChance(0.5)], "#forge:raw_materials/" + each)
        event.recipes.create.crushing(["#create:crushed/" + each, Item.of("#create:crushed/" + each).withChance(0.5), Item.of("create:experience_nugget").withChance(0.75)], "#forge:raw_materials/" + each)
        event.recipes.create.crushing(["9x #create:crushed/" + each, Item.of("9x #create:crushed/" + each).withChance(0.5), Item.of("9x create:experience_nugget").withChance(0.75)], "#forge:storage_blocks/raw_" + each)
        event.smelting("3x #forge:nuggets/" + each, "#create:crushed/" + each)
        event.blasting("3x #forge:nuggets/" + each, "#create:crushed/" + each)
        event.recipes.create.splashing(["3x #forge:nuggets/" + each, Item.of("2x #forge:nuggets/" + each).withChance(0.5)], "#create:crushed/" + each)
        event.recipes.create.milling(["#forge:dusts/" + each, Item.of("#forge:dusts/" + each).withChance(0.5)], "#create:crushed/" + each)
        // event.smelting("4x #forge:nuggets/" + each, "#forge:dusts/" + each)
        event.blasting("4x #forge:nuggets/" + each, "#forge:dusts/" + each)
        event.recipes.create.splashing(["4x #forge:nuggets/" + each, Item.of("2x #forge:nuggets/" + each).withChance(0.5)], "#forge:dusts/" + each)

        // This call utilizes the secondary smelting list rather than the default one from base minecraft
        event.recipes.mekanism.smelting("#forge:ingots/" + each, "#forge:dusts/" + each)

    }
})

// recipe fixes for "Aluminum" cause its "Special"...
ServerEvents.recipes(event => {
    event.remove({ id: "tfmg:smelting/aluminum_ingot" })
    event.remove({ id: "tfmg:smelting/blasting/aluminum_ingot" })
    event.remove({ id: "jaopca:dusts.to_material.aluminum" })
    event.remove({ id: "jaopca:dusts.to_material_blasting.aluminum" })
    event.smelting("3x #forge:nuggets/aluminum", "#create:crushed/aluminum")
    event.blasting("3x #forge:nuggets/aluminum", "#create:crushed/aluminum")
    event.recipes.create.splashing(["3x #forge:nuggets/aluminum", Item.of("2x #forge:nuggets/aluminum").withChance(0.5)], "#create:crushed/aluminum")
    event.recipes.create.milling(["#forge:dusts/aluminum", Item.of("#forge:dusts/aluminum").withChance(0.5)], "#create:crushed/aluminum")
    event.blasting("4x #forge:nuggets/aluminum", "#forge:dusts/aluminum")
    event.recipes.create.splashing(["4x #forge:nuggets/aluminum", Item.of("2x #forge:nuggets/aluminum").withChance(0.5)], "#forge:dusts/aluminum")
    event.recipes.mekanism.smelting("#forge:ingots/aluminum", "#forge:dusts/aluminum")
})