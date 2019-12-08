import React from 'react';
import Card from '../Card/Card';

const ListView = ({
  equipments
}) => (
  <div className="list">
    <div className="list__title col-12">
      Біля 400 варіантів діагностичних обладнань
    </div>
    <div className="list__cards-container col-12">
      {equipments.map((equipment) => (
        <Card
          key={equipment.id}
          equipment={equipment} />
      ))}
    </div>
  </div>
);

export default ListView;
