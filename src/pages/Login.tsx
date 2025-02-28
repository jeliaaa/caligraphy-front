import { useAuth } from "../context/AuthContext";
import Input from "../components/Input";
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<ILoginForm>();
    const [loading, setLoading] = useState(false);
    const { login, isAuthenticated } = useAuth();
    const { t } = useTranslation()
    interface ILoginForm {
        email: string;
        password: string;
    }

    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        try {
            setLoading(true);
            await login(data.email, data.password);
        } catch (error) {
            alert(error instanceof Error ? error.message : 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (isAuthenticated) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div className="max-w-md min-h-[80dvh] m-auto md:mt-20">
            <form className='space-y-4 my-4' onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            {...field}  // Spread field to ensure onChange, value, onBlur are passed
                            label={t("email")}
                            placeholder={t("enterEmail")}
                        />
                    )}
                />
                {errors.email && <span className="text-red-700 text-sm mt-2">* {t("importantField")}</span>}

                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            {...field}  // Spread field to ensure onChange, value, onBlur are passed
                            label={t("password")}
                            type="password"
                            placeholder={t("enterPassword")}
                        />
                    )}
                />
                {errors.password && <span className="text-red-700 text-sm mt-2">* {t("importantField")}</span>}

                {/* {!forAdmin && <div className="flex items-center justify-end">
                    <Link to='/participant/reset-password' className="self-end hover:text-blue-800 hover:underline">{t("forgotPassword")}?</Link>
                </div>} */}

                <div>
                    <button className="bg-main-color text-grayish p-5 w-full" type='submit'>
                        {loading && <span className="loading loading-spinner"></span>}
                        {t("login")}
                    </button>
                </div>
            </form>
            <span className='mt-8'>{`არ გაქვს არგარიში`}?
                <Link to="/register" className="text-main-color underline ml-2">{t("registration")}</Link>
            </span>
        </div>
    );
};

export default LoginForm;
