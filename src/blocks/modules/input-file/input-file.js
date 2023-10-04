$(".jsFileInput").on("change", function () {
    $(this).closest('.input-file').find('.jsFileName').html(this.files[0].name);
});