import React from 'react';
import Header from '../../layouts/Header/Header';
import Body from '../../layouts/Body/Body';
import Loader from '../../layouts/Loader/Loader';
import Error from '../../layouts/Error/Error';
import FlashMessage from '../../elements/FlashMessage/FlashMessage';

const AppView = ({ loading, notFound, error }) => {
  let content;
  if (loading) {
    content = <Loader />;
  } else if (notFound) {
    content = <Error text="За вказаними фільтрами нічого не знайдено" />;
  } else if (error) {
    content = <Error text="Під час завантаження даних сталася помилка" />
  } else {
    content = <Body />;
  }

  return (
    <div className="app">
      <FlashMessage
        text="My awesome flash message"
        type="error"
        show
      />
      <Header />
      {content}
    </div>
  );
};

export default AppView;
