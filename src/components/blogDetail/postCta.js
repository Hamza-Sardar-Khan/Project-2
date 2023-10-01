import React, {useState, useEffect} from "react"
import "./style/postCta.scss"
import Union from "../../assets/images/Union.svg"
import { GatsbyImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"
import { useMatch } from "@reach/router"

const PostCta = ({ hasCookies, newsAuthors, blogAuthors }) => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    /* const [authorImg, setAuthorImg] = useState(''); */
    const [authorName, setAuthorName] = useState('');

    const matchBlog = useMatch('/blog/'); 
    const matchNews = useMatch('/news/'); 
    const matchNewsAuthors = useMatch('/news/authors/'); 
    const matchNewsAuthor = useMatch('/news/author/*'); 
    const matchBlogAuthor = useMatch('/blog/author/*'); 
    const matchNewsPost = useMatch('/news/*'); 
    const matchBlogPost = useMatch('/blog/*'); 
    const matchCat = useMatch('/blog/category/*'); 
    const matchNewsCat = useMatch('/news/category/*'); 

    let isItBlog
    if (
        (matchNewsPost || matchBlogPost) 
        && !matchCat 
        && !matchBlog 
        && !matchNews 
        && !matchNewsAuthors 
        && !matchNewsAuthor
        && !matchBlogAuthor
        && !matchNewsCat) 
    {
        isItBlog = true
    }  
    else 
    {
        isItBlog = false
    }

    let classNames
    if (hasCookies) {
        classNames = 'post-cta has-cookies'
    } else {
        classNames = 'post-cta'
    }

    useEffect(() => {
        if (isItBlog) {
        /* setAuthorImg(document.getElementById('author-img').getAttribute('src')) */
        setAuthorName(document.getElementById('author-name').textContent)
        }
    },[isItBlog]);

    let prefix
    let userImg
    if (location.pathname.includes('news')) {
        prefix = 'news'
        userImg = newsAuthors?.nodes?.filter(
            author => author.name === authorName
        )[0]?.thumbnail?.childImageSharp.gatsbyImageData
    } else {
        prefix = 'blog'
        userImg = blogAuthors?.nodes?.filter(
            author => author.name === authorName
        )[0]?.thumbnail?.childImageSharp.gatsbyImageData
    }

    const CtaBar = () => {
        if (isItBlog) {
            return (
                <div className={`${classNames}`} style={!isVisible && 'display:none;'}>
                    <img loading="lazy" className="close-img" src={Union} alt="" onClick={() => setIsVisible(false)}/>
                    {userImg &&
                        <GatsbyImage 
                            image={userImg} 
                            className="user-img"
                            alt="" 
                        /> 
                    }
                    <div>
                        <h4>
                        I hope you enjoy reading this {prefix} post.
                        </h4>
                        <p>If you want to get a free cyber security report for your school, just create a free account.</p>
                    </div>
                    <a title="Sign up" href="https://app.securiwiser.com/demo">Register for FREE</a>
                </div>
            )
        }
        else {
            return null
        }
    }
    return <CtaBar/>
}

export default PostCta