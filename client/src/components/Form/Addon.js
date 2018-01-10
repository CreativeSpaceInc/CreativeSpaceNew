import React from "react";

export const Addon = props =>
	<div 
		className="input-group-addon" 
		{...props}>{props.children}
	</div>;