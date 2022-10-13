"use strict";
// Task - 38:
exports.__esModule = true;
function make_album(artist_name, album_title, no_of_tracks) {
    if (no_of_tracks === void 0) { no_of_tracks = ''; }
    if (no_of_tracks) {
        var dict = {
            'artist': artist_name,
            'album': album_title,
            'tracks': no_of_tracks
        };
        return dict;
    }
    else {
        var dict = {
            'artist': artist_name,
            'album': album_title
        };
        return dict;
    }
}
console.log(make_album('Jungkook', 'Broken Angel'));
console.log(make_album('Jimin', 'Feel the magic in the air'));
console.log(make_album('Suga', 'Beautiful Eye'));
console.log(make_album('taehyung', 'Dark night', '7'));
console.log(make_album('hobby', 'Red blood', '5'));
