#### useMemo
1. 在组件render时，若依赖函数不变，则直接返回旧的缓存值（回调函数会被创建，但不执行），否则执行回调函数，返回新的结果。
2. useMemo适用场景：
    * 有些计算开销很大，我们就需要「记住」它的返回值，避免每次 render 都去重新计算。
    * 由于值的引用发生变化，导致下游组件重新渲染，我们也需要「记住」这个值。这个与useCallback同理。
---
#### demo1
1. memo:指定一个函数组件在 props 的值不改变的情况下不会重新执行
2. memo 的缺陷：props 为对象/函数（值是一个地址），则 memo 不再奏效

#### demo2
1. useMemo 克服了 memo 的缺陷
2. useMemo 的第一个参数为一个函数()=>value,第二个参数为依赖
3. 只有当依赖改变时，才会重新计算出新的 value（类似于 vue2 的 computed）
```
// 当 m 值改变时，childObj 的值才改变
const childObj = useMemo(() => {
    return {
        name: 'libai'
    }
},[m])
```
4. useCallback（语法糖）
```
// 即返回值是一个函数:x=>log(x)
useMemo(()=>x=>log(x),[m])
```
等价于
```
useCallback(x=>log(x),[m])
```
