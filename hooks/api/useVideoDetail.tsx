import useSWR from 'swr';

import httpClient from '@/utils/httpClient';
import { API_VIDEO_DETAIL } from '@/site-settings/site-constants';
import { Datum} from '@/types/video';

interface getEventDetailParams {
  videoId: number | undefined;
}

const generateApiPath = ({ videoId }: getEventDetailParams) => {
  return `${API_VIDEO_DETAIL}/${videoId}`;
};

/*
|--------------------------------------------------------------------------
|   FETCHERS
|--------------------------------------------------------------------------
*/

export async function getVideoDetail(params: getEventDetailParams) {
  const url = generateApiPath(params);
  const res = await httpClient.get(url);
  const result: Datum = res.data?.data;
  return result
}

/*
|--------------------------------------------------------------------------
|   HOOKS
|--------------------------------------------------------------------------
*/

export function useVideoDetail(params: getEventDetailParams) {
  const key = generateApiPath(params);
  const { data, error } = useSWR(params.videoId ? key : null, () =>
    getVideoDetail(params)
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
