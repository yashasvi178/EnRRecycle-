import React, {Component} from 'react';
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Header extends Component{

    componentDidMount() {
        $('.navbar-toggle').on('click', function(event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });
        
        $('.navigation-menu>li').slice(-2).addClass('last-elements');
        
        $('.menu-arrow,.submenu-arrow').on('click', function(e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });
    }

    
    render(){
        return(
            <AUX>
        <header id="topnav" className="defaultscroll sticky fixed-top">
        <div className="container">
        <div>
        
        
            <Link to="index_1" className="logo">
              <img src="images/enr.png" alt="" class="img-fluid rounded"  />
            </Link>
            
        </div>
        <div className="menu-extras">
            <div className="menu-item">
                <Link to="#" className="navbar-toggle">
                    <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </div>
        </div>

        <div id="navigation">
            <ul className="navigation-menu ">
                <li className="has-submenu active">
                    <Link to="#home">The Solutions</Link>
                    <span className="menu-arrow"></span>
                    <ul className="submenu">
                        <li>
                            <Link to="">Digital DRS</Link>
                        </li>
                        <li>
                            <Link to="index_2">Digital Recycling</Link>
                        </li>
                        <li>
                            <Link to="">Re-Use </Link>
                        </li>
                        
                    </ul>
                </li>

                <li className="has-submenu ">
                    <a href="#features">Features</a>
                </li>

                <li className="has-submenu">
                    <a href="#services">Trial</a>
                    <span className="menu-arrow"></span>
                    <ul className="submenu">
                <li>
                            <Link to="i">Whitehead</Link>
                        </li>
                        </ul>
                   </li>     
                <li className="has-submenu">
                    <a href="#pricing">Technology</a>
                </li>

                <li className="has-submenu">
                    <a href="#client">QR Code</a>
                </li>

                <li className="has-submenu">
                    <a href="#faq">The App</a>
                </li>

                <li className="has-submenu">
                    <a href="#contact">Contact</a>
                </li>
                <li className="has-submenu mobile-block">
                    <Link to="login">Log in</Link>
                </li>

                <li className="has-submenu mobile-block">
                    <Link to="signup">Try It Free</Link>
                </li>
            </ul>
            <ul className="navigation-menu menu-right">
              
                <li className="mobile-none">
                    <Link to="signup">Log in</Link>
                </li>
            </ul>
        </div>
    </div>
</header>
            </AUX>
        );
    }
}

export default Header;   