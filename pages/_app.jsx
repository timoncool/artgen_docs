import 'nextra-theme-docs/style.css'
import './styles.css'
import { useEffect } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { IconBrandGithub } from '@tabler/icons-react'

function addSidebarExtras() {
  const searchContainer = document.querySelector('nav input[type="search"]')?.parentElement;
  const sidebar = document.querySelector('aside ul');

  if (searchContainer && sidebar && !document.querySelector('.sidebar-extras-container')) {
    // Move search to sidebar top
    const wrapper = document.createElement('div');
    wrapper.className = 'sidebar-extras-container';

    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'sidebar-search-container';
    searchWrapper.appendChild(searchContainer);
    wrapper.appendChild(searchWrapper);

    sidebar.parentElement.insertBefore(wrapper, sidebar);
  }

  // Add GitHub link to bottom (separate from search)
  if (sidebar && !document.querySelector('.sidebar-github-link')) {
    const locale = document.documentElement.lang || 'ru';
    const text = locale === 'en' ? 'Suggest changes' : 'Внести правки';
    const iconHtml = renderToStaticMarkup(<IconBrandGithub size={20} stroke={2} />);

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/timoncool/artgen_docs';
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    githubLink.className = 'sidebar-github-link';
    githubLink.innerHTML = `${iconHtml}<span>${text}</span>`;

    // Append to bottom of sidebar
    sidebar.parentElement.appendChild(githubLink);
  }
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    addSidebarExtras();
    const observer = new MutationObserver(() => {
      addSidebarExtras();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return <Component {...pageProps} />
}
