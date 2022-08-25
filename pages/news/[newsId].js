// our-domain.com/news/something-important (or course, so on).
// 'router' is a subpackage of package 'next'.
import { useRouter } from "next/router";

function DetailPage() {
    const router = useRouter();
    // this holds the concrete value in the url.
    const newsId = router.query.newsId;
    return <h1>The Detail Page</h1>
}

export default DetailPage;
