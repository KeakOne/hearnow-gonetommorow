
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('songs').del(), 

    // Inserts seed entries
    knex('songs').insert({id: 1, title: 'Jumanji', artist: 'PXLX', artwork: 'https://i1.sndcdn.com/artworks-000101146600-ronxxr-large.jpg', artist_avatar: 'https://i1.sndcdn.com/avatars-000208709440-s3sdxs-large.jpg', artist_description: 'vocals removed from soundcloud due to copyright click download for full version\r\n\r\nfacebook.com/fxrxvxrpxlx\r\ntwitter.com/fxrxvxrpxlx\r\npolo.thesecret.club', link: 'https://soundcloud.com/fxrxvxrpxlx/jumanji', soundcloud_id: '182859102'}),
    knex('songs').insert({id: 2, title: 'Digits (feat. Meek Mill)', artist: 'Young Thug Ft. Meek Mill', artwork: 'https://i1.sndcdn.com/artworks-000156910987-wunvos-large.jpg', artist_avatar: 'https://i1.sndcdn.com/avatars-000203411118-mhxny2-large.jpg', artist_description: 'That new #THUGGER!! dl NOW!! #SHEESH', link: 'http://soundcloud.com/youngthugworld', soundcloud_id: '257730900'}),
    knex('songs').insert({id: 3, title: 'Litty', artist: 'SpaceGhostPurrp', artwork: 'https://i1.sndcdn.com/artworks-000153692176-g90bhl-large.jpg', artist_avatar: 'https://i1.sndcdn.com/avatars-000212403838-bm1mma-large.jpg', artist_description: 'STR8 phonk...', link: 'http://soundcloud.com/1spaceghostpurrp', soundcloud_id: '254680264'})
  );
};
