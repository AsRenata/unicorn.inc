import React, { useState, useEffect } from "react";
import "./Team.css";
import {
  BsFillChatRightQuoteFill,
  BsFillChatLeftQuoteFill,
} from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import "./Modal.css";

const Team = () => {
  const [openModalCeo, setOpenModalCeo] = useState(false);
  const [openModalArt, setOpenModalArt] = useState(false);
  const [openModalD1, setOpenModalD1] = useState(false);
  const [openModalD2, setOpenModalD2] = useState(false);
  const [openModalD3, setOpenModalD3] = useState(false);
  const [openModalAccount, setOpenModalAccount] = useState(false);
  const [openModalAccounts, setOpenModalAccounts] = useState(false);

  return (
    <div className="team-container" id="team">
      <div className="team-header-container">
        <div className="header-text">
          <BsFillChatRightQuoteFill />
          <p>
            We offer perfect
            <br /> hiring models for your
            <br /> project requirements
          </p>
        </div>
        <div className="team-image"></div>
        <div>
          <BsFillChatLeftQuoteFill />
          <p>
            Our highly qualified
            <br /> and skilled team
            <br /> are here to help
          </p>
        </div>
      </div>
      <div className="team-content">
        <button
          className="ceo box"
          onClick={() => {
            setOpenModalCeo(true);
          }}
        >
          ceo
        </button>
        {openModalCeo && (
          <div className="modal-box">
            <div className="modal-desc">
              <div className="modal-desc-box">
                <h3>
                  Alan <span>Walker</span>
                </h3>
                <p>
                  Since 2020 Alan has been running the Unicorn.inc. With
                  extensive experience in branding, strategy and marketing, he
                  ensures our client work actually works. As the leading light
                  in our creativity for good pledge, he wants to make a real
                  difference in the world.
                </p>
              </div>
            </div>
            <div className="modal-pic-ceo"></div>
            <i className="close-btn" onClick={() => setOpenModalCeo(false)}>
              <MdOutlineClose />
            </i>
          </div>
        )}
        <button
          className="art box"
          onClick={() => {
            setOpenModalArt(true);
          }}
        >
          art director
        </button>
        {openModalArt && (
          <div className="modal-box">
            <div className="modal-desc">
              <h3>
                Glen <span>Waizerd</span>
              </h3>
              <p>
                Glen likes to use her creative skills for the good of the world.
                It`s why she so passionate about Unicorn.inc, it`s her pledge to
                be a triple bottom company who actually cares. It makes all
                agency work more exiting and our people proud to work here.
                Sounds good?
              </p>
            </div>
            <div className="modal-pic-art"></div>
            <i className="close-btn" onClick={() => setOpenModalArt(false)}>
              <MdOutlineClose />
            </i>
          </div>
        )}
        <button
          className="designer1 box"
          onClick={() => {
            setOpenModalD1(true);
          }}
        >
          designer
        </button>
        {openModalD1 && (
          <div className="modal-box">
            <div className="modal-desc">
              <h3>
                Vicki <span>Galager</span>
              </h3>
              <p>
                Vicki is our branding legend. Happiest when she is creating,
                drawing, making experimenting with graphics and illustration.
                Not a day goes by without Vicki mentioning some creative
                campaing she`d like to start.
              </p>
            </div>
            <div className="modal-pic-d1"></div>
            <i className="close-btn" onClick={() => setOpenModalD1(false)}>
              <MdOutlineClose />
            </i>
          </div>
        )}
        <button
          className="designer2 box"
          onClick={() => {
            setOpenModalD2(true);
          }}
        >
          designer
        </button>
        {openModalD2 && (
          <div className="modal-box">
            <div className="modal-desc">
              <h3>
                Holly <span>Bayden</span>
              </h3>
              <p>
                Holly is our amazing new designer with a flair for concepts,
                writing and all things design. Not one to sit still, she
                launched her own print shop mid-lockdown and is eager to make
                her mark with our sustainability projects. A self-confessed
                'proud Northerner she makes a banging brew and is excited at
                using her skills for the power of good.
              </p>
            </div>
            <div className="modal-pic-d2"></div>
            <i className="close-btn" onClick={() => setOpenModalD2(false)}>
              <MdOutlineClose />
            </i>
          </div>
        )}
        <button
          className="designer3 box"
          onClick={() => {
            setOpenModalD3(true);
          }}
        >
          designer
        </button>
        {openModalD3 && (
          <div className="modal-box">
            <div className="modal-desc">
              <h3>
                Ross <span>Hooke</span>
              </h3>
              <p>
                Passionate, creative, enthusiastic that` words that in the best
                way describes Ross. Designer with pernament smile on his face
                and allways ready to help. When Ross is out of working hours,
                you can found him at football yard teching kids the mastery of a
                ball.
              </p>
            </div>
            <div className="modal-pic-d3"></div>
            <i className="close-btn" onClick={() => setOpenModalD3(false)}>
              <MdOutlineClose />
            </i>
          </div>
        )}
        <button
          className="account box"
          onClick={() => {
            setOpenModalAccount(true);
          }}
        >
          account manager
        </button>
        {openModalAccount && (
          <div className="modal-box">
            <div className="modal-desc">
              <h3>
                Gemma <span>Swan</span>
              </h3>
              <p>
                Gemma is our account manager and looks after all our clients and
                projects. with a keen eye for details and ensuring all deadlines
                are sight, she`s the one who keeps the creatives in check!
              </p>
            </div>
            <div className="modal-pic-acc"></div>
            <i className="close-btn" onClick={() => setOpenModalAccount(false)}>
              <MdOutlineClose />
            </i>
          </div>
        )}
        <button
          className="accounts box"
          onClick={() => {
            setOpenModalAccounts(true);
          }}
        >
          acounts
        </button>
        {openModalAccounts && (
          <div className="modal-box">
            <div className="modal-desc">
              <h3>
                Sussie <span>O`Brian</span>
              </h3>
              <p>
                Sussie is our numbers person, helping with bookkeeping,
                invoicing, forecasting and challenging us to think bigger and
                better. When she`s not crunching the figures, Sussie is also a
                complementary therapist and ambassador for SunKissed Island,
                promoting naturally-derived products that are good for the body
                and the planet.
              </p>
            </div>
            <div className="modal-pic-accs"></div>
            <i className="close-btn" onClick={() => setOpenModalAccounts(false)}>
              <MdOutlineClose />
            </i>
          </div>
        )}
        <button className="work-with box">work with us</button>
      </div>
    </div>
  );
};

export default Team;
