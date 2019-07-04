//讲module用的
// export不能跟具体的值 这是一个接口
### module export 和 import
1：导出
// 写法一：a.js
// export let a = 1  export let a ={}/function(){}
// export let b = 2

// 写法二：a.js
// let a = 1
// let b = 2
// export {a,b}
// 写法一和写法二完全一样

2：引用
只要看到export
使用import
import {a,b} from 'a.js' 解构赋值
//或者
import * as obj from 'a.js' 对象

obj => {a:1,b:2} 把所有导出的值都放到一个对象中去


### module export default 和 import
1)export default 后面可以跟具体的值
2.a.js
let a = 1
export default a
或者
export default 1
export {}
function get(){}
export default get
2)默认导出的引入
import xxx from 'a.js'
xxx:可以自己命名的变量

### 综合
export default 和 import 可以同时使用的
//a.js
export let a = 1
export default 2
```
//b.js
import {a} from 'a.js'
import xxx from 'a.js'
//可以用逗号作为分隔符,写在一起
import {a},xx from 'a.js'





