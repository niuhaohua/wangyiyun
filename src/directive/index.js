import Vue from 'vue'

//自定义scrollMore
Vue.directive('scrollMore', {
    inserted: function (el, binding, vnode, oldVnode) {
        //console.log(el, binding, vnode)
        let scrollHeight = el.offsetHeight,
            expression_name = binding.expression,
            expression_fun = vnode.context[expression_name];
        el.addEventListener('scroll', async () => {
            if (scrollHeight + el.scrollTop + 10 >= el.firstChild.clientHeight) {
                try {
                    console.log("加载了.....")
                    expression_fun && await expression_fun();
                } catch (error) {
                    console.log(error)
                }
            }
        })
    }
})