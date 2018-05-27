const mockUserData = {
  "birthdate": "1937-06-01",
  "country": "SE",
  "display_name": "JM Wizzler",
  "email": "email@example.com",
  "external_urls": {
  "spotify": "https://open.spotify.com/user/wizzler"
  },
  "followers" : {
    "href" : null,
    "total" : 3829
  },
  "href": "https://api.spotify.com/v1/users/wizzler",
  "id": "wizzler",
  "images": [
    {
      "height": null,
      "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/1970403_10152215092574354_1798272330_n.jpg",
      "width": null
    }
  ],
  "product": "premium",
  "type": "user",
  "uri": "spotify:user:wizzler"
}



const mockUserPlaylists2 = {
  "href": "https://api.spotify.com/v1/users/wizzler/playlists",
  "items": [ {
    "collaborative": false,
    "external_urls": {
      "spotify": "http://open.spotify.com/user/wizzler/playlists/53Y8wT46QIMz5H4WQ8O22c"
    },
    "href": "https://api.spotify.com/v1/users/wizzler/playlists/53Y8wT46QIMz5H4WQ8O22c",
    "id": "53Y8wT46QIMz5H4WQ8O22c",
    "images" : [ ],
    "name": "Wizzlers Big Playlist",
    "owner": {
      "external_urls": {
        "spotify": "http://open.spotify.com/user/wizzler"
      },
      "href": "https://api.spotify.com/v1/users/wizzler",
      "id": "wizzler",
      "type": "user",
      "uri": "spotify:user:wizzler"
    },
    "public": true,
    "snapshot_id" : "bNLWdmhh+HDsbHzhckXeDC0uyKyg4FjPI/KEsKjAE526usnz2LxwgyBoMShVL+z+",
    "tracks": {
      "href": "https://api.spotify.com/v1/users/wizzler/playlists/53Y8wT46QIMz5H4WQ8O22c/tracks",
      "total": 30
    },
    "type": "playlist",
    "uri": "spotify:user:wizzler:playlist:53Y8wT46QIMz5H4WQ8O22c"
  }, {
    "collaborative": false,
    "external_urls": {
      "spotify": "http://open.spotify.com/user/wizzlersmate/playlists/1AVZz0mBuGbCEoNRQdYQju"
    },
    "href": "https://api.spotify.com/v1/users/wizzlersmate/playlists/1AVZz0mBuGbCEoNRQdYQju",
    "id": "1AVZz0mBuGbCEoNRQdYQju",
    "images" : [ ],
    "name": "Another Playlist",
    "owner": {
      "external_urls": {
        "spotify": "http://open.spotify.com/user/wizzlersmate"
      },
      "href": "https://api.spotify.com/v1/users/wizzlersmate",
      "id": "wizzlersmate",
      "type": "user",
      "uri": "spotify:user:wizzlersmate"
    },
    "public": true,
    "snapshot_id" : "Y0qg/IT5T02DKpw4uQKc/9RUrqQJ07hbTKyEeDRPOo9LU0g0icBrIXwVkHfQZ/aD",
    "tracks": {
      "href": "https://api.spotify.com/v1/users/wizzlersmate/playlists/1AVZz0mBuGbCEoNRQdYQju/tracks",
      "total": 58
    },
    "type": "playlist",
    "uri": "spotify:user:wizzlersmate:playlist:1AVZz0mBuGbCEoNRQdYQju"
  } ],
  "limit": 2,
  "next": null,
  "offset": 0,
  "previous": null,
  "total": 2
}

const mockUserPlaylists1 = {
  "href": "https://api.spotify.com/v1/users/wizzler/playlists",
  "items": [ {
    "collaborative": false,
    "external_urls": {
      "spotify": "http://open.spotify.com/user/wizzler/playlists/53Y8wT46QIMz5H4WQ8O22c"
    },
    "href": "https://api.spotify.com/v1/users/wizzler/playlists/53Y8wT46QIMz5H4WQ8O22c",
    "id": "53Y8wT46QIMz5H4WQ8O22c",
    "images" : [ ],
    "name": "Wizzlers Big Playlist",
    "owner": {
      "external_urls": {
        "spotify": "http://open.spotify.com/user/wizzler"
      },
      "href": "https://api.spotify.com/v1/users/wizzler",
      "id": "wizzler",
      "type": "user",
      "uri": "spotify:user:wizzler"
    },
    "public": true,
    "snapshot_id" : "bNLWdmhh+HDsbHzhckXeDC0uyKyg4FjPI/KEsKjAE526usnz2LxwgyBoMShVL+z+",
    "tracks": {
      "href": "https://api.spotify.com/v1/users/wizzler/playlists/53Y8wT46QIMz5H4WQ8O22c/tracks",
      "total": 30
    },
    "type": "playlist",
    "uri": "spotify:user:wizzler:playlist:53Y8wT46QIMz5H4WQ8O22c"
  }, {
    "collaborative": false,
    "external_urls": {
      "spotify": "http://open.spotify.com/user/wizzlersmate/playlists/1AVZz0mBuGbCEoNRQdYQju"
    },
    "href": "https://api.spotify.com/v1/users/wizzlersmate/playlists/1AVZz0mBuGbCEoNRQdYQju",
    "id": "1AVZz0mBuGbCEoNRQdYQju",
    "images" : [ ],
    "name": "Another Playlist",
    "owner": {
      "external_urls": {
        "spotify": "http://open.spotify.com/user/wizzlersmate"
      },
      "href": "https://api.spotify.com/v1/users/wizzlersmate",
      "id": "wizzlersmate",
      "type": "user",
      "uri": "spotify:user:wizzlersmate"
    },
    "public": true,
    "snapshot_id" : "Y0qg/IT5T02DKpw4uQKc/9RUrqQJ07hbTKyEeDRPOo9LU0g0icBrIXwVkHfQZ/aD",
    "tracks": {
      "href": "https://api.spotify.com/v1/users/wizzlersmate/playlists/1AVZz0mBuGbCEoNRQdYQju/tracks",
      "total": 58
    },
    "type": "playlist",
    "uri": "spotify:user:wizzlersmate:playlist:1AVZz0mBuGbCEoNRQdYQju"
  } ],
  "limit": 2,
  "next": mockUserPlaylists2,
  "offset": 0,
  "previous": null,
  "total": 2
}

export {
  mockUserData,
  mockUserPlaylists1,
  mockUserPlaylists2
}
