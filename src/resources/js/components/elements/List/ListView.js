import React from 'react';
import Card from '../Card/Card';
import ViewAllButton from '../ViewAllButton/ViewAllButton';

const ListView = ({
  equipments, selectedEquipment,
}) => (
  <div className="list">
    <div className="list__title">
      Біля 400 варіантів діагностичних обладнань
    </div>
    <div className="list__cards-container">
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
    </div>
    {selectedEquipment && <ViewAllButton />}
  </div>
);

export default ListView;
