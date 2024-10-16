# Description
A Gateway is the core object you will create when working with Gateways to Eternity.

# Dependencies
This object references the following objects:
1. [Size](./components/Size.md)
2. [Color](../../../../Placebo/blob/-/schema/Color.md)
3. [WaveEntity](./components/WaveEntity.md)
4. [Wave](./components/Wave.md)
5. [Reward](./components/Reward.md)
6. [Failure](./components/Failure.md)
7. [SpawnAlgorithm](./components/SpawnAlgorithm.md)
8. [GateRules](./components/GateRules.md)
9. [BossEventSettings](./components/BossEventSettings.md)
10. [EndlessModifier](./components/EndlessModifier.md)

# Subtypes
Gateways are subtyped, meaning each subtype declares a `"type"` key and its own parameters.

## Normal Gateways
A Normal (or "Classic") Gateway defines a predefined list of waves, modifiers, rewards, and failure penalties.

### Schema
```js
{
    "size": Size,                        // [Mandatory] || The size of the Gateway.
    "color": Color,                      // [Mandatory] || The color of the Gateway.
    "waves": [                           // [Mandatory] || The list of waves for this Gateway.
        Wave
    ],
    "rewards": [                         // [Optional]  || Rewards that will be granted upon completion of the entire gateway. Default value = empty list.
        Reward
    ],
    "failures": [                        // [Optional]  || Failure penalties that will be applied if the Gateway is not completed. Default value = empty list.
        Failure
    ]
    "spawn_algorithm": SpawnAlgorithm,   // [Optional]  || The Spawn Algorithm to use. Default value = "gateways:open_field".
    "rules": GateRules,                  // [Optional]  || Potential rule edits for this Gateway. Default value = The default GateRules object.
    "boss_event": BossEventSettings,     // [Optional]  || Potential boss event settings for this Gateway. Default value = The default BossEventSettings object.
}
```

## Endless Gateways
An Endless Gateway defines a base waves and a series of Endless Modifiers, which will augment the Gateway as it runs.  
The Gateway will continue running until a wave fails, at which point it will close.

### Schema
```js
{
    "size": Size,                        // [Mandatory] || The size of the Gateway.
    "color": Color,                      // [Mandatory] || The color of the Gateway.
    "base_wave": Wave,                   // [Mandatory] || The base wave for this Gateway. It will be augmented by the provided Endless Modifiers as waves pass.
    "modifiers": [                       // [Mandatory] || The modifiers, which define the rules for how the wave will change over time.
        EndlessModifier
    ],
    "failures": [                        // [Optional]  || Failure penalties that will be applied if the Gateway is not completed. Default value = empty list.
        Failure
    ]
    "spawn_algorithm": SpawnAlgorithm,   // [Optional]  || The Spawn Algorithm to use. Default value = "gateways:open_field".
    "rules": GateRules,                  // [Optional]  || Potential rule edits for this Gateway. Default value = The default GateRules object.
    "boss_event": BossEventSettings,     // [Optional]  || Potential boss event settings for this Gateway. Default value = The default BossEventSettings object.
}
```

Note that it is almost guaranteed that an Endless Gateway fails at some point (unless it is kept open until the end of time), so failures should be added cautiously since users may not always avoid them.

# Description
A Size is a preset for how large a Gateway is. It controls the Gate Pearl texture, base spawn range, and hitbox of the Gateway.

# Schema
```js
"string": // [Mandatory] || The size. One of "small", "medium", or "large".
```

# Sizes

Each size has two properties: a scale, and an AABB. The scale changes the following things:
* The size of the rendered Gateway.
* Y-level selection variance when spawning mobs.
* Idle spawn particle range.
* Radius at which completion items are spawned.

The AABB controls the hitbox of the Gateway, which is mostly used in exclusion zone checking against other Gateways. 

# Description
A [Color](https://minecraft.wiki/w/Formatting_codes) is a color. Not much else to say there.

# Schema
```js
"string"  // [Mandatory] || A string representation of a Color. Must be either the name of a color, or a hex code in RGB format.
```

The names of all vanilla colors are listed [here](https://minecraft.wiki/w/Formatting_codes#Color_codes), in the `Name` column of the table.  
Mods may provide additional colors. For example, placebo provides the `"rainbow"` color.

In hex form takes the value `"#RRGGBB"`, meaning that all-red is `"#FF0000"`, all-green is `"#00FF00"`, and all-blue is `"#0000FF"`.

Note: for objects that use Color, `"color": Color` implies -> `"color": "#RRGGBB"`, since this class is a string primitive.

# Description
A Wave Entity is the information needed to spawn one or more entities of a single type.  
It is used in most places that Gateways attempts to spawn an entity for one reason or another.  

# Dependencies
This object references the following objects:
1. [CompoundTag](../../../../../Placebo/blob/-/schema/CompoundTag.md)
2. [WaveModifier](./WaveModifier.md)

# Subtypes
Wave Entities are subtyped, meaning each subtype declares a `"type"` key and its own parameters.
If no type key is provided, `"gateways:standard"` is used.

## Standard Wave Entity

### Schema
```js
{
    "type": "gateways:standard",
    "entity": "string",       // [Mandatory] || Registry name of the entity being spawned.
    "desc": "string",         // [Optional]  || Lang key used when this wave entity is displayed in a tooltip. If absent, the default lang key of the entity type used.
    "nbt": CompoundTag        // [Optional]  || NBT data that will be applied to the entity. Default value = empty NBT.
    "modifiers": [            // [Optional]  || A list of wave modifiers for the entity. Default value = no modifiers.
        WaveModifier
    ],
    "count": integer          // [Optional]  || The number of copies of this entity to spawn. Default value = 1.
}
```

# Examples
The Necrotic Farmer used by the Gateway of the Emerald Grove.
```json
{
    "entity": "minecraft:zombie_villager",
    "desc": "name.gateways.necrotic_farmer",
    "nbt": {
        "CustomNameVisible": 1,
        "CustomName": "{\"translate\":\"name.gateways.necrotic_farmer\",\"color\":\"red\"}",
        "VillagerData": {
            "profession": "minecraft:farmer"
        }
    },
    "modifiers": [
        {
            "type": "gateways:gear_set",
            "gear_set": "gateways:iron"
        }
    ],
    "finalize_spawn": false
}
```

# Description
A Wave contains all the information needed for a Gateway to spawn a single wave of mobs, including the entities, modifiers, rewards, and timers.

# Dependencies
This object references the following objects:
1. [WaveEntity](./WaveEntity.md)
2. [WaveModifier](./WaveModifier.md)
3. [Reward](./Reward.md)

# Schema
```js
{
    "entities": [             // [Mandatory] || The list of entities that will be spawned as part of this wave. May not be empty.
        WaveEntity
    ],              
    "modifiers": [            // [Optional]  || A list of wave modifiers to be applied to all spawned entities.
        WaveModifier
    ],
    "rewards": [              // [Optional]  || A list of rewards that will be provided when this wave is completed.
        Reward
    ],
    "max_wave_time": integer  // [Mandatory] || The maximum time (in ticks) that a player may take to complete this wave.
    "setup_time": integer     // [Mandatory] || The setup time (in ticks) before this wave begins, after the last wave was completed.
}
```

# Examples
A simple wave spawning two blazes and providing the loot of three when completed.
```json
{
    "entities": [{
        "entity": "minecraft:blaze",
        "count": 2
    }],
    "rewards": [{
        "type": "gateways:entity_loot",
        "entity": "minecraft:blaze",
        "rolls": 3
    }],
    "max_wave_time": 750,
    "setup_time": 150
}
```

# Description
A Reward is something provided by a Gateway when an objective is completed.  

# Dependencies
This object references the following objects:
1. [CompoundTag](../../../../../Placebo/blob/-/schema/CompoundTag.md)
2. [ItemStack](../../../../../Placebo/blob/-/schema/ItemStack.md)
3. [WaveEntity](./WaveEntity.md)

# Subtypes
Rewards are subtyped, meaning each subtype declares a `"type"` key and its own parameters.

## Stack Reward
Rewards a single ItemStack.

### Schema
```js
{
    "type": "gateways:stack",
    "stack": ItemStack      // [Mandatory] || The ItemStack this reward will provide.
}
```

## Stack List Reward
Rewards one or more ItemStacks.

### Schema
```js
{
    "type": "gateways:stack_list",
    "stacks": [             // [Mandatory] || List of all stacks this reward will provide.
        ItemStack
    ]
}
```

## Entity Loot Reward
Rewards the loot of a specific entity, as if the summoner had killed it.

### Schema
```js
{
    "type": "gateways:entity_loot",
    "entity": "string",     // [Mandatory] || Registry name of the entity to use.
    "nbt": CompoundTag,     // [Optional]  || NBT data that will be loaded onto the entity before evaluating the loot table.
    "rolls": integer        // [Optional]  || The number of times the loot table will be rolled. Default value = 1.
}
```

## Loot Table Reward
Rewards the loot generated by a specific loot table. The loot table will only receive a position, player, and tool context.  
Do not use this for entity loot tables, only use it for chests/block drops or similar.  Use the Entity Loot Reward for entity drops.

### Schema
```js
{
    "type": "gateways:loot_table",
    "loot_table": "string", // [Mandatory] || Registry name of the target loot table.
    "rolls": integer,       // [Optional]  || The number of times the loot table will be rolled. Default value = 1.
    "desc": "string"        // [Mandatory] || Lang key (or english text) which will be used to display the reward in the tooltip.
}
```

## Command Reward
Executes a command when rewards would be generated. The keyphrase `<summoner>` will be replaced with the summoning player's name before command execution.  
If the summoner is absent, the closest player will be used instead.

The command will be executed as the gateway entity with a permission level of 2. If you need to execute it as the player, use `execute as <summoner> run ...`.

### Schema
```js
{
    "type": "gateways:command",
    "command": "string",    // [Mandatory] || The command string, without a leading slash.
    "desc": "string"        // [Mandatory] || Lang Key (or english text) which will be used to display the reward in the tooltip.
}
```

## Experience Reward
Rewards a certain amount of experience.

### Schema
```js
{
    "type": "gateways:experience",
    "experience": integer,  // [Mandatory] || The amount of experience that will be granted.
    "orb_size": integer     // [Optional]  || The size of the experience orbs that will be generated. A larger value will cause fewer individual orbs to generate. Default value = 5.
}
```

## Summon Reward
Summons a wave entity when rewards would be generated.

### Schema
```js
{
    "type": "gateways:summon",
    "entity": WaveEntity    // [Mandatory] || The wave entity being spawned.
}
```

## Chanced Reward
Provides a chance to receive any other reward.

### Schema
```js
{
    "type": "gateways:chanced",
    "chance": float,        // [Mandatory] || The chance the reward is granted, in the range [0, 1].  0.5 is 50%
    "reward": Reward        // [Mandatory] || The underlying reward.
}
```

# Description
A Reward is something provided by a Gateway when an objective is completed.  

# Dependencies
This object references the following objects:
1. [CompoundTag](../../../../../Placebo/blob/-/schema/CompoundTag.md)
2. [ItemStack](../../../../../Placebo/blob/-/schema/ItemStack.md)
3. [WaveEntity](./WaveEntity.md)

# Subtypes
Rewards are subtyped, meaning each subtype declares a `"type"` key and its own parameters.

## Stack Reward
Rewards a single ItemStack.

### Schema
```js
{
    "type": "gateways:stack",
    "stack": ItemStack      // [Mandatory] || The ItemStack this reward will provide.
}
```

## Stack List Reward
Rewards one or more ItemStacks.

### Schema
```js
{
    "type": "gateways:stack_list",
    "stacks": [             // [Mandatory] || List of all stacks this reward will provide.
        ItemStack
    ]
}
```

## Entity Loot Reward
Rewards the loot of a specific entity, as if the summoner had killed it.

### Schema
```js
{
    "type": "gateways:entity_loot",
    "entity": "string",     // [Mandatory] || Registry name of the entity to use.
    "nbt": CompoundTag,     // [Optional]  || NBT data that will be loaded onto the entity before evaluating the loot table.
    "rolls": integer        // [Optional]  || The number of times the loot table will be rolled. Default value = 1.
}
```

## Loot Table Reward
Rewards the loot generated by a specific loot table. The loot table will only receive a position, player, and tool context.  
Do not use this for entity loot tables, only use it for chests/block drops or similar.  Use the Entity Loot Reward for entity drops.

### Schema
```js
{
    "type": "gateways:loot_table",
    "loot_table": "string", // [Mandatory] || Registry name of the target loot table.
    "rolls": integer,       // [Optional]  || The number of times the loot table will be rolled. Default value = 1.
    "desc": "string"        // [Mandatory] || Lang key (or english text) which will be used to display the reward in the tooltip.
}
```

## Command Reward
Executes a command when rewards would be generated. The keyphrase `<summoner>` will be replaced with the summoning player's name before command execution.  
If the summoner is absent, the closest player will be used instead.

The command will be executed as the gateway entity with a permission level of 2. If you need to execute it as the player, use `execute as <summoner> run ...`.

### Schema
```js
{
    "type": "gateways:command",
    "command": "string",    // [Mandatory] || The command string, without a leading slash.
    "desc": "string"        // [Mandatory] || Lang Key (or english text) which will be used to display the reward in the tooltip.
}
```

## Experience Reward
Rewards a certain amount of experience.

### Schema
```js
{
    "type": "gateways:experience",
    "experience": integer,  // [Mandatory] || The amount of experience that will be granted.
    "orb_size": integer     // [Optional]  || The size of the experience orbs that will be generated. A larger value will cause fewer individual orbs to generate. Default value = 5.
}
```

## Summon Reward
Summons a wave entity when rewards would be generated.

### Schema
```js
{
    "type": "gateways:summon",
    "entity": WaveEntity    // [Mandatory] || The wave entity being spawned.
}
```

## Chanced Reward
Provides a chance to receive any other reward.

### Schema
```js
{
    "type": "gateways:chanced",
    "chance": float,        // [Mandatory] || The chance the reward is granted, in the range [0, 1].  0.5 is 50%
    "reward": Reward        // [Mandatory] || The underlying reward.
}
```

#   "rewards": [
    {
      "type": "gateways:loot_table",
      "loot_table": "gateways:gateway_sparkles",
      "rolls": 1
    }
A Spawn Algorithm is the mechanism by which wave entities are placed into the world by a Gateway.

# Schema
```js
"string": // [Mandatory] || The name of the spawn algorithm.
```

# Algorithms

Each spawn algorithm has its own name and placement rules.

## Open Field Algorithm
Name: `gateways:open_field`

The Open Field algorithm attempts to place the entity randomly within the Gateway's spawn range. It is recommended that you use this algorithm when you want to enforce usage of a spacious arena.

If placement fails after fifteen attempts, the Gateway will fail with the `SPAWN_FAILED` reason.

## Inward Spiral Algorithm
Name: `gateways:inward_spiral`

The Inward Spiral algorithm attempts to place the entity within the Gateway's spawn range, but reduces the spawn range as spawn attempts fail. It is recommended that you use this algorithm when space constrained,
or you want to allow using the Gateway in a small area.

The placement of this algorithm will never fail, as if it fails the first fourteen attempts, it will place the entity at the center of the gateway.

# Description
Gate Rules hold various behavioral flags common to all Gateway types. Every field on this object is optional, meaning that `{}` is a legal definition of a Gate Rules object.

# Schema
```js
{
    "spawn_range": float,              // [Optional] || The spawn range as a radius in blocks in which mobs may spawn around the gateway, from the edges of the gateway. Default value = 8.
    "leash_range": float,              // [Optional] || The distance that a wave entity may be from the center of the Gateway before out-of-bounds rules are triggered. Default value = 32.
    "allow_discarding": boolean,       // [Optional] || If entities marked as discarded are counted as valid kills. Default value = false.
    "allow_dim_change": boolean        // [Optional] || If entities marked as changed dimension are counted as valid kills. Default value = false.
    "player_damage_only": boolean,     // [Optional] || If wave entities may only be hurt by damage that is sourced to a player. Default value = false.
    "remove_mobs_on_failure": boolean  // [Optional] || If the wave entities will be removed if the Gateway is failed. Default value = true.
    "fail_on_out_of_bounds": boolean   // [Optional] || If true, when out-of-bounds rules are triggered, the Gateway will fail. If false, the entity will be re-placed using the spawn algorithm. Default value = false.
    "spacing": float                   // [Optional] || The distance that this gateway must be from another Gateway. Default value = 0.
}
```

# Description
Boss Event Settings hold flags relating to the boss bar used by Gateways. Every field on this object is optional, meaning that `{}` is a legal definition of a Boss Event Settings object.

# Schema
```js
{
    "mode": "string",  // [Optional] || The drawing mode of the boss bar. Either "boss_bar" or "name_plate". Default value = "boss_bar".
    "fog": boolean     // [Optional] || If the current mode is "boss_bar", this controls if fog is enabled. Has no effect when the mode is "name_plate". Default value = true.
}
```

# Description
An Endless Modifier is the core building block of an Endless Gateway, and controls what changes are applied on each endless wave.  

# Dependencies
This object references the following objects:
1. [ApplicationMode](./ApplicationMode.md)
2. [WaveEntity](./WaveEntity.md)
3. [Reward](./Reward.md)
4. [WaveModifier](./WaveModifier.md)

# Schema
```js
{
    "application_mode": ApplicationMode,  // [Mandatory] || The application mode for this modifier.
    "entities": [                         // [Optional]  || A list of additional entities that will be spawned each time the modifier is applied.
        WaveEntity
    ],
    "rewards": [                          // [Optional]  || A list of rewards that will be added to the wave rewards each tim the modifier is applied.
        Reward
    ],
    "modifiers": [                        // [Optional]  || A list of wave modifiers that will be applied to all entities each time the modifier is applied.
        WaveModifier
    ],
    "max_wave_time": integer,             // [Optional]  || The time (in ticks) that this modifier will add/remove to/from the max wave time.
    "setup_time": integer                 // [Optional]  || The time (in ticks) that this modifier will add/remove to/from the setup time.
}
```

One of the three optional components must be present for a modifier to be valid.

# Examples
An endless modifier that adds three blazes and five blaze loot rolls every 3 waves, up to 15 max applications.
```json
{
    "application_mode": {
        "type": "gateways:after_every_n_waves",
        "waves": 3,
        "max": 15
    },
    "entities": [{
        "entity": "minecraft:blaze",
        "count": 3
    }],
    "rewards": [{
        "type": "gateways:entity_loot",
        "entity": "minecraft:blaze",
        "rolls": 5
    }]
}
```