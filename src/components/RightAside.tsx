const RightAside = () => {
  return (
    <aside
      className={`w-full max-w-[416px]  text-white px-6 pt-3 sticky left-0 top-0 h-screen ${document.documentElement.scrollHeight > window.innerHeight ? "max-w-16px" : "max-w-[416px]"}`}
    >
      <div className="p-5 border-1 border-neutral-700 rounded-2xl mt-7">
        <h2 className="text-2xl font-bold">Assine o Premium</h2>
        <p className="text-xs my-5">
          Assine para desbloquear novos recursos e, se elegível, receba uma
          parte da receita.
        </p>
        <button className="bg-primary_blue text-white text-base font-bold py-1 px-3.5 rounded-full cursor-pointer">
          Assinar
        </button>
      </div>
      <div className="p-5 border-1 border-neutral-700 rounded-2xl mt-7">
        <h2 className="text-2xl font-bold">O que está acontecendo?</h2>
        <div className="text-sm text-neutral-500 mt-5 cursor-pointer">
          <p>Assunto do momento em Brasil</p>
          <h4 className="font-bold text-base text-white">Brasil</h4>
          <p>120 mil posts</p>
        </div>
        <div className="text-sm text-neutral-500 mt-4 cursor-pointer">
          <p>Assunto do momento em Santa Catarina</p>
          <h4 className="font-bold text-base text-white">Carros</h4>
          <p>45,5 mil posts</p>
        </div>
        <div className="text-sm text-neutral-500 mt-4 cursor-pointer">
          <p>Musica - assunto do momento </p>
          <h4 className="font-bold text-base text-white">Ozzy</h4>
          <p>50 mil posts</p>
        </div>
      </div>
    </aside>
  );
};

export default RightAside;
