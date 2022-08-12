import './App.css';
import { useForm } from 'react-hook-form';
import {useNavigate} from "react-router-dom"


function App() {
  // const navi = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () =>{
    // navi("")
    console.log("Submitted");
  };

  return (
    <div className="App">

      <form onSubmit={handleSubmit(onSubmit)}>
      Name: 
      <input {...register('name', {required:true})} placeholder="name" /> 
      {errors.name && <p>Please enter name.</p>}
      <br/>
      Email: 
      <input {...register('age', {required: true})} placeholder="email" />
      {errors.age && <p>Please enter email.</p>}
      <br/>
      Password: 
      <input {...register('password',  {required: true , minLength: 6 , maxLength:10 })}type="password
      " placeholder="password"/>
      {errors.password && <p>Please enter correct password.</p>}
      <br/>
        <input type="submit" value="submit" />
      </form>
     
    </div>
  );
}

export default App;
