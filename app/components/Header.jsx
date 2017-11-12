import React from 'react';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed"
            data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a
            className="navbar-brand"
            href="https://www.crowdcube.com/">
            <span />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul className="nav navbar-nav navbar-right">
            <li>
              <a className="current">
                Investment Opportunities
              </a>
            </li>
            <li>
              <a href="https://www.crowdcube.com/investing-your-money">
                How it works
              </a>
            </li>
            <li>
              <a href="https://www.crowdcube.com/raising-finance">
                Raising finance
              </a>
            </li>
            <li>
              <a>Explore</a>
            </li>
            <li>
              <a href="https://www.crowdcube.com/login?redirect_to=L2ludmVzdG1lbnRz">
                Log in
              </a>
            </li>
            <li>
              <a className="join" href="https://www.crowdcube.com/register#details">
                Join
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
