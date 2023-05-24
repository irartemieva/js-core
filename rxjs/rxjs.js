import { pipe, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

const observable = interval(100).pipe(
  take(5),
  map(() => Math.random())
  );

observable.subscribe(x => console.log(x));
observable.subscribe(x => console.log(x));
