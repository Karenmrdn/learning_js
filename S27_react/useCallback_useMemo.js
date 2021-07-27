/* useCallback - returns a memoized callback.
Pass an inline callback and an array of dependencies. 
useCallback will return a memoized
version of the callback that only changes if one of the dependencies has changed. 
This is useful when passing callbacks to optimized child components that rely 
on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate). */
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

/* useMemo - returns a memoized value.
Pass a “create” function and an array of dependencies. 
useMemo will only recompute the memoized value when one of the dependencies has changed. 
This optimization helps to avoid expensive calculations on every render. */
/* If no array is provided, a new value will be computed on every render. */
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
