import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from './input.md';

export default function Page() {
  return <MarkdownDocs markdown={markdown} />;
}
