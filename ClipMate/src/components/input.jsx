import React from "react";

function Input(props) {
  const { label, id, error, name, type, placeholder } = props;
  return (
    <>
      <div className="flex flex-col mb-4">
        <label
          className="text-black mt-5 font-normal" {...props}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          placeholder={placeholder}
          type={type}
          className="input input-bordered w-full text-white"
        />
      </div>
    </>
  );
}

function TextArea(props) {
  const { label, id, error, name, type } = props;
  return (
    <>
      <div className="flex flex-col mb-4">
        <label
          className="text-white"
          htmlFor={id}
        >
          {label}
        </label>
        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered textarea-lg w-full max-w-xs"
        />
      </div>
    </>
  );
}

export { Input, TextArea };
