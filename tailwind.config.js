import daisyui from "daisyui";

export default {
    content:["./index.html","./src/**/*.{js,jsx}"],
    theme:{
        extend:{},
    },
    darkMode:"class",
    Plugins:[require("daisyui")],
    daisyui:{
        themes:["light","dark"],
    }
}