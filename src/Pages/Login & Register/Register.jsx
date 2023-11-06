import { Button, Card, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name, photoURL, email, password};
        console.log(user);
    }

    return (
        <div className="w-11/12 mt-16 bg-slate-100">
            <h3 className="text-4xl text-teal-700 font-bold text-center mb-4">Please Register</h3>
            <Card className="max-w-sm mx-auto">
                <form onSubmit={handleRegister}
                    className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label value="Your Name" />
                        </div>
                        <TextInput name="name" type="text" placeholder="Name Here" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Photo URL" />
                        </div>
                        <TextInput name="photo" type="text" placeholder="Photo URL Here" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Your email" />
                        </div>
                        <TextInput name="email" type="email" placeholder="Email Here" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Your password" />
                        </div>
                        <TextInput name="password" type="password" placeholder="Password Here" required />
                    </div>
                   
                    <Button type="submit">Submit</Button>
                </form>

            </Card>
            <p className="text-center mt-8">Already Have an account? <span className="font-bold"><Link to={`/login`}>Login</Link></span></p>
        </div>
    );
};

export default Register;