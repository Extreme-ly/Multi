import React, { useEffect, useRef } from 'react';
//thanks to Mehdi Dehghani for the code, i am literally hopeless in react

const useDidMountEffect = (func:any, deps:any) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
}

export default useDidMountEffect;