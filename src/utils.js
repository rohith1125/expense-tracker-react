
// taken from stack overflow or other resources to show currency model
export const currFormatter = new Intl.NumberFormat(undefined,{
    currency :"usd",
    style : "currency",
    minimumFractionDigits:0,
})
