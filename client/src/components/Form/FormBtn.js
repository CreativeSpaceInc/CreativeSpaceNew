import React from "react";

export const FormBtn = props =>
  <div>
  <button  
  	className="btn btn-block"
  	type="submit"
  	{...props}>{props.children}
  </button>
  </div>;