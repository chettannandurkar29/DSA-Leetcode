/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const jit=[];
for(i=0;i<arr.length;i++)
{
jit[i]=fn(arr[i],i);
}
return jit;
    
};