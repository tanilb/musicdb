"use strict;"

class Artists
{
    constructor()
    {
       this.artists = new Array();
    }
    add(artist)
    {
        this.artists.push(artist);
    }
}
class Artist
{
    constructor(id)
    {
        this.id = id;
    }
}

module.exports = {
    Artist: Artist,
    Artists: Artists
};

/***
 class Artists
 {
    private $artists;

    public function add($artist)
    {
        $this->artists[] = $artist;
    }
 }
 class Artist
 {
    private $id;

    public function __construct($id)
    {
        $this->id = $id;
    }
    get
 }


 */