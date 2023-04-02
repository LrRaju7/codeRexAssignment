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

//   export const getGlobalPageUrls = async (id, setPageBreadcrumb, setLoading) => {
//     const breadcrumbData = await axios.get(
//       DRUPAL_API_ENDPOINT + FETCH_SPECIFIC_COMPONENT + "breadcrumb/" + id
//     );
//     setPageBreadcrumb(breadcrumbData.data.data.attributes);
//     setLoading(false);
//   };