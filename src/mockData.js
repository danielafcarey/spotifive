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

const mockSearchResults = {
  "artists": {
    "href": "https://api.spotify.com/v1/search?query=band+abba&type=artist&market=US&offset=0&limit=5",
    "items": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6BwpDpGWc8m630vadAuLRn"
        },
        "followers": {
          "href": null,
          "total": 801
        },
        "genres": [
          "deep latin christian"
        ],
        "href": "https://api.spotify.com/v1/artists/6BwpDpGWc8m630vadAuLRn",
        "id": "6BwpDpGWc8m630vadAuLRn",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/0fc0f29f3b61ab4524603c9be2e92eb6acba22ae",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/b3de146af46e7805ec42c90c65862873a53b96da",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/9d4780116a488468de3afebacea3b3849359f3c2",
            "width": 64
          }
        ],
        "name": "Ivan Molina & Abba Padre Band",
        "popularity": 19,
        "type": "artist",
        "uri": "spotify:artist:6BwpDpGWc8m630vadAuLRn"
      }
    ],
    "limit": 5,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 1
  }
}

export {
  mockUserData,
  mockUserPlaylists1,
  mockUserPlaylists2,
  mockSearchResults
}
