import { MonoTypeOperatorFunction, of } from 'rxjs';
import { concatMap, delay, map, retryWhen, scan, tap } from 'rxjs/operators';
import { throwIf } from './throw-if';

/**
 * Retries an Observable with a [delay].
 * Will retry [count] times. Defaults to `1`.
 *
 * @param delayMs The delay (milliseconds) the operator will wait before each retry.
 *              This also includes the first try.
 * @param maxCount The number of times the operator will retry the execution.
 *              Defaults to `1`.
 */
export function retryWithDelay<T>(
  delayMs: number,
  maxCount,
  retryAnd?: (error) => boolean
): MonoTypeOperatorFunction<T> {
  return (input) =>
    input.pipe(
      retryWhen((errors) =>
        errors.pipe(
          tap(error => console.log('1111 error:', error)),
          scan((acc, error) => ({ count: acc.count + 1, error }), {
            count: 0,
            error: undefined as any,
          }),
          tap(current => console.log('2222', current)),
          tap((current) => {
            if (!(current.count < maxCount && (!retryAnd || retryAnd(current.error)))) {
              console.log('3333 throw error')
              throw current.error;
            }
          }),
          delay(delayMs)
        )
      )
    );
}


export function retryWithDelay2<T>(
  delayMs: number,
  maxCount,
  retryAnd?: (error) => boolean): MonoTypeOperatorFunction<T> {
  return retryWhen((errors) =>
    errors.pipe(
 //     tap(error => console.log('1111 error:', error)),
      scan((acc, error) => ({ count: acc.count + 1, error }), {
        count: 0,
        error: undefined as any,
      }),
//      tap(current => console.log('2222', current)),
      tap((current) => {
        if (!(current.count < maxCount && (!retryAnd || retryAnd(current.error)))) {
          throw current.error;
        }
      }),
      delay(delayMs)
    )
  );

}

