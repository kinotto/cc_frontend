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
        <p className="footer__title">Risk warning</p>

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
            <div>Support</div>
            <div>Help Centre</div>
            <div>Tax relief</div>
            <div>Contact us</div>
          </div>
          <div className="footer__links__group--onlyBigDevices">
            <div>Learn more</div>
            <div>Raising finance</div>
            <div>Funded companies</div>
            <div>Partnerships</div>
          </div>
          <div className="footer__links__group--onlyBigDevices">
            <div>Legal</div>
            <div>Terms of use</div>
            <div>Privacy policy</div>
            <div>Risk warning</div>
          </div>
          <div className="footer__links__group--onlyBigDevices">
            <div>Team</div>
            <div>About us</div>
            <div>Carrers</div>
          </div>
          <div className="footer__links__group">
            <img src="../../images/app-store-badge.svg" />
            <div className="footer__links__social">
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-linkedin" aria-hidden="true" />
              <i className="fa fa-google" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="footer__bottomLine">
          <div>
            Crowdcube Capital Ltd is authorised and regulated by the Financial Conduct
            Authority (No. 650205).
          </div>
          <img src="../../images/crowdcube_logo2.svg" />
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
