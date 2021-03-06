import React from 'react';
import { SECTIONS_HOME, SECTIONS_PORTFOLIO, SECTIONS_BLOG, SECTIONS_PROJECTS_HISTORY } from './sections';
import { ARTICLES } from '../blog/articles';
import Home from '../../pages/home/Home';

import Portfolio from '../../pages/portfolio/Portfolio';
import Blog from '../../pages/blog/Blog';
import ArticlePage from '../../pages/blog/ArticlePage';
import ProjectsHistory from '../../pages/projects-history/ProjectsHistory';



export const PAGES = [
    {
        id: 0,
        name: 'Home',
        url: '/',
        sections: SECTIONS_HOME,
        isArticle: false,
        isHistory: false,
        jsx: <Home />,
        exact: true
    },
    {
        id: 1,
        name: 'Portfolio',
        url: '/portfolio',
        sections: SECTIONS_PORTFOLIO,
        isArticle: false,
        isHistory: false,
        jsx: <Portfolio />,
        exact: true
    },
    {
        id: 2,
        name: 'Projects History',
        url: '/projects-history',
        sections: SECTIONS_PROJECTS_HISTORY,
        isArticle: false,
        isHistory: true,
        jsx: < ProjectsHistory />,
        exact: true
    },
    {
        id: 3,
        name: 'Blog',
        url: '/blog',
        sections: SECTIONS_BLOG,
        isArticle: false,
        isHistory: false,
        jsx: <Blog />,
        exact: true
    },

]

ARTICLES.forEach(article => {
    const pageUrl = '/blog';
    PAGES.push({
        id: PAGES.length,
        name: article.title,
        page: 'Blog',
        pageUrl: pageUrl,
        url: pageUrl.concat(article.url),
        isArticle: true,
        isHistory: false,
        jsx: <ArticlePage article={article} />
    })

});