import { describe, expect, it } from 'vitest';
import { CONTACT_EMAIL, FORM_SUBMISSION_ENDPOINT } from './constants';

describe('contact form configuration', () => {
  it('routes submissions to the requested email address', () => {
    expect(CONTACT_EMAIL).toBe('panchakot1981@gmail.com');
    expect(FORM_SUBMISSION_ENDPOINT).toBe('https://formsubmit.co/ajax/panchakot1981@gmail.com');
  });
});
