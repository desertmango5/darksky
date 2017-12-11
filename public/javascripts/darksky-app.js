import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import getGeolocation from './modules/geolocation';
import api from './modules/api';


getGeolocation();

api();
