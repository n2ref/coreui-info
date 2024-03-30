CoreUI Info
============
 
**[DEMO](https://n2ref.github.io/coreui-info)**

Installation using NPM
---------------------------
```
$ npm install coreui-info
```

### Example

```html
    <div id="example-info"></div>
    <div id="example-warning"></div>
    <div id="example-danger"></div>
    <div id="example-success"></div>
    <div id="example-primary"></div>
    <div id="example-secondary"></div>
    <div id="example-light"></div>
    <div id="example-dark"></div>

    <script>
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
    </script>
```

Result 

![Preview](https://raw.githubusercontent.com/n2ref/coreui-info/master/preview.png) 
