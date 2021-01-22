import React, { FC } from 'react';
import style from './Image.module.scss';

type Props = {
  id: number;
  w?: number;
  h?: number;
};

export const Image: FC<Props> = ({ w=1, h=1, id }) => {
  return (
    <div className={style.imageWrapper}>
      <img
        src={`https://placebeard.it/g/400x400/${id}`}
        alt=""
        className={style.image}
      />
    </div>
  );
};
