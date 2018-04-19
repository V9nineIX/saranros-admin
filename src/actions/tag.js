import axios from 'axios'
import { baseUrl, token } from '../config/api'
export const ADD_TAG   = 'ADD_TAG'
export const GET_LIST_TAGS = 'GET_LIST_TAGS' 



export const getListTags = () => dispatch => {

  const tokenUser =localStorage.getItem('token')
  axios.get(`${baseUrl}/Tags?access_token=${tokenUser}`)

      .then(function (response) {
          if (response && response.status === 200 && response.data) {
              dispatch({
                  type: GET_LIST_TAGS,
                  listTags: response.data
              })
          }
      })
      .catch(function (error) {
        console.log(error);
      });
}



export const addTag = (tagData) => dispatch => {
  axios.post(`${baseUrl}/Tags`, tagData)
      .then(function (response) {
          if (response && response.status === 200 && response.data) {
              dispatch(opennotification(`Create tag Success.`, `success`))
          }
      })
      .catch(function (error) {
          dispatch(opennotification(`Error cannot create tag`, `error`))
      });
}
