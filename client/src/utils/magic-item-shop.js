// generates a magic item shop by randomly selecting items
// item limits are specified based on category
// generateShop() will pull info from GraphQL when integrated to full-stack
import magicItems from '../db/magicItemShop.json';

const generateShop = () => {
  
  // initialize category arrays
  let equipmentItems = [];
  let consumableItems = [];
  let utilityItems = [];
  
  // arrange items into separate arrays
  const categorize = () => {
    for(item of magicItems){
      switch(item.category){
        case 'Equipment':
          console.log(`Storing Equipment Item: ${item.name}`);
          equipmentItems.push(item);
          break;
        case 'Consumable':
          console.log(`Storing Consumable Item: ${item.name}`);
          consumableItems.push(item);
          break;
        case 'Utility':
          console.log(`Storing Utility Item: ${item.name}`);
          utilityItems.push(item);
          break;
        default:
          console.log(`Unrecognized item: ${item.name}\nItem Category: ${item.category}`);
          break;
      }
    }
    console.log("Item Groups:", equipmentItems, consumableItems, utilityItems);
  }
  
  // categorize will only be called once outside of this file
  categorize();  
  
  const itemLimitEquipment = 2;
  const itemLimitConsumable = 3;
  const itemLimitUtility = 1;
  const totalLimit = itemLimitUtility + itemLimitConsumable + itemLimitEquipment;
  
  let magicShop = [];
  
  // pick random consumable items up to limit
  for(let i = 0; i < itemLimitConsumable; i++){
    let randomIndex = Math.floor(Math.random() * consumableItems.length);
    magicShop.push(consumableItems[randomIndex]);
    // splice out the item added to magicShop
    consumableItems.splice(randomIndex, 1);
  }
  
  // pick random equipment items up to limit
  for(let i = 0; i < itemLimitEquipment; i++){
    let randomIndex = Math.floor(Math.random() * equipmentItems.length);
    magicShop.push(equipmentItems[randomIndex]);
    // splice out the item added to magicShop
    equipmentItems.splice(randomIndex, 1);
  }
  
  // pick random utility items up to limit
  for(let i = 0; i < itemLimitUtility; i++){
    let randomIndex = Math.floor(Math.random() * utilityItems.length);
    magicShop.push(utilityItems[randomIndex]);
    // splice out the item added to magicShop
    utilityItems.splice(randomIndex, 1);
  }
  console.log("Magic Shop:", magicShop);
  return magicShop;
}

export { generateShop };