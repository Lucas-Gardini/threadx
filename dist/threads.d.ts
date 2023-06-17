export declare class Thread {
    private worker;
    constructor(cb: (...params: any) => void, options?: IThreadOptions);
    on(event: "error" | "exit" | "message", cb: (...params: any) => void): void;
}
