Turn array, promise to observables so 

from([3,4,5,6]).subscribe(data=> data)

Emit values in sequence 

of(1,2,3).subscribe(data=>data)

Allows order of execution so pipe

of(1,2,3).pipe(filter(),map()).subscribe

Receives a value, takes an action which won't affect the value and returns the same value.
used for console.log()

of(1,2,3,4)
    pipe(tap(value => console.log(`The value is ${value}`)))
    .subscribe(data => ...)
