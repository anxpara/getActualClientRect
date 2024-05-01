import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config}*/
const config = {
  preprocess: sequence([vitePreprocess({}), preprocessMeltUI()]),
  kit: {
    adapter: adapter(),
  },
};
export default config;
