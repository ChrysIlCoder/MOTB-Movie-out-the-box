import {fetcher} from '../../hooks/fetcher'

export const GetFindMovieByName = async (url: string): Promise<any> => fetcher({ method: 'get', url })