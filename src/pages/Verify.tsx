import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchVerifyEmail, fetchSendEmailVerify } from "../redux/thunks/authThunks";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

const VerifyEmail = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [status, setStatus] = useState(token ? "pending" : "idle");
    const { user, isAuthenticated } = useAuth();
    const [timer, setTimer] = useState(0);
    const navigate = useNavigate();
    const { t } = useTranslation()

    useEffect(() => {
        if (token) {
            dispatch(fetchVerifyEmail(token))
                .unwrap()
                .then(() => setStatus("success"))
                .catch(() => setStatus("error"));
        }
    }, [dispatch, token]);

    useEffect(() => {
        let countdown: any;
        if (timer > 0) {
            countdown = setInterval(() => {
                setTimer(prev => (prev > 0 ? prev - 1 : 0));
            }, 1000);
        }
        return () => clearInterval(countdown);
    }, [timer]);

    const handleSend = () => {
        dispatch(fetchSendEmailVerify(user?.email));
        setTimer(300);
    };

    useEffect(() => {
        if (status === "success") {
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        }
    }, [status, navigate]);

    useEffect(() => {
        if(!isAuthenticated){
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);
    
    return (
        <div className="flex flex-col items-center justify-center mt-10 p-10">
            <div className="bg-white flex flex-col items-center shadow-lg rounded-lg p-6 w-full max-w-md text-center">
                <h1 className="text-xl font-semibold">{t("hello")} {user?.firstname} {user?.lastname}</h1>
                <h1 className="text-xl font-semibold">{t("welcomeToEmailVerification")}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 fill-[#2c3424] w-[35px] h-[35px]" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                {status === "pending" && (
                    <p className="text-gray-600 mt-2">{t("weAreVerifyingYourEmail")}</p>
                )}
                {status === "success" && (
                    <>
                        <p className="text-green-600 font-semibold">{t("emailSuccessfullyVerified")}</p>
                        <p className="text-gray-600 mt-2">{t("youCanNowLogin")}</p>
                    </>
                )}
                {status === "error" && token && (
                    <>
                        <p className="text-red-600 font-semibold">{t("verificationFailed")}</p>
                        <p className="text-gray-600 mt-2">{t("invalidToken")}</p>
                        <button onClick={() => window.location.reload()} className="mt-4">{t("tryAgain")}</button>
                    </>
                )}
                {status === "idle" && (
                    <p className="text-gray-600 mt-2">{t("clickToSendVerificationEmail")}</p>
                )}
                <button
                    className="mt-4 bg-main-color w-full text-white px-4 py-2 rounded hover:bg-green-400 disabled:opacity-50"
                    onClick={handleSend}
                    disabled={timer > 0}
                >
                    {timer > 0 ? `${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}` : "Send"}
                </button>
            </div>
        </div>
    );
};

export default VerifyEmail;
