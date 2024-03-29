

// //question 40
function makeAlbum(
    artist: string,
    title: string,
    tracks?: number
  ) {
    const album: { artist: string; title: string; tracks?: number } = {
      artist,
      title,
    };
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    return album;
  }
  const album1 = makeAlbum("Artist 1", "Album 1");
  const album2 = makeAlbum("Artist 2", "Album 2", 12);
  const album3 = makeAlbum("Artist 3", "Album 3");
  console.log(album1);
  console.log(album2);
  console.log(album3);
  
  //question 41, 42
  function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  function makegreat(magicians: string[]): string[] {
    return magicians.map((magician) => `the great ${magician}`);
  }
  let magicians: string[] = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "Teller",
  ];
  show_magicians(magicians);
  let great_magicians: string[] = makegreat(magicians);
  console.log("The Great Magicians:");
  show_magicians(great_magicians);