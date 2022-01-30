import Article from "./Article"


function ArticleList({posts}) {

    const PostData = posts.map(post => {
        return <Article key={post.title} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
    })
    return (
        <main>
            {PostData}
        </main>
    )
}

export default ArticleList;