export type Project = {
  id: string;
  name: string;
  summary: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  highlight?: boolean;
  note?: string;
};

export type StackCategory = {
  title: string;
  items: { name: string; icon: string }[];
};

export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  description: string;
  outcomes?: string[];
};