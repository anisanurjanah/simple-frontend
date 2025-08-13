import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Register() {
    return (
        <>
            <section className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row max-w-5xl w-full">
                    <div className="hidden md:flex md:items-center md:justify-center md:w-3/4 md:bg-gray-700 md:dark:bg-gray-800">
                        <img 
                            src="https://images.unsplash.com/photo-1625123627242-97ef1000c6d1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Logo Resappin" 
                            className="object-cover w-full h-full" 
                        />
                    </div>
                    
                    <div className="flex items-center justify-center w-full px-8 py-12 md:w-1/2">
                        <form className="w-full max-w-sm space-y-5">
                            <div className="flex flex-col items-center">
                                <img src="/img/logo-v1.png" alt="Logo Resappin" className="w-20 h-20 mb-2" />
                                <h2 className="text-lg font-bold text-gray-700">
                                    Create your Account at <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">RESAPPIN</span>
                                </h2>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Create a new account to continue using our services.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <Input type="text" placeholder="Type your Full Name.." />
                                <Input type="email" placeholder="Type your Email.." />
                                <Input type="password" placeholder="Type your Password.." />
                                <Input type="password" placeholder="Confirm Password.." />
                            </div>

                            <Button type="submit" className="w-full cursor-pointer">
                                Create Account
                            </Button>

                            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                                Already have an account?{" "}
                                <a href="/login" className="text-blue-600 hover:underline">
                                    Sign in here
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
