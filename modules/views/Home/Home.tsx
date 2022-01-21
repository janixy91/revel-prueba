import HeaderDefault from "../../components/headers/HeaderDefault/HeaderDefault";
import BannerDefault from "../../components/banners/BannerDefault/BannerDefault";
import { ImageType } from "../../../models/ImageType";
import ImageList from "../../components/lists/ImagesList/ImageList";
import InputSearch from "../../atoms/InputSearch/InputSearch";
import { useHome } from "./useHome";
import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";

type Props = {
  images: ImageType[];
  error: Boolean;
};

const Home = ({ images, error }: Props) => {
  const {
    handleOnChange,
    onMoreImages,
    currentImages,
    executeScroll,
    contentHomeRef,
    thereIsError,
    currentSearch,
  } = useHome({ images, error });

  return (
    <div className="home">
      <HeaderDefault />
      <BannerDefault onStart={executeScroll} />
      <div className="home__content" ref={contentHomeRef}>
        <div className="home__title">
          <Title title="Random Images" color="black" />
        </div>
        {!thereIsError && (
          <>
            <div className="home__input-search">
              <InputSearch handleOnChange={handleOnChange} />
            </div>
            <div className="home__list">
              <ImageList images={currentImages} />
            </div>
            {!currentSearch && (
              <div className="home__button-more">
                <Button variant="secondary" onClick={onMoreImages}>
                  Load More
                </Button>
              </div>
            )}
          </>
        )}
        {thereIsError && (
          <div className="home__error">
            Ha ocurrido un error, vuelve a intentarlo más tarde
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
