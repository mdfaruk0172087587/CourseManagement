import { AuthContext } from '../contex/AuthContex';
import UseHock from '../hock/UseHock';

const Register = () => {
   
    const {register} = UseHock();

    
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
       
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, email, photo, password, confirmPassword)

        // register
        register(email, password)
        .then(result => {
            console.log(result)
        })
        .then(error => {
            console.log(error)
        })
    }
    return (
       
            
    <div className="card bg-base-100 w-full  max-w-sm flex justify-center shrink-0 shadow-2xl my-5 mx-auto">
              

      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Photo URL</label>
          <input type="url" name='photo' className="input" placeholder="Photo URL" />
          
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <label className="label">Confirm Password</label>
          <input type="password" name='confirmPassword' className="input" placeholder="Confirm Password" />
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
 

    );
};

export default Register;