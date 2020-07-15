function serializeToJson(form) {
    var result = {};
    // [{name:'name名称', value: '用户输入的内容'}]
    var f = form.serializeArray();
    f.forEach(function (item) {
        result[item.name] = item.value
    });
    return result;
}