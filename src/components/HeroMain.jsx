import { CardOffers } from "./cardOffers/CardOffers"


export const HeroMain = () =>{

    return(
        <section className="heromain">
            <h2>Offers</h2> 
            <div className="heromain_cards">
                <CardOffers imgOffers={ "./assets/moscow.jpg"} city={"Moscow"} price={"$600,86"}/>
                <CardOffers imgOffers={ "./assets/puerto-rico.jpg"} city={"Puerto Rico"} price={"$600,86"}/>
                <CardOffers imgOffers={ "./assets/honduras.jpg"} city={"Honduras"} price={"$600,86"}/>
            </div>      
            
            <nav className="heromain_nav">
                <li>Check-in</li>
                <li>Manage My Booking</li>
                <li>Search</li>
                <li>Destinations</li>
                <li>Members</li>
            </nav>
            <p>Chosen destination</p>
        </section>
    )
}