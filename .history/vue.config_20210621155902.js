import { resolve } from "core-js/fn/promise";

resolve:{
    extensions:['.js','.vue','.json'],
    alias{
        'vue$':'vue/dist/vue.esm.js',
        '@':resolve('src')
    }
        
    
}