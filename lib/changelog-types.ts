export interface ChangelogEntry {
  version: string;
  date: string;
  sections: {
    [key: string]: string[];
  };
}

export interface ChangelogData {
  entries: ChangelogEntry[];
}
