
export type TypeSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type TypeSetterFunction<T> = (value: T) => void;

export type TypeOnSubmit = (event: React.FormEvent<HTMLFormElement>) => void;

export type TypeInputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type TypeTextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

export type TypeSelectChangeEvent = React.ChangeEvent<HTMLSelectElement>

export type TypeSelectChangeEventHandler = React.ChangeEventHandler<HTMLSelectElement>