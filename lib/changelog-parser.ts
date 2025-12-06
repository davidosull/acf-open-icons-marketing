export interface ChangelogEntry {
  version: string;
  date: string;
  sections: {
    [key: string]: string[];
  };
  rawContent?: string;
}

export interface ParsedChangelog {
  entries: ChangelogEntry[];
}

/**
 * Parses a markdown changelog file into structured data
 */
export function parseChangelog(markdown: string): ParsedChangelog {
  const entries: ChangelogEntry[] = [];
  const lines = markdown.split('\n');

  let currentEntry: ChangelogEntry | null = null;
  let currentSection: string | null = null;
  let currentContent: string[] = [];
  let inListItem = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Skip empty lines at the start
    if (!trimmedLine && !currentEntry) continue;

    // Version header: ## [version] - date
    const versionMatch = trimmedLine.match(/^##\s+\[([^\]]+)\]\s*-\s*(.+)$/);
    if (versionMatch) {
      // Save previous entry if exists
      if (currentEntry) {
        if (currentSection && currentContent.length > 0) {
          currentEntry.sections[currentSection] = currentContent;
        }
        entries.push(currentEntry);
      }

      // Start new entry
      currentEntry = {
        version: versionMatch[1],
        date: versionMatch[2],
        sections: {},
      };
      currentSection = null;
      currentContent = [];
      inListItem = false;
      continue;
    }

    // Skip main heading
    if (trimmedLine === '# Changelog') continue;

    // Skip horizontal rules
    if (trimmedLine.match(/^---+$/)) continue;

    if (!currentEntry) continue;

    // Section header: ### Section Name
    const sectionMatch = trimmedLine.match(/^###+\s+(.+)$/);
    if (sectionMatch) {
      // Save previous section
      if (currentSection && currentContent.length > 0) {
        currentEntry.sections[currentSection] = currentContent;
      }

      // Start new section
      currentSection = sectionMatch[1];
      currentContent = [];
      inListItem = false;
      continue;
    }

    // List item: - or * at start (check for nested items with 2+ spaces)
    const listItemMatch = trimmedLine.match(/^[-*]\s+(.+)$/);
    if (listItemMatch) {
      // Check if this is a nested item (starts with spaces)
      const isNested = line.startsWith('  ') || line.startsWith('\t');

      if (isNested && currentContent.length > 0) {
        // Append to last item as a nested bullet
        const lastIndex = currentContent.length - 1;
        currentContent[lastIndex] += '\n  • ' + listItemMatch[1].trim();
      } else {
        // New top-level list item
        inListItem = true;
        const content = listItemMatch[1].trim();
        if (content) {
          currentContent.push(content);
        }
      }
      continue;
    }

    // Continuation of list item (indented, not a new list item)
    if (
      inListItem &&
      trimmedLine &&
      (trimmedLine.startsWith('  ') || trimmedLine.startsWith('\t'))
    ) {
      // Check if it's not a nested list item (doesn't start with - or *)
      if (!trimmedLine.match(/^\s+[-*]\s+/)) {
        const lastIndex = currentContent.length - 1;
        if (lastIndex >= 0) {
          currentContent[lastIndex] += ' ' + trimmedLine.trim();
        }
      }
      continue;
    }

    // Regular paragraph (not a list item)
    if (trimmedLine && !inListItem) {
      if (!currentSection) {
        // If no section, create a default one
        currentSection = 'Description';
      }
      if (currentContent.length === 0) {
        currentContent.push(trimmedLine);
      } else {
        currentContent[currentContent.length - 1] += ' ' + trimmedLine;
      }
      continue;
    }

    // Empty line - reset list item flag
    if (!trimmedLine) {
      inListItem = false;
    }
  }

  // Save last entry
  if (currentEntry) {
    if (currentSection && currentContent.length > 0) {
      currentEntry.sections[currentSection] = currentContent;
    }
    entries.push(currentEntry);
  }

  return { entries };
}
