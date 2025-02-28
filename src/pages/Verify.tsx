import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchVerifyEmail, fetchSendEmailVerify } from "../redux/thunks/authThunks";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEnvelope } from "react-icons/fa";
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
                <FaEnvelope size={35} color="#2c3424" className="m-2" />
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
