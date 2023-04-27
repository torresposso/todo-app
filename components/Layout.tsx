const Layout = ({ children }) => {
  return (
    <>
      <div class="bg-gradient-to-t from-blue-50/50 to-white">
        <div class="p-2">{children}</div>
      </div>
    </>
  );
};

export default Layout;
