import { Button, Input } from "@shared/ui";
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
            <img src={ logo } className="mx-auto mb-12" alt="logo" />
            <Input ref={ usernameRef } rounded="lg" label="Username" required />
            <Input ref={ passwordRef } type="password" rounded="lg" label="Password" required />
            <Button type="submit" rounded="sm" label="Login" />
            <button type="button" className="text-[#8E8E8E] cursor-pointer">Forgot password?</button>
            <button type="button" className="mb-2 text-[#029CDD] hover:text-[var(--secondary-color)] underline cursor-pointer">Contact Us</button>
        </form>
    )
}