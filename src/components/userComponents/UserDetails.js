import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserPosts } from "../../api/getDataFromApi";


const UserDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [usersPostsData, setUsersPostsData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserPosts(id,setUsersPostsData,setLoading,setUserData);
  },[]);
  return (
    <>
      {loading ? null : (
        <>
          
        </>
        )}
    </>
  )
}

export default UserDetails