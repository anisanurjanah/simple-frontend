import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
    return(
        <>
            <section className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row max-w-5xl w-full">
                    <div className="hidden md:flex md:items-center md:justify-center md:w-3/4 md:bg-gray-700 md:dark:bg-gray-800">
                        <img 
                            // src="https://images.unsplash.com/photo-1625123627242-97ef1000c6d1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" 
                            alt="Logo Resappin" 
                            className="object-cover w-full h-full" 
                        />
                    </div>
                    
                    <div className="flex items-center justify-center w-full px-8 py-12 md:w-1/2">
                        <form className="w-full max-w-sm space-y-5">
                            <div className="flex flex-col items-center">
                                <img src="/img/logo-v1.png" alt="Logo Resappin" className="w-20 h-20 mb-2" />
                                <h2 className="text-lg font-bold text-gray-700">
                                    Sign In to <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">RESAPPIN</span>
                                </h2>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Sign in to continue or create a new account
                                </p>
                            </div>

                            <div className="space-y-3">
                                <Input type="email" placeholder="Type your Email.." />
                                <Input type="password" placeholder="Type your Password.." />
                            </div>

                            <Button type="submit" className="w-full cursor-pointer">
                                Sign In
                            </Button>

                            <div className="flex items-center">
                                <hr className="flex-grow border-gray-300" />
                                <span className="px-3 text-gray-500">OR</span>
                                <hr className="flex-grow border-gray-300" />
                            </div>

                            <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 48 48">
                                    <path fill="#4285F4" d="M24 9.5c3.2 0 5.9 1.1 8.1 3.1l6-6C34.9 3 29.8 1 24 1 14.8 1 7 6.9 3.7 14.9l7 5.4C12.2 13.3 17.6 9.5 24 9.5z" />
                                    <path fill="#34A853" d="M46.1 24.5c0-1.5-.1-3-.4-4.5H24v9h12.6c-.6 3-2.4 5.6-5.1 7.3l7.8 6C43.9 38.1 46.1 31.7 46.1 24.5z" />
                                    <path fill="#FBBC05" d="M10.7 28.3c-1-3-1-6.2 0-9.2l-7-5.4C1.3 17.4 0 20.6 0 24s1.3 6.6 3.7 10.3l7-5.4z" />
                                    <path fill="#EA4335" d="M24 46.5c5.8 0 10.9-1.9 14.5-5.1l-7.8-6c-2.1 1.4-4.8 2.1-7.7 2.1-6.4 0-11.8-3.8-13.9-9.2l-7 5.4C7 41.1 14.8 46.5 24 46.5z" />
                                </svg>
                                Sign In With Google
                            </Button>

                            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                                Don't have an account?{" "}
                                <a href="/register" className="text-blue-600 hover:underline">
                                    Sign up here
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
