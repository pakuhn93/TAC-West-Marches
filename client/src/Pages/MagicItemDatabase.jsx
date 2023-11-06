import Header from "../Components/Header";
import magicItems from "../db/magicItemList.json";
import { useDateAndTime } from "../Contexts/DateAndTimeContext";


export default function MagicItemDatabase(){

    return (
        <>
            <Header />
            <p className="time_display">{useDateAndTime()[1]}</p>
            <p>This will list out every magic item that is available. </p>
            <p>Future features will allow the user to filter, similar to an excel document, in order to find the items they are specifically looking for.</p>

            <section id="magicItemDatabase">
                <p>Total Magic Items Available: {magicItems.length}</p>
                <h1 id="dbLegend">Legend: 
                    <li>DMG = Dungeon Master's Guide</li>
                    <li>XGtE = Xanathar's Guide to Everything</li>
                    <li>TCoE = Tasha's Cauldron of Everything</li>
                    <li>FToD = Fizban's Treasury of Dragons</li>
                    <li>GotG = Bigby Presents: Glory of the Giants</li>
                </h1>
                {
                    magicItems.map((item, index) => {
                        return (
                            <div key={index} id={`item_${index}`}className="items">
                                <h2>{item.name}</h2>
                                {item.attunement ? (<p>Requires Attunement</p>) : (<></>)}
                                <p>Rarity: {item.rarity}</p>
                                <p>Price: {item.price}g</p>
                                <p>Source: {item.source}</p>
                            </div>
                        );
                    })
                }
            </section>
        </ >
    );
}