ServerEvents.recipes(event => {
    let recipeID = ["agricraft:coal", "agricraft:diamond", "agricraft:emerald", "agricraft:quartz", "agricraft:netherite_scrap", "agricraft:amethyst_shard", "bhc:red_heart_patch", "bhc:yellow_heart_patch", "bhc:green_heart_patch", "bhc:blue_heart_patch", "bhc:red_heart_canister", "bhc:yellow_heart_canister", "bhc:green_heart_canister", "bhc:blue_heart_canister", "bhc:soul_heart_canister", "bhc:canister", "bhc:relic_apple", "computercraft:turtle_normal", "computercraft:turtle_normal_overlays/turtle_trans_overlay", "computercraft:turtle_normal_overlays/turtle_rainbow_overlay", "computercraft:turtle_advanced", "computercraft:turtle_advanced_upgrade", "computercraft:turtle_advanced_overlays/turtle_trans_overlay", "computercraft:turtle_advanced_overlays/turtle_rainbow_overlay", "create:crafting/kinetics/mechanical_drill", "createdeco:gold_coin", "createdeco:pressing/coins/gold_coin", "createdeco:gold_coinstack", "createdeco:netherite_coin", "createdeco:pressing/coins/netherite_coin", "createdeco:netherite_coinstack", "createdeco:brass_coin", "createdeco:pressing/coins/brass_coin", "createdeco:brass_coinstack", "createdeco:iron_coin", "createdeco:pressing/coins/iron_coin", "createdeco:iron_coinstack", "createdeco:copper_coin", "createdeco:pressing/coins/copper_coin", "createdeco:copper_coinstack", "createdeco:industrial_iron_coin", "createdeco:pressing/coins/industrial_iron_coin", "createdeco:industrial_iron_coinstack", "createdeco:zinc_coin", "createdeco:pressing/coins/zinc_coin", "createdeco:zinc_coinstack", "gateways:basic/blaze", "gateways:basic/enderman", "gateways:basic/slime", "gateways:endless/blaze", "gateways:emerald_grove", "gateways:hellish_fortress", "gateways:overworldian_nights", "lightmanscurrency:coinmint", "lightmanscurrency:gem_terminal", "lightmanscurrency:portable_gem_terminal", "lightmanscurrency:gem_terminal_swap", "lightmanscurrency:portable_gem_terminal_swap", "lightmanscurrency:slot_machine", "lightmanscurrency:traders/slot_machine", "lightmanscurrency:coin_chocolate_copper", "lightmanscurrency:coinpile_chocolate_copper", "lightmanscurrency:coinblock_chocolate_copper", "lightmanscurrency:coin_chocolate_iron", "lightmanscurrency:coinpile_chocolate_iron", "lightmanscurrency:coinblock_chocolate_iron", "lightmanscurrency:coin_chocolate_gold", "lightmanscurrency:coinpile_chocolate_gold", "lightmanscurrency:coinblock_chocolate_gold", "lightmanscurrency:coin_chocolate_emerald", "lightmanscurrency:coinpile_chocolate_emerald", "lightmanscurrency:coinblock_chocolate_emerald", "lightmanscurrency:coin_chocolate_diamond", "lightmanscurrency:coinpile_chocolate_diamond", "lightmanscurrency:coinblock_chocolate_diamond", "lightmanscurrency:coin_chocolate_netherite", "lightmanscurrency:coinpile_chocolate_netherite", "lightmanscurrency:coinblock_chocolate_netherite", "minecraft:ender_chest", "railways:sequenced_assembly/track_phantom", "scalinghealth:heart_crystal", "scalinghealth:heart_dust", "scalinghealth:power_crystal", "scalinghealth:bandages", "scalinghealth:medkit", "silentgear:bronze_ingot", "tfmg:filling/bottle_of_battery_acid", "tfmg:filling/bottle_of_concrete", "torchmaster:dreadlamp", "torchmaster:feral_flare_lantern", "torchmaster:frozen_pearl", "torchmaster:megatorch", "utilitix:ender_cart",];
    for (let ID of recipeID) {
        event.remove({ id: ID });
    }
})

onEvent("items.tags", event => {
    // Get all the raw_matertials as an array
    let oreList = event.get("forge:raw_materials")

    // List the entries that we don't want
    let exclusions = ["tmfg:raw_lead"]

    // Remove the exclusions from the list
    for (let ore of oreList) {
        if (exclusions.includes(ore)) {
           oreList = oreList.filter(ore => !exclusions.includes(ore))
        }
    }
    console.log(oreList);
}
)
ServerEvents.recipes(event => {
    // This call utilizes the secondary smelting list rather than the default one from base minecraft
    // event.recipes.mekanism.smelting(result, input)

    event.recipes.mekanism.smelting("minecraft:iron_ingot", "#forge:dusts/iron")
    event.recipes.mekanism.smelting("minecraft:gold_ingot", "#forge:dusts/gold")

    // Iron
    // Copper
    // Gold
    // Zinc
    // Nickel
    // Lithium
    // Osmium
    // Tin
    // Lead
    // Uranium
})

// essentially i need to erase vanilla furnace recipes and replace them with the new nugget setup, then make mek recipes different to prevent those recipes from being changed https://github.com/mekanism/Mekanism/wiki/Recipe-Type-JSON-Syntax#smelting