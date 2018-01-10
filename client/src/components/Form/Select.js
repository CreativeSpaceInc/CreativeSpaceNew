import React from "react";

export const Select = props =>
	<select 
		className="form-control" 
		{...props}>{props.children}
	</select>;