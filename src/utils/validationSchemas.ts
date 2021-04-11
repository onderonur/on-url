import * as Yup from 'yup';
import validator from 'validator';
import { maxCustomAliasLength } from '@/constants';

export const shortUrlInputSchema = Yup.object({
  url: Yup.string()
    .label('URL')
    .required()
    .test(
      'is-url',
      ({ label }) => `${label} does not have a valid URL format`,
      (value) => (value ? validator.isURL(value) : true),
    )
    .trim()
    .default(''),
  customAlias: Yup.string()
    .label('Custom Alias')
    .max(maxCustomAliasLength)
    .trim()
    .default(''),
});

// https://github.com/jquense/yup/blob/master/docs/typescript.md
export type ShortUrlInput = Yup.TypeOf<typeof shortUrlInputSchema>;
