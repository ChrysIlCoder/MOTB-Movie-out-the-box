import {fetcher} from '../../hooks/fetcher'

export const GetPopularMovies = async (url: string): Promise<any> => fetcher({ method: 'get', url })