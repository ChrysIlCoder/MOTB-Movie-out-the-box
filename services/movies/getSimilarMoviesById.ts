import {fetcher} from '../../hooks/fetcher'

export const GetSimilarMoviesById = async (url: string): Promise<any> => fetcher({ method: 'get', url })