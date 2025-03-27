import coffeeimgen from '../../../img/coffeee.png';
import './locations.css';

function Locations() {
    return (
        <div className='mc-locations'>
            <div className='sc-locations'>
                <div className="clist">
                    <div className="item">
                        <img src={coffeeimgen} alt="" />
                    </div>
                    <div className="item">
                        <img src={coffeeimgen} alt="" />
                    </div>
                    <div className="item">
                        <img src={coffeeimgen} alt="" />
                    </div>
                    <div className="item">
                        <img src={coffeeimgen} alt="" />
                    </div>
                    <div className="item">
                        <img src={coffeeimgen} alt="" />
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="content">
                    <div>Locations</div>
                    <div>Sponsors</div>
                    <div>Blog</div>
                    <div>Prizes</div>
                </div>
                <div id="arrow">
                    <button className="prev">prev</button>
                    <button className="next">next</button>
                </div>
            </div>
        </div>
    );
}

export default Locations;
