import React from 'react';

const CardList = ({ data, type, onItemSelect, selectedItems }) => {
  return (
    <section className="assetList">
      {data.map((elem, i) => (
        <div
          className={`assetItem ${
            selectedItems.includes(elem.providerId) ? 'selected' : ''
          }`}
          key={i}
          onClick={() => onItemSelect(type, elem.providerId)}
        >
          <img className="assetImage" src={elem.URL} alt={elem.name} />
          <p className="assetName">{elem.name}</p>
        </div>
      ))}
    </section>
  );
};

export default CardList;
