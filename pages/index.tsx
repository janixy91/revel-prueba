import { ImageType } from "../models/ImageType";
import MainLayout from "../modules/layouts/MainLayout";

import Home from "../modules/views/Home/Home";
import { getRandomImages } from "../services/images";
import { LIMIT_IMAGES } from "../utils/constans";

type Props = {
  images: ImageType[];
  error: Boolean;
};

const HomePage = ({ images, error }: Props) => {
  return (
    <MainLayout>
      <Home images={images} error={error} />
    </MainLayout>
  );
};

export async function getServerSideProps() {
  let images: ImageType[] = [];
  let error: Boolean = false;
  try {
    const response = await getRandomImages({ limit: LIMIT_IMAGES, page: 1 });
    images = response.data;
  } catch {
    error = true;
  }

  return { props: { images, error } };
}

export default HomePage;
