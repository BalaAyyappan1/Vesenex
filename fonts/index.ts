import localFont from 'next/font/local';

export const grift = localFont({
    src:[
        {path:"./Grift-Bold.ttf",weight:"800", style:"normal"},
        {path:"./Grift-Medium.ttf",weight:"500", style:"normal"},
        {path:"./Grift-Light.ttf",weight:"300", style:"normal"},
    ],
    variable: "--font-grift",
    display:"swap",
})