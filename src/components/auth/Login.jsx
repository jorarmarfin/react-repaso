import {useForm} from "../../hooks/useForm.js";
import {loginGoogleThunk, loginThunk} from "../../store/thunks/AuthThunk.js";
import {useDispatch} from "react-redux";

const initialState = {
    email: '',password: ''
}

export const Login = () => {
    const dispatch = useDispatch();
    const{email,password,onInputChange,formState} = useForm(initialState);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(loginThunk(email,password));
    }
    const onSubmitGoogle = (e) => {
        e.preventDefault();
        dispatch(loginGoogleThunk());
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <p className='text-center'>Login realizado con Firebase</p>
                <h1 className="font-bold text-center text-2xl mb-5">Login</h1>
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <div className="px-5 py-7">
                        <form onSubmit={onSubmit}>
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                            <input
                                onChange={onInputChange}
                                value={email}
                                name="email"
                                type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                            <input
                                onChange={onInputChange}
                                value={password}
                                name="password"
                                type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>
                            <div className='grid grid-cols-2 gap-2'>
                                <button type="submit"
                                        className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                    <span className="inline-block mr-2">Login</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor" className="w-4 h-4 inline-block">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </button>
                                <button
                                onClick={onSubmitGoogle}
                                    type="button"
                                        className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                    <span className="inline-block mr-2">Google</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                                         className="w-4 h-4 inline-block">
                                        <path fill="#4285F4"
                                              d="M24 9.5c3.9 0 6.4 1.7 7.9 3.2l5.8-5.8C33.5 3.5 29 1.5 24 1.5 14.8 1.5 7.3 7.9 4.9 16.3l6.9 5.4C13.3 15 18 9.5 24 9.5z"/>
                                        <path fill="#34A853"
                                              d="M46.6 24.5c0-1.6-.1-3.1-.4-4.6H24v9.2h12.7c-.6 3.1-2.4 5.6-4.8 7.3l7.6 5.9C42.6 38.5 46.6 32 46.6 24.5z"/>
                                        <path fill="#FBBC05"
                                              d="M11.8 28.1c-1.4-3.1-1.4-6.5 0-9.6L4.9 13.1C1.8 18.3 1.8 25.8 4.9 31.1l6.9-5.4z"/>
                                        <path fill="#EA4335"
                                              d="M24 46.5c6.2 0 11.4-2.1 15.2-5.7l-7.6-5.9c-2.1 1.4-4.8 2.3-7.6 2.3-6 0-11-4-12.8-9.4l-6.9 5.4C7.3 40.1 14.8 46.5 24 46.5z"/>
                                        <path fill="none" d="M0 0h48v48H0z"/>
                                    </svg>
                                </button>

                            </div>

                        </form>
                    </div>
                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <button
                                    className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <span className="inline-block ml-1">Forgot Password</span>
                                </button>
                            </div>
                            <div className="text-center sm:text-right whitespace-nowrap">
                                <button
                                    className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <span className="inline-block ml-1">Sign Up</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}