import Button from "@shared/ui/button";
import Input from "@shared/ui/input";
import React, { useRef, type JSX } from "react";
import logo from "@assets/images/logo.png";
import { Routes } from "@shared/config/routes";
import { useAppDispatch } from "@shared/lib/hooks";
import { useNavigate } from "react-router-dom";
import { authenticateUser, useUser } from "./user.model";

export default function LoginForm (): JSX.Element {

    const { login } = useUser();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function submit (e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (username && password) {
            const response = await login(username, password);
            if(response) {
                dispatch(authenticateUser(response));
                navigate(Routes.admin.path);
            }
        }
    }

    return (
        <form className="w-full max-w-[514px] mx-auto" onSubmit={ submit }>
            <img src={ logo } className="mx-auto" alt="logo" />
            <h2 className="text-3xl">Login</h2>
            <h4 className="text-lg my-2">Enter username and password</h4>
            <Input ref={ usernameRef } rounded="lg" placeholder="Username" required />
            <Input ref={ passwordRef } type="password" rounded="lg" placeholder="Password" required />
            <Button type="submit" rounded="sm" label="Login" />
            <button type="button" className="text-[#8E8E8E] cursor-pointer">Forgot password?</button>
            <button type="button" className="ml-2 text-[#029CDD] hover:text-[var(--secondary-color)] underline cursor-pointer">Contact Us</button>
        </form>
    )
}