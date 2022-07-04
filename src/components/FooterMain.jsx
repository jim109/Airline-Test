
export const FooterMain = () =>{

    return(
        <footer className="footer">
            <h2 className="footer_title">Follow us</h2>
            <div className="footer_img">
                <img src="/assets/facebook.svg" alt="Logo Facebook" className="footer_img--logo"/>
                <img src="/assets/instagram.svg" alt="Logo Instagram" className="footer_img--logo"/>
                <img src="/assets/twitter.svg" alt="Logo Twitter" className="footer_img--logo"/>               
            </div>
            <div className="footer_section">
                <section>
                    <h3>About Us</h3>
                    <p>we want to help passengers <br /> to reach their destinations</p>
                </section>
                <section>
                    <h3>Explore</h3>
                    <p>Home</p>
                    <p>Destinations</p> 
                    <p>About</p>
                </section>
                <section>
                    <h3>Information</h3>
                    <p>More search</p>
                    <p>Blog</p>
                    <p>testimonials</p>
                </section>
                <section>
                    <h3>Services</h3>
                    <p>Manage My Bookings</p>
                    <p>Checkin</p>
                    <p>Hotel</p>
                    <p>Cars</p>
                </section>   
            </div>
                     
        </footer>
    )
}   