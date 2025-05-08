import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Input from "../components/Input";
import { axiosV3 } from "../utils/axios";

interface IChangeForm {
    currentPassword: string;
    newPassword: string;
}

const ChangePassword = () => {
    const { control, handleSubmit, watch, formState: { errors } } = useForm<IChangeForm>();
    const [loading, setLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { t } = useTranslation();

    const onSubmit: SubmitHandler<IChangeForm> = async (data) => {
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            if (data.newPassword.length < 8) throw new Error(t("passwordMinLength"));

            await axiosV3.post("/customer/change-password", {
                prev_password: data.currentPassword,
                new_password: data.newPassword,
            });

            setSuccessMessage(t("passwordChanged"));
        } catch (error: any) {
            setErrorMessage("Credentials is incorrect");
            // || t("unknownError")
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md min-h-[80dvh] m-auto md:mt-20">
            <form className="space-y-4 my-4" onSubmit={handleSubmit(onSubmit)}>
                {/* CURRENT PASSWORD */}
                <Controller
                    name="currentPassword"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            label={t("currentPassword")}
                            type="password"
                            placeholder={t("enterCurrentPassword")}
                        />
                    )}
                />
                {errors.currentPassword && (
                    <span className="text-red-700 text-sm mt-2">* {t("currentPasswordRequired")}</span>
                )}
                <Controller
                    name="newPassword"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            label={t("newPassword")}
                            type="password"
                            placeholder={t("enterNewPassword")}
                        />
                    )}
                />
                {errors.newPassword && (
                    <span className="text-red-700 text-sm mt-2">* {t("passwordMinLength")}</span>
                )}

                <div>
                    <button
                        type="submit"
                        className="bg-main-color text-white w-full p-3 rounded hover:bg-main-color/25 disabled:opacity-50"
                        disabled={loading}
                    >
                        {t("changePassword")}
                    </button>
                </div>

                {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
                {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default ChangePassword;
