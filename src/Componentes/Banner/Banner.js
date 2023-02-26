import './Banner.css'
export const Banner = () => {
            // JSX = como o react trabalha com a parte visual
    return (
        //class e reservado para javaScript, entao se usa className
        <header className="banner">
        <img src="/imagens/banner.png" alt="Banner que ficara no topo"/>
        </header>
    )
}

export default Banner
