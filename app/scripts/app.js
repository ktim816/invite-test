/* eslint-disable */
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './globalOptions';
import header from '../components/header/header';
import anchor from '../blocks/js-functions/anchor';
import burger from '../blocks/burger/burger';
import { inputmask, validation } from '../blocks/form/form';
import maps from '../blocks/map/map';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  header();
  anchor();
  burger();
  inputmask();
  validation('contact-form', 'name', /^[a-zа-я ]{2,}$/i);
  validation('contact-form', 'email', /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  validation('contact-form', 'phone', /\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/);
  validation('contact-form', 'message', /^[a-zа-я ]{30,}$/i);
  maps();
});
/* eslint-enable */
