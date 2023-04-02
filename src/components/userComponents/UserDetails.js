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
          <div class="container">
    <div class="main-body">
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src={userData.image} alt="User-Image" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>{userData.firstName} {userData.lastName}</h4>
                      <p class="text-secondary mb-1">{userData.email}</p>
                      <p class="text-muted font-size-sm">{userData.address.address}, {userData.address.city}, {userData.address.state}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {userData.firstName} {userData.lastName}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Gender</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {userData.gender}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {userData.phone}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Birth Date</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {userData.birthDate}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Age</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {userData.age}
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
    </div>

    <>
    <div className="container p-5 text-center">
          <h1>
            User Posts
          </h1>
        </div>
    <div className="row">
    {
                usersPostsData.posts !== null ? (
                  <>
                    {
                      usersPostsData.posts.map((post, index)=>{
                        return(
                          <>
                          <div className=" col-md-4 col-sm-12">
                          <div className="card text-center m-1">
                            <div className="card-header">
                              <h5 className="card-title">{post.title}</h5>
                            </div>
                            <div className="card-body">
                              <p className="card-text">{post.body}</p>
                            </div>
                            <div className="card-footer text-muted">
                              Total Reactions: {post.reactions}
                            </div>
                          </div>
                          </div>
                          </>
                        )
                      })
                    }
                    </>
                ) : <>
                  There is no data
                </>
              }
    </div>
    

    </>

        </>
        )}
    </>
  )
}

export default UserDetails