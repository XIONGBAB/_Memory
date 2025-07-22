declare module 'datajs' {
  export function parseJSON(str: string): any;
  export function toQueryString(obj: object): string;
  export const storage: {
    set(key: string, value: any): void;
    get(key: string): any;
    remove(key: string): void;
  };
  export const date: {
    format(date: Date, pattern: string): string;
  };
}