import Input from "../components/Input";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data: any) => {
        console.log(data);
        // Perform your registration logic here
    };

    return (
        <div className="max-w-md min-h-[80dvh] m-auto md:mt-20">
            <form className='space-y-4 my-4 p-5 md:p-0' onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
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
                    name="surname"
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
                        {loading && <span className="loading loading-spinner"></span>}
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
