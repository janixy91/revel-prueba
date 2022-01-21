import { useState, useRef } from "react";
import { ImageType } from "../../../models/ImageType";
import { getRandomImages } from "../../../services/images";
import { LIMIT_IMAGES } from "../../../utils/constans";

type Props = {
  images: ImageType[];
  error: Boolean;
};

export function useHome({ images, error }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImages, setCurrentImages] = useState(images);
  const [allImages, setAllImages] = useState(images);
  const [thereIsError, setThereIsError] = useState(error);
  const [currentSearch, setCurrentSearch] = useState("");
  const contentHomeRef = useRef(null);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const search: string = e.target.value.toLowerCase();
    setCurrentSearch(search);
    if (search) {
      setCurrentImages(
        currentImages.filter((image) =>
          image.author.toLowerCase().includes(search)
        )
      );
    } else {
      setCurrentImages([...allImages]);
    }
  }

  function _addPage() {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    return newPage;
  }

  async function onMoreImages() {
    const newPage = _addPage();
    try {
      const response = await getRandomImages({
        limit: LIMIT_IMAGES,
        page: newPage,
      });
      setCurrentImages([...currentImages, ...response.data]);
      setAllImages([...currentImages, ...response.data]);
    } catch {
      setThereIsError(true);
    }
  }

  const executeScroll = () => _scrollToRef(contentHomeRef);

  const _scrollToRef = (ref: any) =>
    // 48, como la altura del header, espacio prudencial para que al darle al boton en el movil, no quede el titulo cortado
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop - 48 });

  return {
    handleOnChange,
    onMoreImages,
    currentImages,
    executeScroll,
    contentHomeRef,
    thereIsError,
    currentSearch,
  };
}
