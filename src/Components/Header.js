import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"
import {useStateValue} from './StateProvider';

const logo_amazon = process.env.PUBLIC_URL + '/images/amazon_PNG25.png'
function Header() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className={'header'}>
            <Link to="/">
                <img
                    className={'header__logo'} 
                    src={logo_amazon}
                    alt='description'
                />
            </Link>

            <div className='header__search'>
                <input
                className='header__searchInput' type='text' />
                <SearchIcon className="header__searchIcon" />
            </div>
            
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign in
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Return
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo 
                    header__basketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
