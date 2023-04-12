import React from "react";
import { Link,Route } from 'react-router-dom';
import { SignUp } from "@clerk/nextjs";


const SignUpPage = () => (
  <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" redirectUrl="/todos.js"/>

  );
  
<Link to = "/todos">
    Login
</Link>

export default SignUpPage;
