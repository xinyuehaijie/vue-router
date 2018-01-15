/**
 * Created by yudeweilai on 2018/1/15.
 */
let local = {
  save(key,value){
    localStorage.setItem(key,JSON.stringify(value))
  },
  fetch(key){
    return JSON.parse(localStorage.getItem(key)) || {}
  }
}

export default {
  install:function(vm){
    vm.prototype.$local = local;
  }
}
