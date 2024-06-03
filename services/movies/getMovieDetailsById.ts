import {fetcher} from '../../hooks/fetcher'

export const GetMovieDetailsById = async (url: string): Promise<any> => fetcher({ method: 'get', url })