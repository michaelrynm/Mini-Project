import React from "react";

export default function Service(props) {
    const {image, alt, title, desc} = props
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={alt}
          />
        </figure>
        <div className="card-body h-36">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
