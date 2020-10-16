/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import React from 'react';

export const WorkoutIcon = () => (
  <svg
    css={css`
      position: absolute;
      width: 35px;
      left: 300px;
      right: 0;
      top: 35px;
      margin-left: auto;
      margin-right: auto;

      @media only screen and (max-width: 380px) {
        left: 240px;
      }
      @media only screen and (max-width: 375px) {
        left: 265px;
        top: 35px;
      }
      @media only screen and (max-width: 320px) {
        left: 230px;
        top: 35px;
      }
    `}
    width='40'
    height='25'
    viewBox='0 0 40 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M35.959 2.5714C35.317 2.5714 34.7173 2.7514 34.1771 3.04539C33.6435 1.28313 32.1429 0 30.3578 0C28.13 0 26.3176 1.98598 26.3176 4.42795V8.07077H13.6833V4.42795C13.6833 1.98598 11.8708 0 9.64222 0C7.85705 0 6.35563 1.28313 5.82206 3.04454C5.28188 2.7514 4.68296 2.5714 4.04103 2.5714C1.81329 2.5714 0 4.55738 0 6.99935V17.9998C0 20.4418 1.81247 22.4286 4.04103 22.4286C4.68296 22.4286 5.28271 22.2486 5.82206 21.9546C6.35645 23.7169 7.85705 25 9.64222 25C11.87 25 13.6833 23.0132 13.6833 20.5712V16.9284H26.3167V20.5712C26.3167 23.0132 28.1284 25 30.3569 25C32.1421 25 33.6435 23.7169 34.1763 21.9546C34.7156 22.2486 35.3162 22.4286 35.9581 22.4286C38.1867 22.4286 40 20.4418 40 17.9998V6.99935C40.0008 4.55738 38.1875 2.5714 35.959 2.5714ZM4.04103 19.8572C3.18154 19.8572 2.4817 19.0241 2.4817 17.9998V6.99935C2.4817 5.97593 3.18154 5.1428 4.04103 5.1428C4.90053 5.1428 5.60036 5.97593 5.60036 6.99935V17.9998C5.60036 19.0241 4.90053 19.8572 4.04103 19.8572ZM11.2016 20.5712C11.2016 21.5955 10.5017 22.4286 9.64222 22.4286C8.78107 22.4286 8.08123 21.5955 8.08123 20.5712V4.42795C8.08123 3.40453 8.78107 2.5714 9.64222 2.5714C10.5017 2.5714 11.2016 3.40453 11.2016 4.42795V20.5712ZM13.6833 14.357V10.6422H26.3167V14.357H13.6833ZM31.9171 20.5712C31.9171 21.5955 31.2173 22.4286 30.3569 22.4286C29.4975 22.4286 28.7984 21.5955 28.7984 20.5712V4.42795C28.7984 3.40453 29.4975 2.5714 30.3569 2.5714C31.2173 2.5714 31.9171 3.40453 31.9171 4.42795V20.5712ZM37.5191 17.9998C37.5191 19.0241 36.8193 19.8572 35.959 19.8572C35.0986 19.8572 34.3988 19.0241 34.3988 17.9998V6.99935C34.3988 5.97593 35.0986 5.1428 35.959 5.1428C36.8193 5.1428 37.5191 5.97593 37.5191 6.99935V17.9998Z'
      fill='white'
    />
  </svg>
);