import magicItems from "../db/magicItemList.json";
import { useDateAndTime } from "../Contexts/DateAndTimeContext";
import { useState } from "react";

export default function RenderMagicItemShop(){
    const [shopItems, setShopItems] = useState([]);
    const [updated, setUpdated] = useState(false);
    const [currentTime, setCurrentTime] = useState("");

    const generateShop = () => {
        setUpdated(true);
        setCurrentTime(useDateAndTime()[1]);

        // initialize category arrays
        let equipmentItems = [];
        let consumableItems = [];
        let utilityItems = [];
        
        // arrange items into separate arrays
        const categorize = () => {
          for(let item of magicItems){
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
        setShopItems(magicShop);

        if(currentTime != useDateAndTime()[1]){
            setUpdated(false);
        }
      }

    return (
        <section id="magicItemShop">
            {useDateAndTime()[1] == "5:41:30 AM" && !updated ? (generateShop()) : (<p>Shop Refreshes: </p>)}
            {
                shopItems.map((item, index) => {
                    return (
                        <section key={index}>
                            <span>{item.name} </span>
                            <span>{item.attunement ? "[Requires Attunement]" : ""}</span>
                                <ul>
                                    <li>Rarity: {item.rarity}</li>
                                    <li>Price: {item.price}</li>
                                </ul>
                        </section>
                    );
                })
            }
        </section>
    );
}