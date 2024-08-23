const { Discojs } = require("discojs");



const client = new Discojs({
    userToken: "aQQQioJXQQXKJplDYZfCxFHLAMgeIcugpUpoBPjL"
});

async function get_artist() {
    let artists = await client.searchArtist("porter robinson");
    // console.log(artists.results)
    let artist_detail = await client.getArtist(artists.results[0].id)
    // let map = artists.results.map((artist) => {
    //     return {
    //         artist_id : artist.id,
    //         artist_name : artist.title
    //     }
    // })
    let aliases = artist_detail.aliases.map((alias) => {
        return alias.name
    })

    let data = {
        artist_id: artist_detail.name,
        images : artist_detail.images[0].uri,
        
    }

    console.log(artist_detail.name)
}


async function get_artist_album() {
    let artists = await client.searchArtist("porter robinson");

    let artists_release = await client.getArtistReleases(artists.results[0].id)
    
    let map = artists_release.releases.map((release) => {
        return {
            release_id : release.id,
            release_title : release.title,
            year : release.year
        }
    })
    const sorted = map.sort((a, b) => b.year - a.year);

    // const sorted_data = Object.fromEntries(sorted);
    console.log(sorted)
}

async function get_master() {
    let master = await client.getMaster(5754751)
    console.log(master.tracklist)
}


async function test() {
    let searchResult = await client.searchArtist("porter robinson");
    let artist_name = [];
    let artist_data = [];
    for (let i = 0; i < searchResult.length; i++) {
        artist_name.push(`${i+1}. ${searchResult[i].artist_name}`)
        artist_data.push(await get_artist_detail(searchResult[i].artist_id))
    }

    // console.log(data)
    return data
}

// test
get_artist()
// get_artist_album()
// get_master()