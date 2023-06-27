
export type NullableUndefinedProperties<T> = {
    [K in keyof T]: T[K] | null | undefined;
};