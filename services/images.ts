import axios from "axios";

const URL = 'https://picsum.photos/v2/list';

type Props = {
  limit: number,
  page: number,
};

export  function getRandomImages({ limit, page }: Props ) {
  return axios.get(URL , {params: {limit, page}});
}