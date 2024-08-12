LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.ENTITY)
        .addLoot(LootEntry.of("mna:vinteum_dust").limitCount([0,2]))
})