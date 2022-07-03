import { CardOffers } from "./cardOffers/CardOffers"
import { MenuCards } from "./cardOffers/MenuCards"


export const HeroMain = () =>{

    return(
        <section className="heromain">
            <h2 className="g1">Offers</h2>
            <div className="g5"></div>            
            <div className="heromain_cards g2">
                <CardOffers imgOffers={ "./assets/moscow.jpg"} city={"Moscow"} price={"$600,86"}/>
                <CardOffers imgOffers={ "./assets/puerto-rico.jpg"} city={"Puerto Rico"} price={"$600,86"}/>
                <CardOffers imgOffers={ "./assets/honduras.jpg"} city={""} price={"$600,86"}/>
            </div>      
            
            <MenuCards className="g3" />
            <div className="heromain_text g4">
                <p>Trip to Honduras</p>
                <p className="heromain_text--destin">Chosen destination</p>
            </div>            
        </section>
    )
}