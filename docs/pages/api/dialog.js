import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from './dialog.md';

export default function Page() {
  return <MarkdownDocs markdown={markdown} />;
}
