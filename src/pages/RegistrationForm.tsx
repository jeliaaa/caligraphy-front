import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerRegister } from "../redux/thunks/authThunks";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { AppDispatch, RootState } from "../redux/store";

const RegistrationForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch<AppDispatch>();
    const { status } = useSelector((state: RootState) => state.auth);
    const isLoading = useMemo(() => status === 'loading', [status]);
    const nav = useNavigate();

    interface CustomerRegisterResponse {
        token?: string;
        message?: string;
    }

    const onSubmit = async (data: any) => {
        const response = await dispatch(fetchCustomerRegister(data)) as {
            payload: CustomerRegisterResponse;
            error: any; // We can add more specific error types if needed
        };
        console.log(response);
        // Check if the action was fulfilled
        if (fetchCustomerRegister.fulfilled.match(response)) {
            if (response.payload.token) {
                window.localStorage.setItem('token', response.payload.token); // Save token
                alert('თქვენ წარმატებით დარეგისტრირდით'); // "You have successfully registered"
                nav("/"); // Navigate to home
            }
        } else if (fetchCustomerRegister.rejected.match(response)) {
            alert('დაფიქსირდა შეცდომა'); // "An error occurred" in Georgian
        } else {
            console.error('Unexpected response:', response);
        }
    };



    // const onSubmit = async (data: any) => {
    //     const response = await dispatch(fetchCustomerRegister(data));
    //     console.log(response);
    //     if (!response.payload) {
    //         alert('დაფიქსირდა შეცდომა')
    //     } else {
    //         // if ('token' in response.payload) {
    //         //     window.localStorage.setItem('token', data.payload.token);
    //         //     alert('თქვენ წარმატებით დარეგისტრირდით');
    //         //     nav("/")
    //         // }
    //         console.log('li');

    //         // setLoading(false);
    //     }
    //     // Replace with actual API call or logic

    //     // const result = await dispatch(fetchCustomerRegister(data)); // Dispatch the async thunk
    //     // console.log(result);
    //     // if (status === "failed") {
    //     //     alert("user already exists")
    //     //     return;
    //     // }
    //     // console.log(status);
    //     // else if(status !== "loading" && status !== "idle" && status === "succeeded"){
    //     //     nav("/")
    //     // }
    // };


    return (
        <div className="max-w-md min-h-[80dvh] m-auto md:mt-20">
            {isLoading && <h1 className="text-center animate-pulse text-3xl">Loading...</h1>}
            <form className='space-y-4 my-4 p-5 md:p-0' onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="firstname"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="სახელი"
                            placeholder="შეიყვანეთ სახელი"
                        />
                    )}
                />
                {errors.name && <span className="text-red-700 text-sm mt-2">* აუცილებელი ველი</span>}

                <Controller
                    name="lastname"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="გვარი"
                            placeholder="შეიყვანეთ გვარი"
                        />
                    )}
                />
                {errors.surname && <span className="text-red-700 text-sm mt-2">* აუცილებელი ველი</span>}

                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="ელ. ფოსტა"
                            placeholder="ელ. ფოსტა"
                        />
                    )}
                />
                {errors.email && <span className="text-red-700 text-sm mt-2">* მიუთითეთ სწორი ელ. ფოსტა</span>}

                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true, minLength: 8 }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="პაროლი"
                            type="password"
                            placeholder="შეიყვანეთ პაროლი"
                        />
                    )}
                />
                {errors.password && <span className="text-red-700 text-sm mt-2">* პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო</span>}

                <div>
                    <button className="bg-main-color text-grayish p-5 w-full" type='submit'>
                        რეგისტრაცია
                    </button>
                </div>
            </form>
            <span className='mt-8'>უკვე გაქვთ ანგარიში?
                <Link to="/login" className="text-blue-600 hover:text-blue-800 hover:underline"> შესვლა</Link>
            </span>
        </div>
    );
};

export default RegistrationForm;



