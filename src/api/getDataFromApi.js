import axios from "axios";
import {
    FETCH_ALL_USERS_DATA,
    FETCH_SPECIFIC_USERS_POSTS
} from "../constants/apiEndPoints";

export const getAllUsersData = async (setAllUserData, setLoading) => {
    const allUsersData = await axios.get(
      FETCH_ALL_USERS_DATA
    );
    console.log(allUsersData.data);
    setAllUserData(allUsersData.data);
    setLoading(false);
  };

  export const getUserPosts = async (id, setUsersPostsData, setLoading) => {
    const usersPostsData = await axios.get(
        FETCH_ALL_USERS_DATA +"/" + id + FETCH_SPECIFIC_USERS_POSTS
    );
    console.log(usersPostsData);
    setUsersPostsData(usersPostsData.data);
    setLoading(false);
  };