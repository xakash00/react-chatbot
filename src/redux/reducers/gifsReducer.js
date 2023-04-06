import { ADD_MORE, LOADING, SET, UPDATE_OFFSET } from "../actions/types";



const initial_state = {
  giphs: [],
  offset: 0,
  loading:false
};

function gifsReducer(state=initial_state, action) {
    switch (action.type) {
      case LOADING :{
        return {
          ...state,
          loading:true
        }
      }
      case UPDATE_OFFSET: {
        return {
          ...state,
          offset: action.offset,
          loading: true
        };
      }
      case SET: {
        return {
          ...state,
          giphs: [...state.giphs, ...action.data],
          loading: false
        };
      }
      case ADD_MORE: {
        return {
          ...state,
          giphs: [...state.giphs, ...action.data],
          loading: false
        };
      }
      default: {
        return state;
      }
    }
  }

  export default gifsReducer