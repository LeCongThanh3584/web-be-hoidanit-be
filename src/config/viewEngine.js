import express from 'express';

const configViewEngine = (app) => {
    //cấu hình để sử dụng static file để chạy file css, image, js
    app.use(express.static('./src/public')) // static file đọc trong folder public

    //cấu hình ejs để chạy file html
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

// export default configViewEngine;
module.exports = configViewEngine;