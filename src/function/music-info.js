const { Discojs } = require('discojs');

const client = new Discojs({
    userToken: process.env.DISCO_TOKEN
})

class Music {
    static async searchArtist(name) {
        // return await client.searchArtist(name);
        let artists_result = (await client.searchArtist(name)).results;
        return artists_result.map((artist) => {
            return {
                artist_id : artist.id,
                artist_name : artist.title
            }
        }).slice(0, 10);
    }
    static async getArtistDetail(id) {
        let artist_release = await client.getArtistReleases(id);
        let artist_detail = await client.getArtist(id);
        let aliases;
        if (artist_detail.aliases) {
            aliases = artist_detail.aliases.map((alias) => {
                return alias.name
            });
        }else {
            aliases = "this artist has no aliases"
        }
        let release = artist_release.releases.map((release) => {
            return {
                release_id : release.id,
                release_title : release.title,
                year : release.year
            }
        });
        let release_sort = release.sort((a, b) => b.year - a.year)
        release_sort = release_sort.slice(0, 5);
        let artist_image = artist_detail.images
        if (!artist_image) {
            artist_image = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }else {
            artist_image = artist_detail.images[0].uri
        }
        
        let data = {
            artist_name : artist_detail.name,
            aliases,
            image : artist_image,
            profile : artist_detail.profile,
            releases : release_sort
        };

        return data;
    }
}

module.exports = Music