/*
 * @Author: your name
 * @Date: 2020-10-09 18:03:00
 * @LastEditTime: 2020-10-10 09:57:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /viteDemo/src/api/foo.ts
 */
const event = {
    list:[],
    on(fn){
        this.list.push(fn)
    },
    emit(){
        this.list.forEach(item => {
            item.apply(this,arguments)
        });
    }
}

event.on(function(){
    console.log('abc');
})

event.emit()
event.emit()
event.emit()
export {}