import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {DeleteUser} from "../redux/Allaction"

const ViewData = ({updatedata}) => {
  const data = useSelector((state) => state);
 const dispatch = useDispatch();
  const deletedata = (email) =>{
    dispatch(DeleteUser(email));
    console.log("clicking delete",email);
    
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Edit / Delete</th>
            
          </tr>
        </thead>

        <tbody>
          {data.formData.map((user, index) => {
            return(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button className="btn btn-primary" onClick={()=>updatedata(user)} >
                   Edit
                </button>{" "}
                <button className="btn btn-danger" onClick={()=>deletedata(user.email)}>Delete</button>
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ViewData;
