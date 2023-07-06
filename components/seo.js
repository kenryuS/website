import { NextSeo } from "next-seo";

export default function TheSEO({title, description, currentURL, isArticle, articleInfo}) {
    let openGraphEntries = {
        type: 'website',
        url: "https://website-kenryus.vercel.app" + currentURL,
        title: title,
        description: description,
        locale: 'en_US',
        siteName: "kenryuS Website",
        images: [
            {
                url: "https://website-kenryus.vercel.app/defaultcard.jpeg",
                width: 800,
                height: 600,
                alt: "cover image"
            }
        ]
    };

    let twitterEntries = {
        handle: "@KenS1045",
        site: "@KenS1045",
        cardType: 'summary_large_image'
    };

    if (isArticle === true) {
        openGraphEntries.type = 'article';
        openGraphEntries.article = {
            publishedTime: articleInfo.pubTime,
            modifiedTime: articleInfo.modTime,
            authors: ['https://github.com/kenryuS'],
            tags: articleInfo.tags
        };
    }
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical="https://website-kenryus.vercel.app/"
                openGraph={openGraphEntries}
                twitter={twitterEntries}
            />
        </>
    );
}