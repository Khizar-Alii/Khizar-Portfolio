import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.url} className="work__button" target="_blank">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      <p className="work__desc">{item.desc}</p>
    </div>
  );
};

export default WorksItems;
