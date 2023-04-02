import axios from "axios";
import {
    FETCH_ALL_USERS_DATA,
    FETCH_SPECIFIC_USERS_POSTS
} from "../constants/apiEndPoints";

export const getAllUsersData = async (setAllUserData, setLoading) => {
    const allUsersData = await axios.get(
      FETCH_ALL_USERS_DATA
    );
    setAllUserData(allUsersData.data);
    setLoading(false);
  };

  export const getUserPosts = async (id, setUsersPostsData, setLoading,setUserData) => {
      const allUsersData = await axios.get(
          FETCH_ALL_USERS_DATA
          );
    let user = allUsersData.data.users.filter((e) => {
        return e.id == id;
    })

    setUserData(user !== null ? user[0] : '')
    
    const usersPostsData = await axios.get(
        FETCH_ALL_USERS_DATA +"/" + id + FETCH_SPECIFIC_USERS_POSTS
    );
    console.log(usersPostsData,user[0]);
    setUsersPostsData(usersPostsData.data);
    setLoading(false);
  };