document.addEventListener('DOMContentLoaded', function () {


    let infoHtml = CoreUI.info.info("Best check yo self, you're not looking too good.", "Info title!");
    $('#example-info').html(infoHtml);

    let warningHtml = CoreUI.info.warning("Better check yourself, you're not looking too good.", "Warning title!");
    $('#example-warning').html(warningHtml);

    let dangerHtml = CoreUI.info.danger("Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.", "Danger title!");
    $('#example-danger').html(dangerHtml);

    let successHtml = CoreUI.info.success("You successfully read this important alert message.", "Success title!");
    $('#example-success').html(successHtml);


    let primary = CoreUI.info.create({
        "type": "primary",
        "title": "Primary title!",
        "message": "A simple primary alert—check it out!"
    });
    primary.render('example-primary');


    let secondary = CoreUI.info.create({
        "type": "secondary",
        "title": "Secondary title!",
        "message": "A simple secondary alert—check it out!"
    });
    secondary.render('example-secondary');


    let light = CoreUI.info.create({
        "type": "light",
        "title": "Light title!",
        "message": "A simple light alert—check it out!",
        "isClose": true
    });
    light.render($('#example-light')[0]);

    let dark = CoreUI.info.create({
        "type": "dark",
        "title": "Dark title!",
        "message": "A simple dark alert—check it out!",
        "isClose": true
    });
    document.querySelector('#example-dark').innerHTML = dark.render();



    // Full
    let fullInfo = CoreUI.info.create({
        "type": "danger",
        "title": "Oh snap! You got an error!",
        "isClose": true,
        "onClose": function (event) {
            console.log('close');
        },
        "onClosed": function (event) {
            console.log('closed');
        },
        "message":
            '<p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>' +
            '<p><button type="button" class="btn btn-danger">Take this action</button> <button type="button" class="btn btn-secondary" id="btn-full-close">Close</button> </p>'
    });
    document.querySelector('#example-full-content').innerHTML = fullInfo.render();
    fullInfo.initEvents();


    $('#btn-full-close').click(function () {
        fullInfo.close();
    });



    // Code highlight
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});