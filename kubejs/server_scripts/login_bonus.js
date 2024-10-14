PlayerEvents.loggedIn((event) => {
    const { player } = event;
  
    if (player.persistentData.getBoolean("first_join") === false) {
      player.give(Item.of("lightmanscurrency:coin_iron", 1));
      player.persistentData.putBoolean("first_join", true);
    }
  })