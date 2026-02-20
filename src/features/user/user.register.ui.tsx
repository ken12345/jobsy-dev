import { Button, FileUploader, Group, Input, RadioGroup, TextArea } from "@shared/ui";
import type { JSX } from "react";

export default function RegisterForm (): JSX.Element {

    const paymentMethods = [
        { value: `GCash`, label: `GCash` },
        { value: `Maya`, label: `Maya` },
        { value: `Card`, label: `Credit/Debit Card` }
    ];

    return (
        <form>
            <h1 className="font-inter-bold text-xl text-center mb-6">Create Store Account</h1>
            <Group label="Account Owner Information" rounded="sm">
                <div className="grid grid-cols-2 gap-6 w-full">
                    <Input label="First Name" size="sm" margin="none" rounded="lg" required />
                    <Input label="Last Name" size="sm" margin="none" rounded="lg" required />
                </div>
                <Input label="Username" size="sm" margin="sm" rounded="lg" required />
                <Input label="Password" size="sm" margin="sm" rounded="lg" required />
            </Group>
            <Group label="Restaurant Information" rounded="sm">
                <Input label="Restaurant Name" size="sm" margin="sm" rounded="lg" required />
                <div className="grid grid-cols-2 gap-6 w-full">
                    <Input label="Business Phone" size="sm" margin="none" rounded="lg" />
                    <Input label="Business Email" size="sm" margin="none" rounded="lg" />
                </div>
                <Input label="Address" size="sm" margin="sm" rounded="lg" required />
                <div className="grid grid-cols-3 gap-6 w-full mb-2">
                    <Input label="City" size="sm" margin="none" rounded="lg" required />
                    <Input label="Province/State" size="sm" margin="none" rounded="lg" required />
                    <Input label="Postal Code" size="sm" margin="none" rounded="lg" required />
                </div>
            </Group>
            <Group label="Operational Setup" rounded="sm">
                <div className="grid grid-cols-3 gap-6 w-full my-2">
                    <Input label="Opening Hours" size="sm" margin="none" rounded="lg" required />
                    <Input label="Closing Hours" size="sm" margin="none" rounded="lg" required />
                    <Input label="Days Open" size="sm" margin="none" rounded="lg" required />
                </div>
            </Group>
            <Group label="Payments" rounded="sm">
                <RadioGroup name="payment-methods" label="Accepted Methods" size="sm" options={ paymentMethods } />
                <Group margin="none" rounded="sm">
                    <div className="grid grid-cols-2 gap-6 w-full mb-2">
                        <Input label="Account Name" size="sm" margin="none" rounded="lg" required />
                        <Input label="Account Number" size="sm" margin="none" rounded="lg" required />
                    </div>
                </Group>
            </Group>
            <Group label="Branding" rounded="sm">
                <TextArea label="Short Description / About Us" style={{ height: `100px` }} size="sm" margin="sm" rounded="lg" />
                <div className="grid grid-cols-4 gap-6 w-full -mt-4">
                    <div>
                        <FileUploader accept="image/png, image/jpeg, image/webp" label="Restaurant Logo" buttonLabel="Upload Image" rounded="lg" note="Upload a square photo" />
                    </div>
                    <div className="col-span-3">
                        <FileUploader accept="image/png, image/jpeg, image/webp" label="Cover Photo/Banner" buttonLabel="Upload Image" rounded="lg" note="Recommended size 1920 x 1080" />
                    </div>
                </div>
            </Group>
            <Button type="submit" rounded="lg" label="Create Store" />
        </form>
    )

}