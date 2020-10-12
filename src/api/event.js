const events = {
    list:{},
    on(){
        let key = arguments[0]
        if (!this.list[key]) {
            this.list[key]=[]
        }
        this.list[key].push(arguments[1])
    },
    emit(){
        try {
            let key = arguments[0]
            this.list[key].forEach(fn=>{
                fn.apply(this,arguments)
            })
        } catch (error) {
            alert(error)
        }

    },
    remove(key,cb){
        try {
            let list = this.list[key]
            list.forEach((fns,i) => {
                if (fns===cb) {
                    this.list[key].splice(i,1)
                }
            });
        } catch (error) {
            console.log(error);
        }

    }
}
export default events

