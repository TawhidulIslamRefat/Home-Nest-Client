import daisyui from "daisyui";

export default {
    content:["./index.html","./src/**/*.{js,jsx}"],
    theme:{
        extend:{},
    },
    darkMode:"class",
    plugins:[require("daisyui")],
    daisyui:{
        themes:["light","dark"],
    }
}