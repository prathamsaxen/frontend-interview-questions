const textChange = (event) => {
    console.log(event.target.value)
};

const DebounceFunction=(callBackFunction,debounceTime)=>{
    let timer;
    return function(...args){
        if(timer) return clearTimeout(timer);
        setTimeout(()=>{
            callBackFunction(args);
        },debounceTime)
    }
}

const finalFunction = DebounceFunction(textChange,5000)