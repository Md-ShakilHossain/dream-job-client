import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password};
        console.log(user);
    }

    return (
        <div className="w-11/12 mt-16 bg-slate-100">
            <h3 className="text-4xl text-teal-700 font-bold text-center mb-4">Please Login</h3>
            <Card className="max-w-sm mx-auto">
                <form onSubmit={handleLogin}
                    className="flex flex-col gap-4">
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
                    <div className="flex items-center gap-2">
                        <Checkbox />
                        <Label>Remember me</Label>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
                
            </Card>
            <p className="text-center mt-8">New to DreamJobs? <span className="font-bold"><Link to={`/register`}>Register</Link></span></p>
        </div>
    );
};

export default Login;