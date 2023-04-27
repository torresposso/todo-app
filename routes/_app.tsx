import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";
import Layout from "../components/Layout.tsx";

export default function AppLayout({ Component }: AppProps) {
  const preset = `twind.install({
        presets: [twind.presetExt()],      
      })`;
  return (
    <>
      <Head>
        <script src="https://cdn.twind.style/ext" crossOrigin="true"></script>
        <script>{preset}</script>
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  );
}
