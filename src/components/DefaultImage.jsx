const addDefaultImg = ev => {
   ev.target.src = "https://static.thenounproject.com/png/2616533-200.png"
}

export default function DefaultImage({src}) {
    return(
        <img  className="max-w-64 h-auto" src={src} onError={addDefaultImg} />
    )
}
