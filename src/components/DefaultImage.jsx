const addDefaultImg = ev => {
   ev.target.src = "https://static.thenounproject.com/png/2616533-200.png"
}

export default function DefaultImage({src}) {
    return(
        <img src={src} onError={addDefaultImg} />
    )
}
