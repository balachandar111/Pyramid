import { useEffect } from 'react';

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | Pyramid Enterprises`
      : 'Pyramid Enterprises | IT Infrastructure Solution in Chennai';
  }, [title]);
}
