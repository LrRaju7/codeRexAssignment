import React, { useState, useEffect } from "react";
import { getAllUsersData } from "../../api/getDataFromApi";

const UserListings = () => {
  const [loading, setLoading] = useState(true);
  const [allUserData, setAllUserData] = useState(null);

  useEffect(() => {
    getAllUsersData(setAllUserData,setLoading);
  },[]);
  return (
    <>
      {loading ? null : (
        <>
          <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Company</th>
          </tr>
        </thead>
        <tbody>
        <> 
              {
                allUserData.users !== null ? (
                  <>
                    {
                      allUserData.users.map((user)=>{
                        return(
                          <>
                            <tr>
                              <th scope="row">{user.id}</th>
                              <td>{user.firstName}</td>
                              <td>{user.lastName}</td>
                              <td>{user.email}</td>
                              <td>{user.company.name}</td>
                            </tr>
                          </>
                        )
                      })
                    }
                    </>
                ) : <>
                  There is no data
                </>
              } 
              </>
          
        </tbody>
      </table>
        </>
        )}
    </>
    
  )
}

export default UserListings











