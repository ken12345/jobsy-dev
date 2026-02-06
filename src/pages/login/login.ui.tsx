import Button from "@shared/ui/button";
import Input from "@shared/ui/input";
import { useRef } from "react";
import logo from "@assets/images/logo.png";
import splash from "@assets/images/splash.svg";

export default function LoginPage () {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <div className="w-full h-[100dvh] flex items-center">
                <div className="w-full p-4">
                    <img src={ splash } className="w-full max-w-[514px] mx-auto" alt="splash" />
                </div>
                <div className="w-full h-full p-4 bg-[#F0F0F0] flex items-center">
                    <form className="w-full max-w-[514px] mx-auto">
                        <img src={ logo } className="mx-auto" alt="logo" />
                        <h2 className="text-3xl">Login</h2>
                        <h4 className="text-lg my-2">Enter username and password</h4>
                        <Input ref={ usernameRef } rounded="lg" placeholder="Username" required />
                        <Input ref={ passwordRef } type="password" rounded="lg" placeholder="Password" required />
                        <Button type="submit" rounded="sm" label="Login" />
                        <button type="button" className="text-[#8E8E8E] cursor-pointer">Forgot password?</button>
                        <button type="button" className="ml-2 text-[#029CDD] hover:text-[var(--secondary-color)] underline cursor-pointer">Contact Us</button>
                    </form>
                    
                </div>
            </div>
        </>
    )
}