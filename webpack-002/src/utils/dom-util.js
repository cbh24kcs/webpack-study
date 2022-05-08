

// 单独导出
// export function sum(a, b) {
//     return a + b;
// }

// export function sum1(a, b) {
//     return a + b;
// }

/**
 * 通过元素的id获取DOM对象
 * @param {*} id 元素id
 * @returns DOM元素
 */
export function e_id(id) {
    return document.getElementById(id)
}

/**
 * 通过元素的class名获取这些元素的数组
 * @param {*} className 元素class
 * @returns DOM元素
 */
export function es_class(className) {
    return document.getElementsByClassName(className)
}

/**
 * 通过选择器获取查找到的第一个DOM元素
 * @param {*} selector css选择器
 * @returns DOM元素
 */
export function e_select(selector) {
    return document.querySelector(selector)
}

/**
 * 通过选择器获取所有符合的DOM元素
 * @param {*} selector css选择器
 * @returns DOM元素
 */
export function es_select(selector) {
    return document.querySelectorAll(selector)
}

/**
 * 通过标签名获取所有DOM元素
 * @param {*} tagName 标签名
 * @returns DOM元素
 */
export function es_tag(tagName) {
    return document.getElementsByTagName(tagName);
}


// CommonJS 模块化规范
// module.export = {
//     sum
// }