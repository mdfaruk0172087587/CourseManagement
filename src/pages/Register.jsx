import Swal from 'sweetalert2';
import { AuthContext } from '../contex/AuthContex';
import UseHock from '../hock/UseHock';
import { useNavigate } from 'react-router';

const Register = () => {

    const { register, userUpdateProfile, setUser } = UseHock();
    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const emailName = email.split('@')[0];
        const photo = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,}$/;
        console.log(name, email, photo, password, confirmPassword)

        // register
        register(email, password)
            .then(result => {
                if (!passwordValid.test(password)) {
                   return Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "পাসওয়ার্ডে ১টি বড় হাতের, ১টি ছোট হাতের, ১টি সংখ্যা এবং ১টি বিশেষ চিহ্ন (!@#$%) থাকতে হবে এবং কমপক্ষে ৮ অক্ষরের হতে হবে।",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                if (password !== confirmPassword) {
                    return Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মিলছে না।",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                if (password.includes(emailName)) {
                    return Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "পাসওয়ার্ডে ইমেইলের অংশ (username) থাকা চলবে না।",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                // update 
                const userUpdate = result.user;
                console.log(userUpdate)
                userUpdateProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...userUpdate, displayName: name, photoURL: photo })

                    })
                    .catch(error => {
                        Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                    })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Register has been Success!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(error => {
                 Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500
                });
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