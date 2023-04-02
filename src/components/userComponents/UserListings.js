import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <div className="container p-5 text-center">
          <h1>
            User Listings
          </h1>
        </div>
          <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Company</th>
            <th scope="col">Action</th>
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
                              <td>
                                <button className="btn btn-primary btn-sm">
                                  <Link to={`/user/${user.id}`} className="link-text">
                                    View
                                  </Link>
                                </button>
                              </td>
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











