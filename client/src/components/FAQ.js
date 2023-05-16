import { NavLink, useNavigate } from 'react-router-dom';

function FAQ(props) {
    // const navigate = useNavigate();

    return (
        <>
            
            <h2>FAQ</h2>

            <div class='FAQ-container'>
                <h3>When is the SlideOffTheEarth Music Festival</h3>
                <p>Friday, May 19, 2023 6PM - Sunday, May 21, 2023 11:00PM</p>
                
                <h3>How do I buy tickets?</h3>
                <p>Another Rutgers group probably made a ticket sales app for Project 3, so we will show some support and use their app to sell our tickets!</p>

                <h3>How much do tickets cost?</h3>
                    <ul>
                        <p>Friday: $40</p>
                        <p>Saturday: $150</p>
                        <p>Sunday: $130</p>
                        <p>3-day Pass: $250</p>
                        <p>3-day Pass VIP: $400</p>
                    </ul>

                <h3>What is the rain-out policy?</h3>
                <p>The SlideOffTheEarth Music Festival will still happen, rain or shine!</p>

                <h3>Are there any nearby hotel accommodations?</h3>
                <p>Another Rutgers group probably made a hotel reservation app for Project 3, so we will show some support and recommend you use their app!</p>

                <h3>Where do I park?</h3>
                <p>All event parking will be at the Raymond James Stadium.</p>

                <h3>Where can I pick up my wristband?</h3>
                <p>You can pick up your wristband at the box office at the front gate.</p>

            </div>

        </>
    )

};

export default FAQ;