import { useNavigate } from 'react-router';
import {
  STodoListApiContainer,
  SButton,
  STitle,
  SPhotoContainer,
  SPhotoWrapper,
  SPhotoImage,
  SPhotoTitle,
} from './todo-list-api.component.styles';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TodoListApi = () => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`
        );
        setPhotos([...photos, ...response.data]);
        setCurrentPage((prevState) => prevState + 1);
        setTotalCount(response.headers['x-total-count']);
      } catch (error) {
        console.error(error);
      } finally {
        setFetching(false);
      }
    };

    if (fetching) {
      fetchData();
    }
  }, [fetching]);

  useEffect(() => {
    const scrollHandler = (e) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
          100 &&
        photos.length < totalCount
      ) {
        setFetching(true);
      }
    };
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [totalCount]);

  const handleGoBack = () => navigate(-1);
  const handleClick = () => setFetching(true);

  console.log(photos);

  return (
    <STodoListApiContainer>
      <STitle>Todo List Api</STitle>
      <SButton onClick={handleGoBack}>Go Back</SButton>
      <SButton onClick={handleClick}>page + 1</SButton>
      <SPhotoContainer>
        {photos.map((photo) => (
          <SPhotoWrapper key={photo.id}>
            <SPhotoImage src={photo.thumbnailUrl} />
            <SPhotoTitle>{photo.title}</SPhotoTitle>
          </SPhotoWrapper>
        ))}
      </SPhotoContainer>
    </STodoListApiContainer>
  );
};

export default TodoListApi;
