// src/pages/RequestReset.tsx
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Input from "../components/Input";
import { useTranslation } from "react-i18next";
import { axiosV3 } from "../utils/axios";

interface IRequestResetForm {
    email: string;
}

const RequestReset = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<IRequestResetForm>();
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { t } = useTranslation();

    const onSubmit: SubmitHandler<IRequestResetForm> = async (data) => {
        setLoading(true);
        setErrorMessage("");
        try {
            // Simulate sending reset link request to backend
            await axiosV3.post("/customer/send-password-reset", { email: data.email });
            setSuccessMessage(t("resetLinkSent"));
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : t("unknownError"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md min-h-[80dvh] m-auto md:mt-20">
            <form className="space-y-4 my-4" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            label={t("email")}
                            placeholder={t("enterEmail")}
                        />
                    )}
                />
                {errors.email && <span className="text-red-700 text-sm mt-2">* {t("importantField")}</span>}

                <div>
                    <button className="bg-main-color text-grayish p-5 w-full" type="submit">
                        {loading && <span className="loading loading-spinner"></span>}
                        {t("requestReset")}
                    </button>
                </div>

                {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
                {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default RequestReset;
