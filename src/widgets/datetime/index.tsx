import { useEffect, useRef, useState, type JSX } from "react";

export default function DateTime (): JSX.Element {

    const isReady = useRef<boolean>(false);
    const [ date, setDate ] = useState<string>(formatDate(new Date()));
    const [ time, setTime ] = useState<string>(formatTime(new Date()));

    function formatDate (date: Date): string {
        return new Intl.DateTimeFormat("en-US", {
            weekday: `short`,
            month: `long`,
            day: `2-digit`,
            year: `numeric`,
        }).format(date);
    }

    function formatTime (date: Date): string {
        return new Intl.DateTimeFormat("en-US", {
            hour: `2-digit`,
            minute: `2-digit`,
            hour12: true,
        }).format(date);
    }

    useEffect(() => {
        if(isReady.current) return;
        isReady.current = true;

        setInterval(() => {
            setDate(formatDate(new Date()));
            setTime(formatTime(new Date()));
        }, 1000);
    }, []);

    return (
        <div className="text-center">
            <div className="text-4xl text-[var(--secondary-color)] font-inter-bold">{ time }</div>
            <div>{ date }</div>
        </div>
    )

}