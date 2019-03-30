import React from 'react';
import { IPhotosContext } from '../types';

export const photosContext = React.createContext<IPhotosContext | any>(null);
