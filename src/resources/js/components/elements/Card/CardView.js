import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import ExpandIcon from './components/ExpandIcon';
import MarkerIcon from '../../../assets/location-pin.svg';

const CardView = ({
  equipment, expand, onExpandClicked,
}) => (
  <div className="card">
    <Accordion fluid>
      <Accordion.Title>
        <div className="container-fluid accordion-title__row accordion-title__row--margin-bottom">
          <div className="col-11 card__custodian-name">
            { equipment.custodian_name }
          </div>
          <div
            className="col-1"
          >
            <ExpandIcon
              expand={expand}
              onExpandClicked={onExpandClicked}
            />
          </div>
        </div>
        <div className="container-fluid accordion-title__row accordion-title__row--with-arrow">
          <div className="">
            { equipment.equipment_title }
          </div>
          <div className="accordion-title__arrow">
            <Icon name="long arrow alternate right" />
          </div>
          <div className="">
            { equipment.diagnostic_type }
          </div>
        </div>
        <div className="container-fluid accordion-title__bottom_row">
          <div className="col-6 col-sm-7">
            <div className="container-fluid no-padding">
              <div className="accordion-title__bottom_row--margin">
                <img src={MarkerIcon} className="accordion-title__marker-icon" alt="pin" />
                <span>
                  { equipment.address_locality }, {equipment.address_street_address}
                </span>
              </div>
              <div className="accordion-title__bottom_row--margin">
                <Icon name="clock outline" className="accordion-title__clock-icon" />
                <span>
                  { equipment.work_shedule }
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <button className="card__button col-sm-9 accordion-title__bottom_row--margin">
              <span>ПОДІЛИТИСЯ</span>
            </button>
            <button className="card__button col-sm-9">
              <span>НА КАРТІ</span>
            </button>
          </div>
        </div>
      </Accordion.Title>
    </Accordion>
  </div>
);

export default CardView;
