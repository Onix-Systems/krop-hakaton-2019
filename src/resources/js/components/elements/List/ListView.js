import React from 'react';
import classNames from 'classnames';
import Card from '../Card/Card';
import ViewAllButton from '../ViewAllButton/ViewAllButton';
import Pagination from '../Pagination/Pagination';
import Title from '../Title/Title';

const ListView = ({
  equipments, selectedEquipment,
}) => (
  <div className="list">
    <Title />
    <div
      className={
        classNames('list__cards-container', {
          'list__cards-container--unique-card': selectedEquipment,
        })
      }
    >
      {
        selectedEquipment ? (
          <Card
            equipment={selectedEquipment}
          />
        ) : (
          equipments.map((equipment) => (
            <Card
              key={equipment.id}
              equipment={equipment}
            />
          ))
        )
      }
      { selectedEquipment ? <ViewAllButton /> : <Pagination /> }
    </div>
  </div>
);

export default ListView;
