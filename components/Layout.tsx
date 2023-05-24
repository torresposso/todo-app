import { Head } from "$fresh/runtime.ts";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      {children}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js">
      </script>
    </>
  );
};

export default Layout;
