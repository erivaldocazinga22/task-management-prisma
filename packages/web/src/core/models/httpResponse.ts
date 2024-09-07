export interface HttpResponse<T = undefined>{
    status: number,
    message: string,
    data?: T
}