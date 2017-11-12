import React, {Component} from 'react';
import Modal from './modals/Modal';
import {RISK_WARNING_MODAL} from '../utilities/constants';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      'isOpenModal': false
    };
  }
  render() {
    return (
      <div className="footer">
        <p className="footer__title footer__bold">Risk warning</p>

        <p>
        Investing in start-ups and early stage businesses involves risks, including
        illiquidity, lack of dividends, loss of investment and dilution, and it
        should be done only as part of a diversified portfolio. Crowdcube is targeted
        exclusively at investors who are sufficiently sophisticated to understand
        these risks and make their own investment decisions. You will only be able
        to invest via Crowdcube once you are registered as sufficiently sophisticated.
        </p>

        <p>
        Please click here to read the
          <span
            className="footer__warning"
            onClick={() => this.setState({'isOpenModal': true})}>
            {' full risk warning'}
          </span>.
        This page is approved as a financial promotion by Crowdcube Capital Limited,
        which is authorised and regulated by the Financial Conduct Authority.
        Pitches for investment
        are not offers to the public and investments can only be made by members
        of crowdcube.com on the basis of information provided in the pitches by
        the companies concerned. Crowdcube takes no responsibility for this
        information or for any recommendations or opinions made by the companies.
        </p>

        <p>
        The availability of any tax relief, including EIS and SEIS, depends on the
        individual circumstances of each investor and of the company concerned,
        and may be subject to change in the future. If you are in any doubt about
        the availability of any tax reliefs, or the tax treatment of your investment,
        you should obtain independent tax advice before proceeding with your
        investment.
        </p>

        <div className="footer__links">
          <div className="footer__links__group--onlyBigDevices">
            <div className="footer__bold">Support</div>
            <div><a href="https://www.crowdcube.com/help">Help Centre</a></div>
            <div>
              <a href="https://www.crowdcube.com/pg/eis-seis-tax-relief-overview-43">
                Tax relief
              </a>
            </div>
            <div><a href="https://www.crowdcube.com/contact">Contact us</a></div>
          </div>
          <div className="footer__links__group--onlyBigDevices">
            <div className="footer__bold">Learn more</div>
            <div>
              <a href="https://www.crowdcube.com/raising-finance">
                Raising finance
              </a>
            </div>
            <div>
              <a href="https://www.crowdcube.com/companies">
                Funded companies
              </a>
            </div>
            <div>
              <a href="https://www.crowdcube.com/partnerships">
                Partnerships
              </a>
            </div>
          </div>
          <div className="footer__links__group--onlyBigDevices">
            <div className="footer__bold">Legal</div>
            <div>
              <a href="https://www.crowdcube.com/pg/terms-16">
                Terms of use
              </a>
            </div>
            <div>
              <a href="https://www.crowdcube.com/pg/privacy-and-cookie-policy-17">
              Privacy policy
              </a>
            </div>
            <div>
              <a href="https://www.crowdcube.com/pg/risk-36">
                Risk warning
              </a>
            </div>
          </div>
          <div className="footer__links__group--onlyBigDevices">
            <div className="footer__bold">Team</div>
            <div>
              <a href="https://www.crowdcube.com/pg/crowdcube-inc-about-us-1">
                About us
              </a>
            </div>
            <div>
              <a href="https://www.crowdcube.com/pg/jobs-37">Carrers</a>
            </div>
          </div>
          <div className="footer__links__group">
            <a href="https://itunes.apple.com/app/apple-store/id1130987804?pt=2225342&ct=crowdcube_footer&mt=8">
              <img src="../../images/app-store-badge.svg" />
            </a>
            <div className="footer__links__social">
              <a href="https://www.facebook.com/crowdcube">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/Crowdcube">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/company/crowdcube-limited">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
              <a href="https://plus.google.com/+crowdcube">
                <i className="fa fa-google" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/crowdcubeteam/">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottomLine">
          <div>
            Crowdcube Capital Ltd is authorised and regulated by the Financial Conduct
            Authority (No. 650205).
          </div>
          <a href="https://www.crowdcube.com/investments?">
            <img src="../../images/crowdcube_logo2.svg" />
          </a>
        </div>

        <Modal
          isOpen={this.state.isOpenModal}
          onRequestClose={() => this.setState({'isOpenModal': false})}
          contentLabel=""
          type={RISK_WARNING_MODAL}
        />
      </div>
    );
  }
}

export default Footer;
