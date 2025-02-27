import React, { Dispatch, SetStateAction } from 'react'
import karkasi from "../../assets/photos/karkasi.jpeg"
interface Props {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ContactModal: React.FC<Props> = ({ setIsModalOpen }) => {
    return (
        <div className="fixed inset-0 flex items-center w-full h-full justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-[60%] shadow-lg relative">
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-2 right-2 w-[15px] h-[15px] text-gray-500 hover:text-gray-700"
                >
                    ✖
                </button>
                <h2 className="text-xl font-bold text-main-color mb-4">Contact Us</h2>
                <div className='flex gap-5'>
                    <form className="flex flex-col space-y-3 w-full md:w-1/2 h-full">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border p-2 rounded focus:outline-main-color"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border p-2 rounded focus:outline-main-color"
                        />
                        <textarea
                            rows={4}
                            placeholder="Your Message"
                            className="resize-none border p-2 rounded focus:outline-main-color"
                        />
                        <button
                            type="submit"
                            className="bg-main-color text-white py-2 rounded hover:bg-opacity-90 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                    <img className='hidden md:block w-1/2' src={karkasi} alt='...' />
                </div>
            </div>
        </div>
    )
}

export default ContactModal