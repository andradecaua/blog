import { useState, useEffect } from "react"
import { database } from "../service/firebaseconfig"


type maisvistas = [{
    title: string,
    description: string,
    views: number
    key?:  string 
}]

function Home(){

    const [maisvistas, setMaisVistas] = useState<any[] | null>(null) 
    const [posts, setPosts] = useState<any[]>();

    async function getPosts(){
        let arrayPosts: any[] = [];
        const posts = await database.ref('posts').get().then((snapshot) => snapshot.exportVal())
        for(let i in posts){
            arrayPosts.push(posts[i])
        }
        setPosts(arrayPosts) // Insere os posts antes da filtragem;
        arrayPosts = arrayPosts.sort((a: any, b: any) => b.views - a.views) // Deixa em ordem decrescente 
        arrayPosts = arrayPosts.slice(0, 3); // Pega apenas 3 itens
        setMaisVistas(arrayPosts) // Altera o estado para renderizar os posts
    }

    useEffect(() => {
        getPosts()
    },[])

    return(
        <>
            <header>
                Conteúdo sobre programação
            </header>
            <main>
                <aside>
                    <section id="maisvstassection" >
                        <h3 id="maisvistastitle" className="asideTitles">
                            Mais vistas
                        </h3>
                        <div id="maisvistas">
                            {maisvistas!==null?maisvistas.map((item, index) => {
                                return(
                                    <article className="articlesMaisVistas" key={index}>
                                        <h3>{item.title}</h3>
                                        <p>
                                            {item.description}
                                        </p>
                                    </article>
                                )
                            }):""}
                        </div>
                    </section>
                </aside>
                <div id="areaPrincipal">
                    <h2>Veja todos os nossos posts</h2>
                    <section>

                    </section>
                    <div  id="mainposts">
                        {posts!==undefined?posts.map((posts, index) => {
                            return(
                                <article className="posts">
                                    {posts.image!==undefined?<img src={posts.image} width={"300px"} height={"100px"}/>:""}
                                    <h3>
                                        {posts.title}
                                    </h3>
                                    <p>
                                        {posts.description}
                                    </p>
                                </article>
                            )
                        }):""}
                    </div>
                </div>
            </main>
        </>
    )
}


export default Home