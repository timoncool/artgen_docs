import 'nextra-theme-docs/style.css'
import './styles.css'
import { useEffect } from 'react'

function moveSearchToSidebar() {
  const searchContainer = document.querySelector('nav input[type="search"]')?.parentElement;
  const sidebar = document.querySelector('aside > ul');
  
  if (searchContainer && sidebar && !document.querySelector('.sidebar-search-container')) {
    const wrapper = document.createElement('div');
    wrapper.className = 'sidebar-search-container';
    wrapper.appendChild(searchContainer.cloneNode(true));
    sidebar.parentElement.insertBefore(wrapper, sidebar);
    searchContainer.style.display = 'none';
  }
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    moveSearchToSidebar();
    const observer = new MutationObserver(() => {
      moveSearchToSidebar();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return <Component {...pageProps} />
}
