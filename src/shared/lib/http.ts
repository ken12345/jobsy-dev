const apiUrl: string = import.meta.env.VITE_API_URL;
const apiKey: string = import.meta.env.VITE_API_KEY;

type HttpOptions = Omit<RequestInit, `body`> & {
    body?: unknown;
}

async function request <T> (endpoint: string, options: HttpOptions = {}): Promise<T> {
    const url = `${ apiUrl }${ endpoint }`;
    const { body, ...rest } = options;
    const res = await fetch(url, {
        ...rest,
        headers: {
            "Content-Type": `application/json`,
            "X-API-KEY": apiKey,
            ...rest.headers,
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok)
        throw new Error(await res.text());

    return res.json() as Promise<T>;
}

const http = {
    get: <T>(endpoint: string, options?: RequestInit) => request<T>(endpoint, { ...options, method: `GET` }),
    post: <T>(endpoint: string, body?: unknown, options?: RequestInit) => request<T>(endpoint, { ...options, method: `POST`, body }),
    put: <T>(endpoint: string, body?: unknown, options?: RequestInit) => request<T>(endpoint, { ...options, method: `PUT`, body }),
    delete: <T>(endpoint: string, options?: RequestInit) => request<T>(endpoint, { ...options, method: `DELETE` })
}

export default http;