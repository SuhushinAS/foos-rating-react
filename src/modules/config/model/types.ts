export type TConfigUrlCity = {
  full: string;
  season: string;
};

export type TConfigUrls = {
  nsk: TConfigUrlCity;
  tsk: TConfigUrlCity;
};

export type TConfig = {
  urls: TConfigUrls;
};
