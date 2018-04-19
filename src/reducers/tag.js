 import {
    ADD_TAG, 
    GET_LIST_TAGS
} from "../actions/tag";

const initialState = {
  tags : [] ,
  tagDetail : {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TAG:
            return {
                ...state,
                tagDetail : action.tagDetail
            };
            break;
        case GET_LIST_TAGS:
            console.log("tags" ,action.listTags);
            return {
                ...state,
                tags : action.listTags
            };
            break;
        default:
            return state
    }
}


 