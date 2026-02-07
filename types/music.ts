export type LastFmImage = {
  size: "small" | "medium" | "large" | "extralarge" | string;
  "#text": string;
};

export type LastFmStreamable = {
  fulltrack: "0" | "1" | string;
  "#text": "0" | "1" | string;
};

export type LastFmArtist = {
  name: string;
  url: string;
  mbid?: string;
};

export type LastFmAlbum = {
  artist: string;
  title: string;
  url: string;
  image: LastFmImage[];
} | null;

export type LastFmTrackAttr = {
  rank: string;
};

export type LastFmTrack = {
  streamable: LastFmStreamable;
  mbid: string;
  name: string;
  image: LastFmImage[];
  artist: LastFmArtist;
  url: string;
  duration: string;
  "@attr": LastFmTrackAttr;
  playcount: string;
  album: LastFmAlbum;
};

export type UserTracksResponse = LastFmTrack[];

export type LastFmTopAlbum = {
  artist: LastFmArtist;
  image: LastFmImage[];
  mbid: string;
  url: string;
  playcount: string;
  "@attr": { rank: string };
  name: string;
};

export type TopAlbumsResponse = {
  topalbums: {
    album: LastFmTopAlbum[];
    "@attr"?: {
      user?: string;
      totalPages?: string;
      page?: string;
      perPage?: string;
      total?: string;
    };
  };
};

export type LastFmRecentTrack = {
  artist: LastFmArtist;
  mbid: string;
  name: string;
  image: LastFmImage[];
  streamable: "0" | "1" | string;
  album: { mbid: string; "#text": string } | null;
  url: string;
  "@attr"?: { nowplaying?: "true" | "false" | string };
  loved?: string;
  date?: { uts: string; "#text": string };
};

export type NowPlayingResponse = {
  track: LastFmRecentTrack;
};
