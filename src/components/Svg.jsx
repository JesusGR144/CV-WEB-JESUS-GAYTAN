function Svg({ lenguaje }) {
  return ( 
    <svg className="aspect-square w-15 shrink-0">
      <use href={`./assets/svg/sprite.svg#${lenguaje}`} />
    </svg>
  );
}


export default Svg;