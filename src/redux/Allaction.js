
export const submitForm = (formData) => {
    return {
      type: "SUBMIT_FORM",
      payload: formData
    };
  };
  
  export const EditUser = (useremail,userdata) => {
    
    return {
      type: "EDIT_DATA",
      payload: {useremail,userdata}
    };
  };
  export const DeleteUser = (useremail) => {
    
    return {
      type: "DELETE_DATA",
      payload: useremail
    };
  };