// src/pages/ResetPassword.tsx
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import { useTranslation } from "react-i18next";
import { axiosV3 } from "../utils/axios";

interface IResetForm {
    password: string;
    confirmPassword: string;
}

const ResetPassword = () => {
    const { control, handleSubmit, watch, formState: { errors } } = useForm<IResetForm>();
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { token } = useParams()
    const { t } = useTranslation();
    const nav = useNavigate();

    const onSubmit: SubmitHandler<IResetForm> = async (data) => {
        setLoading(true);
        setErrorMessage("");
        try {
            if (!token) throw new Error("Missing reset token");
            if(data.password !== data.confirmPassword) throw new Error(t("passwordsDontMatch"));
            if(data.password.length < 8) throw new Error(t("passwordMinLength"));
            // Simulated API request
            await axiosV3.post("/customer/reset-password/" + token, { password: data.password });

            setSuccessMessage(t("passwordResetSuccess"));
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : t("unknownError"));
        } finally {
            setLoading(false);
        }
    };

    if (successMessage.length > 0) {
        nav("/login");
    }

    return (
        <div className="max-w-md min-h-[80dvh] m-auto md:mt-20">
            <form className="space-y-4 my-4" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true, minLength: 8 }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            label={t("newPassword")}
                            type="password"
                            placeholder={t("enterNewPassword")}
                        />
                    )}
                />
                {errors.password && <span className="text-red-700 text-sm mt-2">* {t("passwordMinLength")}</span>}

                <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                        required: true,
                        validate: (value) => value === watch("password") || t("passwordsDontMatch")
                    }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            label={t("repeatPassword")}
                            type="password"
                            placeholder={t("confirmNewPassword")}
                        />
                    )}
                />
                {errors.confirmPassword && (
                    <span className="text-red-700 text-sm mt-2">* {errors.confirmPassword.message}</span>
                )}

                <div>
                    <button className="bg-main-color text-grayish p-5 w-full" type="submit">
                        {loading && <span className="loading loading-spinner"></span>}
                        {t("resetPassword")}
                    </button>
                </div>

                {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
                {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default ResetPassword;
