

export const HeaderMain = () =>{

    return(
        <main className="main">            
            <header className="main_header">
                <h1>AIRLINE</h1>
                <nav className="main_header--nav">
                    <ul>
                        <li>en<img src="/assets/arrow-down.svg" alt="imagen" className="arrow"/></li>
                    </ul>
                    <ul className="main_header--nav--menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Destinations</a></li>
                        <li><a href="/">Contacts</a></li>
                    </ul>
                    
                </nav>  
            </header>
            <div className="main_title">
                <h2>Visit Canada with prices from $800</h2>
                <p>Prepare your bags and forget your worries<br/> to start enjoying your holidays in this fantastic country</p>
                <button className="main_title--button">BUY NOW</button>
            </div>        
            
        </main>
    )
}