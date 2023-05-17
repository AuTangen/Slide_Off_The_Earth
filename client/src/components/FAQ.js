import { NavLink, useNavigate } from 'react-router-dom';

function FAQ(props) {
    // const navigate = useNavigate();

    return (
        <>
        <div className="add-artist-container">
            <div className="section-title"><h2>FAQ</h2></div>

            <div class='faq-wrap'>
                <h2>When is the SlideOffTheEarth Music Festival?</h2>
                <p>Friday, August 17th - Sunday, August 19th, 2024</p>
                
                <h2>How do I buy tickets?</h2>
                <p>Another Rutgers group probably made a ticket sales app for Project 3, so we will show some support and use their app to sell our tickets!</p>

                <h2>How much do tickets cost?</h2>
                    <ul>
                        <li>Friday: $40</li>
                        <li>Saturday: $150</li>
                        <li>Sunday: $130</li>
                        <li>3-day Pass: $250</li>
                        <li>3-day Pass VIP: $400</li>
                    </ul>

                <h2>What is the rain-out policy?</h2>
                <p>The SlideOffTheEarth Music Festival will still happen, rain or shine!</p>

                <h2>Are there any nearby hotel accommodations?</h2>
                <p>Another Rutgers group probably made a hotel reservation app for Project 3, so we will show some support and recommend you use their app!</p>

                <h2>Where do I park?</h2>
                <p>All event parking will be at the Raymond James Stadium.</p>

                <h2>Where can I pick up my wristband?</h2>
                <p>You can pick up your wristband at the box office at the front gate.</p>

            </div>
        </div>


        </>
    )

};

export default FAQ;