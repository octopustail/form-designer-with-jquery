/**
 * 生成文本或者日期*/


$(function () {


    $('.addField').on('click', addField);
    $('#addDate').on('click', addDate);
    $('#addText').on('click', addText);
    $('.form').on('click', deletefield);
    $('.viewField').on('click', viewForm);


    $(".selectField").dialog({
        autoOpen:false,
        resizable: false,
        height: "auto",
        width: 400,
        modal: true
    });


});

let addField = function () {
    $(".selectField").dialog('open');
};

let addDate = function () {
    $('.form').append(`<div class="date-input"><input type="date" value="请在这里是输入"><span><button class="delete">delete</button></span></div>`);
    $(".selectField").dialog('close');

};
let addText = function () {
    $('.form').append(`<div class="text-input"><input type="text" value="请在这里是输入"><span><button class="delete">delete</button></span></div>`)
    $(".selectField").dialog('close');

};


/**
 *删除字段
 * */
let deletefield = function (e) {
    if (e.target.className === 'delete') {

        $(e.target).parents(".text-input").remove();
        $(e.target).parents(".date-input").remove();

    }
};

/**
 * 预览表单
 * */
let viewForm = function () {
    if ($('.switch-mode').text() === '预览') {
        $('.switch-mode').text('编辑');
        $('.delete').hide();
        $('.addField').hide();
    } else {
        $('.switch-mode').text('预览');
        $('.delete').show();
        $('.addField').show();
    }


};



