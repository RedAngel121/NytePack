ServerEvents.recipes(event => {
    event.remove([
        { id: "computercraft:turtle_normal" },
        { id: "computercraft:turtle_advanced" }
    ]);
})