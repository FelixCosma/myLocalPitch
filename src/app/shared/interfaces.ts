
export interface IPitch {
    id: number;
    attributes: object;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}
