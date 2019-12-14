import React from 'react';
import {Accordion, Icon} from 'semantic-ui-react';
import ExpandIcon from './components/ExpandIcon';
import MarkerIcon from '../../../../images/svg/location-pin.svg';

const CardView = ({
                    equipment, expand, onExpandClicked,
                  }) => (
  <div className="card">
    <Accordion fluid>
      <Accordion.Title>
        <div className="container-fluid accordion-title__row accordion-title__row--margin-bottom">
          <div className="col-11 card__custodian-name">
            {!expand ? equipment.custodian_name :
              <div className="row">
                <div className="col-3">
                  <button className="card__button col-sm-9 accordion-title__bottom_row--margin">
                    <span>ПОДІЛИТИСЯ</span>
                  </button>
                </div>
                <div className="col-3">
                  <button className="card__button col-sm-9">
                    <span>НА КАРТІ</span>
                  </button>
                </div>
              </div>
            }
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

        {!expand ?
          <div className="container-fluid accordion-title__row accordion-title__row--with-arrow">
            <div className="">
              {equipment.equipment_title}
            </div>
            <div className="accordion-title__arrow">
              <Icon name="long arrow alternate right"/>
            </div>
            <div className="">
              {equipment.diagnostic_type}
            </div>
          </div>
          : ''}
        {!expand ?
          <div className="container-fluid accordion-title__bottom_row">
            <div className="col-6 col-sm-7">
              <div className="container-fluid no-padding">
                <div className="accordion-title__bottom_row--margin">
                  <img src={MarkerIcon} className="accordion-title__marker-icon" alt="pin"/>
                  <span>
                  {equipment.address_locality}, {equipment.address_street_address}
                </span>
                </div>
                <div className="accordion-title__bottom_row--margin">
                  <Icon name="clock outline" className="accordion-title__clock-icon"/>
                  <span>
                  {equipment.work_shedule}
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
          : ''}
      </Accordion.Title>
      <Accordion.Content active={expand}>
        <hr/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 card__title">Назва закладу</div>
            <div className="col-8 card__description">{equipment.custodian_name}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">ЄРДПОУ закладу</div>
            <div className="col-8 card__description">{equipment.custodian_identifier}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Назва структурного підрозділу, де знаходиться обладнання</div>
            <div className="col-8 card__description">{equipment.structure_name}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Номер поверху</div>
            <div className="col-8 card__description">{equipment.floor_number}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Номер кабінету</div>
            <div className="col-8 card__description">{equipment.room_number}</div>
          </div>
        </div>
        <hr/>
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-4 card__title">Група медичних послуг</div>
            <div className="col-8 card__description">{equipment.inspection_type}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Підгрупа медичних послуг</div>
            <div className="col-8 card__description">{equipment.diagnostic_subgroup}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Вид медичної послуги</div>
            <div className="col-8 card__description">{equipment.diagnostic_type}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Можливості навантаженості</div>
            <div className="col-8 card__description">{equipment.diagnostic_quantity}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Графік роботи кабінету, де працює обладнання</div>
            <div className="col-8 card__description">{equipment.work_shedule}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Обмеження прийому</div>
            <div className="col-8 card__description">{equipment.availability_restriction}</div>
          </div>
        </div>
        <hr/>
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-4 card__title">Назва країни</div>
            <div className="col-8 card__description">{equipment.address_country_name}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Назва області</div>
            <div className="col-8 card__description">{equipment.address_region}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Назва населеного пункту</div>
            <div className="col-8 card__description">{equipment.address_locality}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Вулиця та номер будинку</div>
            <div className="col-8 card__description">{equipment.address_street_address}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Географічна широта</div>
            <div className="col-8 card__description">{equipment.latitude}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Географічна довгота</div>
            <div className="col-8 card__description">{equipment.longitude}</div>
          </div>
        </div>
        <hr/>
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-4 card__title">Назва обладнання</div>
            <div className="col-8 card__description">{equipment.equipment_title}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Модель обладнання</div>
            <div className="col-8 card__description">{equipment.equipment_model}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Серійний номер</div>
            <div className="col-8 card__description">{equipment.sn_equipment}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Країна-виробник обладнання</div>
            <div className="col-8 card__description">{equipment.producer_country}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Постачальник</div>
            <div className="col-8 card__description">{equipment.producer_name}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">ЄДРПОУ постачальника</div>
            <div className="col-8 card__description">{equipment.producer_identifier}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Рік випуску обладнання</div>
            <div className="col-8 card__description">{equipment.equipment_year}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Встановлений термін експлуатації виробником</div>
            <div className="col-8 card__description">{equipment.equipment_life}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Рік введення в експлуатацію</div>
            <div className="col-8 card__description">{equipment.registration_date}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Експлуатаційний стан обладнання</div>
            <div className="col-8 card__description">{equipment.equip_condition}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Дата останнього ремонту</div>
            <div className="col-8 card__description">{equipment.repair_date}</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 card__title">Вид ремонтних робіт</div>
            <div className="col-8 card__description">{equipment.repair_type}</div>
          </div>
        </div>
      </Accordion.Content>
    </Accordion>
  </div>
);

export default CardView;
