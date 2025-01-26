import Input from "../components/Input";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
// import Input from "./formComponents/Input";
// import { useDispatch } from "react-redux";
// import { fetchAdminAuth, fetchParticipantAuth } from "../../redux/thunks/authThunks";


const LoginForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState('');
    // const dispatch = useDispatch();
    // const nav = useNavigate();
    const forAdmin = false;
    // const onSubmit = async (val) => {
    //     // console.log(data); // Ensure values are logged correctly

    //     // try {
    //     //     setError('');
    //     //     setLoading(true);
    //     //     // Perform your authentication logic here
    //     // } catch (error) {
    //     //     setError('Failed to sign in'); // Handle error state
    //     // } finally {
    //     //     setLoading(false);
    //     // }
    //     if (forAdmin) {
    //         const data = await dispatch(fetchAdminAuth({
    //             email: val.email,
    //             password: val.password,
    //         }));
    //         if (!data.payload) {
    //             setLoading(false)
    //         } else {
    //             if ('token' in data.payload) {
    //                 window.localStorage.setItem('token', data.payload.token);
    //                 nav("/admin")
    //             } else {

    //             }
    //             setLoading(false);
    //         }
    //     } else {
    //         const data = await dispatch(fetchParticipantAuth({
    //             email: val.email,
    //             password: val.password,
    //         }));
    //         if (!data.payload) {
    //             setLoading(false);
    //             toast.error('დაფიქსირდა შეცდომა');
    //         } else {
    //             if ('token' in data.payload) {
    //                 window.localStorage.setItem('token', data.payload.token);
    //                 toast.success('კეთილი იყოს თქვენი მობრძანება');
    //                 nav("/email/verify")
    //             } else {
    //                 toast.error('მომხმარებელი ვერ მოიძებნა');
    //             }
    //             setLoading(false);
    //         }
    //     }
    // };

    const onSubmit = () => {
        console.log();
    }
    return (
        <div className="max-w-md min-h-[80dvh] m-auto md:mt-20">
            <form className='space-y-4 my-4' onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }: { field: any }) => (
                        <Input
                            {...field}
                            label="ელ. ფოსტა"
                            placeholder="ელ. ფოსტა"
                        />
                    )}
                />
                {errors.email && <span className="text-red-700 text-sm mt-2">* აუცილებელი ველი</span>}

                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }: { field: any }) => (
                        <Input
                            {...field}
                            label="პაროლი"
                            type="password"
                            placeholder="შეიყვანეთ პაროლი"
                        />
                    )}
                />
                {errors.password && <span className="text-red-700 text-sm mt-2">* აუცილებელი ველი</span>}

                {!forAdmin && <div className="flex items-center justify-end">
                    <Link to='/participant/reset-password' className="self-end hover:text-blue-800 hover:underline">დაგავიწყდათ პაროლი?</Link>
                </div>}

                <div>
                    <button className="bg-main-color text-grayish p-5 w-full" type='submit'>
                        {loading && <span className="loading loading-spinner"></span>}
                        შესვლა
                    </button>
                </div>
                {/* {error && <span className="text-red-700 text-sm mt-2">{error}</span>} */}
            </form>
            {!forAdmin && <span className='mt-8'>{`არ გაქვს არგარიში`}?
                <Link to="/register" className="text-blue-600 hover:text-blue-800 hover:underline"> რეგისტრაცია</Link>
            </span>}
        </div>
    );
};

export default LoginForm;