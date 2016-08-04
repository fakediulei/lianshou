<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8"/>
    </head>
    <body>
        <?php $curversion='1'?>
        <?php if ($_COOKIE['localversion'] !== $curversion) {?> 
        <div data-local="test1">
            这部分内容非常多将会缓存起来
            这部分内容非常多将会缓存起来
            这部分内容非常多将会缓存起来
            这部分内容非常多将会缓存起来
        </div>
        <script>
            function cacheOne(attrid) {
                var content = document.querySelector('[data-local="' + attrid +'"]').outerHTML
;
                localStorage.setItem(attrid, content);
            }
            cacheOne('test1');
            document.cookie="localversion=<?php echo $curversion?>;";
        </script>
        <?php } else {?>
            <script type="text/javascript" data-local="test1">
                function readOne(attrid) {
                    var content = localStorage.getItem(attrid);
                    document.querySelector('[data-local="' + attrid + '"]').outerHTML = content
;
                }
                readOne('test1');
            </script>
        <?php }?>
    </body>
</html>