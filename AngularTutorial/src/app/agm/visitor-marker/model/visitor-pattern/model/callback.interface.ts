export interface ICallback<T, T2 = void> {
  (obj?: T): T2;
}
