const key = import.meta.env.PUBLIC_WEB3FORMS_KEY;

if (!key) {
  throw new Error(
    'PUBLIC_WEB3FORMS_KEY is not set. Add it to .env or the Cloudflare Pages dashboard.'
  );
}

export const WEB3FORMS_KEY: string = key;
