export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: string | null;
  total: number;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
}

export interface TopArtistsResponse {
  items: Artist[];
  total: number;
  limit: number;
  offset: number;
  previous: string | null;
  href: string;
  next: string | null;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
}

export interface TopTracksResponse {
  items: Track[];
  total: number;
  limit: number;
  offset: number;
  previous: string | null;
  href: string;
  next: string | null;
}
