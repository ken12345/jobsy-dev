import type { JSX } from "react";
import LoginForm from "@features/user";
import splash from "@assets/images/splash.svg";

export default function LoginPage (): JSX.Element {

    return (
        <>
            <div className="w-full h-[100dvh] flex items-center">
                <div className="w-full p-8 hidden md:block">
                    <img src={ splash } className="w-full max-w-[514px] mx-auto" alt="splash" />
                </div>
                <div className="w-full h-full p-8 bg-[#F0F0F0] flex items-center">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}