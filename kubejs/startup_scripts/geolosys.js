// priority: 0

// Make sure that 'disableClassFilter' is set to 'true' in kubejs/config/common.properties
// before running Minecraft with this script enabled

// From Minecraft
const BlockItem = java('net.minecraft.world.item.BlockItem')
const ItemProperties = java('net.minecraft.world.item.Item$Properties')

/**
 * https://github.com/oitsjustjose/Geolosys/blob/1.18/src/main/java/com/oitsjustjose/geolosys/Registry.java
 * https://github.com/oitsjustjose/Geolosys/blob/1.18/src/main/java/com/oitsjustjose/geolosys/common/blocks/SampleBlock.java
 * https://github.com/oitsjustjose/Geolosys/blob/1.18/src/main/java/com/oitsjustjose/geolosys/common/utils/GeolosysGroup.java
 */
const GeolosysRegistry = java('com.oitsjustjose.geolosys.Registry')
const GeolosysSampleBlock = java('com.oitsjustjose.geolosys.common.blocks.SampleBlock')
const GeolosysGroup = java('com.oitsjustjose.geolosys.common.utils.GeolosysGroup')

// Registers a custom Sample block through Geolosys' registry
// Requires that the proper JSON files exist in the data folder of KubeJS
function createCustomSample(sampleRegistryName) {
	const sample = GeolosysRegistry.BLOCKS.register(sampleRegistryName, () => new GeolosysSampleBlock)
	GeolosysRegistry.ITEMS.register(sampleRegistryName, () => new BlockItem(sample.get(), (new ItemProperties).tab(GeolosysGroup.getInstance())))
}

onEvent('block.registry', event => {
	createCustomSample('bort_sample')
	createCustomSample('crimson_iron_sample')
	createCustomSample('azure_silver_sample')
})