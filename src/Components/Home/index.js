import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const blueColor = { color: 'lightgreen' };
    return (
        <div className='main-container'>
            <div className='paycontainer'>
                <button className='paybutton'>Pay Monthly</button>
                <p className='paytext'>Pay Yearly (save 25%)</p>
            </div>
            <div className='cardcontainer'>
            <div className="firstcard">
                <h2 className="card-title">Basic</h2>
                <h3 className="card-subtitle">FOR INDIVIDUALS & SMALL BUSINESSES</h3>
                <p className="card-description">Everything you need to create your store, ship products, and process payments</p>
                <div className='pricecontainer'><p className="card-price"><strong>₹1,994</strong></p><div className='priceendtag'><p>INR <br/>/mo</p></div></div>
                <div className='cardinsidecontainer'><h3 className="card-subtitle">Get your first 3 months for ₹20/mo</h3></div>
                <h3 className="tickhead">What's included on basic</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '5px' }}>
                    <FontAwesomeIcon icon={faCheck} style={blueColor} />
                    <p style={{ marginLeft: '20px', marginBottom: '3px' }}>Basic reports</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '5px' }}>
                    <FontAwesomeIcon icon={faCheck} style={blueColor} />
                    <p style={{ marginLeft: '20px', marginBottom: '3px' }}>Upto 1,000 inventory locations</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '5px' }}>
                    <FontAwesomeIcon icon={faCheck} style={blueColor} />
                    <p style={{ marginLeft: '20px', marginBottom: '3px' }}>2 staff accounts</p>
                </div>
                </div>
                <div className='lastbutton'><button className='freebutton'>Try for free</button></div> 
            </div>

            <div className="card">
                <h2 className="card-title">Shopify</h2>
                <h3 className="card-subtitle">FOR SMALL BUSINESSES</h3>
                <p className="card-description">Level up your business with professional reporting and more staff accounts</p>
                <div className='pricecontainer'><p className="card-price"><strong>₹7,447</strong></p><div className='priceendtag'><p>INR <br/>/mo</p></div></div>
                <div className='cardinsidecontainer'><h3 className="card-subtitle">Get your first 3 months for ₹20/mo</h3></div>
                <h3 className="tickhead">What's included on Shopify</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '5px' }}>
                    <FontAwesomeIcon icon={faCheck} style={blueColor} />
                    <p style={{ marginLeft: '20px', marginBottom: '3px' }}>Professional reports</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '5px' }}>
                    <FontAwesomeIcon icon={faCheck} style={blueColor} />
                    <p style={{ marginLeft: '20px', marginBottom: '3px' }}>Upto 1,000 inventory locations</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '5px' }}>
                    <FontAwesomeIcon icon={faCheck} style={blueColor} />
                    <p style={{ marginLeft: '20px', marginBottom: '3px' }}>5 staff accounts</p>
                </div>
                </div>
                <div className='lastbutton'><button className='freebutton'>Try for free</button></div> 
            </div>

            <div className="advancedcard">
                <h2 className="card-title">Advanced</h2>
                <h3 className="card-subtitle">FOR MEDIUM TO LARGE BUSINESSES</h3>
                <p className="card-description">Get the best of Shopify with custom reporting and out lowest trancaction fees</p>
                <div className='pricecontainer'><p className="card-price"><strong>₹30,164</strong></p><div className='priceendtag'><p>INR <br/>/mo</p></div></div>
                <div className='cardinsidecontainer'><h3 className="card-subtitle">Get your first 3 months for ₹20/mo</h3></div>
                <h3 className="tickhead">What's included on Adnaced</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '5px' }}>
                    <FontAwesomeIcon icon={faCheck} style={blueColor} />
                    <p style={{ marginLeft: '20px', marginBottom: '3px' }}>Custom report builder</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '5px' }}>
                    <FontAwesomeIcon icon={faCheck} style={blueColor} />
                    <p style={{ marginLeft: '20px', marginBottom: '3px' }}>Upto 1,000 inventory locations</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '5px' }}>
                    <FontAwesomeIcon icon={faCheck} style={blueColor} />
                    <p style={{ marginLeft: '20px', marginBottom: '3px' }}>15 staff accounts</p>
                </div>
                </div>
                <div className='lastbutton'><button className='freebutton'>Try for free</button></div> 
            </div>
            </div>
        </div>
        
    );
};

export default Home;