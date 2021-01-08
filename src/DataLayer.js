import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
	return (
		<DataLayerContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</DataLayerContext.Provider>
	);
};

//anytime if we need to get a value from the datalyer or we need to dispatch an action to it, so we need some kind of way of accesing the same.
export const useDataLayerValue = () => useContext(DataLayerContext);
