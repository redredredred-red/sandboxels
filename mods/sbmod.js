var modName="Superheavy Industries"
var version="1.0.0"
elements.mrt2{
  color:"#B83B07",
  behaviors:behaviors.liquid,
  category:"industrial",
  state:"liquid",
  temp:4100,
  density:20000,
  tempLow:3999,
  stateLow:"molten_reinforced_tungsten",
  viscosity:1500,
  hidden:true,
}
elements.molten_reinforced_tungsten{
  color: "#75361B",
  behaviors: behaviors.liquid,
  category:"industrial",
  state: "liquid",
  temp: 3599,
  density:20000,
  tempHigh:4000,
  stateHigh: "mrt2",
  viscosity:2000,
  hidden:true,
  tempLow:3528
  stateLow:"reinforced_tungsten"
}
elements.reinforced_tungsten{
  color: "#6e6e6e",
  behaviors: behaviors.wall,
  category: "industrial",
  state: "solid",
  temp: 20,
  density: 20000,
  tempHigh: 3529,
  stateHigh: "molten_reinforced_tungsten",
  conduct:0.012
  insulate:true
}  
