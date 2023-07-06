const initialState = {
  formData: [
    {
      username: "Demo",
      email: "Demo@gmail.com",
      password: "Demo@123",
      confirmPassword: "Demo@123",
    },
    {
      username: "sample",
      email: "sample@gmail.com",
      password: "sample@123",
      confirmPassword: "sample@123",
    },
  ],
};

const Userreducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_FORM":
      return {
        ...state,
        formData: [...state.formData, action.payload],
      };
    case "EDIT_DATA":
      const updatedFormData = state.formData.map((user) => {
        if (user.email === action.payload.useremail) {
          return {
            ...user,
            username: action.payload.userdata.username,
            password: action.payload.userdata.password,
            confirmPassword: action.payload.userdata.password,
          };
        }
        return user;
      });
      console.log(updatedFormData);
      return {
        ...state,
        formData: updatedFormData,
      };
    case "DELETE_DATA":
      return {
        formData: state.formData.filter((e) => e.email !== action.payload),
      };
    default:
      return state;
  }
};
export default Userreducer;
