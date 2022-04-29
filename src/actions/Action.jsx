export const Inc = (num)=>{
    return {
        type: "INCREMENT",
        payload:num,
    }
};

export const Dec = (number)=>{
    return {
        type: "DECREMENT",
        payload:number,
    }
};
export const Divide = (d)=>{
    return {
        type: "DIVIDE",
        payload:d,
    }
};
export const Multi = (m)=>{
    return {
        type: "MULTI",
        payload:m,
    }
};