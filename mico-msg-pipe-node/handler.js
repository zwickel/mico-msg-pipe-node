"use strict"

module.exports = async (context, callback) => {
    const cloudEvent = JSON.parse(context);
    let result = [];
    result.push(cloudEvent);
    return result;
}
