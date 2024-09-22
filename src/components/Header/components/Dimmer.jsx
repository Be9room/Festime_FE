const Dimmer = ({ closeDimmer }) => {
  return (
    <div onClick={closeDimmer} className="fixed left-0 top-0 z-40 h-screen w-screen cursor-pointer overflow-hidden" />
  );
};

export default Dimmer;
