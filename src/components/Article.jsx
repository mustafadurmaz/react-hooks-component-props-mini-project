function Article({
    title,
    date = "January 1, 1970",
    preview,
    minutes
}) {

    const emoji1 = "☕️";
    const emoji2 = "🍱";
    let showEmoji ="";
  
    if (minutes < 30) {
        const numberOfEmojis = Math.ceil(minutes / 5);
        for(let i=0; i < numberOfEmojis; i++){
            showEmoji += emoji1;
        }
    } else {
    const numberOfEmojis = Math.ceil(minutes / 10);
    for(let i=0; i < numberOfEmojis; i++){
        showEmoji += emoji2;
    }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {showEmoji} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;