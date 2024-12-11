import PropTypes from 'prop-types';

function Card({ children }) {
    return (
        <div className="w-full h-24 bg-zinc-500 rounded-lg text-center flex items-center justify-center ">
            <ul className='w-full h-full bg-transparent justify-evenly text-black font-bold px-16 py-8 '>
                <li>
                {children}
                </li>
            </ul>
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;
