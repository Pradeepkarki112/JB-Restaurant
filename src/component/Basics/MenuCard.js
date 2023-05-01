import React from "react";

const MenuCard = ({ menuData }) => {
  // console.log(menuData);
  return (
    <div>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <div>
              <div className="card-cointainer">
                <div className="card">
                  <div className="card-body">
                    {/* <span className="card-number card-circle subtle">
                      {curElem.id}
                    </span> */}
                    <span className="card-number category subtle">
                      {curElem.category}
                    </span>
                    <h2 className="card-title">{curElem.name}</h2>
                    <span className="card-desciption subtle">
                      {curElem.description}
                    </span>
                    <div className="card-read">Read</div>
                    <img
                      src={curElem.image}
                      alt="images"
                      className="card-media"
                    />
                    <span className="price-tag">{curElem.price}</span>
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MenuCard;
