module.exports = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/start/",
    title: "Start",
  },
  {
    path: "/tokens/",
    title: "Tokens",
  },
  {
    path: "/themes/",
    title: "Themes",
  },
  {
    path: "/layout/",
    title: "Layout",
    children: [
      {
        path: "breakpoints/",
        title: "Breakpoints",
      },
      {
        path: "columns/",
        title: "Columns",
      },
      {
        path: "container/",
        title: "Container",
      },
      {
        path: "section/",
        title: "Section",
      },
      {
        path: "stack/",
        title: "Stack",
      },
    ],
  },
  {
    path: "/components/",
    title: "Components",
    children: [
      {
        path: "aspect-ratio/",
        title: "Aspect ratio",
      },
      {
        path: "box/",
        title: "Box",
      },
      {
        path: "button/",
        title: "Button",
      },
      {
        path: "content/",
        title: "Content",
      },
      {
        path: "heading/",
        title: "Heading",
      },
      {
        path: "notification/",
        title: "Notification",
      },
    ],
  },
  {
    path: "/form/",
    title: "Form",
  },
  {
    path: "/helpers/",
    title: "Helpers",
    children: [
      {
        path: "clip/",
        title: "Clip",
      },
      {
        path: "hyphenate/",
        title: "Hyphenate",
      },
      {
        path: "stretched-link/",
        title: "Stretched link",
      },
      {
        path: "unselectable/",
        title: "Unselectable",
      },
      {
        path: "visually-hidden/",
        title: "Visually hidden",
      },
    ],
  },
  {
    path: "/utilities/",
    title: "Utilities",
    children: [
      {
        path: "api/",
        title: "API",
      },
      {
        path: "colors/",
        title: "Colors",
      },
      {
        path: "display/",
        title: "Display",
      },
      {
        path: "flex/",
        title: "Flex",
      },
      {
        path: "position/",
        title: "Position",
      },
      {
        path: "sizing/",
        title: "Sizing",
      },
      {
        path: "spacing/",
        title: "Spacing",
      },
      {
        path: "text/",
        title: "Text",
      },
    ],
  },
  {
    path: "/migration/",
    title: "Migration",
  },
];
