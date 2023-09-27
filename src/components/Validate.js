export const validate = (data ,type) => {
    const { name, email, password, confirmpassword, isAccepted } = data;
    const errors = {};
   
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    } else {
      delete errors.email;
    }
  
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else {
      delete errors.password;
    }
 
    if(type === "signup") { 
      
      if (!name.trim()) {
        errors.name = "Name is required";
      } else {
        delete errors.name;
      }

      if (!confirmpassword) {
        errors.confirmpassword = "Confirm password is required";
      } else if (confirmpassword !== password) {
        errors.confirmpassword = "Passwords do not match";
      } else {
        delete errors.confirmpassword;
      }

      if (isAccepted) {
        delete errors.isAccepted;
      } else {
        errors.isAccepted = "Accept our regulations";
      }

      }
    return errors;
  };