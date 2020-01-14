import React from 'react';
import Card from '../Card/Card';

const ListView = ({
  equipments
}) => (
  <div className="list">
    <div className="list__title">
      Біля 400 варіантів діагностичних обладнань
    </div>
    <div className="list__cards-container">
      {equipments.map((equipment) => (
        <Card
          key={equipment.id}
          equipment={equipment} />
      ))}
    </div>
  </div>
);

export default ListView;
