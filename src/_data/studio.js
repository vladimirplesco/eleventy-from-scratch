// const fetch = require('node-fetch');
const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async () => {
  try {
    // const res = await fetch(
    //   'https://11ty-from-scratch-content-feeds.piccalil.li/media.json'
    // );
    // const {items} = await res.json(); 
    // Grabs either the fresh remote data or cached data (will always be fresh live)
    const {items} = await Cache(
      'https://11ty-from-scratch-content-feeds.piccalil.li/media.json',
      {
        duration: '1d', // 1 day
        type: 'json'
      }
    );

    return items;
  } catch (ex) {
    console.log(ex);

    // If failed, return back an empty array
    return [];
  }
};