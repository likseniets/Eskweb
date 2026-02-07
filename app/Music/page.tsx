"use client";
import { Calendar, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type {
  NowPlayingResponse,
  TopAlbumsResponse,
  UserTracksResponse,
} from "../../types/music";

const allowedPeriods = [
  "overall",
  "7day",
  "1month",
  "3month",
  "6month",
  "12month",
] as const;

const periodLabels: Record<(typeof allowedPeriods)[number], string> = {
  overall: "Overall",
  "7day": "7 days",
  "1month": "1 month",
  "3month": "3 months",
  "6month": "6 months",
  "12month": "12 months",
};

const Music = () => {
  const searchParams = useSearchParams();
  const [userProfile, setUserProfile] = useState<unknown>(null);
  const [userProfileError, setUserProfileError] = useState<string | null>(null);
  const [nowPlaying, setNowPlaying] = useState<NowPlayingResponse | null>(null);
  const [nowPlayingError, setNowPlayingError] = useState<string | null>(null);
  const [userTracks, setUserTracks] = useState<UserTracksResponse | null>(null);
  const [userTracksError, setUserTracksError] = useState<string | null>(null);
  const [topAlbums, setTopAlbums] = useState<TopAlbumsResponse | null>(null);
  const [topAlbumsError, setTopAlbumsError] = useState<string | null>(null);

  const vercelUrl = process.env.VERCEL_URL;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : vercelUrl
      ? `https://${vercelUrl}`
      : "http://localhost:3000";

  const { limit, tracksPeriod, albumsPeriod } = useMemo(() => {
    const rawLimit = Number.parseInt(searchParams.get("limit") ?? "", 10);
    const safeLimit = Number.isFinite(rawLimit) && rawLimit > 0 ? rawLimit : 10;
    const rawTracksPeriod = searchParams.get("period");
    const safeTracksPeriod = allowedPeriods.includes(
      rawTracksPeriod as (typeof allowedPeriods)[number],
    )
      ? (rawTracksPeriod as (typeof allowedPeriods)[number])
      : "1month";
    const rawAlbumsPeriod = searchParams.get("albumsPeriod");
    const safeAlbumsPeriod = allowedPeriods.includes(
      rawAlbumsPeriod as (typeof allowedPeriods)[number],
    )
      ? (rawAlbumsPeriod as (typeof allowedPeriods)[number])
      : "1month";

    return {
      limit: safeLimit,
      tracksPeriod: safeTracksPeriod,
      albumsPeriod: safeAlbumsPeriod,
    };
  }, [searchParams]);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await fetch(`${baseUrl}/music/user_profile`, {
          cache: "no-store",
        });

        if (!response.ok) {
          setUserProfileError(`Request failed with status ${response.status}.`);
          return;
        }

        const data = await response.json();
        setUserProfile(data);
      } catch (error) {
        setUserProfileError(
          error instanceof Error
            ? error.message
            : "Unable to load user profile.",
        );
      }
    };

    getUserProfile();
  }, [baseUrl]);

  useEffect(() => {
    const getNowPlaying = async () => {
      try {
        const response = await fetch(`${baseUrl}/music/now_playing`, {
          cache: "no-store",
        });

        if (!response.ok) {
          setNowPlayingError(`Request failed with status ${response.status}.`);
          return;
        }

        const data = (await response.json()) as NowPlayingResponse;
        setNowPlaying(data);
      } catch (error) {
        setNowPlayingError(
          error instanceof Error
            ? error.message
            : "Unable to load now playing.",
        );
      }
    };

    getNowPlaying();
    const intervalId = window.setInterval(() => {
      if (document.hidden) {
        return;
      }

      getNowPlaying();
    }, 60_000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [baseUrl]);

  useEffect(() => {
    const getUserTracks = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/music/user_tracks?limit=${limit}&period=${tracksPeriod}`,
          { cache: "no-store" },
        );
        if (!response.ok) {
          setUserTracksError(`Request failed with status ${response.status}.`);
          return;
        }

        const data = (await response.json()) as UserTracksResponse;
        setUserTracks(data);
      } catch (error) {
        setUserTracksError(
          error instanceof Error
            ? error.message
            : "Unable to load user top tracks.",
        );
      }
    };

    getUserTracks();
  }, [baseUrl, limit, tracksPeriod]);

  useEffect(() => {
    const getTopAlbums = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/music/user_albums?limit=${limit}&period=${albumsPeriod}`,
          { cache: "no-store" },
        );
        if (!response.ok) {
          setTopAlbumsError(`Request failed with status ${response.status}.`);
          return;
        }

        const data = (await response.json()) as TopAlbumsResponse;
        setTopAlbums(data);
      } catch (error) {
        setTopAlbumsError(
          error instanceof Error ? error.message : "Unable to load top albums.",
        );
      }
    };

    getTopAlbums();
  }, [baseUrl, limit, albumsPeriod]);

  const topGenres = [
    { name: "Indie Rock", count: 156 },
    { name: "Electronic", count: 142 },
    { name: "Alternative", count: 98 },
    { name: "Synthwave", count: 87 },
    { name: "Ambient", count: 73 },
  ];

  const profile =
    userProfile && typeof userProfile === "object"
      ? (
          userProfile as {
            user?: {
              name?: string;
              realname?: string;
              playcount?: string;
              artist_count?: string;
              track_count?: string;
              album_count?: string;
              country?: string;
              url?: string;
              image?: Array<{ size?: string; "#text"?: string }>;
            };
          }
        ).user
      : undefined;

  const profileImage = profile?.image?.find(
    (image) => image.size === "extralarge",
  )?.["#text"];

  const topTracks = userTracks ?? undefined;
  const topAlbumsList = topAlbums?.topalbums?.album ?? [];
  const nowPlayingTrack = nowPlaying?.track;
  const nowPlayingImage = nowPlayingTrack?.image?.find(
    (image) => image.size === "extralarge",
  )?.["#text"];
  const isNowPlaying = nowPlayingTrack?.["@attr"]?.nowplaying === "true";

  return (
    <div className="bg-white animated-background min-h-screen dark:bg-gradient-to-br dark:from-purple-900 dark:via-slate-900 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <div className="inline-block mb-4">
            <div className="size-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              ) : (
                "🎧"
              )}
            </div>
          </div>
          <h1 className="text-4xl mb-3 text-white">My Music Journey</h1>
          <p className="text-purple-200 max-w-2xl mx-auto">
            A curated collection of my monthly music picks and what I&apos;m
            currently listening to. Here i have used last.fm API to fetch my
            listening history and profile data.
          </p>
        </section>

        {/* User Profile */}
        <section className="mb-12">
          <div className="p-6 bg-slate-800/50 border-slate-700/50 backdrop-blur rounded-xl shadow-md">
            {userProfileError ? (
              <p className="text-pink-200">{userProfileError}</p>
            ) : profile ? (
              <div className="grid gap-6 md:grid-cols-[auto,1fr]">
                <div className="space-y-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg bg-slate-900/60 p-4">
                      <p className="text-xs uppercase text-purple-300">
                        Total plays
                      </p>
                      <p className="text-lg text-white">
                        {profile.playcount ?? "-"}
                      </p>
                    </div>
                    <div className="rounded-lg bg-slate-900/60 p-4">
                      <p className="text-xs uppercase text-purple-300">
                        Artists
                      </p>
                      <p className="text-lg text-white">
                        {profile.artist_count ?? "-"}
                      </p>
                    </div>
                    <div className="rounded-lg bg-slate-900/60 p-4">
                      <p className="text-xs uppercase text-purple-300">
                        Tracks
                      </p>
                      <p className="text-lg text-white">
                        {profile.track_count ?? "-"}
                      </p>
                    </div>
                    <div className="rounded-lg bg-slate-900/60 p-4">
                      <p className="text-xs uppercase text-purple-300">
                        Albums
                      </p>
                      <p className="text-lg text-white">
                        {profile.album_count ?? "-"}
                      </p>
                    </div>
                  </div>
                  {profile.url ? (
                    <a
                      href={profile.url}
                      className="inline-flex items-center text-sm text-purple-200 hover:text-purple-100"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Last.fm
                    </a>
                  ) : null}
                </div>
              </div>
            ) : (
              <p className="text-purple-200">Loading profile...</p>
            )}
          </div>
        </section>

        {/* Now Playing */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6 text-white flex items-center gap-2">
            <Play className="size-6 text-purple-400" />
            Now Playing
          </h2>
          <div className="p-8 bg-gradient-to-br from-purple-800/50 to-pink-800/50 border-purple-500/30 backdrop-blur rounded-xl shadow-md">
            {nowPlayingError ? (
              <p className="text-pink-200">{nowPlayingError}</p>
            ) : nowPlayingTrack && isNowPlaying ? (
              <div className="flex items-center gap-5 justify-between">
                <div className="flex items-center gap-5 min-w-0 flex-1">
                  <div className="size-32 shrink-0 overflow-hidden rounded-xl bg-purple-900/40 flex items-center justify-center text-2xl">
                    {nowPlayingImage ? (
                      <Image
                        src={nowPlayingImage}
                        alt={nowPlayingTrack.name ?? "Now playing"}
                        width={300}
                        height={300}
                        sizes="300px"
                        className="size-full object-cover"
                      />
                    ) : (
                      "🎵"
                    )}
                  </div>
                  <div className="min-w-0 h-full">
                    <h3 className="text-2xl text-white mb-2">
                      {nowPlayingTrack.name ?? "Unknown track"}
                    </h3>
                    <p className="text-md text-purple-200 truncate">
                      {nowPlayingTrack.artist?.name ?? "Unknown artist"}
                    </p>
                    <p className="text-md text-purple-300 truncate">
                      {nowPlayingTrack.album?.["#text"] ?? ""}
                    </p>
                  </div>
                </div>
                {nowPlayingTrack.url ? (
                  <a
                    href={nowPlayingTrack.url}
                    className="inline-flex items-center rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open on Last.fm
                  </a>
                ) : null}
              </div>
            ) : nowPlayingTrack ? (
              <p className="text-purple-200">
                Currently not listening to music.
              </p>
            ) : (
              <p className="text-purple-200">Loading now playing...</p>
            )}
          </div>
        </section>

        {/* Top Tracks */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6 text-white flex items-center gap-2">
            <Play className="size-6 text-purple-400" />
            Top Tracks
            <span className="text-sm text-purple-200">
              ({periodLabels[tracksPeriod]})
            </span>
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {allowedPeriods.map((option) => {
              const isActive = option === tracksPeriod;

              return (
                <Link
                  key={option}
                  href={{
                    pathname: "/Music",
                    query: {
                      limit: String(limit),
                      period: option,
                      albumsPeriod,
                    },
                  }}
                  scroll={false}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-purple-500 text-white"
                      : "bg-slate-800/70 text-purple-200 hover:bg-slate-700/80"
                  }`}
                >
                  {periodLabels[option]}
                </Link>
              );
            })}
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-800/40 to-pink-800/40 border-purple-500/30 backdrop-blur rounded-xl shadow-md">
            {userTracksError ? (
              <p className="text-pink-200">{userTracksError}</p>
            ) : topTracks && topTracks.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {topTracks.map((track) => {
                  const trackImage = track.album?.image?.find(
                    (image) => image.size === "extralarge",
                  )?.["#text"];

                  return (
                    <div
                      key={`${track.name ?? "track"}-${track.artist?.name ?? "artist"}`}
                      className="rounded-xl bg-slate-900/60 p-4 border border-purple-500/20"
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className="size-16 shrink-0 overflow-hidden rounded-lg bg-purple-900/40 flex items-center justify-center text-2xl">
                          {trackImage ? (
                            <Image
                              src={trackImage}
                              alt="Profile Image"
                              width={300}
                              height={300}
                              sizes="300px"
                              className="size-full object-cover"
                            />
                          ) : (
                            "🎵"
                          )}
                        </div>
                        <div className="mt-4 h-full flex flex-col text-xs text-purple-200">
                          <p>Rank {track["@attr"]?.rank ?? "-"}</p>
                          <p>{track.playcount ?? "-"} plays</p>
                        </div>
                      </div>
                      <p className="text-white truncate">
                        {track.name ?? "Unknown track"}
                      </p>
                      <p className="text-sm text-purple-200 truncate">
                        {track.artist?.name ?? "Unknown artist"}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-purple-200">Loading tracks...</p>
            )}
          </div>
        </section>

        {/* Top Albums */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6 text-white flex items-center gap-2">
            <Calendar className="size-6 text-purple-400" /> Top Albums
            <span className="text-sm text-purple-200">
              ({periodLabels[albumsPeriod]})
            </span>
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {allowedPeriods.map((option) => {
              const isActive = option === albumsPeriod;

              return (
                <Link
                  key={option}
                  href={{
                    pathname: "/Music",
                    query: {
                      limit: String(limit),
                      period: tracksPeriod,
                      albumsPeriod: option,
                    },
                  }}
                  scroll={false}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-purple-500 text-white"
                      : "bg-slate-800/70 text-purple-200 hover:bg-slate-700/80"
                  }`}
                >
                  {periodLabels[option]}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-around gap-6 space-y-7 bg-gradient-to-br from-gray-800/50 to-gray-800/50 backdrop-blur rounded-xl p-6 shadow-md">
            {topAlbumsError ? (
              <p className="text-pink-200">{topAlbumsError}</p>
            ) : topAlbumsList.length > 0 ? (
              topAlbumsList.map((album) => {
                const albumImage = album.image?.find(
                  (image) => image.size === "extralarge",
                )?.["#text"];

                return (
                  <div
                    key={`${album.name}-${album.artist?.name ?? "artist"}`}
                    className="flex flex-col w-48 min-h-60 overflow-hidden text-white"
                  >
                    <div className="w-48 h-48 shrink-0 overflow-hidden rounded-xl bg-slate-900/60 flex items-center justify-center">
                      {albumImage ? (
                        <Image
                          src={albumImage}
                          alt={`${album.name} cover`}
                          width={192}
                          height={192}
                          sizes="192px"
                          className="size-full object-cover"
                        />
                      ) : (
                        "🎵"
                      )}
                    </div>
                    <h3 className="text-lg text-center mt-2 px-2 truncate">
                      {album.name}
                    </h3>
                    <p className="text-sm text-center text-purple-300 mb-1 truncate">
                      {album.artist?.name ?? "Unknown artist"}
                    </p>
                    <p className="text-xs text-center text-purple-300 mb-2 truncate">
                      {album.playcount ?? "-"} plays
                    </p>
                    {album.url ? (
                      <a
                        href={album.url}
                        className="text-xs text-center text-gray-200/30 hover:text-purple-100"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open on Last.fm
                      </a>
                    ) : null}
                  </div>
                );
              })
            ) : (
              <p className="text-purple-200">Loading albums...</p>
            )}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl mb-6 text-white">Top Genres</h2>
          <div className="flex flex-wrap gap-3">
            {topGenres.map((genre, index) => (
              <div
                key={genre.name}
                className={`flex items-center rounded-xl text-sm  gap-2 px-4 py-2 ${
                  index === 0
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : index === 1
                      ? "bg-pink-600 text-white hover:bg-pink-700"
                      : index === 2
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                }`}
              >
                {genre.name} • {genre.count} tracks
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Music;
