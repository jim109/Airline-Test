

export const CardOffers = ( {imgOffers, city, price}) =>{
    return(
        <div className="cardmain">
            <img src={ imgOffers } alt="imagen ofertas" className="cardmain_img"/>     
            <div className="cardmain_text">
                <p>Trip to { city }</p>
                <p>Price { price }</p>
            </div>  
                 
            
        </div>
    )
   
}