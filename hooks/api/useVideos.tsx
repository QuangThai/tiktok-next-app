import useSWR from 'swr';

import { API_LIST_VIDEO } from '@/site-settings/site-constants';
import httpClient from '@/utils/httpClient';
import { Video } from '@/types/video';

/*
|--------------------------------------------------------------------------
|   FETCHERS
|--------------------------------------------------------------------------
*/

interface ProjectParams {
  type: string;
  page?: number;
}

const generateApiPath = ({ type, page }: ProjectParams) => {
  return `${API_LIST_VIDEO}?type=${type}&page=${page}`;
};

export async function getVideos({ type, page = 1 }: ProjectParams) {
  const url = generateApiPath({ type, page });
  const res = await httpClient.get(url);
  const result: Video = res.data;
  return result;
}

/*
|--------------------------------------------------------------------------
|   HOOKS
|--------------------------------------------------------------------------
*/

export function useVideos({ type, page }: ProjectParams) {
  const key = generateApiPath({ type: type, page });
  const { data, error } = useSWR(type ? key : null, () =>
    getVideos({ type, page })
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
