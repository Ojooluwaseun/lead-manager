import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { configToken } from "./auth";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";
import auth from "../reducers/auth";

//Get leads
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/leads/", configToken(getState))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//Delete Lead
export const deleteLead = id => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id}/`, configToken(getState))
    .then(res => {
      dispatch(createMessage({ leadDelete: "Lead Deleted" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//Add Lead
export const addLead = lead => (dispatch, getState) => {
  axios
    .post("/api/leads/", lead, configToken(getState))
    .then(res => {
      dispatch(createMessage({ leadAdd: "Lead Added" }));

      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
