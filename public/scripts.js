document.addEventListener("DOMContentLoaded", () => {
    fetchNews();
});

async function fetchNews() {
    try {
        const response = await fetch("/api/news");
        const news = await response.json();
        displayNews(news);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

function displayNews(news) {
    const headlinesSection = document.getElementById("headlines");
    headlinesSection.innerHTML = news
        .map(
            (article) => `
        <article>
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}" alt="${article.title}" width="100%" height="auto" />
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        </article>
    `
        )
        .join("");
}
