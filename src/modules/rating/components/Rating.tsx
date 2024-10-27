import {useStorageInit} from 'app/lib/useStorageInit';
import {useCity} from 'modules/navigation/lib/useCity';
import {TCity} from 'modules/navigation/model/types';
import {RatingCity} from 'modules/rating/components/RatingCity';
import React from 'react';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import './Rating.less';

export const Rating = () => {
  const [, setCity] = useCity();

  useStorageInit();

  return (
    <div className="Rating">
      <Swiper>
        <SwiperSlide>
          <div className="Rating__Item">
            <RatingCity city={TCity.tsk} setCity={setCity} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Rating__Item">
            <RatingCity city={TCity.nsk} setCity={setCity} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
