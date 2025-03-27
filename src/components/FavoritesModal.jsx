

export default function FavoritesModal({handleClose}) {
      
    return (
        <div 
            className="fixed flex justify-center content-center top-0 left-0 z-[1001] w-screen h-screen bg-black/[0.5] "
        >
            <div classname="rounded-xl w-1/3 h-min bg-white p-4">
                <header classname="flex justify-between place-items.center">
                    <div classname="mb-4">
                        <h3 classname="w-full b-border text-2xl font-bold">Favorites</h3>
                    </div>
                    <button classname="button h-min" onclick={handleClose}>x</button>
                    <button classname="button h-min" onclick={handleClose}>x</button>
                </header>
                <section>
                    
                </section>
            </div>
        </div>
    )
}
