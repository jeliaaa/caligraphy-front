import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchVerifyEmail, fetchSendEmailVerify } from "../redux/thunks/authThunks";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEnvelope } from "react-icons/fa";

const VerifyEmail = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [status, setStatus] = useState(token ? "pending" : "idle");
    const { user, isAuthenticated } = useAuth();
    const [timer, setTimer] = useState(0);
    const navigate = useNavigate();

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
                <h1 className="text-xl font-semibold">Hello {user?.firstname} {user?.lastname}</h1>
                <h1 className="text-xl font-semibold">Welcome to the email verification</h1>
                <FaEnvelope size={35} color="#2c3424" className="m-2" />
                {status === "pending" && (
                    <p className="text-gray-600 mt-2">We are verifying your email. Please wait while we process your request.</p>
                )}
                {status === "success" && (
                    <>
                        <p className="text-green-600 font-semibold">Email successfully verified!</p>
                        <p className="text-gray-600 mt-2">You can now log in to your account.</p>
                    </>
                )}
                {status === "error" && token && (
                    <>
                        <p className="text-red-600 font-semibold">Verification failed!</p>
                        <p className="text-gray-600 mt-2">The token may be invalid or expired.</p>
                        <button onClick={() => window.location.reload()} className="mt-4">Try Again</button>
                    </>
                )}
                {status === "idle" && (
                    <p className="text-gray-600 mt-2">Click below to send a verification email.</p>
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
