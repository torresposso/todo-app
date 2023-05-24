import { AppProps } from "$fresh/src/server/types.ts";
import Layout from "@/components/Layout.tsx";

export default function AppLayout({ Component }: AppProps) {
  return (
    <>
      <Layout>
        <Component />
      </Layout>
    </>
  );
}
