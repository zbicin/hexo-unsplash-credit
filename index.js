'use strict';

/**
* Unsplash credits tag
*
* Syntax:
*   {% unsplash htmltag photo_id author %}
*/

function unsplashTag(args, content) {
    var tag = args[0];
    var id = args[1];
    var author = args[2];

    return '<' + tag + ' class="unsplash-credit">Photo by <a href="https://unsplash.com/photos/' + id + '" target="_blank">' + author + '</a> on <a href="https://unsplash.com/" target="_blank">Unsplash</a>.</' + tag + '>';
};

hexo.extend.tag.register('unsplash', unsplashTag);
