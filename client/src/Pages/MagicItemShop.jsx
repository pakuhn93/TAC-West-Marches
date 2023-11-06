import { useState } from "react";
import Header from "../Components/Header";
import { useDateAndTime } from "../Contexts/DateAndTimeContext";
import { useMagicItemShop } from "../Contexts/MagicItemShopContext";


export default function MagicItemShop(){
    let magicItemShop = useMagicItemShop();

    return (
        <>
            <Header />
            <section id="magicShopIntro">
                <h1>Welcome to the Bizarre Bazaar!</h1>
                <span className="date_display">{useDateAndTime()[0]}</span>
                <span>  |  </span>
                <span className="time_display">{useDateAndTime()[1]}</span>
                <br></br>
                <br></br>
                {
                magicItemShop.map((item, index) => {
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
        </>
    );
}