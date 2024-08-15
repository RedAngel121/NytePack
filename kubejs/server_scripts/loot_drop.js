LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.ENTITY).killedByPlayer()
        .addLoot(LootEntry.of("mna:vinteum_dust").limitCount([0, 2]))
})