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

const mockArtistData = {
  "external_urls" : {
    "spotify" : "https://open.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF"
  },
  "followers" : {
    "href" : null,
    "total" : 306565
  },
  "genres" : [ "indie folk", "indie pop" ],
  "href" : "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF",
  "id" : "0OdUWJ0sBjDrqHygGUXeCF",
  "images" : [ {
    "height" : 816,
    "url" : "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
    "width" : 1000
  }, {
    "height" : 522,
    "url" : "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
    "width" : 640
  }, {
    "height" : 163,
    "url" : "https://i.scdn.co/image/2efc93d7ee88435116093274980f04ebceb7b527",
    "width" : 200
  }, {
    "height" : 52,
    "url" : "https://i.scdn.co/image/4f25297750dfa4051195c36809a9049f6b841a23",
    "width" : 64
  } ],
  "name" : "Band of Horses",
  "popularity" : 59,
  "type" : "artist",
  "uri" : "spotify:artist:0OdUWJ0sBjDrqHygGUXeCF"
}

const mockTopTracks = {
  "tracks": [
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            "id": "43ZHCT0cAZBISjO8DG9PnE",
            "name": "Elvis Presley",
            "type": "artist",
            "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "RO",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/7xe8VI48TxUpU1IIo0RfGi"
        },
        "href": "https://api.spotify.com/v1/albums/7xe8VI48TxUpU1IIo0RfGi",
        "id": "7xe8VI48TxUpU1IIo0RfGi",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/4295b5ff74d4f944367144acbe616b6f62d20b17",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/203104e5843248c700b078f391d4bc759c5d7f47",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/0c0a172373b0211c590b241270d05b70889075a1",
            "width": 64
          }
        ],
        "name": "Blue Hawaii",
        "release_date": "1961",
        "release_date_precision": "year",
        "type": "album",
        "uri": "spotify:album:7xe8VI48TxUpU1IIo0RfGi"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          "id": "43ZHCT0cAZBISjO8DG9PnE",
          "name": "Elvis Presley",
          "type": "artist",
          "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      "available_markets": [
        "AD",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BO",
        "BR",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "EC",
        "EE",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IS",
        "IT",
        "JP",
        "LI",
        "LT",
        "LU",
        "LV",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "PA",
        "PE",
        "PH",
        "PL",
        "PT",
        "PY",
        "RO",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TR",
        "TW",
        "US",
        "UY",
        "VN",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 179773,
      "explicit": false,
      "external_ids": {
        "isrc": "USRC16101350"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC"
      },
      "href": "https://api.spotify.com/v1/tracks/44AyOl4qVkzS48vBsbNXaC",
      "id": "44AyOl4qVkzS48vBsbNXaC",
      "is_local": false,
      "name": "Can't Help Falling in Love",
      "popularity": 75,
      "preview_url": "https://p.scdn.co/mp3-preview/26e409b39a2da6dc18fab61020c90be2938dc0e9?cid=035fb661a97a4ffb938eebc01c0dd4d3",
      "track_number": 5,
      "type": "track",
      "uri": "spotify:track:44AyOl4qVkzS48vBsbNXaC"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            "id": "43ZHCT0cAZBISjO8DG9PnE",
            "name": "Elvis Presley",
            "type": "artist",
            "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "RO",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
        },
        "href": "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
        "id": "0C3t1htEDTFKcg7F2rNbek",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/31301ae33f6ec1ca0f86edec54a9a7be14c78310",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/1123a3ffb6d553b1770a2b51ad07d8113c205bf5",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/e0c1b855510a651821bcfcc6f20cd2424e493c93",
            "width": 64
          }
        ],
        "name": "Elvis' Golden Records",
        "release_date": "1958-03-21",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:0C3t1htEDTFKcg7F2rNbek"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          "id": "43ZHCT0cAZBISjO8DG9PnE",
          "name": "Elvis Presley",
          "type": "artist",
          "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      "available_markets": [
        "AD",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BO",
        "BR",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "EC",
        "EE",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IS",
        "IT",
        "JP",
        "LI",
        "LT",
        "LU",
        "LV",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "PA",
        "PE",
        "PH",
        "PL",
        "PT",
        "PY",
        "RO",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TR",
        "TW",
        "US",
        "UY",
        "VN",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 146480,
      "explicit": false,
      "external_ids": {
        "isrc": "USRC15705223"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/4gphxUgq0JSFv2BCLhNDiE"
      },
      "href": "https://api.spotify.com/v1/tracks/4gphxUgq0JSFv2BCLhNDiE",
      "id": "4gphxUgq0JSFv2BCLhNDiE",
      "is_local": false,
      "name": "Jailhouse Rock",
      "popularity": 72,
      "preview_url": "https://p.scdn.co/mp3-preview/29990f669b5328b6c40320596a2b14d8660cdb54?cid=035fb661a97a4ffb938eebc01c0dd4d3",
      "track_number": 5,
      "type": "track",
      "uri": "spotify:track:4gphxUgq0JSFv2BCLhNDiE"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            "id": "43ZHCT0cAZBISjO8DG9PnE",
            "name": "Elvis Presley",
            "type": "artist",
            "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "RO",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
        },
        "href": "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
        "id": "0C3t1htEDTFKcg7F2rNbek",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/31301ae33f6ec1ca0f86edec54a9a7be14c78310",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/1123a3ffb6d553b1770a2b51ad07d8113c205bf5",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/e0c1b855510a651821bcfcc6f20cd2424e493c93",
            "width": 64
          }
        ],
        "name": "Elvis' Golden Records",
        "release_date": "1958-03-21",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:0C3t1htEDTFKcg7F2rNbek"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          "id": "43ZHCT0cAZBISjO8DG9PnE",
          "name": "Elvis Presley",
          "type": "artist",
          "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      "available_markets": [
        "AD",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BO",
        "BR",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "EC",
        "EE",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IS",
        "IT",
        "JP",
        "LI",
        "LT",
        "LU",
        "LV",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "PA",
        "PE",
        "PH",
        "PL",
        "PT",
        "PY",
        "RO",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TR",
        "TW",
        "US",
        "UY",
        "VN",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 136026,
      "explicit": false,
      "external_ids": {
        "isrc": "USRC15602857"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/64Ny7djQ6rNJspquof2KoX"
      },
      "href": "https://api.spotify.com/v1/tracks/64Ny7djQ6rNJspquof2KoX",
      "id": "64Ny7djQ6rNJspquof2KoX",
      "is_local": false,
      "name": "Hound Dog",
      "popularity": 70,
      "preview_url": "https://p.scdn.co/mp3-preview/f683997c027a50649aa3b6c627cd67bd1a9364f5?cid=035fb661a97a4ffb938eebc01c0dd4d3",
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:64Ny7djQ6rNJspquof2KoX"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            "id": "43ZHCT0cAZBISjO8DG9PnE",
            "name": "Elvis Presley",
            "type": "artist",
            "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "RO",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/3ekkFrfotMsEAKc5g71GHk"
        },
        "href": "https://api.spotify.com/v1/albums/3ekkFrfotMsEAKc5g71GHk",
        "id": "3ekkFrfotMsEAKc5g71GHk",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/67e6848dbf8e7e7d93120b19033d7639d7f92e34",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/1ecdfce504d076b0853cfd83c31f06b5de7106b1",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/8f50e0a7c68c6c2afa47b166a708075d3be75c14",
            "width": 64
          }
        ],
        "name": "From Elvis in Memphis",
        "release_date": "1969",
        "release_date_precision": "year",
        "type": "album",
        "uri": "spotify:album:3ekkFrfotMsEAKc5g71GHk"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          "id": "43ZHCT0cAZBISjO8DG9PnE",
          "name": "Elvis Presley",
          "type": "artist",
          "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      "available_markets": [
        "AD",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BO",
        "BR",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "EC",
        "EE",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IS",
        "IT",
        "JP",
        "LI",
        "LT",
        "LU",
        "LV",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "PA",
        "PE",
        "PH",
        "PL",
        "PT",
        "PY",
        "RO",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TR",
        "TW",
        "US",
        "UY",
        "VN",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 261279,
      "explicit": false,
      "external_ids": {
        "isrc": "USRC16901355"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1H5IfYyIIAlgDX8zguUzns"
      },
      "href": "https://api.spotify.com/v1/tracks/1H5IfYyIIAlgDX8zguUzns",
      "id": "1H5IfYyIIAlgDX8zguUzns",
      "is_local": false,
      "name": "Suspicious Minds",
      "popularity": 70,
      "preview_url": "https://p.scdn.co/mp3-preview/7a298f247198d8736393e166cb9f9e32227f1886?cid=035fb661a97a4ffb938eebc01c0dd4d3",
      "track_number": 13,
      "type": "track",
      "uri": "spotify:track:1H5IfYyIIAlgDX8zguUzns"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            "id": "43ZHCT0cAZBISjO8DG9PnE",
            "name": "Elvis Presley",
            "type": "artist",
            "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "RO",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/3gpHiNAmT5oXVxe6ewTGuN"
        },
        "href": "https://api.spotify.com/v1/albums/3gpHiNAmT5oXVxe6ewTGuN",
        "id": "3gpHiNAmT5oXVxe6ewTGuN",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/7e483c17a33600af2ceb9758642ff646f10d5028",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/508f655810da103b75402c2f9f8ae775fb44d077",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/592db6cb190e6162b992d7c90af8978b900a5b0a",
            "width": 64
          }
        ],
        "name": "Elvis (Fool)",
        "release_date": "1973",
        "release_date_precision": "year",
        "type": "album",
        "uri": "spotify:album:3gpHiNAmT5oXVxe6ewTGuN"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          "id": "43ZHCT0cAZBISjO8DG9PnE",
          "name": "Elvis Presley",
          "type": "artist",
          "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      "available_markets": [
        "AD",
        "AR",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 170293,
      "explicit": false,
      "external_ids": {
        "isrc": "USRC18705934"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/7zMUCLm1TN9o9JlLISztxO"
      },
      "href": "https://api.spotify.com/v1/tracks/7zMUCLm1TN9o9JlLISztxO",
      "id": "7zMUCLm1TN9o9JlLISztxO",
      "is_local": false,
      "name": "Burning Love",
      "popularity": 67,
      "preview_url": "https://p.scdn.co/mp3-preview/8120be95b750b8783840768f7d458ba8a4a972fb?cid=035fb661a97a4ffb938eebc01c0dd4d3",
      "track_number": 13,
      "type": "track",
      "uri": "spotify:track:7zMUCLm1TN9o9JlLISztxO"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            "id": "43ZHCT0cAZBISjO8DG9PnE",
            "name": "Elvis Presley",
            "type": "artist",
            "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        "available_markets": [
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/7mxsNoS5WUrhkW5gPYLFHo"
        },
        "href": "https://api.spotify.com/v1/albums/7mxsNoS5WUrhkW5gPYLFHo",
        "id": "7mxsNoS5WUrhkW5gPYLFHo",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/316cbaf6f9e644614398d65bd18525f45fbb2097",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/20e8fa602a5a56990bb2d97d508eb0ad79062483",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/1eec0960adbc51e0f82b9266cd57daff200da2ab",
            "width": 64
          }
        ],
        "name": "Elvis Forever: The Best of Elvis Presley",
        "release_date": "2017-07-27",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:7mxsNoS5WUrhkW5gPYLFHo"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          "id": "43ZHCT0cAZBISjO8DG9PnE",
          "name": "Elvis Presley",
          "type": "artist",
          "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6EkPaTMpQmLwR7CgYiKHha"
          },
          "href": "https://api.spotify.com/v1/artists/6EkPaTMpQmLwR7CgYiKHha",
          "id": "6EkPaTMpQmLwR7CgYiKHha",
          "name": "JXL",
          "type": "artist",
          "uri": "spotify:artist:6EkPaTMpQmLwR7CgYiKHha"
        }
      ],
      "available_markets": [
        "VN",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 211186,
      "explicit": false,
      "external_ids": {
        "isrc": "USRC10200288"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1oT4oDy3cNhMXfjSWJu67Q"
      },
      "href": "https://api.spotify.com/v1/tracks/1oT4oDy3cNhMXfjSWJu67Q",
      "id": "1oT4oDy3cNhMXfjSWJu67Q",
      "is_local": false,
      "name": "A Little Less Conversation - JXL Radio Edit Remix",
      "popularity": 58,
      "preview_url": "https://p.scdn.co/mp3-preview/d8cccf32e1532bfa075d9399a4af4c709e547713?cid=035fb661a97a4ffb938eebc01c0dd4d3",
      "track_number": 14,
      "type": "track",
      "uri": "spotify:track:1oT4oDy3cNhMXfjSWJu67Q"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            "id": "43ZHCT0cAZBISjO8DG9PnE",
            "name": "Elvis Presley",
            "type": "artist",
            "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        "available_markets": [
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
        },
        "href": "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
        "id": "0C3t1htEDTFKcg7F2rNbek",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/31301ae33f6ec1ca0f86edec54a9a7be14c78310",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/1123a3ffb6d553b1770a2b51ad07d8113c205bf5",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/e0c1b855510a651821bcfcc6f20cd2424e493c93",
            "width": 64
          }
        ],
        "name": "Elvis' Golden Records",
        "release_date": "1958-03-21",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:0C3t1htEDTFKcg7F2rNbek"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          "id": "43ZHCT0cAZBISjO8DG9PnE",
          "name": "Elvis Presley",
          "type": "artist",
          "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      "available_markets": [
        "US",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 127560,
      "explicit": false,
      "external_ids": {
        "isrc": "USRC15602846"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/6xNwKNYZcvgV3XTIwsgNio"
      },
      "href": "https://api.spotify.com/v1/tracks/6xNwKNYZcvgV3XTIwsgNio",
      "id": "6xNwKNYZcvgV3XTIwsgNio",
      "is_local": false,
      "name": "Heartbreak Hotel",
      "popularity": 63,
      "preview_url": "https://p.scdn.co/mp3-preview/f57b3ba45451dabdf48d825a21880525a1c06b30?cid=035fb661a97a4ffb938eebc01c0dd4d3",
      "track_number": 4,
      "type": "track",
      "uri": "spotify:track:6xNwKNYZcvgV3XTIwsgNio"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            "id": "43ZHCT0cAZBISjO8DG9PnE",
            "name": "Elvis Presley",
            "type": "artist",
            "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        "available_markets": [
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/7GXP5OhYyPVLmcVfO9Iqin"
        },
        "href": "https://api.spotify.com/v1/albums/7GXP5OhYyPVLmcVfO9Iqin",
        "id": "7GXP5OhYyPVLmcVfO9Iqin",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ba87521b259e34ed9a869d1b1bae5a3d5b25b335",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ac1234af00fc89a121261457bec65403c09116b9",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/dba3db5a2021e8c092074fe0ac2c7f784da6726f",
            "width": 64
          }
        ],
        "name": "Elvis Presley",
        "release_date": "1956",
        "release_date_precision": "year",
        "type": "album",
        "uri": "spotify:album:7GXP5OhYyPVLmcVfO9Iqin"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          "id": "43ZHCT0cAZBISjO8DG9PnE",
          "name": "Elvis Presley",
          "type": "artist",
          "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      "available_markets": [
        "VN",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 119200,
      "explicit": false,
      "external_ids": {
        "isrc": "USRC15602848"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/47gmoUrZV3w20JAnQOZMcO"
      },
      "href": "https://api.spotify.com/v1/tracks/47gmoUrZV3w20JAnQOZMcO",
      "id": "47gmoUrZV3w20JAnQOZMcO",
      "is_local": false,
      "name": "Blue Suede Shoes",
      "popularity": 63,
      "preview_url": "https://p.scdn.co/mp3-preview/cd57814726943052ca66e279a3fe23cf9cbfbd93?cid=035fb661a97a4ffb938eebc01c0dd4d3",
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:47gmoUrZV3w20JAnQOZMcO"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            "id": "43ZHCT0cAZBISjO8DG9PnE",
            "name": "Elvis Presley",
            "type": "artist",
            "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        "available_markets": [
          "AD",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
        },
        "href": "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
        "id": "0C3t1htEDTFKcg7F2rNbek",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/31301ae33f6ec1ca0f86edec54a9a7be14c78310",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/1123a3ffb6d553b1770a2b51ad07d8113c205bf5",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/e0c1b855510a651821bcfcc6f20cd2424e493c93",
            "width": 64
          }
        ],
        "name": "Elvis' Golden Records",
        "release_date": "1958-03-21",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:0C3t1htEDTFKcg7F2rNbek"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          "id": "43ZHCT0cAZBISjO8DG9PnE",
          "name": "Elvis Presley",
          "type": "artist",
          "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      "available_markets": [
        "AD",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 122893,
      "explicit": false,
      "external_ids": {
        "isrc": "USRC15602859"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/01u6AEzGbGbQyYVdxajxqk"
      },
      "href": "https://api.spotify.com/v1/tracks/01u6AEzGbGbQyYVdxajxqk",
      "id": "01u6AEzGbGbQyYVdxajxqk",
      "is_local": false,
      "name": "Don't Be Cruel",
      "popularity": 62,
      "preview_url": "https://p.scdn.co/mp3-preview/55f71e5caaccf649dd8c1ab9742cd0c09e1e65e7?cid=035fb661a97a4ffb938eebc01c0dd4d3",
      "track_number": 8,
      "type": "track",
      "uri": "spotify:track:01u6AEzGbGbQyYVdxajxqk"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            "id": "43ZHCT0cAZBISjO8DG9PnE",
            "name": "Elvis Presley",
            "type": "artist",
            "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        "available_markets": [
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
        },
        "href": "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
        "id": "0C3t1htEDTFKcg7F2rNbek",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/31301ae33f6ec1ca0f86edec54a9a7be14c78310",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/1123a3ffb6d553b1770a2b51ad07d8113c205bf5",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/e0c1b855510a651821bcfcc6f20cd2424e493c93",
            "width": 64
          }
        ],
        "name": "Elvis' Golden Records",
        "release_date": "1958-03-21",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:0C3t1htEDTFKcg7F2rNbek"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          "id": "43ZHCT0cAZBISjO8DG9PnE",
          "name": "Elvis Presley",
          "type": "artist",
          "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      "available_markets": [
        "AD",
      ],
      "disc_number": 1,
      "duration_ms": 117080,
      "explicit": false,
      "external_ids": {
        "isrc": "USRC15705814"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/5ueyLj6e6oVaTY0KQ6yLaA"
      },
      "href": "https://api.spotify.com/v1/tracks/5ueyLj6e6oVaTY0KQ6yLaA",
      "id": "5ueyLj6e6oVaTY0KQ6yLaA",
      "is_local": false,
      "name": "All Shook Up",
      "popularity": 61,
      "preview_url": "https://p.scdn.co/mp3-preview/8a379079e4bd03c72cc847ec1ea58f0a332d16ef?cid=035fb661a97a4ffb938eebc01c0dd4d3",
      "track_number": 3,
      "type": "track",
      "uri": "spotify:track:5ueyLj6e6oVaTY0KQ6yLaA"
    }
  ]
}

const mockPlaylistObject = {
  "collaborative": false,
  "description": null,
  "external_urls": {
    "spotify": "http://open.spotify.com/user/thelinmichael/playlist/7d2D2S200NyUE5KYs80PwO"
  },
  "followers": {
    "href": null,
    "total": 0
  },
  "href": "https://api.spotify.com/v1/users/thelinmichael/playlists/7d2D2S200NyUE5KYs80PwO",
  "id": "7d2D2S200NyUE5KYs80PwO",
  "images": [ ],
  "name": "A New Playlist",
  "owner": {
    "external_urls": {
      "spotify": "http://open.spotify.com/user/thelinmichael"
    },
    "href": "https://api.spotify.com/v1/users/thelinmichael",
    "id": "thelinmichael",
    "type": "user",
    "uri": "spotify:user:thelinmichael"
  },
  "public": false,
  "snapshot_id": "s0o3TSuYnRLl2jch+oA4OEbKwq/fNxhGBkSPnvhZdmWjNV0q3uCAWuGIhEx8SHIx",
  "tracks": {
    "href": "https://api.spotify.com/v1/users/thelinmichael/playlists/7d2D2S200NyUE5KYs80PwO/tracks",
    "items": [ ],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 0
  },
  "type": "playlist",
  "uri": "spotify:user:thelinmichael:playlist:7d2D2S200NyUE5KYs80PwO"
}

export {
  mockUserData,
  mockUserPlaylists1,
  mockUserPlaylists2,
  mockSearchResults,
  mockArtistData,
  mockTopTracks,
  mockPlaylistObject
}
