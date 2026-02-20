import { Paper } from "@shared/ui";
import { RegisterForm } from "@features/user";
import type { JSX } from "react";

export default function RegisterPage (): JSX.Element {

    return (
        <div className="w-full p-8 bg-[#C9E8FF]">
            <Paper rounded="sm" padding="xl" style={{ maxWidth: `956px`, margin: `auto` }}>
                <RegisterForm />
            </Paper>
        </div>
    )

}