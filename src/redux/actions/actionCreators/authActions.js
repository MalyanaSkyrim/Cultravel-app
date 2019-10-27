import types from "../actionTypes";
import uuid from "uuid/v1";
import instance from "../../../api/axiosInstance";

const handleError = (err, dispatch) => {
  const { msg } = err.response.data;
  dispatch({ type: types.STOP_LOADER });
  dispatch({
    type: types.NOTIFY,
    payload: { id: uuid(), type: "error", msg }
  });
};

export const signIn = data => async dispatch => {
  try {
    dispatch({ type: types.START_LOADER });
    const result = await instance.post("/auth/signin", data);
    dispatch({ type: types.SIGNIN, payload: result.data });
    const resultUser = await instance.get("/auth/user");
    const user = resultUser.data.user;
    dispatch({ type: types.LOAD_USER, payload: user });
    dispatch({ type: types.STOP_LOADER });
    dispatch({
      type: types.NOTIFY,
      payload: { id: uuid(), type: "success", msg: "signin success" }
    });
  } catch (err) {
    dispatch({ type: types.STOP_LOADER });
    return err;
  }
};

export const signUp = data => async dispatch => {
  try {
    dispatch({ type: types.START_LOADER });
    await instance.post("/auth/signup", data);
    dispatch({ type: types.STOP_LOADER });
  } catch (err) {
    dispatch({ type: types.STOP_LOADER });
    return err;
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: types.START_LOADER });
    const result = await instance.get("/auth/user");
    const user = result.data.user;
    if (user) dispatch({ type: types.LOAD_USER, payload: user });

    dispatch({ type: types.STOP_LOADER });
  } catch (err) {
    dispatch({ type: types.STOP_LOADER });
    return err;
  }
};
