import splashImg from "./assets/splash.svg";

export default function LoginPage () {

    return (
        <>
            <div className="w-full h-[100dvh] flex items-center">
                <div className="w-full">
                    <img src={ splashImg } className="w-full max-w-[514px] mx-auto" alt="splash" />
                </div>
                <div className="w-full h-full bg-[#F0F0F0]">
                </div>
            </div>
        </>
    )
}