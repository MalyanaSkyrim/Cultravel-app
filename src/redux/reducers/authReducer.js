import types from "../actions/actionTypes";

const initialState = {
  user: null,

  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNIN: {
      localStorage.setItem("x-access-token", payload.accessToken);
      localStorage.setItem("x-refresh-token", payload.refreshToken);
      return { ...state, isAuthenticated: true };
    }
    // case types.SIGNUP: {
    //   localStorage.setItem("x-access-token", payload);
    //   return state;
    // }
    case types.LOAD_USER: {
      return { ...state, isAuthenticated: true, user: payload };
    }
    case types.LOGOUT: {
      localStorage.removeItem("x-access-token");
      return { user: null, isAuthenticated: false };
    }

    default:
      return state;
  }
};

export default authReducer;
